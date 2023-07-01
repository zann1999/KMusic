import { createContext, useState, useMemo } from "react";
import { listSound } from "../../PlayMusic";

export const SingContext = createContext();

function SingProvider({ children }) {
  const [song, setsong] = useState(0);
  const [sound, setsound] = useState(listSound[song]);
  const [Play, setplay] = useState(false);
  const [Play2, setplay2] = useState(false);
  const [activePlay, setactivePlay] = useState("active");
  const [activePause, setactivePause] = useState("");
  const audio = useMemo(() => {
    let audi = new Audio(sound.music);

    return audi;
  }, [sound]);
  //
  return (
    <SingContext.Provider
      value={[
        [song, setsong],
        [sound, setsound],
        [Play, setplay],
        [Play2, setplay2],
        [activePlay, setactivePlay],
        [activePause, setactivePause],
        audio,
      ]}
    >
      {children}
    </SingContext.Provider>
  );
}

export default SingProvider;
