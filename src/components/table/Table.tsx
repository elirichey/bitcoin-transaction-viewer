import Image from "next/image";
import { useTable, useExpanded, useSortBy } from "react-table";

export default function Table(props: any) {
  const { id, data, columns, actions } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, useExpanded);

  return (
    <div className="table-container">
      <table id={id} {...getTableProps()} className="dashboard-table">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => {
                const { id } = column;
                const className = id
                  .split("")
                  .map((letter: any, idx: any) => {
                    return letter.toUpperCase() === letter
                      ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
                      : letter;
                  })
                  .join("");

                return (
                  <th
                    className={className}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {column.isSorted ? (
                      <Image
                        src="/svg/up-down.svg"
                        alt="Arrow Down"
                        width={10}
                        height={10}
                      />
                    ) : (
                      <span className="sort" />
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, i: number) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                onClick={
                  actions && actions.clickRow
                    ? () => actions.clickRow(row.original)
                    : null
                }
                key={i}
              >
                {row.cells.map((cell: any) => {
                  const string = cell.column.Header.toLowerCase();
                  const className = string.split(" ").join("-");
                  const cellProps = { ...cell.getCellProps() };

                  const activeCol = string === "active";

                  return (
                    <td
                      {...cellProps}
                      className={className}
                      onClick={
                        activeCol
                          ? null
                          : actions && actions.clickCell
                          ? () => actions.clickCell(row.original)
                          : null
                      }
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
