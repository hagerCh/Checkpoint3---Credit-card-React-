import React, { Component } from 'react'; 
import Card from './Card'
import Form from './Form' 
import { connect } from 'react-redux';
import '../index.css'; 

class Main extends Component { 
  changeNumber = (num) => {
    this.props.dispatch({ type: 'NUMBER', num:num });
  }
  changeName = (nom) => {
    this.props.dispatch({ type: 'NAME', nom:nom });
  }
  changeCompany = (comp) => {
    this.props.dispatch({ type: 'COMPANY', comp:comp});
  }
  changeDate = (date) => {
    this.props.dispatch({ type: 'DATE', date:date });
  }
  render() {
    return (
      <div className="App row">
        <Card className="col-md-6"
          name={this.props.name}
          comp={this.props.companyName}
          date={this.props.date}
          num={this.props.number}
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
function mapStateToProps(state) {
  return {
    name: state.name,
    companyName: state.companyName,
    number: state.number,
    date: state.date
  };
}

export default connect(mapStateToProps)(Main);
