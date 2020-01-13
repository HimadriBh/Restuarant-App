import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import {  Button, Modal, ModalHeader, ModalBody, Form, Label, Col, Row } from 'reactstrap';

const required = (val) => val;
const minVal = (val) => val && val > 0;
const maxVal = (val) => val && val <= 5;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val &&  (val.length >= len);


export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleSubmit(values){
        console.log(values);
    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil" outline> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="p-2">
                        <Row className="form-group ">
                            <Label htmlFor="rating" md={12}><h6>Rating</h6></Label>
                            <Col md={12}>
                                <Control.text model=".rating" id="rating" name="rating"
                                    placeholder="Rating" className="form-control"
                                    validators={{
                                        required, minVal, maxVal
                                    }}
                                />
                                <Errors 
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minVal: 'Must be greater than 0',
                                        maxVal: 'Rating must be 5 or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="yourname"md={12}><h6>Your Name</h6></Label>
                            <Col md={12}>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                    placeholder="Your Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 5 characters',
                                        maxLength: 'Name must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}><h6>Comment</h6></Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment" rows={5}
                                    placeholder="Comment" className="form-control"
                                    validators={{
                                        required, minLength: minLength(10), maxLength: maxLength(200)
                                    }}
                                />
                                <Errors 
                                    className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 10 characters',
                                        maxLength: 'Name must be 200 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
