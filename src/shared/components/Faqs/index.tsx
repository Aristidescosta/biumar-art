import { Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface IFaqProps {
  response: string;
  question: string;
}

export const Faq: React.FC<IFaqProps> = ({ response, question }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      flexDir={'column'}
      w={'100%'}
      p={4}
      borderWidth={2}
      borderColor={'#E2E4EB'}
      bgColor={'#F7F7FA'}
      borderRadius={15}
      gap={4}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text fontSize={'xl'} fontWeight={'bold'} onClick={onToggle}>
          {question}
        </Text>
        {isOpen ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
      </Flex>

      <Collapse in={isOpen}>
        <Text>{response}</Text>
      </Collapse>
    </Flex>
  );
};
