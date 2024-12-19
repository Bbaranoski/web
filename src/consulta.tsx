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
    const style = useContext(StyleContext)
    return(
        <VStack height={'100%'} gap={'0px'}>
            <HStack height={'10%'}
            width={'100%'}
            borderColor={style.corBorda}
            borderWidth={'0px 1px'}
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
            <VStack height={'90%'}
            width={'100%'}
            borderColor={style.corBorda}
            borderWidth={'0px 1px'}
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