import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Divider, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

// 详细主题数据
const topicDetails = [
  {
    id: 1,
    title: "内卷 (Involution)",
    imageUrl: "https://picsum.photos/id/237/800/500",
    vocabulary: [
      { word: "内卷", pinyin: "nèi juǎn", translation: "involution, over-competition" },
      { word: "竞争", pinyin: "jìng zhēng", translation: "competition" },
      { word: "压力", pinyin: "yā lì", translation: "pressure" }
    ],
    grammar: "\"Involution\" is a noun that can be used as a subject or object. For example: \"Nowadays, involution in the workplace is very serious.\"",
    examples: [
      { chinese: "考研内卷越来越激烈，分数线逐年提高。", english: "The involution in postgraduate entrance exams is becoming more intense, with cutoff scores increasing year by year." },
      { chinese: "孩子们的教育内卷让家长们喘不过气。", english: "The educational involution of children makes parents feel overwhelmed." }
    ],
    culture: "\"Involution\" originated from sociological concepts and became popular on the Chinese internet after 2020, describing a meaningless phenomenon of excessive competition. Young people use this term to express their helplessness towards the high-pressure competition in modern society."
  },
  // 其他主题的详细数据可以类似添加
];

export default function TopicDetail() {
  const router = useRouter();
  const { id } = router.query;
  const topic = topicDetails.find(item => item.id === Number(id)) || topicDetails[0];

  return (
    <Container maxW="800px" py={8} px={4}>
      <VStack spacing={6} align="stretch">
        <HStack justify="flex-start" mb={4}>
          <Button 
            as={NextLink} 
            href="/" 
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>}
            variant="outline"
          >
            Back to Home
          </Button>
        </HStack>

        <Heading as="h1" size="xl" color="gray.900">{topic.title}</Heading>
        
        <Image
          src={topic.imageUrl}
          alt={topic.title}
          borderRadius="ios"
          objectFit="cover"
          width="100%"
          height="300px"
        />

        <Box className="ios-card">
          <Heading as="h2" size="md" mb={4} color="primary">Key Vocabulary</Heading>
          {topic.vocabulary.map((item, index) => (
            <Box key={index} mb={3}>
              <Text fontWeight="bold">{item.word} ({item.pinyin})</Text>
              <Text color="gray.600">{item.translation}</Text>
            </Box>
          ))}
        </Box>

        <Box className="ios-card">
          <Heading as="h2" size="md" mb={3} color="primary">Grammar Point</Heading>
          <Text>{topic.grammar}</Text>
        </Box>

        <Box className="ios-card">
          <Heading as="h2" size="md" mb={3} color="primary">Example Sentences</Heading>
          {topic.examples.map((example, index) => (
            <Box key={index} mb={4}>
              <Text mb={1}>{example.chinese}</Text>
              <Text color="gray.600">{example.english}</Text>
            </Box>
          ))}
        </Box>

        <Box className="ios-card">
          <Heading as="h2" size="md" mb={3} color="primary">Cultural Background</Heading>
          <Text lineHeight="tall">{topic.culture}</Text>
        </Box>
      </VStack>
    </Container>
  );
}