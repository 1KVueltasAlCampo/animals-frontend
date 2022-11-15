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
            data : []
        }
    }

    

    getData = async ()=>{
        let res = await getPrayer("http://localhost:8080/zooregisters")
        console.log(res)
        
        this.setState({
            data: res
        })
    
    }

    render(){
        this.getData()
        return (
            <div className="container">
                <h1>All animals</h1>
              <Table theadData={getHeadings()} tbodyData={this.state.data}/>
            </div>
          );
    }
}