import React, { Component } from 'react';
import logo from './logo.svg';
//import hosting from '../img/hosting-server.png';
import './App.css';
import { Row, Col, Grid, Modal, Button } from 'react-bootstrap';
class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

       

        
        <Grid>
          <Row className="show-grid modernHosting" >
            <Col smHidden mdHidden lgHidden xs={12} className="Mobile">      
             <img src={'../img/hosting-server.png'} alt="server" />
             <div className='helloText'>
                  выделенные серверы
                </div>
                <div className='helloSpan'>
                  надёжность, производительность, sla
                </div>
            </Col>  
            <Col xsHidden md={12} className="Pc" >              
            <Row>
              <Col md={4}>
              <img src={'../img/hosting-server.png'} alt="server" />
              </Col>
              <Col md={8}>
                <div className='helloText'>
                  выделенные серверы
                </div>
                <div className='helloSpan'>
                  надёжность, производительность, sla
                </div>
              </Col>
            </Row>
            
            
                  
            
            </Col> 
          </Row>
          <Row className="show-grid containerOfPlans">
            <Col xs={12} sm={6} md={3} className="wpPlan">
              <p className="title">Wordpress</p>
              <div className="wpDecription">
                <p className="price">
                  from <span>1</span> $ per month  
                </p>
                <ul className="decription">
                  <li className="li">От 5 Гб на диске</li>
                  <li className="li">Неограниченный трафик</li>
                  <li className="li">Бесплатный домен</li>
                </ul>
              </div>
              <button id="orderWp" className="orderWp">Order hosting for wordpress</button>
            </Col>
            <Col xs={12} sm={6} md={3} className="standartPlan">
              <p className="title">Standart</p>
              <div className="decription">
                <p className="price">
                  from <span>4</span> $ per month  
                </p>
                <ul className="ul">
                  <li className="li">От 5 Гб на диске</li>
                  <li className="li">Неограниченный трафик</li>
                  <li className="li">Бесплатный домен</li>
                </ul>
              </div>
              <button id="orderWp" className="orderWp">Order hosting for wordpress</button>
            </Col>
            <Col xs={12} sm={6} md={3} className="ecommercePlan">
              <p className="title">Ecommerce</p>
              <div className="decription">
                <p className="price">
                  from <span>55</span> $ per month  
                </p>
                <ul className="ul">
                  <li className="li">От 5 Гб на диске</li>
                  <li className="li">Неограниченный трафик</li>
                  <li className="li">Бесплатный домен</li>
                </ul>
              </div>
              <button id="orderWp" className="orderWp">Order hosting for wordpress</button>
            </Col>
            <Col xs={12} sm={6} md={3} className="masterPlan">
              <p className="title">Master</p>
              <div className="decription">
                <p className="price">
                  <span>60</span> $ per month  
                </p>
                <ul className="ul">
                  <li className="li">От 5 Гб на диске</li>
                  <li className="li">Неограниченный трафик</li>
                  <li className="li">Бесплатный домен</li>
                </ul>
              </div>
              <button id="orderWp" className="orderWp">Order hosting for wordpress</button>
            </Col>           
          </Row>
          
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              новости картинка
            </Col>
            <Col md={6} mdPull={6}>
              еще картинка
            </Col>
          </Row>
        

        
          <Row className=" subscribeForm">
            <Col xs={6} xsOffset={3}>

            <div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Получить подарок
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Ваши данные
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form action="https://app.getresponse.com/add_subscriber.html"   method="post">
          
            firstname: <input type="text" name="first_name"/><br/>
          
            Ваш email: <input type="text" name="email"/><br/>
            Тел.: <input name="custom_phone" type="text" value="" /><br/>
          
          
            <input type="hidden" name="campaign_token" value="nxKJ8" />
          
            <input type="submit" value="Подписаться"/>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
            
              <p className="title">Подписаться и получить домен в подарок !</p>
            </Col>
          </Row> 
          </Grid>;        
      </div>
    );
  }
}

export default App;
