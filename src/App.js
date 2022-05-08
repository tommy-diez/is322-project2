import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            errorMessage: ''
        }
    }

    getData = () => {
        axios({
            method: 'get',
            url:'http://my-json-server.typicode.com/tommy-diez/JSONDB/tasks',
        }).then((response) => {
            this.setState({tasks: response.data});
            console.log(response.data);
        }).catch((error) => {
            this.setState({errorMessage: error.message})
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>Task List </div>
        )
    }

}

export default App;

