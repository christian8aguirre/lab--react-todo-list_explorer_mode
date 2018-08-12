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
  
  render() {

    return (
      <div className='taskList' ref={this.currentElement}>
        <div className="taskText">
          <label className="radiocheck-group">
            <input type="checkbox" value="on" />
            <span>{this.props.data.text}</span>
          </label>
        </div>
        <div className="taskX" onClick={this.removeCurrentElement}>
          <i className="fa fa-remove fa-2x"></i>
        </div>
      </div>
      )
  }
}

export default TasksList