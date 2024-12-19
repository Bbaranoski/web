import React, { useEffect, useState } from "react";
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
    const [tela, setTela] = useState<JSX.Element>()
    useEffect(() => {
        setTela(<Consulta item={lista} cadastro={<Cadastro />} trocaTela={setTela} />)
    }, [])
    return(
        <div>{tela}</div>
    )
}

const Cadastro: React.FC = () => {
    return <div></div>
}

export default Cliente