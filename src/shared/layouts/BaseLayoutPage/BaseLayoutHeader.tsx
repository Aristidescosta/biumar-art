import { PATH_ROUTES } from '@/shared/utils/constants';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';

import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import React from 'react';

import { ListRoutes } from './ListRoutes';
import { Options } from './Options';

export const BaseLayoutHeader: React.FC = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="header" mb={12}>
        <Flex w={'full'} className="items-center justify-between">
          <Link to={'/'}>
            <Image src="logo.png" boxSize={['80px', '150px']} alt="Logo da Biumar Art" />
          </Link>
          <InputGroup w={'30%'} display={['none', null]}>
            <InputLeftElement pointerEvents="none">
              <BiSearch color="#757575" size={24} />
            </InputLeftElement>
            <Input
              bgColor={'#E2E2E2'}
              color="#757575"
              type="search"
              placeholder="Faça-nos saber o que está procurando..."
            />
          </InputGroup>

          <Flex display={['none', 'flex']}>
            <Options />
          </Flex>
          <IconButton
            variant="outline"
            colorScheme="gray"
            aria-label="Menu de opções"
            fontSize="20px"
            icon={<GiHamburgerMenu />}
            onClick={onOpen}
          />
        </Flex>
        <Flex
          display={['none', null]}
          className="items-center justify-center"
          fontWeight={500}
          gap={8}
        >
          {PATH_ROUTES.map((route) => (
            <Link
              className={`${
                location.pathname === route.path
                  ? 'text-sky-500'
                  : 'text-slate-700 dark:text-slate-500'
              }
                text-2xl hover:text-sky-500 transition hover:animate-bounce duration-700
                `}
              to={route.path}
              key={route.path}
            >
              {route.label}
            </Link>
          ))}
        </Flex>
      </Box>
      <Drawer
        size={'full'}
        isOpen={isOpen}
        placement="right"
        onClose={onClose} /* finalFocusRef={btnRef} */
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />

          <DrawerBody>
            <Options />
            <Flex
              flexDir={'column'}
              className="items-center justify-center"
              fontWeight={500}
              gap={8}
              mt={12}
            >
              <ListRoutes />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
