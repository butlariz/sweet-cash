import React, { Component } from 'react';
import Month from './Month.js';
import TotalValue from './TotalValue.js';
import Expenses from './Expenses.js';
import Modal from './Modal.js';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 0,
      showModal: false,
      typeModal: "add",
    }

    this.modalRender = this.modalRender.bind(this);
    this.sendValue = this.sendValue.bind(this);
  }

  modalRender(action) {
    this.setState({showModal: true, typeModal: action})
  }

  sendValue(value, action) {
    let currentBalance = parseInt(this.state.balance);
    let currentValue = parseInt(value);
    let newTotal = 0;

    action === "add" ? newTotal = currentBalance + currentValue : newTotal = currentBalance - currentValue; 

    this.setState({balance: newTotal})
    this.setState({showModal: false})
  }

  render() {
    return (
      <div>
        <Month />
        <TotalValue onPress={this.modalRender}> {this.state.balance} </TotalValue>
        <Expenses onPress={this.modalRender}/>
        { this.state.showModal && 
        <Modal onSend={this.sendValue} typeButton={this.state.typeModal}/>
       }
      </div>
    );
  }
}

export default Main;
