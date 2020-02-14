import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
var randomstring = require("randomstring");

class App extends Component {

   constructor(props){
      
      super(props);
      this.state = {
         tasks: [] // id : unique, name, status
      }
   }

   // componentWillMount(){
   //    if(localStorage && localStorage.setItem('tasks')){
   //       var tasks = JSON.parse(localStorage.getItem('tasks'));
   //       this.setState({
   //          tasks: tasks
   //       })
   //    }
   // }
   componentWillMount(){
      if(localStorage && localStorage.getItem('tasks')){
         this.setState({
              tasks: JSON.parse(localStorage.getItem('tasks'))
         });
      }
   }


   onGenerateData = () => {
      var tasks = [
         {
            id: randomstring.generate(),
            name: 'Học lập trình',
            status: true
         },
         {
            id: randomstring.generate(),
            name: 'Đi bơi',
            status: false
         },
         {
            id: randomstring.generate(),
            name: 'Ngủ',
            status: true
         }
      ];
      this.setState({
         tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   render() {
      var { tasks } = this.state; //var tasks = this.state.task
      return (
         <div className="container">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1><hr />
            </div>
            
            <div className="row">
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* form */}
                  <TaskForm />
               </div>
               <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button type="button" className="btn btn-primary">
                     <span className="fa fa-plus mr-5" /> Thêm Công Việc
                  </button>

                  <button 
                     type="button" 
                     className="btn btn-primary ml-5" 
                     onClick={this.onGenerateData}>
                     Test
                  </button>

                  
                  {/* search-sort */}
                  <Control />

                  {/* list */}
                  <TaskList tasks={tasks} />
                  
               </div>
            </div>
         </div>

      );
   }
}

export default App;



