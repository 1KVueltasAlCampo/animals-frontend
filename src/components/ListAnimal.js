import React from "react";
import Table from './Table';

async function getPrayer(url){
    let res = await fetch(url)
    let response = await res.json()
    
    return response
}

const object1 = {
    "id": "1e70f8e8-b847-4d79-9fc5-0594a2a2ede7",
    "name": "Jose",
    "sex": "M",
    "weight": 23.0,
    "age": 3,
    "height": 98.0,
    "arrivalDate": "2022-09-24 05:07:24",
    "fatherID": "1eb46ded-6101-3694-9f49-598db6bff142",
    "motherID": "59bf924c-0a30-354f-ae4a-ec7f9122eeb1"
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