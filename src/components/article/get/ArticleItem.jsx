import React from 'react'
import * as articleApi from "../../../api/article/ArticleApi"

export const ArticleItem = ({article}) => {
  // ****************** S T A T E S **********
  
  // ********************* C O M P O R T E M M E N T *****************
  // ************supprimer 
  const deleteArticle = async(id) => {

    try{
      const deleteArticle= await articleApi.deleteArticle(id);
      
    }catch(error)
    {
      console.log("une erreur ", error)
    }

  }
  
  // ************************ R E N D E R ************
  return (
    <div style={{width:"200px" ,padding:"3% 2%", background:"red", display:"flex", flexWrap:"wrap", marginLeft:"2%"}}>
    
      <h5>Titre: {article.title}</h5>
      <h5>Prix: {article.prix}</h5> 
      <h5>Categorie: {article.categorie}</h5>

      <button 
        style={{width:"30px"}}

        onClick={()=> deleteArticle(article.id)}
      > x </button>
    </div>
  )
}
