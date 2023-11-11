import React from 'react'
import { useParams } from 'react-router-dom'
import events from './events.json'
import Header from './Header';
import Footer from './Footer';

function EventDetail() {
  const {id}=useParams();
  const e =events.filter(p=>p.id.toString()===id);
  console.log(e);
  return (
    <div>
      <Header></Header>

      <h2 className='text-center'>{e[0].name}</h2>
      <p className='text-center'>{e[0].date}</p>
      <p>{e[0].detail}</p>

      <Footer></Footer>
    </div>
  )
}

export default EventDetail
