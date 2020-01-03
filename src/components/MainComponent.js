import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectDish: null
    }
  }
  onDishSelect(dishId){
    this.setState({ selectDish: dishId })   
    }

  render(){
    return (
      <div>
        <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/" >Ristorante Con Fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectDish)[0]} />
      </div>
    );
  }
}

export default Main;