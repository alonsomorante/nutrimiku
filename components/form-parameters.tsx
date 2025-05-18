'use client'
import React from 'react'


export default function FormParameters() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    console.log("Datos:", data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full bg-amber-300'>
        <input name="nombre" placeholder="Nombre" />
      </div>
      <input name="email" placeholder="Email" type="email" />
      <div className='flex gap-4'>
        <input
          id="mujer"
          type="radio"
          value="mujer"
          className="hidden peer"
        />
        <label htmlFor="mujer" className='cursor-pointer 
          px-4 py-2 
          rounded 
          justify-center
          items-center
          text-center
          bg-gray-200 
          peer-checked:bg-blue-500 
          peer-checked:text-white flex-1'>
          Mujer
        </label>

        <input
          id="hombre"
          type="radio"
          value="hombre"
          className="hidden peer"
        />
        <label htmlFor="hombre" className='cursor-pointer 
          px-4 py-2 
          rounded 
          justify-center
          items-center
          text-center
          bg-gray-200 
          peer-checked:bg-blue-500 
          peer-checked:text-white flex-1'>
          Hombre
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}
