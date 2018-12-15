import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>;
        });

        return <ul>{result}</ul>;
    }
}

export default App;

// Não precisamos falar de todo o código, pois já sabemos algumas coisas aqui.
// o componentDidMount faz parte do ciclo de vida do react. Com ele, faremos que
// os dados da api só sejam obtidos após o componente ter sido renderizado na DOM.