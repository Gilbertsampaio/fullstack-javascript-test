import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';

const Sobre = () => (
    <>
        <Breadcrumb pag={"Sobre"}/>
        <div className="containerButton">
            <h2>Sobre</h2>
            <p>Essa é minha página Sobre.</p>
        </div>
    </>
);

export default Sobre;