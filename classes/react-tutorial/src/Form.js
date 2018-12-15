import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            [name] : value
        });
    }

    // O metódo handleChange é chamado sempre que o input for mudado,
    // mudando o estado de name para o valor digitado

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    // Função submitForm, que chama a função handleSubmit e passa pra ela o state
    // atual, ou seja, o novo character, e então mudamos o state para initialState
    // visando limpar o formulário.

    render() {
        const { name, job } = this.state; 
    
        return (
            <form>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}/>
                 <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;

// Aqui utilizamos o constructor, algo que não tinhamos feito até agora,
// para inicializar o estado deste componente.

// Criamos também uma função que será chamada sempre que uma mudança for feita
// no input, handleChange.