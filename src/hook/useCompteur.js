import { useState } from "react";


export const useCompteur = (initialValue = 0) => {

    const [value, setValue] = useState(initialValue);


    // ***************les fonctions de traitement 
    const increment = () => {setValue(value + 1) };

    const decrement = () => setValue(value  - 1);

    const reset = () => setValue(initialValue);



    // **************** retourné 
    return {value,increment,decrement, reset}

}