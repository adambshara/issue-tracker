import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      {/* <Heading>{issue.title}</Heading> */}
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        {/* <Text>{issue.createdAt.toDateString()}</Text> */}
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        {/* <ReactMarkdown>{issue.description}</ReactMarkdown> */}
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
