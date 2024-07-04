import { useState } from 'react';
import axios from 'axios';
import './CreateUser.css'

    const FormComponent = () => {
        const [formData, setFormData] = useState({
          name: '',
          lastname: '',
          dni: '',
          password: '',
          localidad: ''
        });
      
        const [responseMessage, setResponseMessage] = useState('');
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          const url = 'http://127.0.0.1:8000/api';
      
          try {
            const response = await axios.post(url, formData, {
              headers: {
              'Content-Type': 'application/json',
            }});
            setResponseMessage('Datos enviados exitosamente');
            console.log('Respuesta:', response.data);
          } catch (error) {
            setResponseMessage('Error al enviar los datos');
            console.error('Error:', error);
          }
        };

    return(
        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>lastname:</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>dni:</label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>password:</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>localidad:</label>
            <input
              type="text"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    )}


export default FormComponent;