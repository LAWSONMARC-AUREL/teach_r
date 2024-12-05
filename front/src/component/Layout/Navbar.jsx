import React from "react";
import { Link } from "react-router-dom";
import {useGetCategoriesQuery} from "../../store/slices/products.js";
import Loading from "../Atomic/Loading.jsx";

export default function Navbar(){
    const {data,error,isLoading}= useGetCategoriesQuery();
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to="/">Teach'r</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"categories"}>Categories </Link></li>
                    {isLoading ? (
                        <li>
                            <Loading/>
                        </li>
                    ) : error ? (
                        <li>
                            <span className="text-red-500">Erreur de chargement des catégories</span>
                        </li>
                    ) : (
                        <>
                            <li><Link to='categories'></Link></li>
                            <li>
                                <details>
                                    <summary>Produit</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        {data.member.map((category) => (
                                            <li key={category.id}>
                                                <Link to={`category/${category.id}/product`}>{category.nom}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}
