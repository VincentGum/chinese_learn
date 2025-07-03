import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import TopicCard from '../components/TopicCard';

// 示例热梗数据
const topics = [
  {
    id: 1,
    title: "内卷 (Involution)",
    description: "Describes a social phenomenon of excessive competition where everyone puts in more effort without corresponding rewards.",
    imageUrl: "https://picsum.photos/id/237/600/400"
  },
  {
    id: 2,
    title: "躺平 (Lying Flat)",
    description: "A life attitude of young people against involution, choosing to lower desires and reduce work and competition.",
    imageUrl: "https://picsum.photos/id/1025/600/400"
  },
  {
    id: 3,
    title: "绝绝子 (Awesome)",
    description: "A popular internet praise word meaning very good or awesome, often used for food, scenery, or outstanding people.",
    imageUrl: "https://picsum.photos/id/325/600/400"
  },
  {
    id: 4,
    title: "芭比Q (Barbecue)",
    description: "A homophonic梗 (gěng, meme), originally referring to barbecue, used in internet slang to mean "it's over" or "something bad happened".",
    imageUrl: "https://picsum.photos/id/488/600/400"
  },
  {
    id: 5,
    title: "栓Q (Thank You)",
    description: "Derived from the homophony of English "Thank You", with a humorous or helpless tone of gratitude.",
    imageUrl: "https://picsum.photos/id/635/600/400"
  }
];

export default function Home() {
  return (
    <Container maxW="1200px" py={8} px={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={6}>
          <Heading as="h1" size="2xl" mb={4} color="gray.900">
            Learn Chinese Through Pop Culture
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px" mx="auto">
            Explore popular Chinese internet memes and culture while learning practical vocabulary and grammar in a fun way!
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}
              title={topic.title}
              description={topic.description}
              imageUrl={topic.imageUrl}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}