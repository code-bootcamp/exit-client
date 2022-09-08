import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { IMainUISliderItem } from "./main.types";
import { useQuery } from "@apollo/client";
import { FETCH_USER_WITH_USERID } from "./main.queries";
import {
  IQuery,
  IQueryFetchUserWithUserIdArgs,
} from "../../../commons/types/generated/types";

export default function MainUISliderItem(props: IMainUISliderItem) {
  console.log(props.el.leader);
  const { data } = useQuery<
    Pick<IQuery, "fetchUserWithUserId">,
    IQueryFetchUserWithUserIdArgs
  >(FETCH_USER_WITH_USERID, {
    variables: {
      userId: props.el.leader,
    },
  });
  return (
    <S.ListItem key={uuidv4()}>
      <S.ThumbWrapper>
        <S.ThumbImageWrapper>
          <S.ThumbImage
            className="thumbImage"
            src={props.el?.boardImage.url || "/thumbImage.png"}
          />
        </S.ThumbImageWrapper>
        <S.Count id="test">
          <S.CountIcon src="/icons/count-icon.png" />
          <S.Current>{props.el.countMember}</S.Current>
          <S.Total>/{props.el.totalMember}</S.Total>
        </S.Count>
        <S.Like>
          <S.LikeIcon src="/icons/main-like-icon.png" />
          {props.el.countLike}
        </S.Like>
      </S.ThumbWrapper>
      <S.ContentsWrapper>
        <S.ProjectTitle>{props.el.title}</S.ProjectTitle>
        <S.ProjectLeader>{data?.fetchUserWithUserId.nickname}</S.ProjectLeader>
        <S.CategoriesWrapper>
          <S.StrongText>모집분야</S.StrongText>
          <S.Categories>
            {props.el.categories.map((el) => (
              <S.Category>{el.name}</S.Category>
            ))}
          </S.Categories>
        </S.CategoriesWrapper>
        <S.DueDateWrapper>
          <S.StrongText>모집마감</S.StrongText>
          <S.DueDate>YYYY.MM.DD</S.DueDate>
          <S.CountDown>D-2</S.CountDown>
        </S.DueDateWrapper>
        <S.BailWrapper>
          <S.BailText>프로젝트 성공 보상금</S.BailText>
          <div style={{ display: "flex" }}>
            <S.BailIcon src="/icons/bail-icon.png" />
            <S.Bail>{props.el.bail}</S.Bail>
          </div>
        </S.BailWrapper>
      </S.ContentsWrapper>
    </S.ListItem>
  );
}
