import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 224px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default function AdBanner() {
  return (
    <Wrapper>
      <img src="/adBanner.png" />
    </Wrapper>
  );
}
