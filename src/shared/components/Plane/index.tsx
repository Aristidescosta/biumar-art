import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

interface IPlaneProps {
  toLeft?: boolean;
}

export const Plane: React.FC<IPlaneProps> = ({ toLeft }) => {
  return (
    <Flex pos={'relative'} justifyContent={toLeft ? 'flex-end' : undefined}>
      <Image boxSize={'80px'} src="Vector.png" alt="Imagens de linhas tracejadas" />
      <Image
        pos={'absolute'}
        top={toLeft ? undefined : -4}
        left={toLeft ? undefined : 20}
        bottom={-4}
        right={20}
        boxSize={'30px'}
        src="plane.png"
        alt="Imagens de linhas tracejadas"
        className={toLeft ? 'rotate-180' : undefined}
      />
    </Flex>
  );
};
