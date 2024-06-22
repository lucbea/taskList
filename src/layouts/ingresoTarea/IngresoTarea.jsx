// import { Form } from 'react'

// IngresoTarea.jsx
import { InputTask } from "../../componentes/InputTask"
import { BoxLay } from "../BoxLay"

export const IngresoTarea = ({tareas, setTareas}) => {
    return(
            <BoxLay>
                <InputTask tareas={tareas} setTareas={setTareas}/>
            </BoxLay>
    )
}