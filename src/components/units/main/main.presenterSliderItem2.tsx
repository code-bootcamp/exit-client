import * as S from "./main.styles";
import { v4 as uuidv4 } from "uuid";
import { IMainUISliderItem } from "./main.types";
import { getDate } from "../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../commons/store";

const IMAGE_TEMP_SOURCE = [
  "/categories/e-commerce.png",
  "/categories/education.png",
  "/categories/game.png",
  "/categories/medical.png",
  "/categories/o2o.png",
  "/categories/o2o.png",
  "/categories/utile.png",
];
// console.log(IMAGE_TEMP_SOURCE[Math.floor(Math.random() * 6)]);

export default function MainUISliderItem2(props: IMainUISliderItem) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  return (
    <>
      <S.ListItem key={uuidv4()}>
        <S.ThumbWrapper>
          {/* Likes */}
          {Object.values(userInfo).every((el) => el !== "") && (
            <S.IsLikedWrapper>
              {props.likedBoards?.fetchLikes.filter(
                (likedEl) => likedEl.board.id === props.el.id
              ).length ? (
                <img src="/icons/icon_heart.png" />
              ) : (
                <img src="/icons/icon_heart_off.png" />
              )}
            </S.IsLikedWrapper>
          )}
          <S.Countdown>D-2</S.Countdown>
          <S.ThumbImageWrapper>
            <S.ThumbImage src="/categories/education.png" />
          </S.ThumbImageWrapper>
          <S.ThumbInfoWrapper>
            <S.ThumbInfoLeft>
              <S.MemberCountWrapper>
                <S.IconWrapper>
                  <S.MemberCountIcon src="/icons/icon_member_count.png" />
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
              {/* 하드코딩된 부분 */}
              <S.Tag>React</S.Tag>
              <S.Tag>Photoshop</S.Tag>
              <S.Tag>Java</S.Tag>
              <S.Tag>HTML/CSS</S.Tag>
              <S.Tag>Spring</S.Tag>
              <S.Tag>AfterEffect</S.Tag>
              <S.Tag>Figma</S.Tag>
              <S.Tag>Figma</S.Tag>
              <S.Tag>JavaScript</S.Tag>
              <S.Tag>TypeScript</S.Tag>
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
