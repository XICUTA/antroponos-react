import React from 'react';

//Esta es la seccion principal de la pagina

const Home = () => (
  <section className="activities">
    <div className="activity-card">
      <img src="/assets/xuaparrilla.jpg" alt="Picada - Xuaparrilla" />
      <div className="activity-info">
        <h3>Picada</h3>
        <p>Xuaparrilla</p>
      </div>
    </div>
    <div className="activity-card">
      <img src="/assets/garulla.jpg" alt="Garulla Fest - Soacha" />
      <div className="activity-info">
        <h3>Garulla Fest</h3>
        <p>Alcaldía Soacha</p>
      </div>
    </div>
    <div className="activity-card">
      <img src="/assets/cine-nocturno.jpg" alt="Cine Nocturno - Sibaté" />
      <div className="activity-info">
        <h3>Cine Nocturno</h3>
        <p>Sibateando</p>
      </div>
    </div>
    <div className="activity-card">
      <img src="/assets/tirolesa.jpg" alt="Tirolesa - Chicaque" />
      <div className="activity-info">
        <h3>Tirolesa</h3>
        <p>Chicaque</p>
      </div>
    </div>
  </section>
);

export default Home;
