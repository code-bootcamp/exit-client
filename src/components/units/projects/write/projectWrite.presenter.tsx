import { Radio } from "antd"
import * as S from "./projectWrite.styles"

export default function ProjectWriteUI(props: any) {
    return (
    <S.Wrapper>
        <S.CardWrapper>
            <S.PageTitleWrapper>
                <S.PageTitle>신규프로젝트 생성</S.PageTitle>
            </S.PageTitleWrapper>
            <S.ImageWrapper>
                <S.Image/>
            </S.ImageWrapper>
            <S.TitleWrapper>
                <S.Title placeholder="프로젝트명" maxLength={20}/>
            </S.TitleWrapper>
            <S.DescriptionWrapper>
                <S.Description placeholder="프로젝트 설명"/>
            </S.DescriptionWrapper>
            <S.KeywordWrapper>
                <S.Keyword placeholder="키워드"/>
            </S.KeywordWrapper>
            <S.PageTitleWrapper>
                <S.PageTitle>신규프로젝트 설정</S.PageTitle>
            </S.PageTitleWrapper>
            <S.BailWrapper>
                <S.Label>최대 100만원</S.Label>
                <S.ItemTitle>1인당 보석금</S.ItemTitle>
                <S.BailInputWrapper>
                    <S.Bail dir="rtl" maxLength={7}/>
                    <S.BailIcon src="/icons/projectWrite/icon_bail.png"/>
                </S.BailInputWrapper>
            </S.BailWrapper>
            <S.TotalMemberWrapper>
                <S.Label>팀장포함 최대 6명</S.Label>
                <S.ItemTitle>모집인원</S.ItemTitle>
                <S.TotalMember/>
            </S.TotalMemberWrapper>
            <S.KeywordsWrapper>
                <S.Label>분야(대분류)</S.Label>
                <S.ItemTitle>모집 분야</S.ItemTitle>
                <S.RadioButton>
                <Radio.Group onChange={props.onChangeRadio} value={props.value}>
                    <Radio value={1}>여행</Radio>
                    <Radio value={2}>SNS</Radio>
                    <Radio value={3}>뷰티 / 패션</Radio>
                    <Radio value={4}>엔터테인먼트</Radio>
                    <Radio value={5}>게임</Radio>
                    <Radio value={6}>건강 / 스포츠</Radio>
                    <Radio value={7}>뉴스 / 정보</Radio>
                    <Radio value={8}>인테리어</Radio>
                    <Radio value={9}>부동산</Radio>
                    <Radio value={10}>유틸</Radio>
                    <Radio value={11}>금융</Radio>
                    <Radio value={12}>종교</Radio>
                    <Radio value={13}>교육</Radio>
                    <Radio value={14}>의료 / 병원</Radio>
                    <Radio value={15}>교통</Radio>
                    <Radio value={16}>육아 / 출산</Radio>
                    <Radio value={17}>우주 / 외계인</Radio>
                    <Radio value={18}>공유서비스</Radio>
                    <Radio value={19}>이커머스</Radio>
                    <Radio value={20}>날씨</Radio>
                    <Radio value={21}>자연</Radio>
                    <Radio value={22}>동물 / 식물</Radio>
                    <Radio value={23}>음식 / 요리</Radio>
                </Radio.Group>
                </S.RadioButton>
            </S.KeywordsWrapper>
            <S.AddressWrapper>
                <S.ItemTitle>모임 장소</S.ItemTitle>
                <S.AddressButton>
                <Radio.Group onChange={props.onChangeAddress} value={props.address}>
                    <Radio value={1}>서울특별시</Radio>
                    <Radio value={2}>광주광역시</Radio>
                    <Radio value={3}>대구광역시</Radio>
                    <Radio value={4}>대전광역시</Radio>
                    <Radio value={5}>부산광역시</Radio>
                    <Radio value={6}>울산광역시</Radio>
                    <Radio value={7}>인천광역시</Radio>

                    <Radio value={8}>강원도</Radio>
                    <Radio value={9}>경기도</Radio>
                    <Radio value={10}>경상남도</Radio>
                    <Radio value={11}>경상북도</Radio>
                    <Radio value={12}>전라남도</Radio>
                    <Radio value={13}>전라북도</Radio>
                    <Radio value={14}>충청남도</Radio>
                    <Radio value={15}>충청북도</Radio>
                    
                    <Radio value={16}>세종특별자치시</Radio>
                    <Radio value={17}>제주특별자치도</Radio>
                </Radio.Group>
                </S.AddressButton>
            </S.AddressWrapper>
            <S.TagsWrapper>
                <S.Label>기술 스택(소분류)</S.Label>
                <S.ItemTitle>모집 기술</S.ItemTitle>
            </S.TagsWrapper>
            <S.FrequencyWrapper>
                <S.Label>최소: 주1회</S.Label>
                <S.ItemTitle>모임 빈도</S.ItemTitle>
            </S.FrequencyWrapper>
            <S.ProjectPeriodWrapper>
                <S.ItemTitle>프로젝트 기간</S.ItemTitle>
            </S.ProjectPeriodWrapper>
            <S.ButtonWrapper>
                <S.CancelButton onClick={props.onClickCancel}>초기화</S.CancelButton>
                <S.CreateButton onClick={props.onClickCreate}>적용</S.CreateButton>
            </S.ButtonWrapper>
        </S.CardWrapper>
    </S.Wrapper>)
}