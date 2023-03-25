import React, { useEffect, useRef } from "react";

import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    label: "Contact",
    url: "mailto: hello@example.com",
  },
  {
    label: "GitHub",
    url: "https://github.com",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com",
  },
  {
    label: "Medium",
    url: "https://medium.com",
  },
  {
    label: "stackOverFlow",
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section;`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a key={social.label} href={social.url}>
                  {social.label}
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                id="projects-section"
                onClick={handleClick("projects")}
              >
                {" "}
                Projects
              </a>
              <a
                href="/#contactme"
                id="contactme-section"
                onClick={handleClick("contactme")}
              >
                {" "}
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
