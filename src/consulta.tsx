import React from "react";
import { HStack, VStack, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { StyleContext } from "./App";

interface ArrayProps {
    item : object[]
}

const Consulta: React.FC<ArrayProps> = ({item}) => {
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