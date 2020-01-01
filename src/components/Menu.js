import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay, CardText } from 'reactstrap';
import DishDetail from './DishDetailComponent';
export default class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish){
        this.setState({ selectedDish: dish })
    }

    render() {
        let menu;
        if(this.state.selectedDish){
            menu = <DishDetail dish={this.state.selectedDish} />;
        }
        else{
             menu = this.props.dishes.map(dish => {
                return(
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                )
            });
        }
        
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}
