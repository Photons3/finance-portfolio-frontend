import React from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentPostAPI } from "../../Services/CommentService";
import { toast } from "react-toastify";

interface Props {
  stockSymbol: string;
}

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment: React.FC<Props> = ({ stockSymbol }: Props): JSX.Element => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment Created Successfully");
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  );
};

export default StockComment;
