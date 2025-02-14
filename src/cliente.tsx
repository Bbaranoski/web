import React, { useEffect, useState } from "react";
import Consulta from "./consulta";
import { useContext } from "react";
import { StyleContext } from "./App";
import { Box,
        Color,
        Tabs,
        VStack,
        HStack,
        Fieldset,
        Field,
        Input,
        defineStyle } from "@chakra-ui/react";
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

            console.log(style)

    const floatingStyles = defineStyle({
    color: style.corTexto,
    pos: "absolute",
    bg: "bg",
    bgColor: style.cor,
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: style.corBorda,
      bgColor: style.cor,
      top: "2.5",
      insetStart: "3",
    },
    _peerFocusVisible: {
      color: style.corTexto,
      bgColor: style.cor,
      top: "-3",
      insetStart: "2",
    },
    })
    
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
                        padding={'1%'}
                        >
                            <Field.Root>
                                <Box pos="relative" w="full">
                                    <Input className="peer" color= {style.corTexto} placeholder="" focusRingColor={style.corTexto}/>
                                    <Field.Label css={floatingStyles}>Nome</Field.Label>
                                </Box>
                            </Field.Root>
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