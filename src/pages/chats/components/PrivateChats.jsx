import IoMdSettings from "../../../icons/IoMdSettings.svg?react";

function PrivateChats() {
  return (
    <div className="flex flex-col w-90 h-full bg-white dark:bg-black border-l-1 border-black/20 dark:border-white/20">
      <div className="flex flex-row items-center gap-2 p-2">
        <span className="text-black dark:text-white font-medium">Direct messages</span>
      </div>

      <div className="w-full h-px bg-black/20 dark:bg-white/20"></div>

      <div className="flex flex-row items-center gap-2 p-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-md bg-black/10 dark:bg-white/10 text-black dark:text-white outline-none"
        />
      </div>

      <div className="flex flex-col gap-2 p-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 group h-full hover:bg-black/10 dark:hover:bg-white/10 rounded-md p-2"
          >
            <div className="relative">
              <img src="/image0.gif" alt="avatar" className="w-10 h-10 rounded-full" />
              <div className="w-4 h-4 rounded-full border-3 bg-red-500 absolute bottom-0 right-0"></div>
            </div>

            <span className="text-black dark:text-white font-medium">John Doe 666</span>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center gap-2 group h-fit mt-auto p-2 border-t-1 border-black/20 dark:border-white/20">
        <div className="relative">
          <img src="/image0.gif" alt="avatar" className="w-10 h-10 rounded-full" />
          <div className="w-4 h-4 rounded-full border-3 bg-red-500 absolute bottom-0 right-0"></div>
        </div>

        <div className="flex flex-col">
          <span className="text-black dark:text-white font-medium">John Doe 666</span>
          <span className="text-black/90 dark:text-white/50 font-regular text-[12px]">#JohnDoe666</span>
        </div>

        <div className="flex flex-col gap-2 ml-auto">
          <div className="flex flex-row items-center gap-3 bg-[#1a1a1a] rounded-xl p-2">
            <IoMdSettings className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateChats;
