import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import Productos from '../componentes/Productos';
import { Loading } from '../componentes/Loading';
import { NavBar } from '../componentes/navbar';

export type style = 'dark' | 'light'
function App() {
  const [type, setType] = useState<style>('dark')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <NavBar setStyle={setType} />
      {
        loading ? <Loading /> : (
          <>

            <Productos
              background={type === 'dark' ? '#000' : '#fff'}
              color={type === 'dark' ? '#fff' : '#000'}


            />
          </>
        )
      }
    </>
  );
}

export default App;
