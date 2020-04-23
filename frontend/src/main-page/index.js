import React, {Component} from 'react';
import Header from '../header'
import LogList from './log-list'

class Legacy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const now = new Date().toLocaleDateString();
        return (
            <div>
                <div id="left_pannel">
                    <ul>
                        <li>recent item1</li>
                        <li>recent item2</li>
                        <li>recent item3</li>
                    </ul>
                </div>
                <div id="body">
                    <header>Date: <a href="#">date->calendrier</a></header>
                    <Header date={ now } />

                    <ul>
                        <li>item1</li>
                        <li>item2
                            <ul>
                                <li>item 7</li>
                                <li>item 8</li>
                                <li>item 9</li>
                            </ul>
                        </li>
                        <li>item3</li>
                        <li>item4</li>
                        <li>item5</li>
                        <li>item6</li>
                    </ul>
                    <LogList />
                </div>
            </div>
        )
    };
}

export default Legacy;
