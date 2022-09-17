import * as S from "./projectWrite.styles"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { RiCalendarEventLine } from "react-icons/ri"

import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import { DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";

// import ImageBox, { ImagePreview, ImageUploadBox } from "./projectWrite.presenterImage";



export default function ProjectWriteUI(props: any) {

    // const [value, setValue] = useState(new Date())

    // const onChange = (nextValue) => {
    //     setValue(nextValue)
    // }

    

    return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.CardWrapper>
            <S.PageTitleWrapper>
                <S.PageTitle>신규프로젝트 생성</S.PageTitle>
            </S.PageTitleWrapper>
            <S.ImageWrapper>
                <img src={props.imageUrl}/>
                <input type="file" onChange={props.onChangeFile}></input>
            </S.ImageWrapper>
            <S.TitleWrapper>
                <S.Title 
                    type="text" 
                    placeholder="프로젝트명" 
                    maxLength={15} 
                    {...props.register("title")}/>
            </S.TitleWrapper>
            <S.DescriptionWrapper>
                <S.Description
                    placeholder="프로젝트 설명"
                    {...props.register("description")}/>
            </S.DescriptionWrapper>
            <S.KeywordWrapper>
                <S.Keyword
                    placeholder="키워드"
                    {...props.register("keywords")}/>
            </S.KeywordWrapper>
            <S.PageTitleWrapper>
                <S.PageTitle>신규프로젝트 설정</S.PageTitle>
            </S.PageTitleWrapper>
            <S.BailWrapper>
                <S.Label>최대 100만원</S.Label>
                <S.ItemTitle>1인당 보석금</S.ItemTitle>
                <S.BailInputWrapper>
                    <S.Bail 
                        dir="rtl" 
                        maxLength={7}
                        {...props.register("bail")}/>
                    <S.BailIcon src="/icons/projectWrite/icon_bail.png"/>
                </S.BailInputWrapper>
            </S.BailWrapper>
            <S.TotalMemberWrapper>
                <S.Label>팀장포함 최대 6명</S.Label>
                <S.ItemTitle>모집인원</S.ItemTitle>
                <S.SliderLabel>모집인원<span style={{marginLeft: 15, color: "#3EBD5D"}}>{props.totalMember}명</span></S.SliderLabel>
                <Box sx={{ width: 900, marginTop: 10, marginLeft: 10}}>
                    <Slider
                        size="medium"
                        aria-label="Temperature"
                        defaultValue={1}
                        getAriaValueText={props.onChangeTotalMember}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={5}
                        color="primary"
                    />
                </Box>
            </S.TotalMemberWrapper>
            <S.KeywordsWrapper>
                <S.Label>분야(대분류)</S.Label>
                <S.ItemTitle>모집 분야</S.ItemTitle>
                <S.RadioButton>
     <RadioGroup
        row // 가로 정렬
        // aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female" -> 디폴트값 사용 안함
        value={props.categories} // 일단 대기
        onChange={props.onChangeCategories} // 일단 대기

        name="radio-buttons-group"
      >
        <FormControlLabel value="여행" control={<Radio />} label="여행" />
        <FormControlLabel value="SNS" control={<Radio />} label="SNS" />
        <FormControlLabel value="뷰티 / 패션" control={<Radio />} label="뷰티 / 패션" />
        <FormControlLabel value="엔터테인먼트" control={<Radio />} label="엔터테인먼트" />
        <FormControlLabel value="게임" control={<Radio />} label="게임" />
        <FormControlLabel value="건강 / 스포츠" control={<Radio />} label="건강 / 스포츠" />
        <FormControlLabel value="뉴스 / 정보" control={<Radio />} label="뉴스 / 정보" />
        <FormControlLabel value="인테리어" control={<Radio />} label="인테리어" />
        <FormControlLabel value="부동산" control={<Radio />} label="부동산" />
        <FormControlLabel value="유틸" control={<Radio />} label="유틸" />
        <FormControlLabel value="금융" control={<Radio />} label="금융" />
        <FormControlLabel value="종교" control={<Radio />} label="종교" />
        <FormControlLabel value="교육" control={<Radio />} label="교육" />
        <FormControlLabel value="의료 / 병원" control={<Radio />} label="의료 / 병원" />
        <FormControlLabel value="교통" control={<Radio />} label="교통" />
        <FormControlLabel value="육아 / 출산" control={<Radio />} label="육아 / 출산" />
        <FormControlLabel value="우주 / 외계인" control={<Radio />} label="우주 / 외계인" />
        <FormControlLabel value="공유서비스" control={<Radio />} label="공유서비스" />
        <FormControlLabel value="이커머스" control={<Radio />} label="이커머스" />
        <FormControlLabel value="날씨" control={<Radio />} label="날씨" />
        <FormControlLabel value="자연" control={<Radio />} label="자연" />
        <FormControlLabel value="동물 / 식물" control={<Radio />} label="동물 / 식물" />
        <FormControlLabel value="음식 / 요리" control={<Radio />} label="음식 / 요리" />


 
      </RadioGroup>


                </S.RadioButton>
            </S.KeywordsWrapper>
            <S.AddressWrapper>
                <S.ItemTitle>모임 장소</S.ItemTitle>
                <S.AddressButton>

    <RadioGroup
        row // 가로 정렬
        // aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female" -> 디폴트값 사용 안함
        value={props.address} // 일단 대기
        onChange={props.onChangeAddress} // 일단 대기

        name="radio-buttons-group"
      >
        <FormControlLabel value="서울특별시" control={<Radio />} label="서울특별시" />
        <FormControlLabel value="광주광역시" control={<Radio />} label="광주광역시" />
        <FormControlLabel value="대구광역시" control={<Radio />} label="대구광역시" />
        <FormControlLabel value="대전광역시" control={<Radio />} label="대전광역시" />
        <FormControlLabel value="부산광역시" control={<Radio />} label="부산광역시" />
        <FormControlLabel value="울산광역시" control={<Radio />} label="울산광역시" />
        <FormControlLabel value="인천광역시" control={<Radio />} label="인천광역시" />
        <FormControlLabel value="강원도" control={<Radio />} label="강원도" />
        <FormControlLabel value="경기도" control={<Radio />} label="경기도" />
        <FormControlLabel value="경상남도" control={<Radio />} label="경상남도" />
        <FormControlLabel value="경상북도" control={<Radio />} label="경상북도" />
        <FormControlLabel value="전라남도" control={<Radio />} label="전라남도" />
        <FormControlLabel value="전라북도" control={<Radio />} label="전라북도" />
        <FormControlLabel value="충청남도" control={<Radio />} label="충청남도" />
        <FormControlLabel value="충청북도" control={<Radio />} label="충청북도" />
        <FormControlLabel value="세종특별자치시" control={<Radio />} label="세종특별자치시" />
        <FormControlLabel value="재주특별자치도" control={<Radio />} label="재주특별자치도" />

 
    </RadioGroup>


                </S.AddressButton>
            </S.AddressWrapper>
            <S.TagsWrapper>
                <S.Label>기술 스택(소분류)</S.Label>
                <S.ItemTitle>모집 기술</S.ItemTitle>
            </S.TagsWrapper>
            <S.FrequencyWrapper>
                <S.Label>최소: 주1회</S.Label>
                <S.ItemTitle>모임 빈도</S.ItemTitle>
                <S.SliderLabel>프로젝트 정기 모임<span style={{marginLeft: 15, color: "#3EBD5D"}}>주 {props.frequency}회</span></S.SliderLabel>
                <Box sx={{ width: 900, marginTop: 10, marginLeft: 10}}>
                    <Slider
                        size="medium"
                        aria-label="Temperature"
                        defaultValue={1}
                        getAriaValueText={props.onChangeFrequency}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={7}
                        color="primary"
                    />
                </Box>
            </S.FrequencyWrapper>
            <S.RecruitmentPeriodWrapper>
                <S.Label>최대기간: 1개월</S.Label>
                <S.ItemTitle>모집 마감일</S.ItemTitle>
                    <S.RecruitmentLabel>{props.recruitment}</S.RecruitmentLabel>
                    <S.CalendarButtonBox onClick={props.onClickRecruitment}>
                    <RiCalendarEventLine size={20}/>
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
                            <RiCalendarEventLine size={20}/>
                
                        </S.CalendarButtonBox>
       
                      

                    </S.ProjectLabelWrapper>
            </S.ProjectPeriodWrapper>
            <S.ButtonWrapper>
                {/* <S.CancelButton onClick={props.onClickCancel}>초기화</S.CancelButton>
                <S.CreateButton onClick={props.onClickSubmit}>적용</S.CreateButton> */}
                <S.CancelButton onClick={props.onClickCancel} type="button">초기화</S.CancelButton>
                <S.CreateButton>적용</S.CreateButton>
            </S.ButtonWrapper>
        </S.CardWrapper>
    </S.Wrapper>
    )
}