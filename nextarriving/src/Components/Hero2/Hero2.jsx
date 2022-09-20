import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import Statistics from '../Statistics/Statistics';
export default function Hero2() {
    return (
        <Flex
            w={'full'}
            h={'50vh'}
            backgroundImage={
                'url(https://www.cronista.com/files/image/290/290821/5ffe0316b7e1b.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

                <Statistics />
            </VStack>
        </Flex>
    );
}