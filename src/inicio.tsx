import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { style } from "./App";

const Inicio: React.FC<style> = ({ cor, corTexto, redondo, fonte, titulo }) => {
    return(
        <HStack>
            <Button bg={cor}
            onClick={() => console.log(cor, corTexto)}
            >
            +</Button>
        </HStack>
    )
}

export default Inicio