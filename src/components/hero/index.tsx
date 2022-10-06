import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { BackgroundCircles } from "../";

export function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hello, my name is Matondo Julien", "But you can call me Emji"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{`< ${text} />`}</span>
        <Cursor cursorColor="red" />
      </h1>
    </div>
  );
}
