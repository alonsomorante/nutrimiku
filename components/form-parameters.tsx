'use client'
import React from 'react'


export default function FormParameters() {

  const handleSubmit = (formData: FormData) => {

    const query = formData.get("nombre")
    const email = formData.get("email")

  }

  return (
    <form action={handleSubmit}>
      <div className='w-full bg-[var(--soft-green)] p-2 rounded-md'>
        <p className='text-[var(--dark-green)] font-bold text-center text-md'>Parámetros corporales</p>
      </div>
      <div className='flex justify-between'>
        <div className='bg-[var(--soft-gray)] px-4 py-2 rounded-lg flex-1'>
          <p className='text-[var(--dark-green)] text-center'>Hombre</p>
          <input type='checkbox' className='hidden' />
        </div>
        <div className='bg-[var(--soft-gray)] px-4 py-2 rounded-lg flex-1'>
          <p className='text-[var(--dark-green)] text-center'>Mujer</p>
        </div>
      </div>
      <div className='w-full bg-amber-300'>
        <input name="nombre" placeholder="Nombre" />
      </div>
      <input name="email" placeholder="Email" type="email" />


      <button type="submit">Enviar</button>
    </form>
  )
}
