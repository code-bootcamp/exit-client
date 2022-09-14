import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
`

export const CardWrapper = styled.div`
    width: 69.1667vw;
    /* height: 249rem; */
    border: none;
    border-radius: 1.4rem;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 4px 5px 5px #e9e9e9;
    margin: auto;
    padding: 13.6rem;
`
export const PageTitleWrapper = styled.div`
    /* width: 33.6rem;
    height: 5.8rem;  */
`
export const PageTitle = styled.div`
    font-size: 4.8rem;
    font-weight: bold;
`
export const ImageWrapper = styled.div`
    width: 100%;
    height: 18.5rem;
    border: 2px solid #D7D7D7;
    border-radius: 1.4rem;
    margin-top: 3.75rem;
`
export const Image = styled.img``
export const TitleWrapper = styled.div`
    width: 100%;
    height: 6.8rem;
    border: 2px solid #D7D7D7;
    border-radius: 1.4rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
`
export const Title = styled.input`
    width: 100%;
    height: 4.5rem;
    font-size: 2.2rem;
    font-weight: 400;
    border: none;
    outline: none;

    ::placeholder {
        color: #c1c1c1;
    } 
`
export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 34rem;
    border: 2px solid #D7D7D7;
    border-radius: 1.4rem;
    margin-top: 2rem;
    padding-top: 8px;
`
export const Description = styled.input`
    font-size: 2.2rem;
    width: 100%;
    height: 30rem;
    outline: none;
    border: none;
      
    ::placeholder {
        color: #c1c1c1;
    } 
`
export const KeywordWrapper = styled.div`
    width: 100%;
    height: 6.8rem;
    border: 2px solid #D7D7D7;
    border-radius: 1.4rem;
    margin-top: 2rem;
    padding-top: 8px;
    margin-bottom: 12rem;
`
export const Keyword = styled.input`
    width: 100%;
    height: 4.5rem;
    font-size: 2.2rem;
    font-weight: 400;
    border: none;
    outline: none;

    ::placeholder {
        color: #c1c1c1;
    } 
`

export const BailWrapper = styled.div`
    margin-top: 6rem;
    margin-bottom: 17rem;
`
export const Label = styled.div`
    font-size: 2.4rem;
    font-weight: 500;
    color: #777777;
`
export const ItemTitle = styled.div`
    font-size: 4rem;
    font-weight: 700;
    margin-top: 0.5rem;
`
export const BailInputWrapper = styled.div`
    position: relative;
`
export const Bail = styled.input`
    width: calc(100% - 510px);
    height: 7rem;
    border-radius: 1.4rem;
    border: 2px solid #D7D7D7;
    float: right;
    font-size: 3.6rem;
    font-weight: 700;
    outline: none;

    background-image: url("/icons/projectWrite/icon_인원.png");
    background-repeat: no-repeat;
    background-size: 5.5rem;
    background-position: 1.9rem 1.8rem;
    padding-right: 6.5rem;
`

export const BailIcon = styled.img`
    position: absolute;
    right: 1.8rem;
    top: 1.5rem;
`

export const TotalMemberWrapper = styled.div`
    margin-bottom: 17rem;
`
export const TotalMember = styled.div`` // 슬라이더 들어가야 함(보류)
export const KeywordsWrapper = styled.div`
`
export const RadioButton = styled.div`
    margin-top: 2rem;
`

export const TagsWrapper = styled.div`
    margin-top: 10rem;
`

export const AddressWrapper = styled.div`
    margin-top: 10rem;
`

export const AddressButton = styled.div``
export const FrequencyWrapper = styled.div`
    margin-top: 10rem;
`
export const ProjectPeriodWrapper = styled.div`
    margin-top: 10rem;
`
export const ButtonWrapper = styled.div`
   margin-top: 12rem;
   display: flex;
`
export const CancelButton = styled.button`
    width: 51.2rem;
    height: 10rem;
    border-radius: 1.4rem;
    border: none;
    background-color: #ECECEC;
    font-size: 4rem;
    font-weight: 700;
    margin-right: 3.2rem;
`
export const CreateButton = styled.button`
    width: 51.2rem;
    height: 10rem;
    border-radius: 1.4rem;
    border: none;
    background-color: #3EBD5D;
    color: white;
    font-size: 4rem;
    font-weight: 700;
`