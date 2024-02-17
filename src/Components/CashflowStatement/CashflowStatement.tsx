import React, { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../company";
import { useOutletContext } from "react-router";
import { getCashflowStatement } from "../../api";
import Table from "../Table/Table";

interface Props {}

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashflowStatement: React.FC<Props> = (props: Props): JSX.Element => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>([]);
  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashflowStatement(ticker!);
      setCashflowData(result!.data);
    };
    fetchCashflow();
  }, [ticker]);
  return (
    <>
      {cashflowData ? (
        <Table configs={config} data={cashflowData} />
      ) : (
        <h1>No Results</h1>
      )}
    </>
  );
};

export default CashflowStatement;