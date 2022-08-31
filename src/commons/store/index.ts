import {
  InMemoryCache,
  ApolloProvider,
  ApolloClient,
  ApolloLink,
} from "@apollo/client";
import { ReactNode } from "react";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]), // errorLink 미생성
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
