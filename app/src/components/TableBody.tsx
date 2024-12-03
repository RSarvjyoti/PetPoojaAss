interface ColumnConfig {
  key: string;
  title: string;
}

interface CustomStyles {
  bodyBgColor?: string;
  bodyFontColor?: string;
  bodyFontSize?: string;
}

interface TableBodyProps<T> {
  data: T[];
  columns: ColumnConfig[];
  customStyles?: CustomStyles;
}

const TableBody = <T,>({ data, columns, customStyles = {} }: TableBodyProps<T>) => {
  return (
    <tbody style={{ backgroundColor: customStyles.bodyBgColor, color: customStyles.bodyFontColor }}>
      {data.map((row, idx) => (
        <tr key={idx}>
          {columns.map((col) => (
            <td key={col.key} style={{ fontSize: customStyles.bodyFontSize }}>
              {row[col.key as keyof T] as React.ReactNode}  {/* Typecast to ReactNode */}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
