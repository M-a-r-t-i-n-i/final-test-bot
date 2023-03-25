import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      bg="#fff"
      borderRadius={6}
      boxShadow="xl"
      maxW="sm"
      mx="auto"
      w="full"
      p={4}
      spacing={4}
    >
      <Image
        alt={title}
        borderRadius="md"
        boxSize="sm"
        objectFit="cover"
        src={imageSrc}
      />
      <VStack alignItems="flex-start" spacing={0}>
        <Heading as="h3" fontSize="lg" fontWeight="medium" lineHeight="shorter">
          {title}
        </Heading>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </VStack>
      <HStack alignSelf="flex-end">
        <Text color="gray.500" fontSize="sm">
          Learn more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
