import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log(" interval has been setup");

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the currrent time: {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
