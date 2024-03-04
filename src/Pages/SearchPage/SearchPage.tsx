import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { searchCompanies } from "../../api";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import CardList from "../../Components/CardList/CardList";
import { CompanySearch } from "../../company";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioGetAPI,
  portfolioAddAPI,
  portfolioDeleteAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    null
  );

  const [serverError, setServerError] = useState<string>("");

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res: any) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        toast.warning("Could not get portfolio values!");
      });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not get create portfolio item!");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status === 200) {
        toast.success("Stock deleted from portfolio");
        getPortfolio();
      }
    });
  };

  return (
    <div className="SearchPage">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
};

export default SearchPage;
