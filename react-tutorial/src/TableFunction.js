import React, {Component} from 'react';
import TableBodyFunction from './TableBodyFunction';
import TableHeaderFunction from './TableHeaderFunction'

class TableFunction extends Component {
    render() {
		const { characterData, removeCharacter } = this.props
		// Obtemos o props passado para o componente no App.js

        return (
	        	<div>
		        	<h3>Table - Props</h3>
		            <table>
		                <TableHeaderFunction />
		                <TableBodyFunction 
			                removeCharacter={removeCharacter} 
			                characterData={characterData} 
		                />
		            </table>
	          </div>
        );
    }
}

// Então, passamos o props para o componente filho, TableBodyFunction.

export default TableFunction;