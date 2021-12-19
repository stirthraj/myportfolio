import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Container,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import React from "react";

export default function Education() {
  const data = React.useMemo(
    () => [
      {
        Degree: "B.Tech (IT Dept.)",
        Year: "2016 - 2020",
        College: "C.V. Raman College of Engineering, Bhubaneswar",
        Percentage: "7.17 (CGPA)",
      },
      {
        Degree: "Diploma in IT Architecture",
        Year: "2017-2020",
        College: "C-DAC, Pune, and College Collaboration",
        Percentage: "65%(Grade B+)",
      },
      {
        Degree: "Intermediate",
        Year: "Apr 2016",
        College: "S.K.B Singh SR SEC Kuchaikote, Bihar",
        Percentage: "72.8%",
      },
      {
        Degree: "Metric",
        Year: "Apr 2013",
        College: "Islamia Urdu Academy HS School Mirganj, Bihar",
        Percentage: "75.8%",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "To convert",
        accessor: "Degree",
      },
      {
        Header: "Into",
        accessor: "Year",
      },
      {
        Header: "Multiply by",
        accessor: "College",
      },
      {
        Header: "Multiply by",
        accessor: "Percentage",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <>
      <Container>
        <h2>Educational Qualification</h2>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render("Header")}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                    >
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}
