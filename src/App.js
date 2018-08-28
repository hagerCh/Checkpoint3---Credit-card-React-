import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '****',
      companyName: '****',
      number: '.... .... .... ....',
      date: 'mm/yy'
    }
  }
  changeNumber = (num) => {
    this.setState((prevState) => {
      return {
        number: num
      }
    })
  }
  changeName = (nom) => {
    this.setState((prevState) => {
      return {
        name: nom
      }
    })
  }
  changeCompany = (comp) => {
    this.setState((prevState) => {
      return {
        companyName: comp
      }
    })
  }
  changeDate = (date) => {
    this.setState((prevState) => {
      return {
        date: date
      }
    })
  }
  render() {
    return (
      <div className="App" className="row">
        <Card className="col-md-6"
          name={this.state.name}
          comp={this.state.companyName}
          date={this.state.date}
          num={this.state.number}
        />
        <Form className="col-md-6"
          changeName={this.changeName}
          changeNumber={this.changeNumber}
          changeCompany={this.changeCompany}
          changeDate={this.changeDate}
          />
      </div>
    );
  }
}
export default App;
