import Link from "next/link";
import * as S from "./navigation.styles";

export default function NavigationUI() {
  const NAVIGATION_MENUS = [
    { name: "exiter", page: "/exiter" },
    { name: "exiting", page: "/exiting" },
    { name: "exited", page: "/exited" },
  ];

  return (
    <nav>
      <S.GNB>
        {NAVIGATION_MENUS.map((el, i) => (
          <S.NavigationItem key={i}>
            <Link href={el.page}>
              <S.NavigationLink>{el.name}</S.NavigationLink>
            </Link>
          </S.NavigationItem>
        ))}
      </S.GNB>
    </nav>
  );
}
