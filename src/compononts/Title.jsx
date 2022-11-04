import React from 'react'

export default function Title({name,tilte}) {
  return (
    <div className='row'>
        <div className='col-10 mx-auto my-2 text-center text-title'>
            <h1 className='text-capitalize font-weight-bold'>
                {name} <strong className='text-blue'>{tilte}</strong>
            </h1>
        </div>

    </div>
  )
}
