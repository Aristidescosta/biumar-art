import { ImagesSection, PromotionalVideo } from '@/shared/components';
import { Plane } from '@/shared/components/Plane';
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BannerDepoiment } from './BannerDepoiment';

export const Home: React.FC = () => {
  return (
    <Box as="main" p={4} pos={'relative'}>
      <Flex flexDir={['column', 'row']}>
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
        <Flex flex={1}>
          <Box className="space-y-4 p-4">
            <PromotionalVideo />
            <ImagesSection />
          </Box>
        </Flex>
        <BannerDepoiment />
        <Plane toLeft/>
      </Flex>

      <Center>
        <Heading size={'2xl'} textTransform={'capitalize'} as={'h1'} className="text-sky">
          Confira nossos temas
        </Heading>
      </Center>
    </Box>
  );
};
