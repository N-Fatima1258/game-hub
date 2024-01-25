import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";



const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

//Skeleton ===> placeholder for an image that is being loaded
