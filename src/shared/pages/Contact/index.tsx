import { BannerMain } from '@/shared/components';
import {Box, Text, Flex, Input, Textarea, Button, Image} from '@chakra-ui/react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <>
      <BannerMain image='img.png' title='Contactos'/>
      <Box h={'auto'}>
        <Flex>
          <Box>
            <Text as={'h1'}>
            Nós amamos conhecer novas <br /> pessoas e ajudá-las, fale<br /> connosco!
            </Text>
          </Box>
          <Box> 
            <Box className='social_media'>

            </Box>
            <Box className='form'>
              <Box className='grid gap-7 grid-cols-2'>
                <Input type='text' placeholder='Nome' border={'none'} borderRadius={'0px'} borderBottom={'2px solid #4D5053'} w={'300px'}></Input>
                <Input type='text' placeholder='Email' border={'none'} borderRadius={'0px'} borderBottom={'2px solid #4D5053'} w={'300px'}></Input>
                <Input type='text' placeholder='Assunto' border={'none'} borderRadius={'0px'} borderBottom={'2px solid #4D5053'} w={'300px'}></Input>
                <Input type='text' placeholder='Telemóvel' border={'none'} borderRadius={'0px'} borderBottom={'2px solid #4D5053'} w={'300px'}></Input>
              </Box>
              <Box>
                <Textarea placeholder='Olá, eu estou interessado em saber se...' border={'none'} borderRadius={'0px'} borderBottom={'2px solid #4D5053'} h={'20vh'} marginBottom={'15px'}></Textarea>
              </Box>
              <Box display={'flex'} justifyContent={'end'}>
                <Button style={{color: 'white', background: '#292F36', width: '100px', display:'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'}}>
                  <Text>Enviar</Text>
                  <Image w={'10px'} src='seta.png'></Image>
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};