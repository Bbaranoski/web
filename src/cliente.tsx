import React, { useEffect, useState } from "react";
import Consulta from "./consulta";
import { useContext } from "react";
import { StyleContext } from "./App";
import { Box, Color, Tabs, VStack, HStack, Fieldset, Field, Input } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { IoIosAirplane } from "react-icons/io";
//interface de pessoa
interface pessoa {
    id: number,
    nome: string,
    cnpj: string
}

const Cliente: React.FC = () => {
    const style = useContext(StyleContext) as { 
            cor: string,
            corTexto: string,
            redondo: string,
            font: string,
            titulo: string,
            corBorda: string }
    //lista de pessoas
    const lista: pessoa[] = [{id: 1, nome: 'buh', cnpj: '04.430.502/0001-03'}]
    //função de troca de tela
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
    const style = useContext(StyleContext) as { 
            cor: string,
            corTexto: string,
            redondo: string,
            font: string,
            titulo: string,
            corBorda: string }
    return (
        <Tabs.Root defaultValue='infoPrincipal'>
            <Tabs.List >
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
                <VStack width={'100%'}
                borderColor={style.corBorda}
                borderWidth={'1px'}
                borderRadius={style.redondo}
                >
                    <Fieldset.Root>
                        <HStack width={'100%'}
                        >
                            <Field.Root>
                                <Field.Label>Nome</Field.Label>
                                <Input placeholder="Nome" />
                            </Field.Root>
                            
                        </HStack>
                    </Fieldset.Root>
                </VStack>
            </Tabs.Content>
            <Tabs.Content value="infoAdicional">
                <p>lol</p>
            </Tabs.Content>
        </Tabs.Root>
    )
}
export default Cliente