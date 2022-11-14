import React from "react";
import getPrayer from "../util/APIResponses";
import Table from './Table';

export default class create extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    getHeadings = () => {
        if(!this.state.data){
            return Object.keys(this.state.data[0]);
        }
    }

    getData = async ()=>{
        let res = await getPrayer("http://localhost:8081/animals")
        console.log(res)
        
        this.setState({
            data: res
        })
    
    }

    render(){
        this.getData()
        return (
            <div className="container">
              <Table theadData={this.getHeadings()} tbodyData={this.state.data}/>
            </div>
          );
    }
}