import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'


export default function Formulario() {
    const [fristName, setNombre] = useState('')
    const [lastName, setApellido] = useState('')
    const [age, setAge] = useState('')

    const registrar = async(e)=>{
        e.preventDefault()
        const newPlayer = {fristName,lastName,age}
        const respuesta=await Axios.post('http://localhost:3000/player',newPlayer)
        console.log(respuesta)
        //const mensaje= respuesta.request.statusText
        //console.log(mensaje)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div className='container col-md-3 mt-4'>
            <form onSubmit={registrar}>
                <div className="mb-3">
                    <input type="texto" className="form-control" required placeholder='Nombre' onChange={e=>setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="texto" className="form-control" required placeholder='Apellido' onChange={e=>setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" required placeholder='años' onChange={e=>setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

        </div>
    )
}
