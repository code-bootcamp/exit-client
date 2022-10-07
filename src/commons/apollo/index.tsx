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
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";
import {
  accessTokenState,
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
  const [, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    getAccessToken().then(async (newAccessToken) => {
      try {
        setAccessToken(newAccessToken);
        const resultUserInfo = await client.query({
          query: FETCH_LOGINED_USER,
          context: {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
          },
        });
        const { __type, ...userInfo } = resultUserInfo.data.fetchLoginedUser;
        setUserInfo({ ...userInfo });
      } catch (error) {
        // console.log(error.message);
      }
    });
  }, []);

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
    uri: "https://mainproject04.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
