import React, { useEffect, useState } from "react";
import { CompanyCompData } from "../../company";
import { getComparableData } from "../../api";
import ComparableFinderItem from "./ComparableFinderItem/ComparableFinderItem";

interface Props {
  ticker: string;
}

const ComparableFinder: React.FC<Props> = ({ ticker }: Props): JSX.Element => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  useEffect(() => {
    const getComps = async () => {
      const value = await getComparableData(ticker);
      setCompanyData(value?.data[0]);
      console.log(value);
    };
    getComps();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
      {companyData?.peersList.map((ticker) => {
        return <ComparableFinderItem ticker={ticker} />;
      })}
    </div>
  );
};

export default ComparableFinder;
