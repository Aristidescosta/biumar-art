import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      mb={4}
      justifyContent={'space-around'}
      overflow={'hidden'}
    >
      <Image src="404.png" display={['flex', 'flex', 'none']} />
      <Flex gap={2} p={4} flexDir={'column'} alignItems={'flex-start'}>
        <Heading as="h1" fontSize={'14rem'} noOfLines={1}>
          404
        </Heading>
        <Text fontWeight={'bold'} fontSize={'xl'}>Oops! Esta página não pode ser encontrada</Text>
        <Text>
          Pare que não conseguimos encotrar o que está procurando. Considere voltar à página Home.
        </Text>
        <Button colorScheme="blue">Home</Button>
      </Flex>
      <Image src="404.png" h={800} w={520} display={['none', 'none', 'flex']} />
    </Flex>
  );
};
