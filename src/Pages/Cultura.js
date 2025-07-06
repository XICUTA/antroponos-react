import React from 'react';

const Cultura = () => (
  <section className="cultural-sites">
    <div className="site-card">
      <img src="/assets/salto-tequendama.png" alt="Salto de Tequendama" />
      <div className="site-info">
        <h4>Salto de Tequendama</h4>
        <p>El Salto de Tequendama es una cascada natural de Colombia ubicada en Soacha.</p>
        <button>Reservar</button>
      </div>
    </div>
    <div className="site-card">
      <img src="/assets/museo-soacha.png" alt="Museo Arqueológico Soacha" />
      <div className="site-info">
        <h4>Museo Arqueológico Soacha</h4>
        <p>Un espacio dedicado a la prehistoria y el patrimonio cultural de la región.</p>
        <button>Reservar</button>
      </div>
    </div>
    <div className="site-card">
      <img src="/assets/catedral-sal.jpg" alt="Catedral de Sal" />
      <div className="site-info">
        <h4>Catedral de Sal</h4>
        <p>La Catedral de Sal es un recinto construido en el interior de las minas de Zipaquirá.</p>
        <button>Reservar</button>
      </div>
    </div>
  </section>
);

export default Cultura;
