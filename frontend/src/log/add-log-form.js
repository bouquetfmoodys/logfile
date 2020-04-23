import React, {Component} from 'react';
import "./add-log-form.css"
import Axios from "axios";

class AddLogForm extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.style = {
            display: 'none'
        };
    }

    _showModal() {
        this.setState({showModal: true})
        this.style = {
            display: 'block'
        };
    }

    _hideModal() {
        this.style = {
            display: 'none'
        };
        this.setState({showModal: false})
    }

    _saveLog(logValue) {
        Axios.post('/api/logs', logValue)
            .catch()
            .finally();
        console.log("TODO: Save log: "+ logValue);
    }

    _handleKeyDown(event) {
        if (event.key === "Enter" && event.shiftKey) {
            this._saveLog(event.target.innerText);
            this.input.current.innerText="";
            this._hideModal();
        }
        if (event.key === "Escape") {
            this._hideModal();
        }
    }

    componentDidMount() {
        this.setState({ showModal: this.props.showModal });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.showModal) {
            this.input.current.focus();
        }
    }

    render() {
        return (
            <div id="myModal" className="modal" style={this.style}>
                <div className="modal-content">
                    <h1>Add log<span className="close" onClick={this._hideModal.bind(this)}>&times;</span></h1>
                    <p contentEditable={true} ref={this.input} onKeyDown={this._handleKeyDown.bind(this)} />
                </div>
            </div>
        )
    }
}

export default AddLogForm;