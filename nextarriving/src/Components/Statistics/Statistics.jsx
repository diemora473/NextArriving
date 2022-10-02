import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import '../NavBar/NavBar.css'
import { FcAssistant, FcDonate, FcInTransit, FcPackage } from 'react-icons/fc';
import Line from '../Divider/Divider'
import '../Statistics/Statistics.css'
interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            className='nav back cursor-pointer shadow-2xl'
            shadow={'xl'}
            border={'3px solid'}
            // borderColor={useColorModeValue('orange.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    className='text-white'
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Statistics() {
    return (
        <Box maxW="5xl" mx={'auto'} pt={0} className='' px={{ base: 2, sm: 12, md: 17 }}>

            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                className='text-white'
                fontWeight={'bold'}>
                Nuestra compañia se esta expandiendo, vos tambien podrias ser parte.
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} className='text-white'>
                <StatsCard
                    title={'Clientes'}
                    stat={'+ 10'}
                    icon={<BsPerson size={'3em'} />}
                />
                <StatsCard
                    title={'Paquetes entregados'}
                    stat={'+ 250'}
                    icon={<FcPackage size={'4em'} />}
                />
                <StatsCard
                    title={'Localidades de entregas'}
                    stat={'88'}
                    icon={<FcInTransit size={'4em'} />}
                />
            </SimpleGrid>
        </Box>
    );
}