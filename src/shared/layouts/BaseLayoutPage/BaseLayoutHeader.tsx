import { Box, Flex, Image, Input } from '@chakra-ui/react';
import { PATH_ROUTES } from '@/shared/utils/constants';

import { BsPerson, BsShop } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import React from 'react';

export const BaseLayoutHeader: React.FC = () => {
  return (
    <Box>
      <Flex w={'full'} className="items-center justify-between">
        <Image src="logo.png" boxSize={'150px'} alt="Logo da Biumar Art" />
        <Input
          bgColor={'#aca4a478'}
          color={'#eee'}
          placeholder="Faça-nos saber o que está procurando..."
          w={'30%'}
        />

        <Flex className="items-center justify-center " gap={18}>
          <BiHeart size={32} color={'#aca4a478'} />
          <BsPerson size={32} color={'#aca4a478'} />
          <BsShop size={32} color={'#aca4a478'} />
        </Flex>
      </Flex>
      <Flex className="items-center justify-center" fontWeight={500} gap={8}>
        {PATH_ROUTES.map((route) => (
          <Link className="text-slate-700 dark:text-slate-500" to={route.path} key={route.path}>
            {route.label}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
