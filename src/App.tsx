import React, { useEffect, useState, createContext } from 'react';
import { Grid, 
GridItem, 
Button, 
Image, 
Flex, 
VStack, 
Group, 
Heading,
IconButton } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { TbBorderCorners } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Inicio from './inicio';
import Cliente from './cliente';
import logo from "./image/logo.png";

//interface de estilo
export interface style{
  cor: string,
  corTexto: string,
  redondo: string,
  fonte: string,
  titulo: string,
  corBorda: string
}
//Context de estilo que é exportada
export const StyleContext = createContext<object | undefined>(undefined)

const App: React.FC = () => {
  //variaveis de estado da barra lateral
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [recolhe, setRecolhe] = useState<boolean>(false);

  //variaveis de estilo
  const [tema, setTema] = useState<boolean>(false)
  const cor: string = tema ? 'white' : 'black'
  const corTexto: string = tema ? 'black' : 'white'
  const corBorda: string = '#e4e4e7'
  const redondo: string = '10px'
  const select: string = '#9FC5E8'
  const fonte: string = '15px'
  const titulo: string = '25px'
  const style: style = {
    cor: cor,
    corTexto: corTexto,
    redondo: redondo,
    fonte: fonte,
    titulo: titulo,
    corBorda: corBorda
  }
  
  //funcao para trocar de conteudo principal
  const [tela, setTela] = useState<JSX.Element>(<Inicio/>);

  //função para re-renderizar o conteudo quando troca o tema 
  useEffect(() => {
    renderizar(selectIndex)
  }, [cor])

  //função para trocar de conteudo principal
  const renderizar = (index: number) => {
    switch(index){
      case 0:
        setTela(<Inicio />)
      break;
      case 1:
        setTela(<Cliente />)
      break;
    }
  }

  return (
    //provendo o estilo para o contexto
    <StyleContext.Provider value={{...style}}>
      <Provider>
        <Grid templateColumns={recolhe ? '1fr 6fr': '0.5fr 7fr'}
        templateRows={'0.8fr 8fr'}
        h={'100vh'}
        gap={'2px'}
        transition={'2s'}
        >
          {/*Sidebar*/}
          <GridItem colSpan={1} 
          rowSpan={2} 
          bg={cor}
          padding={'1vh'}
          overflow={'hidden'}
          >
            <Group gap={recolhe ? '0px' : '100px'}
            transition={'2s'}
            marginLeft={recolhe ? '10%' : '25%'}
            >
              <Image height={'5vh'} src={logo}/>
              <Heading color={corTexto}
              fontSize={titulo}
              >WINDEL</Heading>
            </Group>
            <VStack>
              <IconButton aria-label='cliente'
              width={'100%'}
              color={corTexto}
              bg={selectIndex == 0 ? select : cor}
              borderRadius={redondo}
              borderWidth={'0px'}
              fontSize={recolhe ? fonte : '0px'}
              paddingLeft={recolhe ? '0px' : '0.5vw'}
              transition={'font-size 1s, padding 1s'}
              onClick={() => {
                setSelectIndex(0)
                setTela(<Inicio />)
              }}>
                <HiOutlineHome /> Inicio
              </IconButton>
              <IconButton aria-label='cliente'
              width={'100%'}
              color={corTexto}
              bg={selectIndex == 1 ? select : cor}
              borderRadius={redondo}
              borderWidth={'0px'}
              fontSize={recolhe ? fonte : '0px'}
              paddingLeft={recolhe ? '0px' : '0.5vw'}
              transition={'font-size 1s, padding 1s'}
              onClick={() => {
                setSelectIndex(1)
                setTela(<Cliente />)
              }}>
                <GoPerson /> Cliente
              </IconButton>
            </VStack>
          </GridItem>

          {/*Heading*/}
          <GridItem colSpan={1} 
          rowSpan={1}
          bg={cor}
          display={'flex'}
          justifyContent={'space-between'}
          >
            <Group>
              <IconButton aria-label='recolhe'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              onClick={() => setRecolhe(!recolhe)}
              >
                {recolhe ? <IoIosArrowBack/> :
                <IoIosArrowForward/>}
              </IconButton>
              <Heading color={corTexto}
              fontSize={titulo}
              >
                aaaaaaaaaa
              </Heading>
            </Group>
        
            <Group>
              <IconButton aria-label='tema'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              onClick={() => {
                setTema(!tema)
              }}
              >
                {tema ? <IoMoonOutline /> : 
                <IoSunnyOutline />}
              </IconButton>
              <IconButton aria-label='favoritos'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              >
                <FaRegStar />
              </IconButton>
              <IconButton aria-label='notificacao'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              >
                <FiBell />
              </IconButton>
              <IconButton aria-label='configuracao'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              >
                <BsGear />
              </IconButton>
              <IconButton aria-label='fullscreen'
              color={corTexto}
              bg={cor}
              transition={'0s'}
              >
                <TbBorderCorners />
              </IconButton>
            </Group>
          </GridItem>

          {/*Main*/}
          <GridItem colSpan={1} 
          rowSpan={1}
          bg={cor}
          >
            {tela}
          </GridItem>
        </Grid>
      </Provider>
    </StyleContext.Provider>
  );
};

export default App;

