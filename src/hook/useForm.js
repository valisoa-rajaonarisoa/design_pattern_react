import { useState } from "react"

export const useForm =(initialValues)=>{
    
// *****************state 
const [values,setValues]= useState(initialValues);

// ********************logique *********
const handleChange = (e) => {
    // ***********destruction de e.target pour recupere le name html et target 
    const {name,value} = e.target

    // **********mise a jours ( ici on copie la values actuelle et on associe le value a son name comme email: text@com)
    setValues({...values, [name]: value})

}


// ******************** reset ************
const reset =()=>{
    // *******nettoyage 
    setValues(initialValues);
}


// **********************return 
return {values, handleChange, reset}
}
