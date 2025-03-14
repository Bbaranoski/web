import React from "react";
import { HStack, VStack, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { StyleContext } from "./App";

interface ConsultaProps {
    item: object[],
    cadastro: JSX.Element,
    trocaTela: React.Dispatch<React.SetStateAction<any>>
}

const Consulta: React.FC<ConsultaProps> = ({item, cadastro, trocaTela}) => {
    const style = useContext(StyleContext) as { 
            cor: string,
            corTexto: string,
            redondo: string,
            fonte: string,
            titulo: string,
            corBorda: string }
    return(
        <VStack height={'100%'} gap={'0px'}>
            <HStack height={'10%'}
            width={'100%'}
            >
                <Button bg={'#a3e635'}
                _hover={{bg: '#84cc16'}}
                color={style.corTexto}
                transition={'0s'}
                borderRadius={style.redondo}
                borderColor={style.corTexto}
                fontSize={style.fonte}
                onClick={() => {
                    trocaTela(cadastro)
                }}
                >
                +</Button>
            </HStack>
            <VStack height={'80%'}
            width={'100%'}
            borderColor={style.corBorda}
            borderWidth={'1px'}
            borderRadius={style.redondo}
            >
               {item.map((e, index) => (
                <HStack key={index}>
                    <Text color={style.corTexto}>{e.id}</Text>
                    <Text color={style.corTexto}>{e.nome}</Text>
                    <Text color={style.corTexto}>{e.cnpj}</Text>
                </HStack>
               ))}
            </VStack>
        </VStack>
    )
}

export default Consulta