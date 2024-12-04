import React from "react";
import {useGetProductQuery} from "../../store/slices/products.js";
import ProductDetail from "../Molecule/ProductDetail.jsx";
import {useParams} from "react-router-dom";

export default function ProductDetailPage(){
    const {id}  = useParams();
    console.log(id);
    const {data,error,isLoading} = useGetProductQuery(id);
    console.log(data);
    return(
        <>
            <title>Detail Produit</title>
            <h1>Information sur le produit</h1>
            <ProductDetail data={data} error={error} isLoading={isLoading}/>
        </>
    );
}
