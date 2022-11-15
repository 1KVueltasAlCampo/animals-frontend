import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const style = {marginLeft: 27}

async function postPrayer(url,obj){
    let res = await fetch(url,{
        method : "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body : JSON.stringify(obj)
    })

    let response = await res.json()

    return response
}


export default class create extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            name : "",
            sex: "M",
            age:"",
            height:"",
            weight:"",
            arrivalDate: new Date()
        }
        this.handlearrivalDateChange = this.handlearrivalDateChange.bind(this);
    }

    handleSubmit = async e=>{
        e.preventDefault();
        if(this.state.name!=="" && this.state.age!=="" && this.state.height!=="" && this.state.weight!==""){
            let newR = postPrayer("http://localhost:8080/zooregisters",this.createNewJson())
            alert(newR)
        }
        else{
            alert("Fill all spaces")
        }
    }

    toJSONLocal(date) {
        var local = new Date(date);
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    }

    createNewJson(){
        return {
            name : this.state.name,
            sex: this.state.sex,
            age:this.state.age,
            height:this.state.height,
            weight:this.state.weight,
            arrivalDate: this.toJSONLocal(this.state.arrivalDate)+" 00:00:00"
        }
    }

    handleChange = e=> {
        switch (e.target.name){
            case "name": this.setState({
                name: e.target.value
            });
            break;
            case "sex": this.setState({
                sex: e.target.value,
            });
            break;
            case "age": this.setState({
                age: e.target.value
            });
            break;
            case "height": this.setState({
                height: e.target.value
            });
            break;
            case "weight": this.setState({
                weight: e.target.value
            });
            break;
            default:
            break;
        }
    }

    handlearrivalDateChange(arrivalDate) {
        this.setState({
          arrivalDate: arrivalDate
        })
      }


    render(){
        return (
            <div>
                <h1>Create</h1>
                <form style={style} onSubmit={this.handleSubmit}>
                <b>Name:   </b>
                <input name="name" type = "text" 
                placeholder = "Animal name" 
                value = {this.name} 
                onChange ={this.handleChange}/>
                <br></br>
                <b>Sex: </b>
                <label style={style} >
                    <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    </select>
                </label>
                <br></br>
                <b>Age: </b>
                <input name="age" type = "text" 
                 placeholder = "8" 
                value = {this.age} 
                onChange ={this.handleChange}/>
                <br></br>
                <b>Weight:   </b>
                <input name="weight" type = "text" 
                placeholder = "60" 
                value = {this.weight} 
                onChange ={this.handleChange}/>
                <br></br>
                <b>Height:   </b>
                <input name="height" type = "text" 
                placeholder = "30" 
                value = {this.height} 
                onChange ={this.handleChange}/>
                <br></br>
                <b>Arrival Date:   </b>
                <DatePicker
                    name="arrivalDate"
                    selected={ this.state.arrivalDate }
                    onChange={ this.handlearrivalDateChange }
                    dateFormat="yyyy-MM-dd hh:mm:ss"
                />
                <br></br>
                <button className="btn btn-primary">Create Animal</button>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </form>
            </div>
            
        )
    }
}