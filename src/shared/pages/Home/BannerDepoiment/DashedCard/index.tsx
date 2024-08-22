import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface IDashedCardProps {
  testimonial: string;
  image: string;
  author: string;
}

export const DashedCard: React.FC<IDashedCardProps> = ({ image, testimonial, author }) => {
  return (
    <Flex flexDir={'column'} gap={2} h={'auto'} w={280} borderRadius={5} border={'1px dashed'}>
      <Flex
        p={2}
        bgColor={'#FFF'}
        borderRadius={5}
        className="origin-bottom -rotate-3 translate-x-2"
      >
        <Flex flexDir={'column'} px={2}>
          <Image h={4} w={4} src="aspas-baixo.png" />
          <Text noOfLines={4}>{testimonial}</Text>
          <Image alignSelf={'flex-end'} h={4} w={4} src="aspas-cima.png" />
        </Flex>

        <Flex flexDir={'column'}>
          <Image src={image} alt={`Imagem de ${author}`} />
          <Text> - {author}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
