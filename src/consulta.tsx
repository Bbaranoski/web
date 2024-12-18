import React from "react";
import { HStack, VStack, Button, Text } from "@chakra-ui/react";
import { style } from "./App";

interface client {
    nome: string,
    cnpj: string
}

const Consulta: React.FC<style> = ({ cor, corTexto, redondo, fonte, titulo }) => {
    const teste: client[] = [{nome: 'buh', cnpj: '04.430.502/0001-03'}]
    
    return(
        <VStack>
            <HStack>
                <Button bg={'#a3e635'}
                _hover={{bg: '#84cc16'}}
                color={corTexto}
                transition={'0s'}
                borderRadius={redondo}
                borderColor={corTexto}
                fontSize={fonte}
                >
                +</Button>
            </HStack>
            <VStack>
               {teste.map((e, index) => (
                <HStack key={index}>
                    <Text color={corTexto}>{e.nome}</Text>
                    <Text color={corTexto}>{e.cnpj}</Text>
                </HStack>
               ))}
            </VStack>
        </VStack>
    )
}

export default Consulta