import React from 'react'
import { Questions } from '../constants';

const Card = () => {
  return (
    <section className='container mx-auto'>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {Questions.map((question, index) => (
          <div key={index} className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{question.question}</h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>{question.answer}</p>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Card