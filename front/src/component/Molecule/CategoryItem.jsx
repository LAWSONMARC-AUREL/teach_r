import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDeleteCategoryMutation, useUpdateCategoryMutation} from "../../store/slices/products.js";

export default function CategoryItem({category}){
    const [editMode,setEditMode] = useState(false);
    const [updateCategory, { isUpdateLoadind }] = useUpdateCategoryMutation();
    const [updatedCategory, setUpdatedCategory] = useState(category);
    const [deleteCategory, { isDeleteLoading }] = useDeleteCategoryMutation();

    const handleEditMode = () => {
        setEditMode(true);
    }

    // useEffect(() => {
    //     console.log(updatedCategory);
    // }, [updatedCategory]);
    const handleUpdateCategory = async () => {
        try {
            await updateCategory({ id: category.id, nom: updatedCategory.nom }).unwrap();
            setEditMode(false);
        } catch (error) {
            console.error("Failed to update category: ", error);
        }
    };

    const handleInputChange = (e) => {
        setUpdatedCategory({...updatedCategory,nom:e.target.value});
        // console.log(e.target.value);
    };

    const categoryName = (
        editMode ?
            <>
                <label className="input input-bordered flex items-center gap-2">
                    Nom
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={updatedCategory.nom}
                        onChange={handleInputChange}
                    />
                </label>
            </>

        :
         <Link to={`category/${category.id}/product`}>{category.nom}</Link>
    );

    return(
        <div className="join">
            <div>
                {categoryName}
            </div>
            {editMode ? (
                <>
                    <button
                        className="btn btn-outline btn-success join-item"
                        onClick={handleUpdateCategory}
                        disabled={isUpdateLoadind}
                    >
                        {isUpdateLoadind? "En cours..." : "Enregistrer"}
                    </button>
                    <button
                        className="btn btn-outline btn-secondary join-item"
                        onClick={() => setEditMode(false)}
                    >
                        Annuler
                    </button>
                </>
            ) : (
                <button className="btn btn-outline btn-warning join-item" onClick={handleEditMode} aria-label="Edit">
                    Modifier
                </button>
            )}            <button className="btn btn-outline btn-error join-item"  onClick={()=>{deleteCategory(category.id)}} disabled={isDeleteLoading} >Supprimer</button>
        </div>
    )



}
