import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }

  const amountHandler = (e) => {
    setAmount(e.target.value)
  }

  const submitHandler = event => {
    event.preventDefault();
    props.addIngredientHandler({title: enteredTitle, amount: enteredAmount});
  };
  // const inputHandler = (e) => {
  //   const {value} = e.target;
  //   setInputState
  //   console.log(value)
  // }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={amountHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
