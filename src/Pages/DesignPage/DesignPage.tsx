import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Components/Table/testData";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
];

const DesignPage: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <>
      <h1>StockView Design Page</h1>
      <h2>
        This is StockView Design Page. This is where we will house our various
        design aspects of the app.
      </h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table data={testIncomeStatementData} configs={tableConfig} />
    </>
  );
};

export default DesignPage;
