import React, { useEffect, useState } from 'react';



import { ItemCount } from '../components/ItemCount';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';

export const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState ([]);

  const handleAdd = () => {
    console.log('se agrego al carrito')
  }


  return (
    <>
      <div className='greeting'>{greeting}</div>

      <ItemCount handleAdd={handleAdd} initialStock={10} />
    </>

  )
}
