import React, {Component} from 'react';
import TableClass from './TableClass';
import TableFunction from './TableFunction';

class App extends Component {
    render() {
    	const characters = [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];
        // Criamos uma const que contem arrays com objetos, como se fosse um jSON uma API
        // Visando aprender como utilizar os props do React.
        return (
		    <div className="container">
		        <TableClass />
		        <TableFunction characterData={characters} /> 
		    </div>
        );
    }
}
// Passamos characters para o componente filho TableFunction, e podemos chamar essa propriedade
// que demos para TableFunction de qualquer nome, então nomeamos de characterData.

export default App;