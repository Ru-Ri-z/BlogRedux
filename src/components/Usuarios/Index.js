import React, { Component } from 'react'
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import * as UsuariosActions from '../../actions/UsuariosActions';

class Usuarios extends Component {
 

  componentDidMount() {
  
  this.props.traerTodos();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal mensaje={ this.props.error } />;
    }
    
    return (
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

    )
  }

  ponerFilas = () => (
    this.props.usuarios.map((usuario) => (
      <tr key={ usuario.id }>
        <td>
          { usuario.name }
        </td>
        <td>
          { usuario.email }
        </td>
        <td>
          { usuario.website }
        </td>
      </tr>
    ))
      );

  render() {
    return (
      <div>
        { this.ponerContenido() }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.UsuariosReducers;
};

export default connect(mapStateToProps, UsuariosActions) (Usuarios);