import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useBreakpointValue,
} from '@chakra-ui/react';
import logo3 from '../../../Img/logo3.png';
export default function HeaderAbout() {
  return (
    <div className='animate__animated animate__fadeIn'>

    <Container maxW={'5xl'}>

      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
          <div className=''>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Sobre {' '}
          <Text as={'span'} color={'green.700'}>
           Nosotros
          </Text>
        </Heading>
            </div>
        <Text color={'gray.500'} maxW={'3xl'}>
         Somos un grupo de empresarios, con el objetivo de poder construir una logistica, donde tus pedidos lleguen seguros, que puedan llegar en 24 horas, poder brindarte la seguridad de que tu pedido va a llegar al lugar del destino en tiempo y forma. Que puedas tener la seguridad de que vamos a tener el mayor cuidado con tu pedido para que pueda llegar en el mejor estado posible.
        </Text>
        <Text color={'gray.500'} maxW={'3xl'}>
          Contamos con mas de dos años de experiencia en el rubro, contando con numerosos clientes, y con muy buenas recomendaciones de parte de ellos, donde cada dia nos proponemos a mejorar mas, para que tus pedidos lleguen de la mejor manera y de la manera mas rapida
        </Text>
        <Text color={'gray.500'} maxW={'3xl'}>
Nuestro Objetivo es poder cubrir todas las zonas en su totalidad, para que puedas vender tranquilo tus productos sabiendo que van a llegar al destino donde sea que este se encuentre, teniendo asi mejor posibilidad de que tu negocio pueda crecer como siempre quisiste!.
        </Text>
        <div className='relative top-10'>

        <img
        src={logo3}
        />
        </div>
        {/* <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
        <Text
        as={'span'}
        position={'relative'}
        _after={{
          content: "''",
          width: 'full',
          height: useBreakpointValue({ base: '20%', md: '30%' }),
          position: 'absolute',
          bottom: 1,
          left: 0,
          bg: 'blue.400',
          zIndex: -1,
        }}>
        Freelance
        </Text>
        <br />{' '}
        <Text color={'blue.400'} as={'span'}>
        Design Projects
        </Text>{' '}
        </Heading>
        </Stack>
      </Flex> */}
      </Stack>
    </Container>
      </div>
  );
}

