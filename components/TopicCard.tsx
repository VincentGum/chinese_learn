import { Box, Image, Text, Button, useToast } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';

interface TopicCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const TopicCard = ({ id, title, description, imageUrl }: TopicCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleLearnClick = () => {
    setIsLoading(true);
    // 模拟加载延迟
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Box className="ios-card" overflow="hidden" height="100%">
      <Image
        src={imageUrl}
        alt={title}
        width="100%"
        height="160px"
        objectFit="cover"
        borderRadius="md"
        mb={4}
      />
      <Text fontSize="lg" fontWeight="bold" mb={2} color="gray.900">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.600" mb={4} lineHeight="tall">
        {description}
      </Text>
      <NextLink href={`/topics/${id}`} passHref>
        <Button 
          className="ios-button" 
          width="full" 
          isLoading={isLoading}
          onClick={handleLearnClick}
        >
          Learn This Meme
        </Button>
      </NextLink>
    </Box>
  );
};

export default TopicCard;