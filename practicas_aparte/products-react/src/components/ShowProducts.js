import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../funtions';

const ShowProducts = () => {
  const url = 'http://api-products.run';
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getProducs();
  }, []);

  const getProducs = async() => {
    const respuesta = await axios.get(url);
    setProducts(respuesta.data);
  }

  return (
    <div className='App'>
      <div className='container-fluid'>
      <div className='row mt-3'>
          <div className='col-md-4 offset-4'>
            <div className='d-grid mx-auto'>
              <button className='btn btn-dark' data-bs-toogle='modal' data-bs-targe='#modalProducts'>
                <i className='fa-solid fa-cicle-plus'></i> Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='modal fade'>
        
      </div>
    </div>
  )
}

export default ShowProducts