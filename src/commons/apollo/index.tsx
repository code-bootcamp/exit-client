import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../components/commons/store";

const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      nickname
    }
  }
`;

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const Lodable = useRecoilValueLoadable(restoreAccessTokenLoadable);

  const router = useRouter();

  // refreshToken 발급 안됨
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // refreshToken 발급 이후 새로운 accessToken 발급 받기
  // useEffect(() => {
  //   try {
  //     Lodable.toPromise().then(async (newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //       const resultUserInfo = await client.query({
  //         query: FETCH_LOGINED_USER,
  //         context: {
  //           headers: { Authorization: `Bearer ${accessToken}` },
  //         },
  //       });
  //       const { __type, ...userInfo } = resultUserInfo.data;
  //       setUserInfo(userInfo);
  //       alert("리프레시토큰으로 자동로그인 성공");
  //       router.push("/");
  //     });
  //   } catch (error) {}
  // }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://teamserver05.shop:8080/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      credential: "include",
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
