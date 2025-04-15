import { useRef } from "react";
import SolidRightArrow from "@/icons/SolidRightArrow.svg?react";

function Chat() {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-black/80">
      <div className="flex flex-row items-center gap-2 group h-fit bg-black/20 p-2">
        <div className="relative">
          <img src="/image0.gif" alt="avatar" className="w-7 h-fit rounded-full" />
          <div className="w-2 h-2 rounded-full border-1 border-white/50 bg-red-500 absolute bottom-0 right-0"></div>
        </div>

        <div className="flex flex-col leading-3.5">
          <span className="text-black dark:text-white font-semibold text-[12px]">John Doe 666</span>
          <span className="text-black/90 dark:text-white/50 font-regular text-[10px]">State</span>
        </div>
      </div>

      <div className="flex flex-col w-full h-full bg-black/10"></div>

      <div className="flex flex-row items-center p-2 bg-black/10">
        <div className="flex flex-row items-start gap-2 bg-black/10 dark:bg-white/10 p-3 rounded-md w-full custom-scrollbar">
          <textarea
            ref={textareaRef}
            onInput={handleInput}
            placeholder="Message"
            rows={1}
            className="w-full p-2 rounded-md resize-none max-h-40 custom-scrollbar overflow-y-auto text-black dark:text-white outline-none"
          />
          <SolidRightArrow className="w-5 h-5 translate-y-1/2 text-black dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
