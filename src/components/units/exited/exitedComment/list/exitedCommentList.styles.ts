import styled from "@emotion/styled";

// 댓글 영역
export const CommentWrapper = styled.div`
  padding: 30px;
  border-bottom: 2px solid #f0f0f0;
  overflow: hidden;
  position: relative;

  :last-of-type {
    border-bottom: none;
  }
`;

export const CommentUserImageWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  float: left;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CommentContents = styled.div`
  margin-left: 15px;
  float: left;
`;

export const UserInfo = styled.p`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 3rem;
  font-weight: 600;
`;

export const UserEmail = styled.p`
  font-size: 2.4rem;
  color: #777;
  margin-left: 10px;
`;

export const Comment = styled.p`
  font-weight: 500;
  font-size: 2.4rem !important;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const CommentEditInput = styled.input`
  width: 600px;
  height: 40px;
  font-size: 2.2rem;
  padding-left: 10px;
`;

export const ConfirmButton = styled.button`
  width: 30px;
  height: 30px;
  opacity: 0.3;
  padding-top: 5px;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
    color: #dcdcdc;
  }
`;

export const Date = styled.span`
  color: #777;
  font-size: 2.4rem;

  float: right;
`;

export const CommentRightWrapper = styled.div``;

export const CommentIConsWrapper = styled.ul`
  position: absolute;
  right: 30px;
  top: 60px;
  opacity: 0.3;
`;

export const EditButton = styled.button`
  width: 30px;
  height: 30px;
  opacity: 0.9;
`;
export const DeleteButton = styled(EditButton)``;
