import React, {Component} from 'react';
import TableClass from './TableClass';
import TableFunction from './TableFunction';

class App extends Component {

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    /*
        Como iremos manipular state, criamos o metódo removeCharacter, que retorna uma
        nova array, a partir do metódo filter, e utilizamos this.setState para alterar o state.
        Filter cria uma nova array invés de mudar a já existente, este o melhor metódo para
        modificar arrays em javascript. O metódo está testando um index vs. todos os index da array,
        e retorna todos menos um que for passado.
    */

    state = {
        characters: [
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
        ],
    };

    render() {

        // Criamos uma const que contem arrays com objetos, como se fosse um jSON uma API
        // Visando aprender como utilizar os props do React.
        return (
		    <div className="container">
		        <TableClass />
		        <TableFunction 
                    removeCharacter={this.removeCharacter} 
                    characterData={this.state.characters} 
                /> 
		    </div>
        );
    }
}

// Passamos characters para o componente filho TableFunction, e podemos chamar essa propriedade
// que demos para TableFunction de qualquer nome, então nomeamos de characterData.

// Agora temos que passar essa função para o componente, e renderizar um botão perto de cada
// character que possa invocar a função. Então passamos a função remove.character por pros.

export default App;

/*
Até agora, guardamos os dados de um character em uma array e então guardamos numa variável, depois
passamos por props para o componente e fizemos um map para mostrá-lo na tela. Isso é bom, mas imagine
se tivessemos que deletar um item da array, por exemplo, não poderiamos utilizar props.

Podemos pensar em state como qualquer dado que deve ser salvo e modificado sem necessariamente ser
adicionado ao banco de dados. Por exemplo, adicionar e remover itens de um carrinho de compras,
antes de confirmar a compra em si.
*/