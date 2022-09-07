import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header/header.container";
// import Footer from "./footer/footer.container";
import Banner from "./banner/banner.container";
import { useRouter } from "next/router";

const HIDDEN_BANNER = ["/userList"];

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.div``;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = router?.asPath.includes("/userList");
  return (
    <>
      <Header />
      {!isHiddenBanner && <Banner />}
      <Body>{props.children}</Body>
      {/* <Footer /> */}
    </>
  );
}
