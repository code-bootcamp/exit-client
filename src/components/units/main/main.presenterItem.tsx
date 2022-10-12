import * as S from "./main.styles";
import moment from "moment";
import { IMainUIPresenterItemProps } from "./main.types";
import { categoriesImgSources } from "../../../commons/libraries/utils";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../commons/store";
import { useRouter } from "next/router";

export default function MainUIPresenterItem(props: IMainUIPresenterItemProps) {
  const router = useRouter();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const onClickListItem = (id: string) => () => {
    router.push(`/exiting/${id}`);
  };
  return (
    <S.CarouselItem onClick={onClickListItem(props.el.id)}>
      <S.TopWrapper>
        <S.InfoWrapper>
          {Object.values(userInfo).every((el) => el !== "") && (
            <S.IsLiked>
              {props.likesData?.fetchLikes.filter(
                (likedProject) => likedProject.board.id === props.el.id
              ).length ? (
                <img src="/icons/icon_heart_white.png" />
              ) : (
                <img src="/icons/icon_heart_off.png" />
              )}
            </S.IsLiked>
          )}
          {moment().diff(moment(props.el.closedAt), "days") > -8 &&
            moment().diff(moment(props.el.closedAt), "days") <= 0 && (
              <S.Countdown>
                D-{Math.abs(moment().diff(moment(props.el.closedAt), "days"))}
              </S.Countdown>
            )}
        </S.InfoWrapper>
        <S.ProjectImageWrapper>
          {props.el.boardImage.url.includes(
            "https://storage.googleapis.com/backend-server"
          ) ? (
            <img src={props.el.boardImage.url} />
          ) : props.el.categories?.[0]?.name ? (
            <img src={categoriesImgSources[props.el.categories?.[0]?.name]} />
          ) : (
            <img src="/noImage.png" />
          )}
        </S.ProjectImageWrapper>
        <S.InfoWrapper>
          <S.InfoLeft>
            <S.MemberCountWrapper>
              <S.IconWrapper>
                <img src="/icons/icon_member.png" />
              </S.IconWrapper>
              <S.InfoText>
                {props.el.countMember}/{props.el.totalMember}
              </S.InfoText>
            </S.MemberCountWrapper>
            <S.LikeCountWrapper>
              <S.IconWrapper>
                <img src="/icons/icon_heart_off.png" />
              </S.IconWrapper>
              <S.InfoText>{props.el.countLike}</S.InfoText>
            </S.LikeCountWrapper>
          </S.InfoLeft>
          <S.InfoRight>
            {moment(props.el.startAt).format("YYYY-MM-DD")} ~{" "}
            {moment(props.el.endAt).format("YYYY-MM-DD")}
          </S.InfoRight>
        </S.InfoWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <div>
          <S.ProjectTitle>
            [{props.el.address}] {props.el.title}
          </S.ProjectTitle>
          <S.TagsWrapper>
            {props.el.tags?.map((el, i) => (
              <S.Tag key={i}>{el.name}</S.Tag>
            ))}
          </S.TagsWrapper>
        </div>
        <S.BailWrapper>
          <S.BailIconWrapper>
            <img src="/icons/icon_bail.svg" />
          </S.BailIconWrapper>
          <S.Bail>{props.el.bail.toLocaleString()}</S.Bail>
        </S.BailWrapper>
      </S.BottomWrapper>
    </S.CarouselItem>
  );
}
