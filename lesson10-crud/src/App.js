import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
var randomstring = require("randomstring");

class App extends Component {

   constructor(props) {

      super(props);
      this.state = {
         tasks: [], // id : unique, name, status
         isDisplayForm: false,
         taskEditing: null
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
   UNSAFE_componentWillMount() {
      if (localStorage && localStorage.getItem('tasks')) {
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
         tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   onToggleForm = () => {
      if (this.state.isDisplayForm && this.state.taskEditing !== null) {
         this.setState({
            isDisplayForm : true,
            taskEditing: null
         })
      } else {
         this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            taskEditing: null
         })
      }
   }

   onCloseForm = () => {
      this.setState({
         isDisplayForm: false
      })
   }

   onShowForm = () => {
      this.setState({
         isDisplayForm: true
      })
   }

   onSubmit = (data) => {
      var { tasks } = this.state; //tasks = this.state.tasks
      if (data.id === '') {
         data.id = randomstring.generate(); //task
         tasks.push(data);
      } else {
         var index = this.findIndex(data.id);
         tasks[index] = data;
      }
      this.setState({
         tasks: tasks,
         taskEditing: null
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   onUpdateStatus = (id) => {
      var { tasks } = this.state;
      var index = this.findIndex(id);
      console.log(index);
      if (index !== -1) {
         tasks[index].status = !tasks[index].status;
         this.setState({
            tasks: tasks
         })
         localStorage.setItem('tasks', JSON.stringify(tasks))
      }
   }

   findIndex = (id) => {
      var { tasks } = this.state;
      var result = -1;
      tasks.forEach((task, index) => {
         if (task.id === id) {
            result = index;
         }
      });
      return result;
   }

   onDelete = (id) => {
      var { tasks } = this.state;
      var index = this.findIndex(id);
      //console.log(index);
      if (index !== -1) {
         tasks.splice(index, 1);
         this.setState({
            tasks: tasks
         })
         localStorage.setItem('tasks', JSON.stringify(tasks))
      }
      this.onCloseForm();
   }

   onUpdate = (id) => {
      var { tasks } = this.state;
      var index = this.findIndex(id);
      var taskEditing = tasks[index];
      this.setState({
         taskEditing: taskEditing
      })

      this.onShowForm();
   }

   render() {
      var { tasks, isDisplayForm, taskEditing } = this.state;
      var elmTaskForm = isDisplayForm
         ? <TaskForm
            onSubmit={this.onSubmit}
            onCloseForm={this.onCloseForm}
            task={taskEditing}
         />
         : '';
      return (
         <div className="container">
            <div className="text-center">
               <h1>Quản Lý Công Việc</h1><hr />
            </div>

            <div className="row">
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  {/* form */}
                  {elmTaskForm}
               </div>
               <div className={isDisplayForm === false ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={this.onToggleForm}
                  >
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
                  <TaskList
                     tasks={tasks}
                     onUpdateStatus={this.onUpdateStatus}
                     onDelete={this.onDelete}
                     onUpdate={this.onUpdate}
                  />
               </div>
            </div>
         </div>

      );
   }
}

export default App;



