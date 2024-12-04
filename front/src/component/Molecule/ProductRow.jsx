import React from "react";

export default function ProductRow({ data }) {
  return (
    <tr>
      <td>{data.category.nom}</td>
      <td>{data.nom}</td>
      <td>{data.prix}</td>
    </tr>
  );
}
