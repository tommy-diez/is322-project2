import React from 'react';

class TaskView extends React.Component {

    state = {
        mobile: false,
        col: 0
    }

    componentDidMount = () => {
        if(window.innerWidth < 760) {
            this.setState({
                mobile: window.innerWidth < 760
            })
        }
        window.addEventListener('resize', ()=>{
            this.setState({
                mobile: window.innerWidth < 760
            })
        })
    }

    moveTaskForward = (event) => {
        let newTaskList = this.props.tasks;
        let taskIndex = this.props.tasks.findIndex(task => task.id === parseInt(event.target.id));
        console.log(taskIndex);
        if(this.props.tasks[taskIndex].status !==3) {
            newTaskList[taskIndex].status = this.props.tasks[taskIndex].status + 1
        } else {
            newTaskList[taskIndex].status = this.props.tasks[taskIndex].status
        }
        this.props.updateTaskList(newTaskList)
    }

    moveTaskBackward = (event) => {
        let newTaskList = this.props.tasks;
        let taskIndex = this.props.tasks.findIndex(task => task.id === parseInt(event.target.id));
        if(this.props.tasks[taskIndex].status !==0) {
            newTaskList[taskIndex].status = this.props.tasks[taskIndex].status - 1
        } else {
            newTaskList[taskIndex].status = this.props.tasks[taskIndex].status
        }
        this.props.updateTaskList(newTaskList)
    }

    generateCard = (task, status) => {
        return task.status === status ?
            <div key={task.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <h6>ID: {task.id}</h6>
                    <h6 className="card-text">Type: {task.type}</h6>
                    <button onClick={this.moveTaskForward} id={task.id}>Forward</button>
                    <button onClick={this.moveTaskBackward} id={task.id}>Back</button>
                </div>
            </div> : null
    }

    changeMobileCol = (event) => {
        this.setState({
            col: parseInt(event.target.value)
        })
    }

    render() {
        return(
            this.state.mobile ?
                <div>
                    <h1>Choose a column to view:</h1>
                    <select onChange={this.changeMobileCol}>
                        <option value="0">To Do:</option>
                        <option value="1">In Progress:</option>
                        <option value="2">Review:</option>
                        <option value="3">Done:</option>
                    </select>
                        {this.props.tasks.map(task => this.generateCard(task, this.state.col))}
                </div> :
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <h2>To Do</h2>
                        {this.props.tasks.map(task => this.generateCard(task, 0))}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2>In Progress</h2>
                        {this.props.tasks.map(task => this.generateCard(task, 1))}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2>Review</h2>
                        {this.props.tasks.map(task => this.generateCard(task, 2))}
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h2>Done</h2>
                        {this.props.tasks.map(task => this.generateCard(task, 3))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskView;