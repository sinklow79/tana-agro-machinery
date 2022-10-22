// import styled from 'styled-components';
import "./App.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhatWeDo from "../components/WhatWeDo";
import Contact from "../components/Contact";
import ImplementsSection from "../components/ImplementsSection";
import News from "../components/News";
import { useCallback, useRef, useState } from "react";

const App = () => {
  // const renderCounter = useRef(0);
  // console.log(++renderCounter.current, "App");
  const [position, setPosition] = useState(0);
  const prevPos = useRef(position);

  const setPos = useCallback(
    (pos) => {
      if (prevPos.current !== pos) {
        setPosition(pos);
        prevPos.current = pos;
      }
    },
    [prevPos]
  );

  return (
    <div className=".App">
      <Navbar position={position} />
      <Hero setPos={setPos} />
      <WhatWeDo setPos={setPos} />
      <ImplementsSection setPos={setPos} />
      <News setPos={setPos} />
      <Contact setPos={setPos} />
    </div>
  );
};

export default App;
