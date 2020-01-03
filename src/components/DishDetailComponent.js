import React, { Component, Fragment } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { getMonthName } from '../shared/dishes';
export default class DishDetail extends Component {
    renderDish(dish){
        if(dish != null){
            const { image, name, description } = dish;
            return(
                <Card>
                    <CardImg width="100%" src={image} alt={name} />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }
    renderComments(comments) {
        let dishComments;
        if(comments != null){
            dishComments = comments.map(c=> {
                const options = { year: 'numeric', month: 'short', day: '2-digit'}
                return (
                    <li key={c.id} className="list-unstyled">
                        <p>{c.comment}</p>
                        <p>-- {c.author}, <span>{new Intl.DateTimeFormat('en-US', options).format(new Date(Date.parse(c.date)))}</span></p>
                    </li>
                )
            });
            return dishComments;
        }
        else{
            return (
                <div></div>
            )
        }
    }
    render() {
        const { dish } = this.props;
        if(dish){
            return (
                <div className="container">
                    <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderDish(dish)}
                        {console.log(dish)}
                    </div>
                    <div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
