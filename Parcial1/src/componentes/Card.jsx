import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card' style={{width: '80%', borderRadius: '20px', display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{fontSize: '30px', color: 'blueLight'}}>Bienvendido {user.nombre} </h1>
        <h2> Que bueno escuchar que te gusta los {user.bandaPreferida}</h2>
        <h2> {user.mejorCnacion}, que buena Cancion!!</h2>
    </div>
  )
}

export default Card