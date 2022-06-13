import React from 'react';

import "./sobre.scss";

const Sobre = () => (
    <>
        <div className="containerButton box">
            <div className="form-group">


                <label className='labelFirst'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Onde:
                </label>
                <select className="first">
                    <option>São Paulo</option>
                </select>
                <label className='labelFirstEnd'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.3,2.3l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z" /></svg>
                </label>

                <label className='labelSecound'>Raio:</label>
                <select className="secound">
                    <option>100km</option>
                </select>

                <label>Marca:</label>
                <select className="label" >
                    <option>Todas</option>
                </select>

                <label>Modelo:</label>
                <select className="label" >
                    <option>Todos</option>
                </select>

                <select>
                    <option>Ano Desejado</option>
                </select>

                <select>
                    <option>Faixa de Preço</option>
                </select>

                <label>Versão:</label>
                <select className="full label">
                    <option>Todas</option>
                </select>

            </div>
            <div className='divBot'>
                <div>
                    <a>Busca Avançada</a>
                </div>
                <div>
                    <a>Limpar Filtros</a>
                </div>
                <button>VER OFERTAS</button>
            </div>

        </div>
    </>
);

export default Sobre;