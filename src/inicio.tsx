import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { StyleContext } from "./App";

const Inicio: React.FC = () => {
    const style = useContext(StyleContext) as { 
        cor: string,
        corTexto: string,
        redondo: string,
        fonte: string,
        titulo: string,
        corBorda: string }
    return(
        <HStack>
            <Button bg={style.cor}
            >
            +</Button>
        </HStack>
    )
}

export default Inicio