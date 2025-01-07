import React, { useEffect, useState } from 'react'

// ***************1 IMPORTER LE ARTICLEAPI 
import * as ArticleApi from "../../../../src/api/article/ArticleApi"
import { ArticleList } from '../presentation/ArticleItem';
export const ArticleContainer = () => {

// **************************** S T A T E 
const [articles, setArticles] = useState([]);

// ***************************** C O M P O R T E M M E N T **************

// ************************** CONTAINER & PRE 1 TRAITEMENT

//  **********Recuperer les articles dans l'api 
const getArticles = async()=>{

    try{
        const fetchArticles = await ArticleApi.fetchArticles();

        console.log(fetchArticles.data)
        setArticles(fetchArticles.data);

    }catch(error){
        console.log( "une error", error)
    }
}

// **************** supprimer 
const deteleArticle = async(id) => {
    try{
        await ArticleApi.deleteArticle(id);

    }catch(error){
        console.log( "une error", error)
    }
}

useEffect(()=>{
    getArticles();
},[])

// ***************** R E N D E R **************
  return (
// ************************** CONTAINER & PRE 2 DONNE AUX PRESENTATION LES DATAS AVEC PROPS
    <div>
        ArticleContainer
        <ArticleList

            // *************** les article 
            articles={articles}

            // **********pour supprimer 
            deleteArticle={deteleArticle}
        />
    </div>
  )
}
