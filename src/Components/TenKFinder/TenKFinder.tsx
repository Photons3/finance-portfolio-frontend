import React, { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import Spinner from "../Spinner/Spinner";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";

interface Props {
  ticker: string;
}

const TenKFinder: React.FC<Props> = ({ ticker }: Props): JSX.Element => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>([]);
  useEffect(() => {
    const fetchTenK = async () => {
      const value = await getTenK(ticker);
      setCompanyData(value!.data);
    };
    fetchTenK();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
