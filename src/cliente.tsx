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
        Button,
        defineStyle} from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";
import { IoIosAirplane } from "react-icons/io";
//interface de pessoa
interface pessoa {
    id: number,
    nome: string,
    cnpj: string
}

// interface de cadastro
interface teste {
   trocaTela: React.Dispatch<React.SetStateAction<any>>
}

//lista de pessoas
const lista: pessoa[] = [{id: 1, nome: 'buh', cnpj: '04.430.502/0001-03'}]

const Cliente: React.FC = () => {
    const style = useContext(StyleContext) as { 
            cor: string,
            corTexto: string,
            redondo: string,
            font: string,
            titulo: string,
            corBorda: string }
    //função de troca de tela
    const [tela, setTela] = useState<JSX.Element>()
    useEffect(() => {
        setTela(<Consulta item={lista} cadastro={<Cadastro trocaTela={setTela}/>} trocaTela={setTela} />)
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

const Cadastro: React.FC<teste> = ({trocaTela}) => {
    const style = useContext(StyleContext) as { 
            cor: string,
            corTexto: string,
            redondo: string,
            font: string,
            titulo: string,
            corBorda: string }

    const [cliente, setCliente] = useState<pessoa>({id: 0, nome: '', cnpj: ''})

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
                            <Field.Root orientation={'horizontal'}>
                                <Box pos="relative" w="full">
                                    <Input className="peer"
                                    id="nome"
                                    color= {style.corTexto}
                                    placeholder="" 
                                    focusRingColor={style.corTexto}
                                    value={cliente.nome}
                                    onChange={(e) => {
                                        setCliente({...cliente, nome: e.target.value})
                                    }}
                                    required
                                    />
                                    <Field.Label css={floatingStyles}>Nome</Field.Label>
                                </Box>
                                <Box pos="relative" w="full">
                                    <Input className="peer"
                                    id="cnpj"
                                    color= {style.corTexto}
                                    placeholder="" 
                                    focusRingColor={style.corTexto}
                                    value={cliente.cnpj}
                                    onChange={(e) => {
                                        setCliente({...cliente, cnpj: e.target.value})
                                    }}
                                    required
                                    />
                                    <Field.Label css={floatingStyles}>CPF/CNPJ</Field.Label>
                                </Box>
                            </Field.Root>
                            <Button transition={'0s'}
                            bg={style.cor}
                            
                            color={style.corTexto}
                            borderColor={style.corTexto}
                            onClick={() => {
                                
                                trocaTela(<Consulta item={lista} cadastro={<Cadastro trocaTela={trocaTela}/>} trocaTela={trocaTela} />)     
                            }}
                            >Voltar</Button>
                            <Button type="submit"
                            transition={'0s'}
                            bg={style.cor}
                            _hover={{bg: '#a3e635'}}
                            color={style.corTexto}
                            borderColor={style.corTexto}
                            onClick={() => {
                                if(cliente.nome != '' && cliente.cnpj != ''){
                                    trocaTela(<Consulta item={lista} cadastro={<Cadastro trocaTela={trocaTela}/>} trocaTela={trocaTela} />)
                                    lista.push({id: lista.length + 1, nome: cliente.nome, cnpj: cliente.cnpj})
                                }         
                            }}
                            >Salvar</Button>
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