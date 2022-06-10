import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';

const Home = () => (
    <>
    <Breadcrumb pag={"Home Principal"}/>
    <div className="containerButton">
        <h2>Home</h2>
        <p>Essa é minha página inicial.</p>
    </div>
    </>
);

export default Home;