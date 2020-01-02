import React, { Component, Fragment } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { getMonthName } from '../shared/dishes';
export default class DishDetail extends Component {
    // eslint-disable-next-line
    constructor(props){
        super(props);

    }
    renderDish(dish){
        const { image, name, description } = dish;
        return(
            <Card>
                <CardTitle >{name}</CardTitle>
                <CardImg width="100%" src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
             </Card>
        )
    }
    renderComments(comments) {
        let dishComments;
        if(comments != null){
            dishComments = comments.map(c=> {
                const day = c.date.substring(8,10);
                //const month = getMonthName(c.date.substring(5,7));
                const month = c.date.substring(5,7);
                const year = c.date.substring(0,4);
                return (
                    <li key={c.id} className="list-unstyled">
                        <p>{c.comment}</p>
                        <p>-- {c.author}, <span>{month}-{day}-{year}</span></p>
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
        return (
            <Fragment>
                <div className="col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </Fragment>
        )
    }
}
