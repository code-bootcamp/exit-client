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
const HIDDEN_BANNER = [
  "/exiter/userList",
  "/exiter/[userId]",
  "/myPage/edit",
  "/myPage",
  "/projects/[projectId]",
  "/currentProject/[projectId]",
];
const HIDDEN_MINI_BANNER = [
  "/exiter/userList",
  "/exiter/[userId]",
  "/myPage/edit",
  "/myPage",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenMiniBanner = HIDDEN_MINI_BANNER.includes(router.pathname);
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
