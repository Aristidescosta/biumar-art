import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

export const BaseLayoutRoot: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box w={'100vw'} h={'100vh'}>
      {children}
    </Box>
  );
};
