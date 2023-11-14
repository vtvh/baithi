import React from 'react'
import { useParams } from 'react-router-dom'
import events from './events.json'
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function EventDetail() {
  const {id}=useParams();
  const e =events.filter(p=>p.id.toString()===id);
  console.log(e);
  return (
    <div>
      <Header></Header>

      <img className='p-3 d-block mx-auto w-50' src={e[0].pic} alt="events" />
      <h2 className='text-center'>{e[0].name}</h2>
      <p className='text-center'>{e[0].date}</p>
      <Container>
      <p>{e[0].detail}</p>
      </Container>

      <Footer></Footer>
    </div>
  )
}

export default EventDetail
