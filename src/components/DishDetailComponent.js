import React, { Component, Fragment } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const { image, name, description, comments } = this.props.dish;
        const dishComments = comments.map(c=> {
            if(c != null){
                const date = c.date.substring(0,10);
                return (
                    <div key={c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author}, <span>{date}</span></p>
                    </div>
                )
            }
            else{
                return(
                    <div></div>
                )
            }
        });
        return (
            <Fragment>
                <div className="col-md-5 mt-2">
                    <Card>
                        <CardTitle >{name}</CardTitle>
                        <CardImg width="100%" src={image} alt={name} />
                        <CardBody>
                            <CardTitle>{name}</CardTitle>
                            <CardText>{description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5 mt-2">
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            </Fragment>
        )
    }
}
