import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import threeFriends from "../assets/images/threeFriends.png";
import memories from "../assets/images/memories.png";
import starBg from "../assets/images/starImg.png";
import photos from "../assets/photos/photos";

import { FaArrowCircleRight } from "react-icons/fa";

import useSound from "use-sound";
import matargasti from "../assets/sound/matargasti.mp3";

const HomeScreen = () => {
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [photo, setPhoto] = useState(false);

  const [playPause, setPlayPause] = useState(false);

  const music = new Audio(matargasti);

  useEffect(() => {
    if (photo) {
      const picNo = Math.ceil(Math.random() * (92 - 1) + 1);
      setTimeout(() => {
        setPhoto(photos[picNo]);
      }, 3000);
    }
  }, [photo]);

  useEffect(() => {
    if (playPause) {
      music.play();
      setPhoto(require("../assets/photos/photosDone/newYear.png"));
    } else {
      music.pause();
      setName(false);
    }
  }, [playPause]);

  const submitHandler = (e) => {
    e.preventDefault();

    setName(temp);
  };
  return (
    <Flex>
      {name ? (
        <Flex
          bgColor="white"
          width="100vw"
          height="650px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          bgImage={`url(${starBg})`}
        >
          <Box
            px="5px"
            py="3px"
            bgColor="#D1A4FF"
            borderRadius="10px"
            boxShadow="dark-lg"
            mb="20px"
          >
            <Heading fontSize="20px">Explore your memories,{name}</Heading>
          </Box>

          <Flex
            bgColor="black"
            width="90vw"
            height="500px"
            justifyContent="center"
            align="center"
          >
            {!photo ? (
              <Flex>
                <Button
                  bgColor="#DCBCFD"
                  mt="23px"
                  onClick={() => {
                    setPlayPause(true);
                  }}
                >
                  Tap to Start
                </Button>
              </Flex>
            ) : (
              <Image src={photo} objectFit="contain" />
            )}
          </Flex>

          <Button
            bgColor="#DCBCFD"
            mt="23px"
            onClick={() => {
              setPlayPause(false);
            }}
          >
            Go Back
          </Button>
        </Flex>
      ) : (
        <Flex
          bgColor="white"
          width="100vw"
          height="650px"
          justifyContent="center"
          alignItems="center"
          direction="column"
          bgImage={`url(${starBg})`}
        >
          <Image
            src={memories}
            objectFit="contain"
            boxSize="300px"
            position="relative"
            top="-10px"
          />

          <Flex
            position="relative"
            width="320px"
            direction="column"
            bgColor="#F7F7F7"
            py="10px"
            borderRadius="10px"
            boxShadow="xl"
            top="-80px"
            justifyContent="center"
            alignItems="center"
          >
            <form onSubmit={submitHandler}>
              <FormLabel px="75px">Enter Your First Name</FormLabel>
              <Input
                bgColor="white"
                placeholder="Your Name"
                borderColor="#6524A5"
                px="100px"
                _placeholder={{ color: "#6524A5", fontSize: "15px" }}
                width="300px"
                mb="20px"
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
              />

              <Button
                type="submit"
                width="120px"
                bgColor="#6524A5"
                color="white"
                ml="90px"
                rightIcon={<FaArrowCircleRight />}
                _focus={{ color: "black", bgColor: "#DBB7FF" }}
              >
                Continue
              </Button>
            </form>
          </Flex>

          <Image
            src={threeFriends}
            boxSize="500px"
            objectFit="contain"
            position="relative"
            top="-50px"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default HomeScreen;
