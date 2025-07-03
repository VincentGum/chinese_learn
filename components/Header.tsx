import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header = () => {
  return (
    <Box as="header" bg="white" shadow="ios" sticky top="0" zIndex="sticky">
      <Flex align="center" maxW="1200px" mx="auto" px={4} h="16">
        <NextLink href="/" passHref>
          <Text fontSize="xl" fontWeight="bold" color="primary" cursor="pointer">
            中文流行文化学习
          </Text>
        </NextLink>
        
        <Spacer />
        
        <Flex gap={6} align="center">
          <NextLink href="/" passHref>
            <Text color="gray.800" cursor="pointer" fontWeight="medium">首页</Text>
          </NextLink>
          <NextLink href="/topics" passHref>
            <Text color="gray.800" cursor="pointer" fontWeight="medium">热门话题</Text>
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