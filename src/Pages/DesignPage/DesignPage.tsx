import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

interface Props {}

const DesignPage: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <h1>StockView Design Page</h1>
      <h2>
        This is StockView Design Page. This is where we will house our various
        design aspects of the app.
      </h2>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
