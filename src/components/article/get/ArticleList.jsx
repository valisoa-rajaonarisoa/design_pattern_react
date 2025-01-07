import React, { useEffect } from 'react'
import * as articleApi from "../../../api/article/ArticleApi"
import { ArticleItem } from './ArticleItem'
import { useState } from 'react'



export const ArticleList = () => {
// ****************** S T A T E S **********
const [articles, setArticles] = useState([]);


// ********************* C O M P O R T E M M E N T *****************

// ************prendre tout les articles 
const getArticle = async() => {

    try{
        // ********appel de l'api 
        const fetchArticles= await articleApi.fetchArticles();

        // ******mise a jour des datas 
        setArticles(fetchArticles.data)

    }catch(err){
        console.log("une error lors de la fetch des articles ", err)
    }
}

useEffect(()=>{
    getArticle();
},[])

if(articles.length == 0){
    return <h2>  chargement des articles </h2>
}

// ************************ R E N D E R ************
  return (
    <div>

        Liste des Articles 

        <div style={{display:"flex"}}>
            {
                articles.map((article) => (
                <ArticleItem 
                    key={article.id}
                    article={article}
                />
                ))
            }
        </div>
    
    </div>
  )
}
