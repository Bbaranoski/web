import React from "react";
import Consulta from "./consulta";
import { useContext } from "react";
import { StyleContext } from "./App";

interface pessoa {
    id: number,
    nome: string,
    cnpj: string
}

const Cliente: React.FC = () => {
    const style = useContext(StyleContext)
    const lista: pessoa[] = [{id: 1, nome: 'buh', cnpj: '04.430.502/0001-03'}]
    return(
        <Consulta item={lista}/>
    )
}

const Cadastro: React.FC = () => {
    return <div></div>
}

export default Cliente