import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { IMainUISliderItem } from "./main.types";
import {
  categoriesImgSources,
  getDate,
} from "../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../commons/store";
import moment from "moment";
import { useRouter } from "next/router";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export default function MainUISliderItem(props: IMainUISliderItem) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onClickListItem = (id: any) => () => {
    router.push(`/exiting/${id}`);
  };
  return (
    <>
      <S.ListItem key={uuidv4()} onClick={onClickListItem(props.el.id)}>
        <S.ThumbWrapper>
          {/* Likes */}
          {Object.values(userInfo).every((el) => el !== "") && (
            <S.IsLikedWrapper>
              {props.likedBoards?.fetchLikes.filter(
                (likedEl) => likedEl.board.id === props.el.id
              ).length ? (
                <img src="/icons/icon_heart_white.png" />
              ) : (
                <img src="/icons/icon_heart_off.png" />
              )}
            </S.IsLikedWrapper>
          )}
          {/* {moment().diff(moment(props.el.closedAt), "days") < 8 && (
            <S.Countdown>
              D-{Math.abs(moment().diff(moment(props.el.closedAt), "days"))}
            </S.Countdown>
          )} */}
          <S.ThumbImageWrapper>
            {props.el.boardImage.url === undefined && (
              <img src="/slider_default.png" />
            )}
            {props.el.boardImage.url !== "null" ? (
              <img src={props.el.boardImage.url} />
            ) : (
              <img
                src={
                  categoriesImgSources[props.el.categories?.[0]?.name] ||
                  "/slider_default.png"
                }
              />
            )}
          </S.ThumbImageWrapper>
          <S.ThumbInfoWrapper>
            <S.ThumbInfoLeft>
              <S.MemberCountWrapper>
                <S.IconWrapper>
                  <S.MemberCountIcon src="/icons/icon_member.png" />
                </S.IconWrapper>
                <S.MemberCount>
                  {props.el.countMember}/{props.el.totalMember}
                </S.MemberCount>
              </S.MemberCountWrapper>
              <S.LikeCountWrapper>
                <S.IconWrapper>
                  <S.LikeCountIcon src="/icons/icon_heart_off.png" />
                </S.IconWrapper>
                <S.LikeCount>{props.el.countLike}</S.LikeCount>
              </S.LikeCountWrapper>
            </S.ThumbInfoLeft>
            <S.ThumbInfoRight>
              {getDate(props.el.startAt)} ~ {getDate(props.el.endAt)}
            </S.ThumbInfoRight>
          </S.ThumbInfoWrapper>
        </S.ThumbWrapper>
        <S.ContentsWrapper>
          <div>
            <S.ProjectTitle>
              [{props.el.address}] {props.el.title}
            </S.ProjectTitle>
            <S.TagsWrapper>
              {props.el.tags?.map((el) => (
                <S.Tag>{el.name}</S.Tag>
              ))}
            </S.TagsWrapper>
          </div>
          <S.BailWrapper>
            <S.BailIconWrapper>
              <img src="/icons/icon_bail.svg" />
            </S.BailIconWrapper>
            <S.Bail>{props.el.bail.toLocaleString()}</S.Bail>
          </S.BailWrapper>
        </S.ContentsWrapper>
      </S.ListItem>
    </>
  );
}
