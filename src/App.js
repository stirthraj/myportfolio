import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { motion } from "framer-motion";
import { HexColorPicker } from "react-colorful";
import "react-color-picker/index.css";
import Education from "./components/educational";
import Technical from "./components/technical";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  const background_colors = ["black", "white", "blue", "yellow"];
  const font_colors = ["white", "black", "white", "white"];
  const [color, setColor] = useState(0);
  // const [customColor, setCustomColor] = useState("black");

  return (
    <ChakraProvider>
      <div>
        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          <div className="App parallax">
            <header className="App-header">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
              >
                <h1 className="App-logo">Tirth Raj Kumar</h1>
              </motion.div>
              {/* <motion.div
                initial={{
                  opacity: 0.5,
                }}
                animation={{
                  opacity: 1,
                }}
              >
                Opacity
              </motion.div> */}
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  className="btn"
                  background={
                    background_colors[(color % background_colors.length) + 1]
                  }
                  color={background_colors[color % background_colors.length]}
                  onClick={() => setColor(color + 1)}
                >
                  Change Theme
                </Button>
              </motion.button>
              {/* <HexColorPicker color={customColor} onChange={setCustomColor} /> */}

              <div className="flex">
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quora
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gitlab
                </a>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>
            </header>
          </div>
        </Flex>

        {/* 2nd Part */}

        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          {/* <div className="parallax"> */}
          <Education />
          {/* </div> */}
        </Flex>
        {/* 3rd Part */}
        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          <div className="parallax">
            {" "}
            <Technical />
          </div>
        </Flex>
        {/* 4th Part */}
        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          {/* <div className="parallax"> */}
          <Experience />
          {/* </div> */}
        </Flex>
        {/* 5th Part */}
        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          <div className="parallax">
            <Contact />
          </div>
        </Flex>
        {/* 6th Part */}
        <Flex
          background={background_colors[color % background_colors.length]}
          // background_colors[color % background_colors.length] ||
          color={font_colors[color % font_colors.length]}
          height="100vh"
          alignItems="stretch"
          justifyContent="center"
          flexDirection="column"
        >
          <div className="parallax">
            <Contact />
          </div>
        </Flex>
        <hr />
      </div>
    </ChakraProvider>
  );
}

export default App;
