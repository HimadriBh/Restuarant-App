import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
const RenderCard = ({item}) => {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardTitle>{item.designation}</CardTitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

export default function Home({ dish, promotion, leader}) {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader}/>
                </div>
            </div>
        </div>
    )
}
