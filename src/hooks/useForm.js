import { useState } from "react"

// cH reusable for the param.
// also there are lib' with cH for working with form e.g.
// https://react-hook-form.com
export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    return {
        formState,
        setFormState,
        handleInputChange,
    }


}