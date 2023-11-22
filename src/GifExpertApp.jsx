import { useState } from 'react';
import { AddCategory, GifGrid } from './components/index';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball' ]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    setCategories( [newCategory, ...categories ])
  }


  return (
    <>
      
      <h1>GifExpertApp</h1>

       <AddCategory
          onNewCategory={ value => onAddCategory(value) } 
       />

      { 
        categories.map( category => ( 
          <GifGrid 
            key={ category}
            category={category} />
        ))
      }




    </>
  )
}
