import React from 'react';

const TableBodyFunction = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

export default TableBodyFunction;

// Componente simples em react, que pode ser reutilizado em outros componentes.
// Até então, os dados estavam hard-coded no componente, retiramos para aprender a trabalhar com props.

// para utilizar o props, passamos ele por parâmetro e fizemos uma map com a array para retornar
// uma table row com duas td. Esse map vai ficar contido em uma variável chamada rows.

// OBS: É importante usar keys quando criarmos listas no react, já que ajuda a identificar cada item dela.
// Props são um bom modo de passar dados existentes para um componente, porém, o componente não pode mudar o props,
// eles são read-only.

/*
	É aqui que o index que definimos em removeCharacter aparece, no componente tableBodyFunction, iremos passar a key como
	parametro para essa função, visando filtrar qual character queremos remover.
*/