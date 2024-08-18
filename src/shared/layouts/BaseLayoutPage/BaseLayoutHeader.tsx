import { Box, Flex, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { PATH_ROUTES } from '@/shared/utils/constants';

import { BsPerson, BsShop } from 'react-icons/bs';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export const BaseLayoutHeader: React.FC = () => {
  const location = useLocation();

  return (
    <Box>
      <Flex w={'full'} className="items-center justify-between">
        <Link to={'/'}>
          <Image src="logo.png" boxSize={'150px'} alt="Logo da Biumar Art" />
        </Link>
        <InputGroup w={'30%'}>
          <InputLeftElement pointerEvents="none">
            <BiSearch color="gray" size={24} />
          </InputLeftElement>
          <Input type="tel" color="gray" placeholder="Faça-nos saber o que está procurando..." />
        </InputGroup>

        <Flex className="items-center justify-center " gap={18}>
          <BiHeart size={32} color={'#aca4a478'} />
          <BsPerson size={32} color={'#aca4a478'} />
          <BsShop size={32} color={'#aca4a478'} />
        </Flex>
      </Flex>
      <Flex className="items-center justify-center" fontWeight={500} gap={8}>
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
  );
};
