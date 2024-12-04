import { useState, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


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
  bodyBgColor?: string;
  bodyFontColor?: string;
  bodyFontSize?: string;
}

interface TableContainerProps<T> {
  data: T[];
  columns: ColumnConfig[];
  customStyles?: CustomStyles;
}

const TableContainer = <T,>({ data, columns, customStyles = {} }: TableContainerProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" | "" }>({
    key: "",
    direction: "",
  });
  const [filters, setFilters] = useState<Record<string, string>>({});

  const sortedFilteredData = useMemo(() => {
    let filteredData = data;

    // Apply column-based filtering
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        filteredData = filteredData.filter((row) =>
          row[key as keyof T]?.toString().toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply sorting
    if (sortConfig.key) {
      filteredData = [...filteredData].sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filteredData;
  }, [data, filters, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      const direction = prev.key === key && prev.direction === "asc" ? "desc" : "asc";
      return { key, direction };
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="table-container">
      <TableHeader
        columns={columns}
        sortConfig={sortConfig}
        onSort={handleSort}
        onFilterChange={handleFilterChange}
        customStyles={customStyles}
      />
      <TableBody data={sortedFilteredData} columns={columns} customStyles={customStyles} />
    </div>
  );
};

export default TableContainer;
