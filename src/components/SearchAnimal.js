import React from "react";

export default class create extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nameField : ""
        }
    }

    render(){
        return (
            <div>
                <h1>Search</h1>
                <form onSubmit={this.handleSubmit}>
                <input type = "text" 
                placeholder = "Animal name" 
                value = {this.nameField} 
                onChange ={this.handleChange}/>
                <button className="btn btn-primary">Search Animal</button>
                </form>
            </div>
            
        )
    }
}