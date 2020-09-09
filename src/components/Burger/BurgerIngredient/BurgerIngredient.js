import React from 'react'
import PropTypes from 'prop-types'

const BurgerIngredient = (this.props.) => {
    let ingredient=null;

switch(props.type){
    case ('bread-bottom'):
        ingredient=<div className='BreadBottom'></div>;
    break;

    case('bread-top'):
    ingredient=(<div className="BreadTop">
        <div className="Seed1"></div> 
        <div className="Seed2"></div>
    </div>
    );
    break;

    case('meat'):
    ingredient=<div className="Meat"></div>
    break;

    case('cheese'):
    ingredient=<div className="Cheese"></div>
    break;

    case('bacon'):
    ingredient=<div className="Bacon"></div>
    break;

    case('salad'):
    ingredient=<div className="Salad"></div>
    break;

    default:
        ingredient=null;
  
}
return ingredient;

}

BurgerIngredient.PropTypes={
    type : PropTypes.string.isRequired

}


export default BurgerIngredient