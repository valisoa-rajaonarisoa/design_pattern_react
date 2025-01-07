import React, { useEffect, useState } from 'react'
import { CategorieItem } from './CategorieItem'
import * as categorieApi from "../../../api/categorie/Categorie"

export const CategorieList = () => {
// ************************state 
const [categorie, setCategorie] = useState([])

// ***********comportement 
const getCategorie = async() =>{
    try{

        const fetchCatgorie= await categorieApi.fetchCategorie();

        setCategorie(fetchCatgorie.data);

    }catch(error){
        console.log( "une err ", error)
    }
}
useEffect(()=>{
    getCategorie();
})
// *************render 
  return (
    <div>
   
           Liste des Articles 
   
           <div style={{display:"flex"}}>
               {
                   categorie.map((categorie) => (
                   <CategorieItem
                       key={categorie.id}
                       categorie={categorie}
                   />
                   ))
               }
           </div>
       
       </div>
  )
}
