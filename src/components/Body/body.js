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
      text:e.target.txtbox.value //Este es el truco
    });

    this.setState({ AllObj: objTemp}) //Te falta esto
    e.target.txtbox.value = '';
    e.target.txtbox.focus();
  }

  render() {
    return (
      <section>

        < form className='submit' onSubmit={this.addTask}>
          <input name='txtbox' type='text' />
            <button>
              <i className='fa fa-plus'></i>
            </button>
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