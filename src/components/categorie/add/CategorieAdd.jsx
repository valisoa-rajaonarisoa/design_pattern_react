import React, { useState } from 'react'
import * as categorieApi from "../../../api/categorie/Categorie"
export const CategorieAdd = () => {
// **************************state 
const [nom, setNom] = useState('');

// *********comportement 
const handleSubmit= async(event)=>{
  event.preventDefault();

  if(nom)
  {

    try{
      await categorieApi.addCategorie({nom});

      setNom("");
    }catch(error){
      console.log("une errr", error)
    }
  }
}
  return (
    <div style={{padding: "10px ", width:"50%", border:" solid 2px black"}}>
        Ajouté votre categorie 

        <form action="" onSubmit={(event) => handleSubmit(event)}>
            <input 
            
              type="text" 
              name="" 
              id="" 
              placeholder='le nom'

              onChange={(event) => setNom(event.target.value)}

              value={nom}
            />
            <button type='submit'>+</button>
        </form>
    </div>
  )
}
