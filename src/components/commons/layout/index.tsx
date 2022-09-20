import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header/header.container";
// import Footer from "./footer/footer.container";
import Banner from "./banner/banner.container";
import { useRouter } from "next/router";
import MiniBanner from "./miniBanner/miniBanner.container";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.main``;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenMiniBanner = HIDDENN_MINI_BANNER.includes(router.pathname);

  return (
    <>
      <Header />
      {!isHiddenBanner && <Banner />}
      {isHiddenMiniBanner && <MiniBanner />}
      <Body>{props.children}</Body>
      {/* <Footer /> */}
    </>
  );
}
