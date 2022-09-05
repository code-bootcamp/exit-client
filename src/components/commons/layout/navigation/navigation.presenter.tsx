import Link from "next/link";
import * as S from "./navigation.styles";

export default function NavigationUI() {
  const NAVIGATION_MENUS = [
    { name: "exiting", page: "/projects" },
    { name: "exited", page: "/preProjects" },
  ];

  return (
    <S.GNB>
      {NAVIGATION_MENUS.map((el, i) => (
        <Link href={el.page} key={i}>
          <S.NavigationItem>{el.name}</S.NavigationItem>
        </Link>
      ))}
    </S.GNB>
  );
}
