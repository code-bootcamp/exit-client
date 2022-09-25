import UploadWrite from "../../../commons/uploads/01/UploadsWrite.container";
import { v4 as uuidv4 } from "uuid";
import { Col, DatePicker, Row, Slider } from "antd";
import * as S from "./write.styles";
import WriteTagsModal from "../../../commons/modal/writeTagsModal/writeTagsModal.container";

const { RangePicker } = DatePicker;

const FAVORITE_CATEGORIES = [
  "여행",
  "SNS",
  "뷰티/패션",
  "엔터테인먼트",
  "게임",
  "건강/스포츠",
  "뉴스/정보",
  "인테리어",
  "부동산",
  "유틸",
  "금융",
  "종교",
  "교육",
  "의료/병원",
  "교통",
  "육아/출산",
  "우주/외계인",
  "공유서비스",
  "이커머스",
  "날씨",
  "자연",
  "동물/식물",
  "음식/요리",
];

const ADDRESS = [
  "서울",
  "광주",
  "대구",
  "대전",
  "부산",
  "울산",
  "인천",
  "강원",
  "경기",
  "세종",
  "제주",
];

export default function WriteUI(props: any) {
  console.log(props.data?.fetchBoard.closeDate);
  return (
    <>
      {props.isModalVisible && props?.isEditingTags && (
        <WriteTagsModal
          onClickClose={props.onClickClose}
          setIsEditingTags={props?.setIsEditingTags}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.WriteTitle>
            {props.isEdit ? "프로젝트 수정" : "신규프로젝트 생성"}
          </S.WriteTitle>
          <S.ImageBox>
            <UploadWrite
              fileUrl={props.fileUrl}
              onChangeFileUrl={props.onChangeFileUrl}
            />
          </S.ImageBox>
          <S.ProjectInputContainer>
            <S.ProjectTilte
              id="title"
              onChange={props.onChangeInputs}
              placeholder="제목을 입력해주세요"
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.ProjectContents
              id="description"
              onChange={props.onChangeInputs}
              placeholder="내용을 입력해주세요"
              defaultValue={props.data?.fetchBoard.description}
            />
            <S.ProjectKeyword
              id="keywords"
              onChange={props.onChangeKeyword}
              placeholder="키워드를 입력해주세요"
              defaultValue={props.data?.fetchBoard.keywords.map(
                (el: any) => el.name
              )}
            />
          </S.ProjectInputContainer>
          <S.ProjectSetting>
            <S.SettingTitle>
              {props.isEdit ? "프로젝트 설정 수정" : "신규프로젝트 설정"}
            </S.SettingTitle>
            <S.SetBox>
              <S.SetTitleBox>
                <S.SetMiniTitle>최대 100만원</S.SetMiniTitle>
                <S.SetTitle>1인당 보석금</S.SetTitle>
              </S.SetTitleBox>
              <S.SetRight>
                <S.MoneyInput onChange={props.onChangeBail} name="SelectMoney">
                  <option value="50000">50000</option>
                  <option value="100000">100000</option>
                  <option value="200000">200000</option>
                  <option value="300000">300000</option>
                  <option value="500000">500000</option>
                </S.MoneyInput>
              </S.SetRight>
              <S.MoneyIcon src={"/icons/money_icon.png"} />
            </S.SetBox>
            <S.SetBox>
              <S.SetMiniTitle>팀장포함 6명 최대</S.SetMiniTitle>
              <S.SetTitle>모집 인원</S.SetTitle>
              <S.SetRight>
                모집인원{" "}
                <S.TextColor>
                  <span style={{ color: "#3EBD5D" }}>
                    {props.totalMember
                      ? props.totalMember
                      : props.data?.fetchBoard.totalMember}{" "}
                  </span>
                  명
                </S.TextColor>
              </S.SetRight>
              <Row style={{ width: "100%" }}>
                <Col span={12} style={{ width: "100%" }}>
                  <Slider
                    min={1}
                    max={6}
                    onChange={props.onChangeTotalMember}
                    value={
                      props.totalMember
                        ? props.totalMember
                        : props.data?.fetchBoard.totalMember
                    }
                    handleStyle={{
                      width: "6rem",
                      height: "6rem",
                      borderColor: "#D7D7D7",
                    }}
                    trackStyle={{
                      backgroundColor: "#3EBD5D",
                    }}
                    style={{
                      width: "100rem",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10rem",
                      marginTop: "3rem",
                    }}
                  />
                </Col>
              </Row>
            </S.SetBox>
            <S.SetBox>
              <S.SetMiniTitle>분야(대분류)</S.SetMiniTitle>
              <S.SetTitle>모집 분야</S.SetTitle>
              <S.RadioBox>
                {FAVORITE_CATEGORIES.map((el: any) => (
                  <S.Key key={uuidv4()}>
                    <S.InputRadio
                      type="radio"
                      value={el}
                      name="categories"
                      onChange={props.onChangeCategoires}
                      checked={
                        props.categories === el
                          ? true
                          : false ||
                            props.data?.fetchBoard.categories[0].name === el
                          ? true
                          : false
                      }
                    />
                    {el}
                  </S.Key>
                ))}
              </S.RadioBox>
            </S.SetBox>
            <S.SetBox>
              <S.SetTitle>모임 장소</S.SetTitle>
              <S.RadioBox>
                {ADDRESS.map((el: any) => (
                  <S.Key key={uuidv4()}>
                    <S.InputRadio
                      type="radio"
                      value={el}
                      name="address"
                      onChange={props.onChangeAddress}
                      checked={
                        props.address === el
                          ? true
                          : false || props.data?.fetchBoard.address === el
                          ? true
                          : false
                      }
                    />
                    {el}
                  </S.Key>
                ))}
              </S.RadioBox>
            </S.SetBox>
            <S.SetBox>
              <S.SetMiniTitle>기술 스택(소분류)</S.SetMiniTitle>
              <S.TagsHeaderWrapper>
                <S.SetTitle>모집 기술</S.SetTitle>
                <S.TagButton onClick={props.onClickTags}>
                  모집 기술 편집
                </S.TagButton>
              </S.TagsHeaderWrapper>
              <S.Tags>
                {props?.tags?.map((el: string, index: number) => (
                  <S.Tag key={index}>{el}</S.Tag>
                ))}
              </S.Tags>
            </S.SetBox>
            <S.SetBox>
              <S.SetMiniTitle>최소: 주 1회</S.SetMiniTitle>
              <S.SetTitle>모임 빈도</S.SetTitle>
              <S.SetRight>
                프로젝트 정기 모임{" "}
                <S.TextColor>
                  주{" "}
                  <span style={{ marginRight: "0.3rem", color: "#3EBD5D" }}>
                    {props.frequency
                      ? props.frequency
                      : props.data?.fetchBoard.frequency}
                  </span>
                  회
                </S.TextColor>
              </S.SetRight>
              <Row style={{ width: "100%" }}>
                <Col span={12} style={{ width: "100%" }}>
                  <Slider
                    min={1}
                    max={5}
                    onChange={props.onChangeFrequency}
                    value={
                      props.frequency
                        ? props.frequency
                        : props.data?.fetchBoard.frequency
                    }
                    handleStyle={{
                      width: "6rem",
                      height: "6rem",
                      borderColor: "#D7D7D7",
                    }}
                    trackStyle={{
                      backgroundColor: "#3EBD5D",
                    }}
                    style={{
                      width: "100rem",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10rem",
                    }}
                  />
                </Col>
              </Row>
            </S.SetBox>

            <S.SetBox>
              <S.SetMiniTitle>최대기간 1개월</S.SetMiniTitle>
              <S.SetTitle>모집 마감일</S.SetTitle>
              <S.SetRight>
                <S.TextColor>
                  <span style={{ marginRight: "0.3rem", color: "#3EBD5D" }}>
                    {props.closeDate
                      ? props.closeDate
                      : props.data?.fetchBoard.closeDate}
                  </span>{" "}
                  모집 마감
                </S.TextColor>
                <DatePicker
                  style={{
                    marginTop: "0.5rem",
                    // width: "36.1rem"
                    height: "43px",
                    // fontSize: "3.6rem",
                    border: "none",
                    color: "white",
                    fontSize: "40px",
                  }}
                  onChange={props.onChangeClosedAt}
                />
              </S.SetRight>
            </S.SetBox>

            <S.SetBox>
              <S.SetTitle>프로젝트기간</S.SetTitle>
              <S.SetRight>
                <S.TextColor> 총 프로젝트기간</S.TextColor>
                <RangePicker
                  style={{
                    marginTop: "0.5rem",
                    height: "43px",
                    border: "none",
                    fontSize: "40px",
                  }}
                  onChange={props.onChangeRangeDate}
                />
              </S.SetRight>
            </S.SetBox>
          </S.ProjectSetting>
          <S.ButtonBox>
            {props.isEdit ? (
              <S.Createbutton onClick={props.onClickUpdate}>
                수정
              </S.Createbutton>
            ) : (
              <S.Createbutton onClick={props.onClickWrite}>생성</S.Createbutton>
            )}
          </S.ButtonBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
