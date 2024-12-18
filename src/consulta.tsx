import React from "react";
import { useContext } from "react";
import { HStack, VStack, Button, Text } from "@chakra-ui/react";
import { style } from "./App";
import { StyleContext } from "./App";

interface client {
    nome: string,
    cnpj: string
}

const Consulta: React.FC = () => {
    const teste: client[] = [{nome: 'buh', cnpj: '04.430.502/0001-03'}]
    const style = useContext(StyleContext)
    return(
        <VStack>
            <HStack>
                <Button bg={'#a3e635'}
                _hover={{bg: '#84cc16'}}
                color={style.corTexto}
                transition={'0s'}
                borderRadius={style.redondo}
                borderColor={style.corTexto}
                fontSize={style.fonte}
                >
                +</Button>
            </HStack>
            <VStack>
               {teste.map((e, index) => (
                <HStack key={index}>
                    <Text color={style.corTexto}>{e.nome}</Text>
                    <Text color={style.corTexto}>{e.cnpj}</Text>
                </HStack>
               ))}
            </VStack>
        </VStack>
    )
}

export default Consulta