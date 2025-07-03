import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = () => {
  return (
    <Box as="header" bg="white" shadow="ios" position="sticky" top="0" zIndex="sticky">
      <Flex align="center" maxW="1200px" mx="auto" px={4} h="16">
        <NextLink href="/" passHref>
          <Text fontSize="xl" fontWeight="bold" color="primary" cursor="pointer">
            Chinese Pop Culture Learning
          </Text>
        </NextLink>
        
        <Spacer />
        
        <Flex gap={6} align="center">
          <NextLink href="/" passHref>
            <Text color="gray.800" cursor="pointer" fontWeight="medium">Home</Text>
          </NextLink>
          <NextLink href="/topics" passHref>
            <Text color="gray.800" cursor="pointer" fontWeight="medium">Hot Topics</Text>
          </NextLink>
          <Button size="sm" variant="solid">
            EN/中
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;