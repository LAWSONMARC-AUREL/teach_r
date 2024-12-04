import React from "react";
import Loading from "../Atomic/Loading.jsx";
import Error from "../Atomic/Loading.jsx";

export default function ProductDetail({data,error,isLoading}){
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
                <dl>
                    <dt className="font-bold text-lg">Nom du produit</dt>
                    <dd className="ml-4 text-gray-600">{data.nom}</dd>

                    <dt className="font-bold text-lg">Description</dt>
                    <dd className="ml-4 text-gray-600">{data.description}</dd>

                    <dt className="font-bold text-lg">Category</dt>
                    <dd className="ml-4 text-gray-600">{data.category.name}</dd>

                    <dt className="font-bold text-lg">Prix</dt>
                    <dd className="ml-4 text-gray-600">{data.prix} €</dd>

                    <dt className="font-bold text-lg">Date de creation</dt>
                    <dd className="ml-4 text-gray-600">{data.dateCr}</dd>

                </dl>
            )}
        </div>
   );

}
