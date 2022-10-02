import {
    Container,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import mNorte from '../Img/mNorte.jpeg';
import mCaba from '../Img/mCaba.jpeg';
import mOeste from '../Img/mOeste.jpeg';
import mSur from '../Img/mSur.jpeg';
export default function InfoZone() {
    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Mira que zonas{' '}
                    <Text as={'span'} color={'orange.400'}>
                        cubrimos!
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Trabajamos para que tus paquetes lleguen al lugar que necesitas,  Contamos con un equipo de choferes, para asegurarte que tus pedidos lleguen en tiempo y forma, y que no tengas que moverte de tu tienda!
                </Text>

            </Stack>
            {/* Card Zona Norte */}
            <div className="card lg:card-side bg-base-100 shadow-xl  lg:right-20 relative ">
                <figure><img src={mCaba} className='h-72' alt="Album" /></figure>
                <div className="card-body ">
                    <div className='flex justify-center'>

                        <h2 className="card-title left-10">Caba</h2>
                    </div>
                    <p>
                        Recoleta, Palermo, Alto Palermo, Balvanera, San Cristóbal, Barracas, Retiro, San Nicolás, Montserrat, San Telmo, Constitución, Parque Patricios, Caballito, Almagro, Belgrano, Nuñez, Coghlan, Colegiales, Saavedra, Villa Crespo, Parque Centenario, Nueva Pompeya, Barracas, Soldati, Flores, Liniers, Floresta, V Luro, Chacabuco, Mataderos, Lugano, Liniers,
                        Villa Devoto, Villa del Parque, Chacarita, Paternal, Villa Ortúzar, Villa Urquiza, Villa Pueyrredón.</p>

                </div>
            </div >
            <div className='pt-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl  lg:left-20  ">
                    <div className="card-body ">
                        <div className='flex justify-center'>

                            <h2 className="card-title left-10">Zona Norte</h2>
                        </div>
                        <p> San Isidro, Vicente López, San Martín, San Fernando, Tigre y contiene los barrios de Tigre, El Talar, San Fernando, Don Torcuato, San Isidro, Martínez, Boulogne, Munro, Villa Ballester, Ombú, San Martín, Churruca, El Palomar, Caseros, Santos Lugares, Pilar, Escobar, Ingeniero Maschwitz, Garin, Pacheco, Jose Leon Suarez, Beccar, Jose C Paz, Manuel Alberti, Benavidez, Maquinista Savio.</p>

                    </div>
                    <figure><img src={mNorte} className='h-72' alt="Album" /></figure>
                </div >
            </div>
            <div className='pt-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl  lg:right-20  ">
                    <figure><img src={mOeste} className='h-72' alt="Album" /></figure>

                    <div className="card-body ">
                        <div className='flex justify-center'>

                            <h2 className="card-title left-10">Zona Oeste</h2>
                        </div>
                        <p> Polvorines, San Miguel, Bella Vista, Hurlingham, Leloir, Ituzaingó, Morón, Haedo, Ramos Mejía, Ciudadela, San Justo, Tablada, Isidoro Casanova, Laferre, General Belgrano, Tablada, Paso del rey, Castelar, Merlo, Moreno, San Antonio de Padua, Francisco Alvarez, General Rodriguez, Gonzalez Catan, Gregorio de Laferrere, Trujui, La Reja, Villa Tesei y Villa Luzuriaga.</p>

                    </div>
                </div >
            </div>
            <div className='pt-10 pb-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl  lg:left-20  ">

                    <div className="card-body ">
                        <div className='flex justify-center'>

                            <h2 className="card-title left-10">Zona Sur</h2>
                        </div>
                        <p> Androgué, Avellaneda, Banfíeld, Bernal, Burzaco, El Roció, Ezeiza, Florencia Várela, Lanús, Lavallol, Lomas de Zamora, Longchamps, Monte Chingolo, Monte Grande, Paraná, Piñeyro, Plátanos, Quilmes, R. Calzada, Ranelagh, San F. Solano, Santa Catalina, Santos Vega, Sarandí, T. Suárez, Villa Caraza, Wilde.</p>

                    </div>
                    <figure><img src={mSur} className='h-72' alt="Album" /></figure>
                </div >
            </div>
        </Container >
    );
}

