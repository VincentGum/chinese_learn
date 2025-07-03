import { Box, Container, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react';
import TopicCard from '../components/TopicCard';

// 示例热梗数据
const topics = [
  {
    id: 1,
    title: "内卷 (Involution)",
    description: "描述一种过度竞争的社会现象，大家都付出更多努力却没有相应回报。",
    imageUrl: "https://picsum.photos/id/237/600/400"
  },
  {
    id: 2,
    title: "躺平 (Lying Flat)",
    description: "年轻人对抗内卷的一种生活态度，选择降低欲望，减少工作和竞争。",
    imageUrl: "https://picsum.photos/id/1025/600/400"
  },
  {
    id: 3,
    title: "绝绝子 (Awesome)",
    description: "网络流行的赞美词，表示非常好、太棒了，常用于美食、风景或优秀的人。",
    imageUrl: "https://picsum.photos/id/325/600/400"
  },
  {
    id: 4,
    title: "芭比Q (Barbecue)",
    description: "谐音梗，原指烧烤，网络用语中表示“完了”、“糟糕了”的意思。",
    imageUrl: "https://picsum.photos/id/488/600/400"
  },
  {
    id: 5,
    title: "栓Q (Thank You)",
    description: "源自英语“Thank You”的谐音，带有幽默或无奈的感谢意味。",
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