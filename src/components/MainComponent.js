import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './Menu';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments:   COMMENTS
    }

  }

  render(){
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter(dish => dish.featured === true)[0]}
        promotion={this.state.promotions.filter(promo => promo.featured === true)[0]}
        leader={this.state.leaders.filter(leader => leader.featured === true)[0]}
        />
      )
    }
    const DishWithId = ({ match }) => {
      return(
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Route eacat path="/menu/:dishId" component={DishWithId}/>
          <Route exact path='/contactus' component={Contact} />} />
          <Route path='/aboutus' component={() => <About leaders={this.state.leaders}/>} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
