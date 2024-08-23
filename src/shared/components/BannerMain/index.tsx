import {Box, Flex, Text} from '@chakra-ui/react';


interface IPropsBannerMain {
  image: string
  title: string
}

export const BannerMain = ( { image, title }: IPropsBannerMain ) => {
  return ( 
    <Box h={'70vh'} bgColor={'red'}>
      <Box  h={'382px'} w={'100%'} bg={`url(${image}) center / cover no-repeat`} >
        <Flex justifyContent={'center'}>
          <Box h={'216px'} w={'406px'} bgColor={'#292F36'} borderRadius={'20px'} pos={'relative'} top={'35vh'} cursor={'pointer'}>
            <Flex justifyContent={'center'} alignItems={'center'} h={'100%'} >
              <Text as='h1' color={'white'} fontSize={'5xl'} fontWeight={'bold'} >{title}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};