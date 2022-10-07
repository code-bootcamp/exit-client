import { v4 as uuidv4 } from "uuid";
import { IComment } from "../../../../../commons/types/generated/types";

import ExitedCommentListItemUI from "./exitedCommentList.presenterItem";
import { IExitedCommentListUIProps } from "./exitedCommentList.types";

export default function ExitedCommentListUI(props: IExitedCommentListUIProps) {
  return (
    <>
      {props.data?.fetchComments.map((el: IComment) => (
        <ExitedCommentListItemUI
          key={uuidv4()}
          el={el}
          leaderData={props.leaderData}
          userBoardData={props.userBoardData}
        />
      ))}
    </>
  );
}
