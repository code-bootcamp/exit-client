import { useRouter } from "next/router";
import MiniBannerPresenter from "./miniBanner.presenter";

export default function MiniBanner() {
  const router = useRouter();

  const onClickMoveToProjects = () => {
    router.push("/exiting");
  };

  return (
    <>
      <MiniBannerPresenter onClickMoveToProjects={onClickMoveToProjects} />
    </>
  );
}
