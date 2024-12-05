import React, { useState } from "react";
import { useAddCategoryMutation } from "../../store/slices/products";

export default function FormAddCategory() {
    const [addCategory, { isLoading, isSuccess, isError, error }] =
        useAddCategoryMutation();

    const [formData, setFormData] = useState({ nom: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCategory(formData).unwrap(); // Appelle la mutation
            alert("Catégorie ajoutée avec succès !");
            setFormData({ nom: "" }); // Réinitialiser le formulaire
        } catch (err) {
            console.error("Erreur :", err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Ajouter une catégorie</h2>
            <form
                className="bg-white p-4 rounded shadow flex items-center space-x-4"
                onSubmit={handleSubmit}
            >
                <div className="flex-grow">
                    <label className="sr-only" htmlFor="nom">
                        Nom de la catégorie
                    </label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Entrez le nom de la catégorie"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`btn btn-primary ${isLoading ? "loading" : ""}`}
                    disabled={isLoading}
                >
                    {isLoading ? "Ajout..." : "Ajouter"}
                </button>
            </form>
            {isSuccess && <p className="text-green-500 mt-2">Catégorie ajoutée avec succès !</p>}
            {isError && <p className="text-red-500 mt-2">Erreur :</p>}
        </div>

    );
}
