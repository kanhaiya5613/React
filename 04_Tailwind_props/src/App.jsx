import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'
/* eslint-disable @next/next/no-img-element */
let myObj = {
  username: "kanhaiya",
  age: 21
}
// we can pass object as well as array in the props 
let newArr = [1,2,3]

export default function Card2() {
  return (
    <>
    <h1 className='bg-orange-900 text-white-800'>Tailwind</h1>
    <Card username="Kanhaiya" btnTxt="Visit me"/>
    <Card username="Kumar" btnTxt="See More"/>
    </>
  );
}
