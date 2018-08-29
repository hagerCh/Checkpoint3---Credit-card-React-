import React, {Component} from 'react'
class Card extends Component{

    render(){
        return(
        <div className="card">
            <h1 className="companyName">{this.props.comp}</h1>
            <h2 className="number">{this.props.num}</h2>
            <h3 className="date">{this.props.date}</h3>
            <h2 className="name">{this.props.name}</h2>
        </div>
        )
    }
} 

export default Card;