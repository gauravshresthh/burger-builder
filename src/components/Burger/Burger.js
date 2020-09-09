import React from 'react';
import './Burger.scss';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-top" />
    </div>
  );
};

export default Burger;
