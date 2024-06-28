import React from 'react';
import yourImage from '../assets/your-image.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import './MainContent.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContent = () => {
  return (
    <main>
      <section id="home" className="section home-section">
        <Carousel className="carousel" interval={5000}> {/* Muda as imagens a cada 5 segundos */}
          <Carousel.Item>
            <img className="d-block carousel-image" src={image1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-image" src={image2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-image" src={image3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <h1>Importância da Preservação Ambiental</h1>
        <p>
          A preservação do meio ambiente é essencial para garantir a qualidade de vida das futuras gerações. 
          Devemos nos conscientizar sobre o impacto de nossas ações no planeta e adotar práticas sustentáveis.
        </p>
        <p>
          A poluição, o desmatamento e a mudança climática são alguns dos desafios mais críticos que enfrentamos. 
          Cada um de nós pode contribuir para a proteção do meio ambiente através de pequenas ações diárias, 
          como a reciclagem, a redução do consumo de plástico e o uso consciente dos recursos naturais.
        </p>
        <p>
          É responsabilidade de todos nós cuidar do planeta e garantir que ele permaneça habitável e saudável 
          para as próximas gerações.
        </p>
      </section>
      <section id="about" className="section about-section">
        <h2>Sobre Nós</h2>
        <p>
          Nós somos uma organização dedicada à preservação ambiental. Nossa missão é educar e inspirar pessoas a adotarem práticas sustentáveis para proteger o planeta. Desde nossa fundação, temos trabalhado incansavelmente para aumentar a conscientização sobre questões ambientais e promover ações que contribuem para um futuro mais verde.
        </p>
        <p>
          Acreditamos que a mudança começa com a educação. Por isso, oferecemos programas educacionais, workshops e eventos comunitários para informar e envolver pessoas de todas as idades. Nossa equipe é composta por especialistas apaixonados pelo meio ambiente e comprometidos em fazer a diferença.
        </p>
        <p>
          Ao unir forças com outras organizações, empresas e indivíduos, estamos construindo uma rede de defensores do meio ambiente que trabalham juntos para promover a sustentabilidade e proteger os recursos naturais para as gerações futuras.
        </p>
      </section>
      <section id="services" className="section services-section">
        <h2>Serviços</h2>
        <p>
          Oferecemos uma variedade de serviços para ajudar empresas e indivíduos a adotarem práticas mais sustentáveis e reduzir seu impacto ambiental. Nossos serviços incluem:
        </p>
        <ul>
          <li><strong>Consultoria Ambiental:</strong> Nossos especialistas fornecem consultoria personalizada para ajudar sua empresa a implementar práticas sustentáveis e cumprir com as regulamentações ambientais.</li>
          <li><strong>Programas de Reciclagem:</strong> Desenvolvemos e gerenciamos programas de reciclagem para comunidades e empresas, facilitando a redução de resíduos e promovendo a reutilização de materiais.</li>
          <li><strong>Educação e Workshops:</strong> Oferecemos workshops e programas educacionais para escolas, comunidades e empresas, abordando temas como reciclagem, conservação de água e energia, e muito mais.</li>
          <li><strong>Auditorias Ambientais:</strong> Realizamos auditorias ambientais detalhadas para avaliar o impacto ambiental de sua empresa e identificar oportunidades para melhorias.</li>
          <li><strong>Projetos de Conservação:</strong> Trabalhamos em colaboração com organizações locais e internacionais para desenvolver e implementar projetos de conservação que protejam ecossistemas e espécies ameaçadas.</li>
        </ul>
        <p>
          Entre em contato conosco para saber mais sobre como nossos serviços podem ajudar você ou sua empresa a contribuir para um futuro mais sustentável.
        </p>
      </section>
      <section id="contact" className="section contact-section">
        <h2>Contato</h2>
        <p>
          Entre em contato conosco para saber mais sobre como você pode ajudar a proteger o meio ambiente.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">Nome:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Sobrenome:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </section>
      <section className="images-section">
        <h2>Imagens Relacionadas ao Meio Ambiente</h2>
        <div className="images-container">
          <img src={image1} alt="Environmental Image 1" className="flex-image" />
          <img src={image2} alt="Environmental Image 2" className="flex-image" />
          <img src={image3} alt="Environmental Image 3" className="flex-image" />
          <img src={image4} alt="Environmental Image 4" className="flex-image" />
        </div>
      </section>
      <section className="additional-content">
        <h2>Ações para Preservar o Meio Ambiente</h2>
        <p>
          Existem várias ações que podemos adotar para ajudar a preservar o meio ambiente. Aqui estão algumas delas:
        </p>
        <ul>
          <li><strong>Reduzir, Reutilizar, Reciclar:</strong> A prática dos 3Rs ajuda a diminuir a quantidade de lixo que produzimos.</li>
          <li><strong>Economizar Água:</strong> Usar a água de forma consciente e evitar desperdícios é crucial.</li>
          <li><strong>Conservar Energia:</strong> Desligar aparelhos eletrônicos quando não estiverem em uso e optar por fontes de energia renováveis.</li>
          <li><strong>Utilizar Transportes Sustentáveis:</strong> Optar por caminhar, andar de bicicleta ou usar transporte público em vez de carros particulares.</li>
          <li><strong>Plantar Árvores:</strong> As árvores ajudam a melhorar a qualidade do ar e a regular o clima.</li>
        </ul>
        <p>
          Ao adotar essas práticas, estamos contribuindo para um futuro mais sustentável e saudável para todos.
        </p>
      </section>
    </main>
  );
};

export default MainContent;
