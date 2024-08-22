import { Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { DashedCard } from './DashedCard';
import { TESTIMONIALS } from '@/shared/utils/constants';

export const BannerDepoiment: React.FC = () => {
  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      className="mt-8"
      pos={'relative'}
      w={'full'}
    >
      <Center>
        <Image src="trophy.png" h={12} w={12} />
      </Center>
      <Flex
        w={['full', '60%']}
        h={5}
        borderRadius={'50%'}
        pos={'absolute'}
        bg={'#FDD404'}
        top={'7.5rem'}
      />
      <Flex
        /* borderTopRadius={80} */
        flexDir={'column'}
        w={['full', '60%']}
        bg={'#FDD404'}
        alignItems={'center'}
        justifyContent={'center'}
        p={[4, 8]}
        gap={4}
      >
        <Text fontSize={'xs'} textAlign={'center'} color={'#FE9611'}>
          empresa líder em ganhar os corações dos pais
        </Text>
        <Heading fontSize={'md'} as={'h2'}>
          veja o que eles têm a dizer!
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={['10px', '50px']}>
          {TESTIMONIALS.map((testimonial, index) => (
            <DashedCard
              key={index}
              author={testimonial.author}
              image={testimonial.image}
              testimonial={testimonial.message}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
