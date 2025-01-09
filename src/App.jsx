import React from 'react'
import { useForm } from './hook/useForm'


export default function App() {
  // ************1 recuperation champs 
  const initialValues = { name: "", email: "", password: "" };

  // *********************4 traitement 
  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(values);
  };

  // ***************2 appel de useForm avec la valeur d'initialisation 
  const { values, handleChange} = useForm(initialValues);


  // ************** 3 recuperer les valeurs dans les champs  
  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
      <div>
        <label>Nom :</label>
        <input
          type="text"

          // ***********name = nom 
          name="name"

          // ******** values.name objt 
          value={values.name}

          // ***********onchage 
          onChange={handleChange}
        />
      
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"

          // ***********meme chose 
          name="email"

          value={values.email}

          onChange={handleChange}
        />
        
      </div>

      <div>
        <label>Mot de passe :</label>
        <input
          type="password"

          // ***********meme chose 
          name="password"
          value={values.password}
          onChange={handleChange}
        />

      </div>

      <button type="submit">S'inscrire</button>

    </form>
  );
}
