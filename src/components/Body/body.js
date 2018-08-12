import React, { Component } from 'react'
import './body.css'
import TasksList from '../TasksList/tasksList.js'
import { tasksDefault } from '../../data/tasksDefault'



class Body extends Component {
  constructor(props){
    super(props);
    this.list = React.createRef();
    this.state = {
      AllObj: this.orderByDate(this.howManyDays(this.spliceItems(tasksDefault)))
    }
  }

  addTask = (e) =>{
    e.preventDefault();
    if (e.target.duedate.value === '') {
      alert("Give a due date, please!!!");
    } else {
      
      this.state.AllObj.push({
        text:e.target.txtbox.value,
        date: e.target.duedate.value,
        critical: e.target.isCritical.checked,
        isRemoved: false
      });
      this.setState({ AllObj: this.orderByDate(this.howManyDays(this.spliceItems(this.state.AllObj)))});
      //===================================================
      //Reinicializando los parámetros del form
      e.target.isCritical.checked = false;
      e.target.duedate.value = ''; 
      e.target.txtbox.value = '';
      }
      e.target.txtbox.focus();
  }

  //===================================================
  //Generando las operaciones para saber cuántos días restan o pasaron
  howManyDays = (otro) => {
    for (let i = 0; i < otro.length; i++) {
      var calendarDate = otro[i].date.split('-');
      calendarDate = new Date(calendarDate[0],calendarDate[1]-1,calendarDate[2])
      var utc = new Date().toLocaleDateString();
      utc = new Date (utc)
      var timeDiff = calendarDate.getTime() - utc.getTime();
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      otro[i].days= diffDays;
    }
    return otro
  }

  //===================================================
  //Función para ordenar los elementos del objeto por fecha
  orderByDate = (objTasksDefault) => {
    var temp ={};
    for (let j = 0; j < objTasksDefault.length; j++) {
      for (let i = 0; i < objTasksDefault.length; i++) {
        if (objTasksDefault[j].date < objTasksDefault[i].date) {
          temp = objTasksDefault[j];
          objTasksDefault[j] = objTasksDefault[i];
          objTasksDefault[i] = temp;
        }
      }
    }
    return objTasksDefault;
  }

  spliceItems = (objTasksDefault) =>{
    var ObjTemp = [];
    for (let i = 0; i < objTasksDefault.length; i++) {
      if (objTasksDefault[i].isRemoved === false){
        ObjTemp.push(objTasksDefault[i]);
      }
    }
    return ObjTemp;
  }
  
  render() {
    console.log(this.state.AllObj);
    
    return (
      <section>
        < form  className='submit' onSubmit={this.addTask}>
          <div className='add'>
            <input className='txtboxAdd' name='txtbox' type='text' />
            <button className='btnAdd'>
              <i className='fa fa-plus'></i>
            </button>
          </div>
          <input className='calendar' name='duedate' type='date' />
          <label className='critical-group'>
            <input name='isCritical' type='checkbox' value='on' />
            <span>Critical?</span>
          </label>
        </form>
        <hr/>
        { this.state.AllObj.map(function (element) {
        return <TasksList data = {element}/>  
        })
        }
      </section>
    )
  }
}

export default Body