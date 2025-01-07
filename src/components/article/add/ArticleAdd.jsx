import React, { useEffect, useState } from 'react'
// ************************1 appel de l'API COMME ON FAIT AVEC NODEJS 
import * as categorieApi from "../../../api/categorie/Categorie"

import * as articleApi from "../../../api/article/ArticleApi"

export const ArticleAdd = () => {
// ********************state 
const [title, setTitle] = useState('');

const [prix, setPrix] = useState(0);

const [categorie, setCategorie] = useState("");

const [allCategorie,setAllCategoire ]= useState([]);

// **************comportement 
const handleSubmit= async(event)=> {
  event.preventDefault();

  if(title && prix && categorie)
  {
   
    // **************************2 APPEL DE L'API COMME NODEJS 
    try{
      await articleApi.addArticle({title,prix,categorie});

      setTitle("");
      setPrix(0);
      setCategorie("");
      
    }catch(error){
      console.log("une err", error)
    }
  }
}

// **********get categorie=' ' 
const getCategorie = async() => {
  try{
        // ********appel de l'api 
         const fetchCategorie= await categorieApi.fetchCategorie();
 
         // ******mise a jour des datas 
         setAllCategoire(fetchCategorie.data)
 
     }catch(err){
        console.log("une error lors de la fetch des Categories", err)
     }
 }
 
 useEffect(()=>{
  getCategorie();
 },[])


 if(allCategorie.length==0){
  return <h3> chargement des categorie ......</h3>
 }
// *****************render 
  return (
    <div style={{padding: "10px ", width:"50%", border:" solid 2px black"}}>
        Ajouté votre article

        <form action="" onSubmit={(event)=> handleSubmit(event)}>
            <input 
              type="text" 
              name="" 
              id="" 

              placeholder='le titre'

              value={title}

              onChange={(event)=>setTitle(event.target.value)}
            />

            <input 
              type="number" 
              name="" 
              id="" 
              placeholder='prix'

              value={prix}

              onChange={(event)=>setPrix(event.target.value)}
            />

            
              {
                allCategorie? (
                  <select
                  onChange={(event)=>setCategorie(event.target.value)}
                  >

                    {
                      allCategorie.map((categorie) => (
                        <option key={categorie.id} value={categorie.id}>{categorie.nom}</option>
                      ))
                    }
                   
                  </select>
                ):(
                  <h3>
                    Aucun categorie 
                  </h3>
                )
              }
            <button type='submit'>+</button>

        </form>
    </div>
  )
}
