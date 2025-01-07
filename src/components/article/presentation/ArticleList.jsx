import React from 'react'

export const ArticleItem = ({article,deleteArticle}) => {
 // ************************ R E N D E R ************
  return (
    <div style={{width:"200px" ,padding:"3% 2%", background:"red", display:"flex", flexWrap:"wrap", marginLeft:"2%"}}>
    
      <h5>Titre: {article.title}</h5>
      <h5>Prix: {article.prix}</h5> 
      <h5>Categorie: {article.categorie}</h5>

      <button 

        style={{width:"30px"}}

        onClick={()=>deleteArticle(article.id)}

      > x </button>
    </div>
  )
}