import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

export const BaseLayoutRoot: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box w={'100vw'} h={'100vh'} className='px-16 py-4'>
      {children}
    </Box>
  );
};
