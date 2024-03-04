import React from "react";
import { CommentGet } from "../../../Models/Comment";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";

interface Props {
  comments: CommentGet[];
}

const StockCommentList: React.FC<Props> = ({
  comments,
}: Props): JSX.Element => {
  return (
    <>
      {comments
        ? comments.map((comment) => {
            return <StockCommentListItem comment={comment} />;
          })
        : ""}
    </>
  );
};

export default StockCommentList;
