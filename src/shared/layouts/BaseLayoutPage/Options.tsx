import { Flex } from '@chakra-ui/react';

import { BsPerson, BsShop } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi';
import React from 'react';

export const Options: React.FC = () => {
  return (
    <Flex className="items-center justify-center " gap={18}>
      <BiHeart size={32} color={'#aca4a478'} />
      <BsPerson size={32} color={'#aca4a478'} />
      <BsShop size={32} color={'#aca4a478'} />
    </Flex>
  );
};
