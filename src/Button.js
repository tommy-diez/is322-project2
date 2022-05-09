import React from 'react';

class Button extends React.Component {

    determineButtons = (status) => {
        switch(status) {
            case(0):
                return <button onClick={this.props.moveTaskForward} id={this.props.task.id}>Send to In Progress</button>;
            case(1):
                return (
                    <div>
                        <button onClick={this.props.moveTaskBackward} id={this.props.task.id}>Send to To Do</button>
                        <button onClick={this.props.moveTaskForward} id={this.props.task.id}>Send to Review</button>
                    </div>
                )
            case(2):
                return (
                    <div>
                        <button onClick={this.props.moveTaskBackward} id={this.props.task.id}>Send to In Progress</button>
                        <button onClick={this.props.moveTaskForward} id={this.props.task.id}>Mark Done</button>
                    </div>
                )
            case(3):
                return <button onClick={this.props.moveTaskBackward} id={this.props.task.id}>Send to In Progress</button>
            }
        }

    render() {
        return(
            this.determineButtons(this.props.task.status)
        )
    }

}

export default Button;