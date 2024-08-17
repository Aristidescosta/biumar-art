import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { ROUTES_FOOTER } from '@/shared/utils/constants';

import { Link } from 'react-router-dom';
import React from 'react';

export const BaseLayoutFooter: React.FC = () => {
  return (
    <Flex>
      {ROUTES_FOOTER.map((footerRoute, index) => (
        <Flex key={index} flex={1} flexDir={'column'}>
          <Text className="text-slate-700 mb-12 dark:text-slate-500">{footerRoute.label}</Text>
          <Flex flexDir={'column'} gap={4}>
            {footerRoute.routes.map((route) => (
              <Link to={route.path} key={route.path}>
                {route.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      ))}
      <Flex flex={2} flexDir={'column'}>
        <Text className="text-slate-700 dark:text-slate-500 mb-12">
          Inscreva-se para receber a nossa newsletter
        </Text>
        <Flex flexDir={'column'} gap={4}>
          Fique por dentro das atividades que temos realizado, receba as últimas notícias e
          promoções diretamente na sua caixinha de entrada.
          <Flex>
            <Input placeholder="Digite o seu email..." />
            <Button colorScheme='blue'>Submeter</Button>
          </Flex>
          <Text>Siga-nos nas redes sociais: </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
