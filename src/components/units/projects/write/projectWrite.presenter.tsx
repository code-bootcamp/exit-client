import * as S from "./projectWrite.styles";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import { RiCalendarEventLine } from "react-icons/ri";
import { Slider } from "antd";
import { FormControlLabel, Radio } from "@mui/material";
import { Color } from "../../myPage/myPage.styles";

export default function ProjectWriteUI(props: any) {
  return (
    <S.Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <S.CardWrapper>
        <S.PageTitleWrapper>
          <S.PageTitle>
            {props.isEdit ? "프로젝트 수정" : "신규프로젝트 생성"}
          </S.PageTitle>
        </S.PageTitleWrapper>
        <S.ImageWrapper onClick={props.onClickImage}>
          <img
            src={props.imageUrl}
            style={{
              width: "100%;",
              height: "18.5rem;",
              borderRadius: "1.4rem",
            }}
          />
          <input
            type="file"
            ref={props.fileRef}
            onChange={props.onChangeFile}
            style={{ display: "none" }}
          />
        </S.ImageWrapper>
        <S.TitleWrapper>
          <S.Title
            type="text"
            placeholder="프로젝트명"
            maxLength={15}
            {...props.register("title")}
          />
        </S.TitleWrapper>
        <S.DescriptionWrapper>
          <S.Description
            placeholder="프로젝트 설명"
            {...props.register("description")}
          />
        </S.DescriptionWrapper>
        <S.KeywordWrapper>
          <S.Keyword placeholder="키워드" {...props.register("keywords")} />
        </S.KeywordWrapper>
        <S.PageTitleWrapper>
          <S.PageTitle>
            {props.isEdit ? "프로젝트 설정 수정" : "신규프로젝트 설정"}
          </S.PageTitle>
        </S.PageTitleWrapper>
        <S.BailWrapper>
          <S.Label>최대 100만원</S.Label>
          <S.ItemTitle>1인당 보석금</S.ItemTitle>
          <S.BailInputWrapper>
            <S.Bail dir="rtl" maxLength={7} {...props.register("bail")} />
            <S.BailIcon src="/icons/icon_bail.svg" />
          </S.BailInputWrapper>
        </S.BailWrapper>
        <S.TotalMemberWrapper>
          <S.Label>팀장포함 최대 6명</S.Label>
          <S.ItemTitle>모집인원</S.ItemTitle>
          <S.SliderLabel>
            모집인원
            <span style={{ marginLeft: 15, color: "#3EBD5D" }}>
              {props.totalMember}명
            </span>
          </S.SliderLabel>
          <Box sx={{ width: 900, marginTop: 10, marginLeft: 10 }}>
            <S.Icon1 src="/start.png" />
            <S.Icon2 src="/end.png" />
            <Slider
              handleStyle={{ width: "6rem", height: "6rem", Color: "#D7D7D7" }}
              trackStyle={{ width: "99.8rem" }}
              defaultValue={props.data?.fetchBoard.totalMember}
              value={props.totalMember}
              onChange={props.onChangeTotalMember}
              getAriaValueText={props.onChangeTotalMember}
              // valueLabelDisplay="auto"
              step={1}
              min={1}
              max={5}
            />
          </Box>
        </S.TotalMemberWrapper>
        <S.KeywordsWrapper>
          <S.Label>분야(대분류)</S.Label>
          <S.ItemTitle>모집 분야</S.ItemTitle>
          <S.RadioButtonWrapper>
            <S.Radio
              type="radio"
              id="categories1"
              name="categories"
              value="SNS"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "SNS"}
            />
            <label htmlFor="categories1">
              <span>SNS</span>
            </label>
            <S.Radio
              type="radio"
              id="categories2"
              name="categories"
              value="건강/스포츠"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "건강/스포츠"}
            />
            <label htmlFor="categories2">
              <span>건강/스포츠</span>
            </label>
            <S.Radio
              type="radio"
              id="categories3"
              name="categories"
              value="게임"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "게임"}
            />
            <label htmlFor="categories3">
              <span>게임</span>
            </label>
            <S.Radio
              type="radio"
              id="categories4"
              name="categories"
              value="공유서비스"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "공유서비스"}
            />
            <label htmlFor="categories4">
              <span>공유서비스</span>
            </label>
            <S.Radio
              type="radio"
              id="categories5"
              name="categories"
              value="교육"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "교육"}
            />
            <label htmlFor="categories5">
              <span>교육</span>
            </label>
            <S.Radio
              type="radio"
              id="categories6"
              name="categories"
              value="교통"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "교통"}
            />
            <label htmlFor="categories6">
              <span>교통</span>
            </label>
            <S.Radio
              type="radio"
              id="categories7"
              name="categories"
              value="금융"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "금융"}
            />
            <label htmlFor="categories7">
              <span>금융</span>
            </label>
            <S.Radio
              type="radio"
              id="categories8"
              name="categories"
              value="날씨"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "날씨"}
            />
            <label htmlFor="categories8">
              <span>날씨</span>
            </label>
            <S.Radio
              type="radio"
              id="categories9"
              name="categories"
              value="뉴스/정보"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "뉴스/정보"}
            />
            <label htmlFor="categories9">
              <span>뉴스/정보</span>
            </label>
            <S.Radio
              type="radio"
              id="categories10"
              name="categories"
              value="동물/식물"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "동물/식물"}
            />
            <label htmlFor="categories10">
              <span>동물/식물</span>
            </label>
            <S.Radio
              type="radio"
              id="categories11"
              name="categories"
              value="부동산"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "부동산"}
            />
            <label htmlFor="categories11">
              <span>부동산</span>
            </label>
            <S.Radio
              type="radio"
              id="categories12"
              name="categories"
              value="뷰티/패션"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "뷰티/패션"}
            />
            <label htmlFor="categories12">
              <span>뷰티/패션</span>
            </label>
            <S.Radio
              type="radio"
              id="categories13"
              name="categories"
              value="엔터테인먼트"
              onChange={props.onChangeCategories}
              checked={
                props.data?.fetchBoard.categories.name === "엔터테인먼트"
              }
            />
            <label htmlFor="categories13">
              <span>엔터테인먼트</span>
            </label>
            <S.Radio
              type="radio"
              id="categories14"
              name="categories"
              value="여행"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "여행"}
            />
            <label htmlFor="categories14">
              <span>여행</span>
            </label>
            <S.Radio
              type="radio"
              id="categories15"
              name="categories"
              value="우주/외계인"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "우주/외계인"}
            />
            <label htmlFor="categories15">
              <span>우주/외계인</span>
            </label>
            <S.Radio
              type="radio"
              id="categories16"
              name="categories"
              value="유틸"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "유틸"}
            />
            <label htmlFor="categories16">
              <span>유틸</span>
            </label>
            <S.Radio
              type="radio"
              id="categories17"
              name="categories"
              value="육아/출산"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "육아/출산"}
            />
            <label htmlFor="categories17">
              <span>육아/출산</span>
            </label>
            <S.Radio
              type="radio"
              id="categories18"
              name="categories"
              value="음식/요리"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "음식/요리"}
            />
            <label htmlFor="categories18">
              <span>음식/요리</span>
            </label>
            <S.Radio
              type="radio"
              id="categories19"
              name="categories"
              value="의료/병원"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "의료/병원"}
            />
            <label htmlFor="categories19">
              <span>의료/병원</span>
            </label>
            <S.Radio
              type="radio"
              id="categories20"
              name="categories"
              value="이커머스"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "이커머스"}
            />
            <label htmlFor="categories20">
              <span>이커머스</span>
            </label>
            <S.Radio
              type="radio"
              id="categories21"
              name="categories"
              value="인테리어"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "인테리어"}
            />
            <label htmlFor="categories21">
              <span>인테리어</span>
            </label>
            <S.Radio
              type="radio"
              id="categories22"
              name="categories"
              value="자연"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "자연"}
            />
            <label htmlFor="categories22">
              <span>자연</span>
            </label>
            <S.Radio
              type="radio"
              id="categories23"
              name="categories"
              value="종교"
              onChange={props.onChangeCategories}
              checked={props.data?.fetchBoard.categories.name === "종교"}
            />
            <label htmlFor="categories23">
              <span>종교</span>
            </label>
          </S.RadioButtonWrapper>
        </S.KeywordsWrapper>
        <S.AddressWrapper>
          <S.ItemTitle>모임 장소</S.ItemTitle>
          <S.AddressButton>
            <S.Radio
              type="radio"
              id="Address1"
              name="Address"
              value="서울특별시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "서울특별시"}
            />
            <label htmlFor="Address1">
              <span>서울특별시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address2"
              name="Address"
              value="광주광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "광주광역시"}
            />
            <label htmlFor="Address2">
              <span>광주광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address3"
              name="Address"
              value="대구광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "대구광역시"}
            />
            <label htmlFor="Address3">
              <span>대구광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address4"
              name="Address"
              value="대전광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "대전광역시"}
            />
            <label htmlFor="Address4">
              <span>대전광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address5"
              name="Address"
              value="부산광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "부산광역시"}
            />
            <label htmlFor="Address5">
              <span>부산광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address6"
              name="Address"
              value="울산광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "울산광역시"}
            />
            <label htmlFor="Address6">
              <span>울산광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address7"
              name="Address"
              value="인천광역시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "인천광역시"}
            />
            <label htmlFor="Address7">
              <span>인천광역시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address8"
              name="Address"
              value="강원도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "강원도"}
            />
            <label htmlFor="Address8">
              <span>강원도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address9"
              name="Address"
              value="경기도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "경기도"}
            />
            <label htmlFor="Address9">
              <span>경기도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address10"
              name="Address"
              value="경상남도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "경상남도"}
            />
            <label htmlFor="Address10">
              <span>경상남도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address11"
              name="Address"
              value="경상북도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "경상북도"}
            />
            <label htmlFor="Address11">
              <span>경상북도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address12"
              name="Address"
              value="전라남도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "전라남도"}
            />
            <label htmlFor="Address12">
              <span>전라남도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address13"
              name="Address"
              value="전라북도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "전라북도"}
            />
            <label htmlFor="Address13">
              <span>전라북도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address14"
              name="Address"
              value="충청남도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "충청남도"}
            />
            <label htmlFor="Address14">
              <span>충청남도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address15"
              name="Address"
              value="충청북도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "충청북도"}
            />
            <label htmlFor="Address15">
              <span>충청북도</span>
            </label>
            <S.Radio
              type="radio"
              id="Address16"
              name="Address"
              value="세종특별자치시"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "세종특별자치시"}
            />
            <label htmlFor="Address16">
              <span>세종특별자치시</span>
            </label>
            <S.Radio
              type="radio"
              id="Address17"
              name="Address"
              value="제주특별자치도"
              onChange={props.onChangeAddress}
              checked={props.data?.fetchBoard.address === "제주특별자치도"}
            />
            <label htmlFor="Address17">
              <span>제주특별자치도</span>
            </label>
          </S.AddressButton>
        </S.AddressWrapper>
        <S.TagsWrapper>
          <S.Label>기술 스택(소분류)</S.Label>
          <S.ItemTitle>모집 기술</S.ItemTitle>
        </S.TagsWrapper>
        <S.FrequencyWrapper>
          <S.Label>최소: 주1회</S.Label>
          <S.ItemTitle>모임 빈도</S.ItemTitle>
          <S.SliderLabel>
            프로젝트 정기 모임
            <span style={{ marginLeft: 15, color: "#3EBD5D" }}>
              주 {props.frequency}회
            </span>
          </S.SliderLabel>
          <Box sx={{ width: 900, marginTop: 10, marginLeft: 10 }}>
            <Slider
              defaultValue={props.data?.fetchBoard.frequency}
              value={props.frequency}
              onChange={props.onChangeFrequency}
              getAriaValueText={props.onChangeFrequency}
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={7}
            />
          </Box>
        </S.FrequencyWrapper>
        <S.RecruitmentPeriodWrapper>
          <S.Label>최대기간: 1개월</S.Label>
          <S.ItemTitle>모집 마감일</S.ItemTitle>
          <S.RecruitmentLabel>{props.recruitment}</S.RecruitmentLabel>
          <S.CalendarButtonBox onClick={props.onClickRecruitment}>
            <RiCalendarEventLine size={20} />
            <S.CalendarBox>
              {/* <MuiPickersUtilsProvider utils={moment}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={props.recruitment}
                            onChange={props.onChangeRecruitment}/>
                        </LocalizationProvider>
                        </MuiPickersUtilsProvider> */}
              {/* <Calendar
                            onChange={props.onChangeRecruitment}
                            // value={new Date(props.recruitment).getDate("YYYY")}
                            value={typeof props.recruitment === "string" ? new Date(props.recruitment) : null}
                            calendarType = {"US"} // 일요일부터 시작
                            // minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                            // maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                            // navigationLabel = {null}
                            showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정\
                            formatDay = {(locale, date) => moment(date).format('DD')}
                            formatLongDate = "YYYY-MM-DD"

                            /> */}
            </S.CalendarBox>
          </S.CalendarButtonBox>
        </S.RecruitmentPeriodWrapper>
        <S.ProjectPeriodWrapper>
          <S.ItemTitle>프로젝트 기간</S.ItemTitle>
          <S.ProjectLabelWrapper>
            <S.CalendarButtonBox>
              <RiCalendarEventLine size={20} />
            </S.CalendarButtonBox>
          </S.ProjectLabelWrapper>
        </S.ProjectPeriodWrapper>
        <S.ButtonWrapper>
          <S.CancelButton onClick={props.onClickCancel} type="button">
            초기화
          </S.CancelButton>
          <S.CreateButton>적용</S.CreateButton>
        </S.ButtonWrapper>
      </S.CardWrapper>
    </S.Wrapper>
  );
}
