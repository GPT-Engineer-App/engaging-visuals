import { Box, Button, Container, Flex, Heading, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Flex as="nav" position="sticky" top="0" bg="gray.800" zIndex="banner" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md" color="white">Brand</Heading>
        <Flex>
          <Link px={3} py={2} href="#hero" color="white" _hover={{ color: "brand.700" }}>Home</Link>
          <Link px={3} py={2} href="#features" color="white" _hover={{ color: "brand.700" }}>Features</Link>
          <Link px={3} py={2} href="#testimonials" color="white" _hover={{ color: "brand.700" }}>Testimonials</Link>
          <Link px={3} py={2} href="#cta" color="white" _hover={{ color: "brand.700" }}>Contact</Link>
        </Flex>
      </Flex>
      <Box id="hero" bgImage="url('/hero-background.jpg')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" height="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Heading size="2xl" color="white" textShadow="2px 2px 2px rgba(0,0,0,0.6)">Innovate with Us</Heading>
          <Text fontSize="xl" color="white" textShadow="1px 1px 2px rgba(0,0,0,0.5)">Leading the future of industry with you.</Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Box>
      <Container id="features" maxW="container.xl" py={10}>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box p={5} shadow="md" borderWidth="1px" flex="1 1 45%" m={5}>
            <Heading size="md">Feature One</Heading>
            <Text mt={4}>Description of feature one.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1 1 45%" m={5}>
            <Heading size="md">Feature Two</Heading>
            <Text mt={4}>Description of feature two.</Text>
          </Box>
        </Flex>
      </Container>
      <Box id="testimonials" bg="pink.100" py={10}>
        <Container maxW="container.md">
          <Heading size="lg" mb={5}>What our customers say</Heading>
          <Flex overflow="hidden" position="relative">
            {/* Testimonial items */}
          </Flex>
        </Container>
      </Box>
      <Box id="cta" bg="teal.500" color="white" py={10}>
        <Container centerContent>
          <Heading size="lg">Ready to start?</Heading>
          <Text fontSize="xl" my={3}>Join us now and make a difference!</Text>
          <Button size="lg" rightIcon={<FaStar />} colorScheme="yellow">Sign Up</Button>
        </Container>
      </Box>
      <Box as="footer" bg="gray.700" color="gray.200" py={5}>
        <Container centerContent>
          <Text>&copy; {new Date().getFullYear()} Brand. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;