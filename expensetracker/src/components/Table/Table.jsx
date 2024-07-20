import React from "react";

const Table = ({headers, children}) => {
    <table>
    <thead>
      <tr>
        {headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
};

export default Table;