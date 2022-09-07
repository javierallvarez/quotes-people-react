import { useState } from "react";


// As argument, initialForm is an object by default:
export const useForm = ( initialForm = {}) => {


    const [formState, setFormState] = useState( initialForm );
    //const [onResetForm, setOnResetForm ] = useState( initialForm )

    
    // Desectructure event, instead of event.target
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // Desectructure the object ...formState using name='username
        // and name='email' ([name]) as JavaScript's computed properties.
        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    // We export this function as a return, below.
    const onResetForm = () => {
      setFormState( initialForm )
    }


  // We use {} to return an object.
  // ...formState is destrctd so we can access to {username,email,password}
  // in FormWithCustomHook:
  return {
      ...formState,
      formState,
      onInputChange, 
      onResetForm
  }
   
}
