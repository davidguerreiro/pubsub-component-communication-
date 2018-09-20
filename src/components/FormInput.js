import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class FormImput extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
        };
    }

    // get event from parent.
    componentWillMount() {
        this.globalEvent = PubSub.subscribe('GLOBAL_EVENT', (topic, value) => {
            this.setState({
                inputValue: value,
            });
        });
    }

    // remove event
    componentWillUnmount() {
        PubSub.unsubscribe(this.globalEvent);
    }

    render() {
        return(
            <div>
                <input value={this.state.inputValue} onChange={(e) => {this.setState({inputValue: e.target.value})}}/>
            </div>
        );
    }
}

export default FormImput;