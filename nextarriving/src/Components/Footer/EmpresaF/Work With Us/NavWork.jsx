import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo2 from '../../../Img/logo2.png';
// import '../../../Statistics/Statistics.css'
import '../Work With Us/NavWork.css';

export default function NavWith() {
  const { isOpen, onToggle } = useDisclosure();

  return (
        <div className='fixed w-full z-10 '>
      <div className='NavWork'>

    <Box>
      <Flex
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            
          </Text> */}
              <div className='h-12 lg:w-32'>
                <Link href='/'>
           <img 
           src={logo2}
           />
           </Link>
           </div>

          <Flex display={{ base: 'none', md: 'flex' }} ml={20}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>

          <div class=" pr-5 text-white">
            <div className='hidden lg:block'>
<a href='/'>
                              <div class="btn btn-ghost normal-case text-lg hover:bg-green-700 rounded-full ">Home</div>
</a>
                          </div>
                            </div>
           
          <div class=" pr-5 text-white ">
            <div className='hidden lg:block'>

                              <div class="btn btn-ghost normal-case text-lg hover:bg-green-700  rounded-full ">Zonas</div>
                          </div>
                            </div>
           
                            <div class=" pr-5 text-white ">
              <div className='hidden lg:block relative '>
  
              <div className="dropdown dropdown-end relative ">
  <label tabIndex={1} className="btn btn-ghost normal-case text-lg rounded-full hover:bg-green-700  ">Mas</label>
  <ul tabIndex={1} className="text-black dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
    <div className='hover:bg-green-600 rounded-box hover:text-white'>

    <li><a href='/NextArriving/AboutUs'>Sobre Nosotros</a></li>
    </div>
    <div className='hover:bg-green-600 rounded-box hover:text-white'>

    <li><a href='/NextArriving/WorkWithUs'>Trabaja con Nosotros</a></li>
    </div>
    <div className='hover:bg-green-600 hover:text-white rounded-box '>

    <li><a href='/NextArriving/Questions'>Preguntas Frecuentes</a></li>
    </div>
    <div className=' rounded-box bg-green-700 mt-1'>

    <li>
    <div>

<a href='https://api.WhatsApp.com/send?phone=5491127516431'>

<div className='w-full text-white flex items-center justify-center'>
    <div className='pr-10'>

    Whatsapp
    </div>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>
</div>
</a>
</div>

    </li>
    </div>
    <div className=' rounded-box insta mt-1'>

    <li>
    <div className=''>

            <a href='https://www.instagram.com/nextarriving/'>

            <div className='font-bold  text-white flex items-center justify-center'>
                <div className='pr-10'>

                Instagram
                </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
            </div>
            </a>
            </div>

    </li>
    </div>
  </ul>
</div>
                            </div>
                              </div>
           
         
                          
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
       
      </Collapse>
    </Box>
    </div>
</div>

  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      className='relative'
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
            <div className='divide-y'>
<div>

            <a href='/'>

            <div className='font-bold pb-3'>
            Home
            </div>
            </a>
</div>
            <div>

            <a href='/NextArriving/Zone'>

            <div className='font-bold pt-3 pb-3'>
            Zonas
            </div>
            </a>
            </div>
            <div>

            <a href='/NextArriving/AboutUs'>

            <div className='font-bold pt-3 pb-3'>
            Sobre Nosotros
            </div>
            </a>
            </div>
            <div>

            <a href='/NextArriving/WorkWithUs'>

            <div className='font-bold pt-3 pb-3'>
            Trabaja con Nosotros
            </div>
            </a>
            </div>
            <div>
            <a href='/NextArriving/Questions'>

            <div className='font-bold pt-3 pb-3'>
            Preguntas frecuentes
            </div>
            </a>
            </div>
            <div>

<a href='https://api.WhatsApp.com/send?phone=5491127516431'>

<div className='font-bold  bg-green-600 rounded text-white flex items-center justify-center'>
    <div className='pr-5'>

    Whatsapp
    </div>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
</svg>
</div>
</a>
</div>
<div className='pt-0.5'>

<a href='https://www.instagram.com/nextarriving/'>

<div className='font-bold insta rounded text-white flex items-center justify-center'>
    <div className='pr-5'>

    Instagram
    </div>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<rect x="4" y="4" width="16" height="16" rx="4" />
<circle cx="12" cy="12" r="3" />
<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
</svg>
</div>
</a>
</div>
        </div>
      </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
];