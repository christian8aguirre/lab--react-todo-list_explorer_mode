import React, { Component } from 'react'
import './body.css'
import TasksList from '../TasksList/tasksList.js'
import { tasksDefault } from '../../data/tasksDefault'



class Body extends Component {
  constructor(props){
    super(props);
    this.list = React.createRef();
    this.state = {
      AllObj:tasksDefault
    }
  }

  addTask = (e) =>{
    e.preventDefault();
    var objTemp = tasksDefault;
    objTemp.push({
      text:e.target.txtbox.value,
      date: e.target.duedate.value
    });
    this.setState({ AllObj: objTemp})
    console.log(e.target.duedate.value);
    e.target.txtbox.value = '';
    e.target.txtbox.focus();

    //===================================================
    //Generando la función para sacar los días
    var calendarDate = e.target.duedate.value.split('-');
    calendarDate = new Date(calendarDate[0],calendarDate[1]-1,calendarDate[2])
    var utc = new Date().toLocaleDateString();
    utc = new Date (utc)
    var timeDiff = calendarDate.getTime() - utc.getTime();
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(diffDays);


  }
  


  render() {

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
            <input type='checkbox' value='on' />
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