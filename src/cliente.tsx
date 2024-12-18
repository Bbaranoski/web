import React from "react";
import Consulta from "./consulta";
import { useContext } from "react";
import { StyleContext } from "./App";


const Cliente: React.FC = () => {
    const style = useContext(StyleContext)
    return(
        <Consulta />
    )
}

export default Cliente