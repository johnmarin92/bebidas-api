import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

//Provider donde se encuentra las funciones del state

const CategoriasProvider= (props) => {
 
    // crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
           const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

           const categorias = await axios.get(url)

           guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, []);

  return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}
export default  CategoriasProvider;

