import { ListTask } from "../../componentes/ListTask"
import { BoxLay } from "../BoxLay"

export const ListaTareas = () => {
    return(
        <BoxLay sx={{ maxHeight: '300px', overflowY: 'auto' }}>
        <ListTask />
    </BoxLay>
    )
}