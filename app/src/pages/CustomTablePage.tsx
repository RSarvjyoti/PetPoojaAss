import React from 'react'
import TableContainer from '../components/TableContainer';

const CustomTablePage: React.FC = () => {
    const data = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
      ];

      const columns = [
        { key: "id", title: "ID", sortable: true },
        { key: "name", title: "Name", sortable: true, filterable: true },
        { key: "age", title: "Age", sortable: true, filterable: true },
      ];
    
      const customStyles = {
        headerBgColor: "#f4f4f4",
        headerFontColor: "#333",
        headerFontSize: "16px",
        bodyBgColor: "#fff",
        bodyFontColor: "#555",
        bodyFontSize: "14px",
      };
    

  return (
    <div>
         <h2 style={{textAlign: "center"}}>Custom Table React with TypeScript</h2>
        <TableContainer data={data} columns={columns} customStyles={customStyles} />
    </div>
  )
}

export default CustomTablePage