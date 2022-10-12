import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './cardPrueba.css';

const CardPrueba = () => {
  // Estado que guarda el valor ingresado en el input de busqueda.
  const [query, setQuery] = useState('');
  console.log('Valor de busqueda', query);

  // Estado que guarda los resultados de la busqueda.
  const [busquedas, setBusquedas] = useState([]);
  console.log('Resultado de la busqueda', busquedas);

  // Funcion que captura lo que se escribe en el input y lo setea en el estado query.
  const handleChange = (event) => {
    const { value } = event.target; // desestructurado de const value = event.target.value
    setQuery(value);
  };

  // Funcion que al hacer click en el boton de busqueda, hace el llamado a la api
  // y setea los resultados obtenidos en el estado busquedas para luego
  // acceder a los datos desde ese resultado.
  const searchOnClick = async () => {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=12`,
    );
    // Directamente seteo el estado con el array de los resultados de la busqueda en la api.
    // Recordar que al recargar la pagina se borra el estado.
    setBusquedas(response.data.results);
    // Si queres ver toda la data que trae la respuesta
    console.log('Respuesta del llamado a la api', response);
  };

  return (
    <div>
      <div className="mt-5">
        <h5 className="mb-4">Búsqueda</h5>
        <input type="text" onChange={handleChange} className="search-input" />
        <button onClick={searchOnClick} className="search-button">
          Buscar
        </button>
      </div>
      <div className='search-wrapper'>
        {busquedas.map((busqueda) => (
          <Card style={{ width: '18rem', margin: '2rem 1rem' }} key={busqueda.id}>
            <Card.Img variant="top" src={busqueda.thumbnail} />
            <Card.Body>
              <Card.Title>{busqueda.title}</Card.Title>
              <Card.Text>$ {busqueda.price}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardPrueba;
