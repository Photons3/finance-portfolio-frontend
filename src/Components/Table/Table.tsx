import React from "react";

interface Props {
  configs: any;
  data: any;
}

const Table: React.FC<Props> = ({ configs, data }: Props): JSX.Element => {
  const renderedRow = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderedHeader = configs.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide-gray-200 m-5">
          {renderedHeader}
        </thead>
        <tbody>{renderedRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
