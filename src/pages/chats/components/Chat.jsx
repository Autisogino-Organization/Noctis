import { useRef } from "react";

function Chat() {
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-black border-l-1 border-black/20 dark:border-white/20">
      <div className="flex flex-row items-center gap-2 group h-fit hover:bg-black/10 dark:hover:bg-white/10 rounded-md p-2">
        <div className="relative">
          <img src="/image0.gif" alt="avatar" className="w-6 h-6 rounded-full" />
          <div className="w-2 h-2 rounded-full border-1 bg-red-500 absolute bottom-0 right-0"></div>
        </div>

        <span className="text-black dark:text-white font-medium">John Doe 666</span>
      </div>

      <div className="w-full h-px bg-black/20 dark:bg-white/20"></div>

      <div className="flex flex-col w-full h-full"></div>

      <div className="flex flex-row items-center gap-2 p-2 border-t border-black/20 dark:border-white/20">
        <textarea
          ref={textareaRef}
          onInput={handleInput}
          placeholder="Message"
          rows={1}
          className="w-full p-2 rounded-md resize-none max-h-40 overflow-y-auto bg-black/10 dark:bg-white/10 text-black dark:text-white outline-none"
        />
      </div>
    </div>
  );
}

export default Chat;
