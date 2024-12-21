import React, { useEffect, useState } from "react";
import Consulta from "./consulta";
import { useContext } from "react";
import { StyleContext } from "./App";
import { Box, Color, Tabs } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { IoIosAirplane } from "react-icons/io";

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
        <Box height={'100%'}
        width={'100%'}
        padding={'0px 10px'}
        >
            {tela}
        </Box>
    )
}

const Cadastro: React.FC = () => {
    const style = useContext(StyleContext)
    return (
        <Tabs.Root defaultValue='infoPrincipal'
        colorPalette={'cyan'}
        >
            <Tabs.List>
                <Tabs.Trigger value="infoPrincipal"
                color={style.corTexto}
                >
                    <GoPerson/> Dados Principais
                </Tabs.Trigger>
                <Tabs.Trigger value="infoAdicional"
                color={style.corTexto}
                >
                    <IoIosAirplane/>
                    teste
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="infoPrincipal">
                <p>BUH</p>
            </Tabs.Content>
            <Tabs.Content value="infoAdicional">
                <p>lol</p>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default Cliente