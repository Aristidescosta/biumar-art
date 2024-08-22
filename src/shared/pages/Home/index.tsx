import { ImagesSection, PromotionalVideo } from '@/shared/components';
import { Plane } from '@/shared/components/Plane';
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { BannerDepoiment } from './BannerDepoiment';
import { Faq } from '@/shared/components/Faqs';
import { FAQs } from '@/shared/utils/constants';

export const Home: React.FC = () => {
  return (
    <Flex flexDir={'column'} gap={4} as="main" p={4} pos={'relative'}>
      <Flex px={[0, 16]} as="section" flexDir={['column', 'row']}>
        <Flex flex={1} flexDir={'column'} gap={12}>
          <Heading className="text-sky-500" size={'md'} as={'h2'}>
            Biumar art
          </Heading>
          <Heading size={'2xl'} textTransform={'uppercase'} as={'h1'}>
            Brincar também é aprender
          </Heading>
          <Text>
            Bem-vindo ao Biumar Art, o seu parceiro ideal para criar festas infantis memoráveis e
            cheias de magia! Transformamos eventos em experiências inesquecíveis com uma variedade
            de serviços, incluindo decoração personalizada, animação com palhaços divertidos, e uma
            oficina de pintura para estimular a criatividade dos pequenos. Oferecemos também pintura
            facial encantadora, esculturas de balões criativas e uma feirinha especial para o buffet
            infantil...
          </Text>
          <Button colorScheme="blue" size="md" w={120} borderRadius={24}>
            Saiba mais
          </Button>
        </Flex>
        <Flex flex={2} justifyContent={'flex-end'}>
          <Box className="space-y-4 p-4">
            <PromotionalVideo />
            <ImagesSection />
          </Box>
        </Flex>
      </Flex>
      <Plane />

      <Flex as="section" flexDir={'column'}>
        <Heading textAlign={'center'} as={'h3'} color={'#0051A0'} textTransform={'capitalize'}>
          Confira nossos temas
        </Heading>
        <SimpleGrid columns={[1, 3]} spacing={'10px'}>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Flex as="section" flexDir={'column'} mt={12}>
        <Heading textAlign={'center'} as={'h3'} color={'#0051A0'} textTransform={'capitalize'}>
          Categorias
        </Heading>
        <SimpleGrid columns={[1, 3]} spacing={'10px'}>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
          <Flex alignItems={'center'} flexDir={'column'}>
            <Image src="image3.png" w={420} h={420} />
            <Text>Temas de festa para meninos</Text>
          </Flex>
        </SimpleGrid>
      </Flex>

      <BannerDepoiment />
      <Plane toLeft />

      <Flex
        flexDir={'column'}
        gap={4}
        my={8}
        as={'section'}
        w={'full'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Heading size={'2xl'} textTransform={'capitalize'} as={'h1'} className="text-sky">
          FAQs
        </Heading>
        <Text>Veja suas perguntas respondidas aqui</Text>
        {FAQs.map((faq, index) => (
          <Faq key={index} question={faq.question} response={faq.response} />
        ))}
      </Flex>
    </Flex>
  );
};
