import { Button, Divider, Flex, Input, SimpleGrid, Text } from '@chakra-ui/react';
import { ROUTES_FOOTER } from '@/shared/utils/constants';

import { Link } from 'react-router-dom';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';

export const BaseLayoutFooter: React.FC = () => {
  return (
    <Flex flexDir={'column'} p={2} className="shadow-2xl">
      <SimpleGrid columns={[2, 4]} spacing={'10px'} as={'footer'}>
        {ROUTES_FOOTER.map((footerRoute, index) => (
          <Flex key={index} flexDir={'column'}>
            <Text fontSize={'3xl'} fontWeight={'bold'} className="mb-2 dark:text-slate-500">
              {footerRoute.label}
            </Text>
            <Flex flexDir={'column'} gap={4}>
              {footerRoute.routes.map((route) => (
                <Link to={route.path} key={route.path}>
                  {route.label}
                </Link>
              ))}
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      <Flex mt={2} flex={2} flexDir={'column'}>
        <Text fontSize={'3xl'} fontWeight={'bold'} className="dark:text-slate-500 mb-2">
          Inscreva-se para receber a nossa newsletter
        </Text>
        <Flex flexDir={'column'} gap={4}>
          Fique por dentro das atividades que temos realizado, receba as últimas notícias e
          promoções diretamente na sua caixinha de entrada.
          <Flex gap={2}>
            <Input
              bgColor={'#E2E2E2'}
              color="#757575"
              type="email"
              placeholder="Digite o seu email..."
            />
            <Button colorScheme="blue">Submeter</Button>
          </Flex>
          <Text>Siga-nos nas redes sociais: </Text>
          <Flex gap={4}>
            <FaFacebook size={24} />
            <BsInstagram size={24} />
            <BsTwitterX size={24} />
            <BsYoutube size={24} />
          </Flex>
          <Divider orientation="horizontal" h={0.5} bgColor={'#E2E2E2'} />
          <Text color={'#92989F'}>Design with love © Kairo Esanji 2024. All right reserved</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
