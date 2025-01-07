import React from 'react'
import * as categorieApi from "../../../api/categorie/Categorie"
export const CategorieItem = ({categorie}) => {
 // ****************** S T A T E S **********
  
  // ********************* C O M P O R T E M M E N T *****************
  // ************supprimer 
  const deleteCategorie = async(id) => {

    try{
      const deleteArticle= await categorieApi.deleteCategorie(id);
      
    }catch(error)
    {
      console.log("une erreur ", error)
    }

  }
  
  // ************************ R E N D E R ************

  return (
    <div style={{width:"200px" ,padding:"3% 2%", background:"red", display:"flex", flexWrap:"wrap", marginLeft:"2%"}}>
    
      <h5>Nom: {categorie.nom}</h5>

      <button style={{width:"30px"}} onClick={()=> deleteCategorie(categorie.id)}> x </button>
    </div>
  )
}
