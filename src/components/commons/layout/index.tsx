import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header/header.container";
import Footer from "./footer/footer.container";
import Banner from "./banner/banner.container";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div``;

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Banner />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
}
