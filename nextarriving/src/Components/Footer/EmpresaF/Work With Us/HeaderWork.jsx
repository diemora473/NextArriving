import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import FeatureWork from './FeaturesWork';
import NavWith from './NavWork';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function HeaderWith() {
  return (
    <div className=' relative bg-base-200'>
<NavWith/>
    <div className="hero h-96" style={{ backgroundImage: `url("https://d3t4nwcgmfrp9x.cloudfront.net/upload/tendencias-entrega-paquetes-para-2022.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Trabaja con Nosotros!</h1>
      <p className="mb-5 font-medium">Desde NextArriving, te contamos que tenes la posibilidad de elegirnos para que nosotros nos encarguemos del viaje!</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
    </div>
  </div>
    <div className="hero h-96" style={{ backgroundImage: `url("https://trabajarporelmundo.org/wp-content/uploads/2021/10/Copia-de-Trabajar-por-el-Mundo-Arti%CC%81culos-Blog-67-1-800x450.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Ponete en contacto con nosotros!</h1>
      <p className="mb-5 font-medium">Contactanos mediante via Whatsapp, Instagram, o tambien mediante via gmail!</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
    </div>
  </div>
    <div className="hero h-96" style={{ backgroundImage: `url("https://cr00.epimg.net/radio/imagenes/2021/06/15/tecnologia/1623782953_619797_1623783144_noticia_normal.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">NextArriving</h1>
      <p className="mb-1 font-medium">Te damos las gracias por visitarnos!</p>
      <p className="mb-5 font-medium">Esperamos vernos pronto!</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
    </div>
  </div>
  {/* <FeatureWork/> */}
</div>
  );
}