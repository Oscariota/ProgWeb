import Formulario from './alumnos/Formulario/Fomulario.jsx'

const Alumnos
 =() =>{
    const alumn =[{
        id: 1,
        Nombre: "Jorge",
        Apellido: "Nitales",
        Carrera: "Chistemas"
    },{
        id: 2,
        Nombre: "Rosa",
        Apellido: "Melano",
        Carrera: "Comunicaciones"
    }
    ]
    
    return(<> 
        <h1> Lista de Alumnos</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Carrera</th>
                </tr>
            </thead>
            <tbody>
                {alumn.map(item=>{
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.Nombre}</td>
                    <td>{item.Apellido}</td>
                    <td>{item.Carrera}</td>
                </tr>
                })}
            </tbody>
        </table>
        <br />
        <button>AGREGAR</button>
        <Formulario></Formulario>
    
    </>
       
    )
}

export default Alumnos