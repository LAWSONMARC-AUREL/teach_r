import React from "react";
import { useGetProductsQuery } from "../store/slices/products.js";
import ProductRow from "./ProductRow";
import Loading from "./Loading.jsx";
import Error from "./Loading.jsx";

export default function TableProduct() {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Category</th>
                <th>NOM</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              {data.member.map((product) => (
                <ProductRow key={product.id} data={product} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
