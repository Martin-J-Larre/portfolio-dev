import { useEffect, useState } from "react";
import "./about.css";

export const AboutIntervalText = () => {
  const [loopNum, setLoopNum] = useState(0); //
  const [isDeleting, setIsDeleting] = useState(false); //
  const [text, setText] = useState('');//
  const [delta, setDelta] = useState(300 - Math.random() * 100); //
  const periodTime = 2000; //
  const toRotate = ["Frontend Developer", "Backend Developer", "MERN Fullstack developer"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta);
    return () => { clearInterval(ticker)}
  }, [text]);
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta( prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(periodTime);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  
    return (
      <>
        <h3><span className='wrap'>{text}</span></h3>
      </>
    )
    };
