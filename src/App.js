import React from "react";
import { Formik, Form } from "formik";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import { ChakraTheme } from "@chakra-ui/react";
import * as Yup from "yup";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProjectsSection from "./components/ProjectsSection";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ContactMeSection from "./components/ContactMeSection";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const App = () => {
  return (
    <>
      <ChakraBaseProvider>
        <Header />
        <LandingSection />

        <Box as="section" id="projects"></Box>
        <Box id="projects"></Box>

        <ProjectsSection />
        <SimpleGrid columns={[1, 2, 3]} spacing={8} />
        <Box as="section" id="contactme"></Box>
        <Box id="contactme"></Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={8} />
        <ContactMeSection />
        <SimpleGrid columns={[1, 2, 3]} spacing={8} />
      </ChakraBaseProvider>
    </>
  );
};

export default App;
