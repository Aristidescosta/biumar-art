import { Box, Image } from '@chakra-ui/react';

export const ImagesSection = () => {
  return (
    <Box className="grid grid-cols-2 gap-2">
      <Image src="image1.png" alt="Nossos produtos" className="rounded-lg" />
      <Image src="image2.png" alt="Nossos palhaços para a festa" className="rounded-lg" />
      <Image
        src="image3.png"
        alt="Nossos serviços, menino com algodão doce"
        className="col-span-2 rounded-lg"
      />
    </Box>
  );
};
