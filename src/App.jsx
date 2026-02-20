import { useRef } from "react";
import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);

  const scrollToPage2 = () => {
    page2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPage3 = () => {
    page3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <MusicPlayer />
      <Page1 onComplete={scrollToPage2} />
      <div ref={page2Ref}>
        <Page2 onScrollToNext={scrollToPage3} />
      </div>
      <div ref={page3Ref}>
        <Page3 />
      </div>
    </div>
  );
}

export default App;
