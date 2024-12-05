import React from "react";
import {useGetCategoriesQuery} from "../../store/slices/products.js";
import Loading from "../Atomic/Loading.jsx";
import Error from "../Atomic/Loading.jsx";
import ProductRow from "./ProductRow.jsx";
import CategoryItem from "./CategoryItem.jsx";

export default function CategoryList(){
    const {data,error,isLoading}= useGetCategoriesQuery();
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
               <ul>
                   {data.member.map((category) => (
                      <li>
                          <CategoryItem key={category.id} category={category} />
                      </li>
                   ))}
               </ul>
            )}
        </div>
    );
}
