import React from 'react'
import { ArticleList } from './components/article/get/ArticleList'
import { ArticleAdd } from './components/article/add/ArticleAdd'
import { CategorieAdd } from './components/categorie/add/CategorieAdd'
import { CategorieList } from './components/categorie/get/CategorieList'

export default function App() {
  return (
    <div style={{marginBottom:"10%"}}>

      {/* *****************pour les articles  */}
      <div >
        <ArticleAdd/>
        <ArticleList/>
      </div>

      <br/>

      {/* *****************pour les categorie  */}
      <div >
        <CategorieAdd/>
        <CategorieList/>
      </div>
    </div>
  )
}
