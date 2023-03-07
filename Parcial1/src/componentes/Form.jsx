import React, { useState } from 'react'

import Card from "./Card"

const Form = () => {
    const [user, setUser] = useState({
        nombre: "",
        bandaPreferida: "",
        mejorCnacion: ""
    })

    const[show, setShow] = useState(false)
    const[error, setError] = useState(false)

    const manejador = (e) => {
        e.preventDefault();
        if(user.nombre.length > 3 && user.bandaPreferida.length > 6){
            setShow(true)
        }
        else {
            setError(true);
            setShow(false)
        }

    }

return (
    <div className='general' style={{alignItems: 'center'}}>
        <h1></h1>
        <form onSubmit={manejador} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <label >Nombre</label>
            <input type="text" value={user.nombre} onChange={(e)=> setUser({...user, nombre: e.target.value})} />

            <label>Banda preferida </label>
            <input type="text" value={user.bandaPreferida} onChange = {(e) => setUser({...user, bandaPreferida: e.target.value})}/>

            <label>Mejor Canción</label>
            <input type="text" value={user.mejorCnacion} onChange = {(e) => setUser({...user, mejorCnacion: e.target.value})}/>

            <select style={{ margin: '10px'}}>
                <option value="Genero">Genero</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Regge">Regge</option>
            </select>
            <button>Enviar</button>
            {error && "Por favor chequea que la información sea correcta"}
        </form>
       {show && <Card user={user}/>}
      
    </div>
)
}

export default Form