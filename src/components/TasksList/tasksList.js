import React, { Component } from 'react'
import './tasksList.css'

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.currentElement = React.createRef();
    this.removeCurrentElement = this.removeCurrentElement.bind(this);
  }

  removeCurrentElement() {
    this.currentElement.current.remove();
  }

  //===================================================
  // Generando el String de la Fecha del Calendario
  timeConvert = (time) =>{
    var calendarDate = time.split('-');
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    console.log(calendarDate[2]);
    var dayordinal = parseInt(calendarDate[2].split('').slice(-1).join(),10);
    console.log(dayordinal);
    
    var dayCalendar = parseInt(calendarDate[2],10);
    var monthCalender = months[parseInt(calendarDate[1],10)-1];
    console.log(monthCalender);
    var yearCalendar = calendarDate[0];
    var ordinal = '';
    if (dayordinal === 1){
      ordinal = 'st';
    } else if (dayordinal === 2){
      ordinal = 'nd';
    }else if (dayordinal === 3){
      ordinal = 'rd';
    } else {
      ordinal = 'th';
    }


    return `${monthCalender} ${dayCalendar}${ordinal}, ${yearCalendar}`
  }
  
  render() {

    return (
      <div className='taskList' ref={this.currentElement}>
        <div className='taskText'>
          <label className='radiocheck-group'>
            <input type='checkbox' value='on' />
            <span className='taskText'>{this.props.data.text}</span>
          </label>
          <span className='date'>{this.timeConvert(this.props.data.date)}</span>
        </div>
        <div className='taskX' onClick={this.removeCurrentElement}>
          <i className='fa fa-remove fa-2x'></i>
        </div>


      </div>
      )
  }
}

export default TasksList