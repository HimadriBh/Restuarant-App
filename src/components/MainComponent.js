import React, { Component } from 'react';
import Menu from './Menu';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectDish: null
    }
    console.log("Menu component constructor method invoked")

  }
  onDishSelect(dishId){
    this.setState({ selectDish: dishId })   
  }
  
  render(){
    console.log("Menu component render method invoked")

    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
