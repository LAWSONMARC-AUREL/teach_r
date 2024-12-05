import React from "react";
import CategoryList from "../Molecule/CategoryList.jsx";
import FormAddCategory from "../Molecule/FormAddCategory.jsx";

export default function CategoryListPage(){
    return(
        <>
            <title>Liste des catégories</title>
            <h1>Les catégories</h1>
            <FormAddCategory/>
            <CategoryList/>
        </>
    )
}
