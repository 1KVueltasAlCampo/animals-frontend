import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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
            arrivalDate: new Date(),
            fatherid:"",
            motherid:""
        }
        this.handlearrivalDateChange = this.handlearrivalDateChange.bind(this);
    }

    handleSubmit = async e=>{
        e.preventDefault();
        let newR = await postPrayer("http://localhost:8080/zooregisters",this.createNewJson())    
        const {message,name} = newR
        if (message) alert(message)
        else alert("Created new animal "+name)
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
            arrivalDate: this.toJSONLocal(this.state.arrivalDate)+" 00:00:00",
            fatherid: this.state.fatherid,
            motherid: this.state.motherid
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
            case "fatherid": this.setState({
                fatherid: e.target.value
            });
            break;
            case "motherid": this.setState({
                motherid: e.target.value
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
                <form onSubmit={this.handleSubmit}>
                <b>Name:   </b>
                <input name="name" type = "text" required
                placeholder = "Animal name" 
                value = {this.name} 
                onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b>Sex: </b>
                <label>
                    <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <b>Age: </b>
                <input name="age" type = "number" required
                 placeholder = "8" 
                value = {this.age} 
                onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b>Weight:   </b>
                <input name="weight" type = "number" required
                placeholder = "60" 
                value = {this.weight} 
                onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b>Height:   </b>
                <input name="height" type = "number" required
                placeholder = "30" 
                value = {this.height} 
                onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b>Arrival Date:   </b>
                <DatePicker
                    name="arrivalDate"
                    selected={ this.state.arrivalDate }
                    onChange={ this.handlearrivalDateChange }
                    dateFormat="yyyy-MM-dd"
                />
                <br></br>
                <br></br>
                <b>Father id:   </b>
                <input name="fatherid" type = "text"
                placeholder = "1eb46ded-6101-3694-9f49-598db6bff142" 
                value = {this.fatherid} 
                onChange ={this.handleChange}/>
                <br></br>
                <br></br>
                <b>Mother id:   </b>
                <input name="motherid" type = "text"
                placeholder = "59bf924c-0a30-354f-ae4a-ec7f9122eeb1" 
                value = {this.motherid} 
                onChange ={this.handleChange}/>
                <br></br>
                <button className="btn btn-primary">Create Animal</button>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </form>
            </div>
            
        )
    }
}