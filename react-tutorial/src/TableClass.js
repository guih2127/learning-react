import React, {Component} from 'react';

class TableClass extends Component {
    render() {
        return (
            <div>
            <h3>Table</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                        </tr>
                    </thead>

                <tbody>
                        <tr>
                            <td>Charlie</td>
                            <td>Janitor</td>
                        </tr>
                        <tr>
                            <td>Mac</td>
                            <td>Bouncer</td>
                        </tr>
                        <tr>
                            <td>Dee</td>
                            <td>Aspiring actress</td>
                        </tr>
                        <tr>
                            <td>Dennis</td>
                            <td>Bartender</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableClass;

// Componente Class, que é carregado no nosso App.js