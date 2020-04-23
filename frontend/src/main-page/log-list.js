import React, {Component} from 'react';
import Log from '../log'
import AddLogForm from '../log/add-log-form'
import Axios from "axios";

class LogList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logs: [],
            addLog: false
        };

        this.addLogModal = React.createRef();
    }

    componentWillMount() {
        this._fetchLogs();
    }

    _fetchLogs() {
        Axios.get('/api/logs')
            .then((response) => this.setState(response.data))
            .catch()
            .finally();
    }

    _handleAddLog(event) {
        if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault();
            this.addLogModal.current._showModal();
            this.setState({addLog: true});
        }
    }

    render() {
        return(
            <div>
                <AddLogForm ref={this.addLogModal} showModal={false} callback={this._fetchLogs}/>

                <ul id='log-list' onKeyDown={this._handleAddLog.bind(this)}>
                    {this.state.logs.map(
                        (log) =>
                            <Log id = {log.id}
                                 content = {log.content}
                                 date = {log.date}
                            />
                    )}
                </ul>
            </div>
        )
    }
}

export default LogList;