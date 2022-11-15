import React from "react";
import Table from './Table';

async function getPrayer(url){
    let res = await fetch(url)
    let response = await res.json()
    
    return response
}

const object1 = {
    "id": "",
    "name": "",
    "sex": "",
    "weight": 0,
    "age": 0,
    "height": 0,
    "arrivalDate": "",
    "fatherID": "",
    "motherID": ""
  };

const getHeadings = () => {
    return Object.keys(object1);
  }

export default class create extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            data: []
        }
    }

    handleChange = e=> {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = async e=>{
        e.preventDefault();
        let newR = await getPrayer("http://localhost:8080/zooregisters/"+this.state.name)    
        const {message} = newR
        if (message) alert(message)
        else this.setState({
            data: newR
        })
    }

    render(){
        return (
            <div>
                <h1>Search</h1>
                <form onSubmit={this.handleSubmit}>
                <input type = "text" required
                placeholder = "Animal name" 
                value = {this.name} 
                onChange ={this.handleChange}/>
                <button className="btn btn-primary">Search Animal</button>
                </form>
                <br></br>
                <Table theadData={getHeadings()} tbodyData={this.state.data}/>
            </div>
            
        )
    }
}