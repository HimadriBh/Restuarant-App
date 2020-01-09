import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    
    function RenderDish({ dish }){
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
    function RenderComments({comments}){
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

export default function DishDetail(props){
if(props.dish){
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
            <div className="col-md-5 m-1">
                <RenderDish dish={props.dish}/>
            </div>
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments={props.comments}/>
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
