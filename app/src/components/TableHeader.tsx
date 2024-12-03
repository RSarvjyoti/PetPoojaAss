import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { TbCaretUpDownFilled } from "react-icons/tb";

interface ColumnConfig {
  key: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
}

interface CustomStyles {
  headerBgColor?: string;
  headerFontColor?: string;
  headerFontSize?: string;
}

interface TableHeaderProps {
  columns: ColumnConfig[];
  sortConfig: { key: string; direction: "asc" | "desc" | "" };
  onSort: (key: string) => void;
  onFilterChange: (key: string, value: string) => void;
  customStyles?: CustomStyles;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  sortConfig,
  onSort,
  onFilterChange,
  customStyles = {},
}) => {
  return (
    <thead style={{ backgroundColor: customStyles.headerBgColor, color: customStyles.headerFontColor }}>
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            style={{ fontSize: customStyles.headerFontSize }}
            onClick={() => col.sortable && onSort(col.key)}
          >
            {col.title}
            {col.sortable && (
              <span>
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? <BiSolidUpArrow />
                    : <BiSolidDownArrow />
                  : <TbCaretUpDownFilled />}
              </span>
            )}
            {col.filterable && (
              <input
                type="text"
                placeholder={`Filter ${col.title}`}
                onChange={(e) => onFilterChange(col.key, e.target.value)}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
