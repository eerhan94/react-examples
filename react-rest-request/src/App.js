import React, {Component} from 'react';
import Data from './components/data';

class App extends Component {
    render() {
        return (
            <Data data={this.state.data} />
        )
    }

    state = {
      data: []
    };

    componentDidMount() {
        fetch('http://127.0.0.1:9091/test')
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data.data })
            })
            .catch(console.log)
    }
}

export default App;