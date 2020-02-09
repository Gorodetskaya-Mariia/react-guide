import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setIngredient] = useState([]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-a15ed.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setIngredient(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }
      ]);
    })
  };

  return (
    <div className="App">
      <IngredientForm addIngredientHandler={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={()=> {}}/>
      </section>
    </div>
  );
}

export default Ingredients;
