import React from "react";

const TableRow = ({ data, action }) => {
    <tr>
    {data.map((item, index) => (
      <td key={index}>{item}</td>
    ))}
    {action && <td>{action}</td>}
  </tr>
};

export default TableRow;
