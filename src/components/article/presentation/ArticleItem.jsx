import React from 'react'
import { ArticleItem } from './ArticleList'

export const ArticleList = ({articles, deleteArticle}) => {
// *****************************
if(!articles)
{
    return <h2>****** Chargement  des articles *******</h2>
}

//   ************************ON PASSE A ARTICLE ITEM 
  return (
    <div>

        Liste des Articles 

        <div style={{display:"flex"}}>
            {
                articles.map((article) => (
                <ArticleItem 
                    key={article.id}
                    article={article}
                    deleteArticle={deleteArticle}
                />
                ))
            }
        </div>
    
    </div>
  )
}