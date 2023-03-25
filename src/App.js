import React from "react";
// import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { Alert } from "@chakra-ui/react";
// import Card from "./components/Card";
// import ContactMeSection from "./components/ContactMeSection";
// import Footer from "./components/Footer";
// import FullScreenSection from "./components/FullScreenSection";
// import Header from "./components/Header";
// import LandingSection from "./components/LandingSection";
// import ProjectsSection from "./components/ProjectsSection";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const App = () => {
  return (
    <>
      <Box px={4} py={8} mx="auto" maxWidth="800px"></Box>
      <Box
        as="header"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        <Box>
          <Heading size="lg">My Website</Heading>
        </Box>
        <Box>
          <Button as="a" href="#" variant="ghost" mr={4}>
            Social Media
          </Button>
          <Button as="a" href="#projects" variant="ghost" mr={4}>
            Projects
          </Button>
          <Button as="a" href="#contact" variant="ghost">
            Contact
          </Button>
        </Box>
      </Box>
      <Box
        as="section"
        d="flex"
        justifyContent="center"
        alignItems="center"
        mb={16}
      >
        <Box mr={8}>
          <img
            src="avatar.jpg"
            alt="Avatar"
            style={{ borderRadius: "50%", maxWidth: "200px" }}
          />
        </Box>
        <Box>
          <Heading size="xl" mb={4}>
            Hi, I'm John Doe
          </Heading>
          <Text fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit justo ac ultrices cursus. Maecenas auctor tortor vel quam
            dictum, in bibendum nulla viverra. Duis ullamcorper, tellus eget
            eleifend condimentum, enim felis vestibulum odio, eget efficitur est
            sapien vel neque. Sed sagittis fringilla condimentum. Pellentesque
            finibus euismod odio, eu hendrerit turpis.
          </Text>
        </Box>
      </Box>
      <Box as="section" id="projects" mb={16}></Box>
      <Heading size="xl" mb={8}>
        Featured Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} />
      <Box bg="gray.200" borderRadius="md" p={4}>
        <Heading size="md" mb={2}>
          Project 1
        </Heading>
        <Text fontSize="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit justo ac ultrices cursus.
        </Text>
      </Box>
      <Box bg="gray.200" borderRadius="md" p={4}>
        <Heading size="md" mb={2}>
          Project 2
        </Heading>
        <Text fontSize="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          suscipit justo ac ultrices cursus.
        </Text>
      </Box>
      <Box bg="gray.200" borderRadius="md" p={4}>
        <Heading size="md" mb={2}>
          Project 3
        </Heading>
        <Text fontSize="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sus
        </Text>
      </Box>
    </>
  );
};

export default App;
