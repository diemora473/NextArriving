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
import logo2 from '../Img/logo2.png';

const Logo = (props: any) => {
    return (
        <div className='w-40'>
            <img
                src={logo2}
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
                        <ListHeader>NextArriving</ListHeader>
                        <Link href={'#'}>Home</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'/NextArriving/Info'}>Informacion</Link>
                            {/* <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag> */}
                        </Stack>
                        <Link href={'/NextArriving/Zone'}>Zonas</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Empresa</ListHeader>
                        <Link href={'/NextArriving/AboutUs'}>Sobre Nosotros</Link>
                        <Link href={'#'}>Nuestra Empresa</Link>
                        <Link href={'#'}>Trabaja con Nosotros</Link >
                        <Link href={'#'}>Preguntas frecuentes.</Link>

                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Legal</ListHeader>
                        <Link href={'#'}>Privacidad</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Law Enforcement</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Contactanos</ListHeader>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'https://api.WhatsApp.com/send?phone=5491127516431'}>+5491127516431</Link>
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