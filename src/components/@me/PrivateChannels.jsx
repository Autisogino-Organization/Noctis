import IoMdSettings from "@/icons/IoMdSettings.svg?react";

function PrivateChats() {
  return (
    <div className="flex flex-col w-90 h-full justify-start items-start bg-black/5 dark:bg-black/90">
      <div className="flex flex-row items-center px-4 pt-3">
        <span className="text-black dark:text-white font-medium text-[18px]">Direct messages</span>
      </div>

      <div className="flex flex-row p-2 w-full justify-center">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md w-full bg-black/10 dark:bg-white/10 text-black dark:text-white outline-none"
        />
      </div>

      <div className="flex flex-col p-2 overflow-y-auto w-full [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 group w-full h-full hover:bg-black/10 dark:hover:bg-white/10 rounded-md p-2 transition-all
              duration-100 cursor-pointer"
          >
            <div className="relative">
              <img src="/image0.gif" alt="avatar" className="w-10 h-10 rounded-full" />
              <div className="w-4 h-4 rounded-full border-3 border-white/50 bg-red-500 absolute bottom-0 right-0"></div>
            </div>

            <div className="flex flex-col leading-4.5">
              <span className="text-black dark:text-white font-semibold text-[14px]">John Doe 666</span>
              <span className="text-black/90 dark:text-white/50 font-regular text-[11px]">State</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center gap-2 group w-full h-15 mt-auto p-2 bg-black/10">
        <div className="flex flex-row items-center w-full h-fit gap-2 hover:bg-black/40 rounded-md p-1 transition-all duration-200 cursor-pointer">
          <div className="relative">
            <img src="/image0.gif" alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="w-3 h-3 rounded-full border-3 border-white/50 bg-red-500 absolute bottom-0 right-0"></div>
          </div>

          <div className="flex flex-col leading-4.5">
            <span className="text-black dark:text-white font-semibold text-[14px]">John Doe 666</span>
            <span className="text-black/90 dark:text-white/50 font-regular text-[11px]">@JohnDoe666</span>
          </div>
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
