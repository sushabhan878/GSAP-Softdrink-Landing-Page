import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
const MessageSectioon = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });
  });
  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-20 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">stir up your fearless past and</h1>
            <div className="msg-text-scroll">
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>
            <h1 className="second-message">
              Your future with every gulp of perfect protien
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-20">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSectioon;
