import { useState } from "react"

export const AddCategory = ( {onNewCategory }) => {
    const [inputValue, setInputValue] = useState('One Punch')

    const oninputChange = ({ target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1)  return;
        // setCategories( categories => [inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit}>

        <input
           type="text"
           placeholder="Bucar Gifs"s
           value={ inputValue }
           onChange={ oninputChange}
        />
    </form>
  )
}
