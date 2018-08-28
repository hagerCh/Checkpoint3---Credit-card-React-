import React, { Component } from 'react'
class Form extends Component {
    getNum =(e)=>{
        this.props.changeNumber(e.target.value)
    }
    getName =(e)=>{
        this.props.changeName(e.target.value)
    }
    getComp =(e)=>{
        this.props.changeCompany(e.target.value)
    }
    getDate =(e)=>{
        this.props.changeDate(e.target.value)
    }

    render() {
        return (
            <div className="formulaire">
                <label for="number" className='col-md-3'>Card number:</label>
                <input type="number" name="number"  className='col-md-3' onChange={this.getNum}/>
                <br/>
                <label for="name" className='col-md-3'>Owner:</label>
                <input type="text" name="name" className='col-md-3' onChange={this.getName}/>   
                <br/>             
                <label for="companyName" className='col-md-3'>Company:</label>
                <input type="text" name="companyName" className='col-md-3' onChange={this.getComp}/>
                <br/>
                <label for="date" className='col-md-3'>Expiration date:</label>
                <input type="text" className='col-md-3' name="date" onChange={this.getDate}/>
            </div>
        )
    }
}

export default Form;