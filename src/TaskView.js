import React from 'react';

class TaskView extends React.Component {

    state = {
        mobile: false,
        col: 'todo'
    }

    componentDidMount = () => {
        window.addEventListener('resize', ()=>{
            this.setState({
                mobile: window.innerWidth < 760
            })
        })
    }

    generateCard = (task, col) => {
        return task.column === col ?
            <div key={task.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <h6>ID: {task.id}</h6>
                    <h6 className="card-text">Type: {task.type}</h6>
                </div>
            </div> : null
    }

    changeMobileCol = (event) => {
        this.setState({
            col: event.target.value
        })
    }

    render() {
        return(
            this.state.mobile ?
                <div>
                    <h1>Choose a column to view:</h1>
                    <select onChange={this.changeMobileCol}>
                        <option value="todo">To Do:</option>
                        <option value="in-progress">In Progress:</option>
                        <option value="review">Review:</option>
                        <option value="done">Done:</option>
                    </select>
                        {this.props.tasks.map(task => this.generateCard(task, this.state.col))}
                </div> :
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <h2>To Do</h2>
                        {this.props.tasks.map(task => this.generateCard(task, "todo"))}
                    </div>
                    <div className="col-3">
                        <h2>In Progress</h2>
                        {this.props.tasks.map(task => this.generateCard(task, "in-progress"))}
                    </div>
                    <div className="col-3">
                        <h2>Review</h2>
                        {this.props.tasks.map(task => this.generateCard(task, "review"))}
                    </div>
                    <div className="col-3">
                        <h2>Done</h2>
                        {this.props.tasks.map(task => this.generateCard(task, "done"))}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskView;