import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const HandleNavigate = (()=>{
    navigate('./calc')
  })

  const h1ref = useRef()
  useGSAP(()=>{
    gsap.from(h1ref.current, {
      x:500,
      delay:1,
      opacity:0,
      scrollTrigger:{
        scrub:2
      }
    })
  })
  return (
    <div className='flex flex-col items-center gap-10 py-10 px-5 '>
      <section className='flex flex-col justify-center items-center gap-10 pt-12'>
      <h1 ref={h1ref} className='text-center text-6xl md:text-[18vw] font-bold '>Calculator</h1>
      <p className='text-center text-2xl md:text-3xl pt-20'>"Fast. Accurate. Effortless calculations—right at your fingertips.</p>
      <button onClick={HandleNavigate} className='bg-red-500 px-5 py-2 rounded shadow-xl text-white hover:bg-red-800 duration-400 hover:scale-108'>Get started</button>
      </section>
      <section className='flex flex-col justify-center items-center gap-5 mt-40 p-5 rounded-xl bg-gray-500'>
        <h1 className='text-3xl font-bold'>About This Web!</h1>
        <p className='text-xl text-center px-5 md:px-30 '>Welcome to CalcPro – your one-stop destination for fast, reliable, and easy-to-use online calculators.

Whether you're solving everyday math problems, converting units, or handling complex scientific equations, CalcPro is built to make your calculations effortless. Our goal is to provide a clean, intuitive interface backed by accurate functionality – helping students, professionals, and curious minds save time and work smarter.</p>
      </section>
      <section className='flex flex-col justify-center items-center gap-5 px-10 md:px-30 p-5 bg-gray-500 rounded-xl'>
        <h1 className='text-2xl font-bold'>About Developer</h1>
        <p className='text-xl text-center'>Hi, I’m Aditya Beura, a passionate web developer and Computer Science student at Siksha 'O' Anusandhan University, currently exploring the world of frontend development, backend logic, and everything in between.

This calculator website is part of my journey to build practical, user-friendly tools using modern technologies like HTML, CSS, JavaScript, and React. My aim is to create fast, responsive, and accessible web apps that simplify everyday tasks.

I’m constantly learning, building, and improving – and this project is just one of many steps toward becoming a skilled Software Developer (SDE).</p>
      </section>
      
    </div>
  )
}

export default Home
