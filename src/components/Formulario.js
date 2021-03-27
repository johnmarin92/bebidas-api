import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {  CategoriasContext }from '../context/CategoriasContext';  
import {  RecetasContext }from '../context/RecetasContext';  

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] =useState ({
        nombre: '',
        categorias: ''
    })

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

   // funcion para leer los contenidos
   const obtenerDatosReceta = e => {
       guardarBusqueda({
           ...busqueda,
           [e.target.name] :e.target.value
       })
   }
    
   
   return ( 
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                 <div className="col-md-4">
                     <select
                      className="form-control"
                      name="categoria"
                      onChange={obtenerDatosReceta}
                     >
                        <option value="">--Selecciona categoria--</option>
                        {categorias.map(categoria => (
                            <option
                            key={categoria.strCategory}  
                            key={categoria.strCategory}
                        >{categoria.strCategory}</option>

                        ))}
                     </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Busccar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;