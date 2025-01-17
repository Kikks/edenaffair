import { useInView } from 'framer-motion';
import { useRef } from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';
import AnimatedHeader from '../animated-header';

const OurStory = () => {
  const smallScreen = useMediaQuery('(max-width: 768px)');
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="Our Story"
      className="flex w-full flex-col items-center justify-center p-5"
    >
      <div className="container w-full pt-20">
        <div ref={ref} className="relative z-10 h-14 w-full sm:h-24 lg:h-28">
          <AnimatedHeader
            title="Our Story"
            visible={isInView}
            className="font-chillax text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>

      <div className="container flex w-full flex-col items-start justify-center space-y-5 py-20 md:flex-row md:space-x-10 md:space-y-0">
        <div className="order-2 flex max-w-[500px] flex-col items-start space-y-5 md:ml-10">
          <h3
            data-aos="fade-up"
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            Groom
          </h3>
          <div className="space-y-3">
            <p data-aos="fade-up">
              It was during a retreat with our church's follow-up unit that I
              first saw her. It was a day that left me feeling something inside,
              a spark I couldn't quite explain. But at the time, I was in a
              relationship, so I brushed it off, not thinking much of it.
            </p>
            <p data-aos="fade-up">
              However, life has a way of unfolding differently than we expect.
              My previous relationship didn't work out, and we went our separate
              ways. Then came another retreat where we were asked about our
              relationship statuses. I remembered that spark from earlier, but
              she mentioned she was in a relationship. I thought little more of
              it.
            </p>
            <p data-aos="fade-up">
              Months later, I had a moment of prayer at 1am, when I saw her in a
              vision. She was crying, her heart filled with pain, and I felt
              compelled to reach out. I messaged her, sharing what I had seen,
              and offered prayer and comfort. She later confirmed that what I
              had seen was true—she had been struggling with some personal
              matters, particularly heart break after her previous relationship
              ended.
            </p>
            <p data-aos="fade-up">
              This was the beginning of our friendship. She opened up more, and
              we prayed together. I reassured her that if it was God's will for
              her relationship, it would work out; if not, it would end. Through
              this, we established strong boundaries, both agreeing that we were
              friends without any romantic intentions.
            </p>
            <p data-aos="fade-up">
              Months passed, and one day, as I reflected on our friendship, I
              couldn't help but wonder why someone as beautiful, intelligent,
              and full of the Holy Spirit as she was, would only be my friend. I
              began praying, seeking guidance from God about the possibility of
              something more.
            </p>
            <p data-aos="fade-up">
              I had already fasted for 120 days earlier, praying specifically
              for my marriage, and now, I was asking for clarity. But this
              journey wasn't easy. She would be warm one moment, distant the
              next, and it was beginning to stress me out. So, I decided to
              leave it all in God's hands.
            </p>
            <p data-aos="fade-up">
              My friends noticed and encouraged me, saying she was the perfect
              match. In my heart, I wasn't convinced she was ready, so I prayed
              for confirmation. That's when God reminded me of that spark I'd
              felt when I first saw her. He led me here, and my prayer became
              clear: "God, give me Dorcas, or I die"—I repeated it over and
              over.
            </p>
            <p data-aos="fade-up">
              Then came Reboot Camp, a time of clarity and answered prayers.
              During this event, I received a clear revelation that she was the
              one. And to confirm it, God even showed me the color of the gown
              she would be wearing on the final day of the camp.
            </p>
            <p data-aos="fade-up">
              I was terrified to see her in that gown. What if she didn't wear
              it? What would I do then? But when I finally saw her, wearing the
              exact gown I had seen in my prayer, I couldn't contain my joy. I
              shouted, "God be praised!" It may have seemed strange to those
              around me, but I knew in my heart that God had orchestrated this
              moment.
            </p>
            <p data-aos="fade-up">
              After the retreat, we went to see a movie together. It was
              December 19th 2023 when I finally asked her, "Would you want to be
              my partner, to walk this journey together, and to achieve all that
              God has called us to be?" She said yes, and just five minutes
              later, we both knew, without a doubt, that it was God who had
              worked everything out.
            </p>
            <p data-aos="fade-up">
              One year later, I can honestly say I've never experienced such
              peace in my life. She is the one. My best friend, my partner, the
              love of my life.
            </p>
          </div>
        </div>

        <div
          data-aos={smallScreen ? '' : 'fade-in'}
          className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center md:sticky md:top-40 md:!mr-20"
        >
          <figure className="relative aspect-square w-[90%] overflow-hidden rounded-full md:size-full">
            <img
              src={
                smallScreen
                  ? 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_500,w_500/v1737147044/edenaffair/mjzwo6da14ifz67spity.jpg'
                  : 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_1000,w_1000/v1737147044/edenaffair/mjzwo6da14ifz67spity.jpg'
              }
              alt=""
              className="size-full select-none object-cover"
            />

            <div className="absolute inset-0 flex size-full items-center justify-center" />
          </figure>
          <div className="absolute bottom-[12%] right-[12%] z-20 size-8 rounded-full bg-gradient-to-r from-[#FFFBF2] to-[#ffcc56] md:bottom-[5%] md:right-[5%] md:size-14" />
        </div>
      </div>

      <div className="container flex w-full flex-col items-start justify-center space-y-5 py-20 md:flex-row md:space-x-10 md:space-y-0">
        <div className="order-2 flex max-w-[500px] flex-col items-start space-y-5 md:order-1">
          <h3
            data-aos="fade-up"
            className="z-10 text-center font-pacifico text-2xl font-medium text-black md:text-5xl"
          >
            Bride
          </h3>
          <div className="space-y-3">
            <p data-aos="fade-up">
              We were in the same service unit in church but just as
              acquaintances. We met in church, several units functions,
              exchanged pleasantries and that was it.
            </p>
            <p data-aos="fade-up">
              Until March 2023, My previous relationship had ended the previous
              year but I was having a hard time. Interestingly, only my family
              and closest circle knew so imagine my surprise when I woke up one
              morning in March to several messages from him. He shared the
              vision he had that night about me going hurting and prayed for me.
              At that point, I wasn't interested in sharing so I just validated
              the vision and thanked him.
            </p>
            <p data-aos="fade-up">
              He didn't stop there, he started calling to check up on me and
              pray with me, I eventually shared with him about 2/3 weeks after
              that first message and we began talking as friends.
            </p>
            <p data-aos="fade-up">
              We got closer and months later he made known that he would love
              for us to be more than friends, but I made several attempts at
              setting boundaries. I wasn't open to anything more than friendship
              then.
            </p>
            <p data-aos="fade-up">
              Months down the line, we got much closer, I got to know him
              better, we talked a whole lot 😂, and he was always present, Kind
              and very helpful. He became a constant in my life and I had come
              to realize I loved having him around. My friends were already
              rooting for us at this point 😂
            </p>
            <p data-aos="fade-up">
              The relationship talk came up again and we both agreed to table
              it, set aside time to pray, using reboot camp in Dec as a major
              reference. I remember him saying "I promise not to stress you
              about it again, I'll rather have you even as just friends that
              lose you completely, but if and when you are ready, you have to
              let me know"
            </p>
            <p data-aos="fade-up">
              I recall the last day of reboot camp, he saw me and the first
              thing he said was "ah, I saw you and I knew you'd be wearing this
              outfit" For context, he hadn't even seen the outfit physically
              before, I only ever wore it once before and he just saw pictures
              😂.
            </p>
            <p data-aos="fade-up">
              So when he said that I was wowed, I had prayed, heard from God and
              had peace but I wasn't going to bring it up either.
            </p>
            <p data-aos="fade-up">
              Few days after reboot camp, 19th Dec he came around and we saw
              this Christian movie, Breath of life and the relationship between
              Anna and Elijah was just beautiful. After the movie, he said "I
              really want us to be like that and do great things together, I
              want to be that man for you, your partner. I want to support you,
              take care of you and make you happy. I want to love you and I want
              to be your person. I want you to be my person too, so will you let
              me do that?"
            </p>
            <p data-aos="fade-up">
              Lo and behold, I said Yes. He was a bit taken back too because he
              asked if I really said yes, and I said "Yes now, why are you
              repeating it" We both laughed and I have to confess, I was a
              little dramatic because 5 mins later I asked him "Does this mean I
              am your girlfriend now?" He said yes and I started rolling on my
              bed in part laughter, part happiness and part realization saying
              "God abeg oo, I am someone's girlfriend again"
            </p>
            <p data-aos="fade-up">
              It's been a little over a year since I said that first Yes and it
              has been the best time of my life. He is the funniest, most
              amazing, most supportive and kindest man (Generous to a fault but
              I really mean kind, kind at heart) I know. I said a second yes to
              journey life with him and I am very excited for all that is to
              come.
            </p>
            <p data-aos="fade-up">
              He is my best friend, my partner, my confidante, and my MAN.
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto flex aspect-square w-[90%] max-w-[400px] items-center justify-center md:sticky md:top-40 md:order-2 md:mx-0">
          <figure
            data-aos={smallScreen ? '' : 'fade-in'}
            data-aos-delay={smallScreen ? 0 : 400}
            className="relative aspect-square w-[90%] overflow-hidden rounded-full md:size-full"
          >
            <img
              src={
                smallScreen
                  ? 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_500,w_500/v1737147044/edenaffair/iwrpbvn0p7anojswf1hc.jpg'
                  : 'https://res.cloudinary.com/kikks/image/upload/c_fill,g_north,h_1000,w_1000/v1737147044/edenaffair/iwrpbvn0p7anojswf1hc.jpg'
              }
              alt=""
              className="size-full select-none object-cover"
            />

            <div className="absolute inset-0 flex size-full items-center justify-center" />
          </figure>
          <div className="absolute bottom-[12%] left-[12%] z-20 size-8 rounded-full bg-gradient-to-l from-[#FFFBF2] to-[#ffcc56] md:bottom-[5%] md:left-[5%] md:size-14" />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
