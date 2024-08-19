import { Box, Text, Button } from '@chakra-ui/react';

export const PromotionalVideo = () => {
  return (
    <Box className="relative w-full h-64 bg-black text-white flex items-center justify-center">
      <Box className="absolute inset-0 bg-black opacity-50"></Box>
      <Box className="relative z-10 text-center">
        <Text fontSize="xl" className="font-bold">
          Video Promocional
        </Text>
        <Text>
          Assista ao nosso vídeo promocional e maravilhe-se com o que temos preparado para você!
        </Text>
        <Button mt={4} colorScheme="yellow">
          Assista Agora
        </Button>
      </Box>
    </Box>
  );
};
