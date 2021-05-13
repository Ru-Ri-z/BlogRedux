import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'Rodolfo',
          correo: 'Rodolfo@saldivar.com',
          enlace: 'Rodolfo.com'
        },
        {
          nombre: 'Platzi',
          correo: 'platzi@platzi.com',
          enlace: 'Platzi.com'
        }
      ]
    }
  }

  componentDidMount() {
    console.log('hola');
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuarios) => (
      <tr>
        <td>
          { usuarios.nombre }
        </td>
        <td>
          { usuarios.correo }
        </td>
        <td>
          { usuarios.enlace }
        </td>
      </tr>
    ))
      );

  render() {
    return (
      <div className="margen">
        <table className="tabla">
        <thread>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thread>
        <tbody>
        { this.ponerFilas() }
  </tbody>
  </table>
      </div>
    );
  }
}

export default App