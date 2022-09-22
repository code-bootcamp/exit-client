import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./header/header.container";
// import Footer from "./footer/footer.container";
import Banner from "./banner/banner.container";
import { useRouter } from "next/router";
import MiniBanner from "./miniBanner/miniBanner.container";
import ToggleButtonContainenr from "./toggleButton/toggleButton.contaier";
import Footer from "./footer/footer.container";
import AdBanner from "./adBanner";

interface ILayoutProps {
  children: ReactNode;
}

const Body = styled.main``;

const VISIBLE_AD_BANNER = ["/exiting", "/exited"];

const HIDDEN_BANNER = [
  "/exiter/userList",
  "/exiter/[userId]",
  "/exiting/write",
  "/myPage/edit",
  "/myPage",
  "/projects/[projectId]",
  "/currentProject/[projectId]",
  "/exited",
  "/exiting",
];

const HIDDEN_MINI_BANNER = [
  "/exiter/userList",
  "/exiter/[userId]",
  "/myPage/edit",
  "/myPage",
];
const HIDDEN_TOGGLE_BUTTON = [
  "/exiter/[userId]",
  "/exiting/write",
  "/myPage/edit",
  "/myPage",
  "/projects/[projectId]",
  "/currentProject/[projectId]",
  "/exiting/[projectId]]",
  ,
];
const HIDDEN_FOOTER = ["/currentProject/[projectId]"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenMiniBanner = HIDDEN_MINI_BANNER.includes(router.pathname);
  const isToggleButton = HIDDEN_TOGGLE_BUTTON.includes(router.pathname);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);
  const isVisibleAdBanner = VISIBLE_AD_BANNER.includes(router.pathname);

  return (
    <>
      <Header />
      {isToggleButton && <ToggleButtonContainenr />}
      {!isHiddenBanner && <Banner />}
      {isHiddenMiniBanner && <MiniBanner />}
      {isVisibleAdBanner && <AdBanner />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <Footer />}
    </>
  );
}
