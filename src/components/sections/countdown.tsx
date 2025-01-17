import { useEffect, useState } from 'react';

const Countdown = () => {
  const [complete, setComplete] = useState(false);
  const [timer, setTimer] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  const startTimer = () => {
    const countDownTime = new Date('Feb 1, 2025 10:30:00').getTime();
    const x = setInterval(() => {
      const currentTime = new Date().getTime();

      const distance = countDownTime - currentTime;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        setComplete(true);
        return;
      }

      function pad(number: number) {
        if (Number(number) < 10) {
          return `0${number}`;
        }
        return `${number}`;
      }

      setTimer({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <section className="countdown-bg flex h-screen max-h-[800px] w-full items-center py-20">
      {complete ? (
        <div className="min-h-[300px] w-full" />
      ) : (
        <div className="container flex flex-col items-center space-y-5">
          <h3
            data-aos="fade-up"
            className="text-center font-pacifico text-xl font-medium text-white md:text-3xl"
          >
            We're tying the knot on the 11th of November, 2023
          </h3>

          <div
            className="flex w-full items-start justify-center space-x-2 md:space-x-10"
            data-aos="zoom-in"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-bold text-white md:text-5xl lg:text-7xl">
                {timer.days}
              </h1>
              <span className="text-center font-medium text-white md:text-lg">
                day(s)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-medium text-white md:text-5xl lg:text-7xl">
                :
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-bold text-white md:text-5xl lg:text-7xl">
                {timer.hours}
              </h1>
              <span className="text-center font-medium text-white md:text-lg">
                hour(s)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-medium text-white  md:text-5xl lg:text-7xl">
                :
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-bold text-white  md:text-5xl lg:text-7xl">
                {timer.minutes}
              </h1>
              <span className="text-center font-medium text-white md:text-lg">
                minute(s)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-medium text-white md:text-5xl lg:text-7xl">
                :
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-chillax text-3xl font-bold text-white md:text-5xl lg:text-7xl">
                {timer.seconds}
              </h1>
              <span className="text-center font-medium text-white md:text-lg">
                second(s)
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Countdown;
