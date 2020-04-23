import React, {Component} from "react";
import Axios from "axios";

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.log = React.createRef();
        this.capture = this.capture.bind(this)
        this.saveTask = this.saveTask.bind((this));
    }

    saveTask(selectedTask) {
        console.log("Save log " + selectedTask.target.id + " with content: " + selectedTask.target.innerText);
        Axios.put('/api/logs', { id: selectedTask.target.id, content: selectedTask.target.innerText, date: this.state.date})
            .then((response) => {
                var data = response.data;
                this.setState( {
                    id: data.id,
                    content: data.content
                });
            })
            .catch()
            .finally();
    }

    _nextTask(selectedTask) {
        var task = selectedTask.nextElementSibling
        if (task) {
            task.focus()
        }
    }

    _previousTask(selectedTask) {
        var task = selectedTask.previousElementSibling
        if (task) {
            task.focus()
        }
    }

    capture(event) {
        if (event.key === "ArrowUp" && event.shiftKey && event.ctrlKey) {

        } else if (event.key === "ArrowUp" && event.shiftKey) {

        } else if (event.key === "ArrowUp" && event.ctrlKey) {
            console.log("move item up")
        } else if (event.key === "ArrowDown" && event.ctrlKey) {
            console.log("move item down")
        } else if (event.key === "ArrowUp") {
            this._previousTask(event.target)
        } else if (event.key === "ArrowDown") {
            this._nextTask(event.target)
        }
    }

    render() {
        return(
            <li id={this.state.id}
                contentEditable={true}
                onKeyDown={this.capture}
                onBlur={this.saveTask}
                date={this.state.date}
            >
                {this.state.content}
            </li>
        )
    }
}

export default Log;