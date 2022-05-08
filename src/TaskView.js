import React from 'react';

class TaskView extends React.Component {

    state = {

    }

    generateCard = (task, col) => {
        return task.column === col ?
            <div key={task.id}>
                <div>
                    <h5>{task.title}</h5>
                    <h6>ID: {task.id}</h6>
                    <h6>Type: {task.type}</h6>
                </div>
            </div> : null
    }

    render() {
        return(
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