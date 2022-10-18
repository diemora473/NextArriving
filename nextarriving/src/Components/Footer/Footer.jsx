import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import '../NavBar/NavBar.css';
import logo3 from '../Img/logo3.png';

const Logo = (props: any) => {
    return (
        <div className='w-40'>
            <img
                src={logo3}
                alt='NextArriving'
            />
        </div>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <div className='text-green-700'>

                        <ListHeader>NextArriving</ListHeader>
                        </div>
                        <div className='font-bold hover:text-green-700'>

                        <Link href={'#'}>Home</Link>
                        </div>
                        <div className='font-bold hover:text-green-700'>
                            
                        <Link href={'/NextArriving/Zone'}>Zonas</Link>
                        </div>
                    </Stack>

                    <Stack align={'flex-start'}>
                    <div className='text-green-700'>
                        <ListHeader>Empresa</ListHeader>
                    </div>
                    <div className='font-bold hover:text-green-700'>

                        <a href={'/NextArriving/AboutUs'}>Sobre Nosotros</a>
                    </div>
                    <div className='font-bold hover:text-green-700'>

                        <a href={'/NextArriving/WorkWithUs'}>Trabaja con Nosotros</a >
                    </div>
                    <div className='font-bold hover:text-green-700'>

                        <a href={'/NextArriving/Questions'}>Preguntas frecuentes.</a>
                    </div>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <div className='text-green-700'>

                        <ListHeader>Legal</ListHeader>
                        </div>
                        <div className='font-bold hover:text-green-700'>

                        <a href={'#'}>Privacidad</a>
                        </div>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <div className='text-green-700'>
                        <ListHeader>Contactanos</ListHeader>
                        </div>
                        <div className='font-bold hover:text-green-700'>

                        <a href={'https://www.instagram.com/nextarriving/'}>Instagram</a>
                        </div>
                        <div className='font-bold hover:text-green-700'>

                        <a href={'https://api.WhatsApp.com/send?phone=5491127516431'}>+5491127516431</a>
                        </div>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Logo />
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 NextArriving. Todos los derechos estan reservados.
                </Text>
            </Box>
        </Box>
    );
}