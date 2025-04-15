import { useState } from "react";
import MdMessage from "@/icons/MdMessage.svg?react";

function Servers() {
  const [tooltipInfo, setTooltipInfo] = useState({ visible: false, text: "", position: { x: 0, y: 0 } });

  const showTooltip = (text, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipInfo({
      visible: true,
      text,
      position: {
        x: rect.left + 65,
        y: rect.top + 14,
      },
    });
  };

  const hideTooltip = () => {
    setTooltipInfo({ ...tooltipInfo, visible: false });
  };

  return (
    <>
      {tooltipInfo.visible && (
        <div
          className="fixed bg-black text-white text-[15px] rounded-md px-2 py-1 z-50 pointer-events-none transform"
          style={{
            left: `${tooltipInfo.position.x}px`,
            top: `${tooltipInfo.position.y}px`,
          }}
        >
          {tooltipInfo.text}
        </div>
      )}

      <div className="flex flex-col gap-3 w-18 h-full bg-white dark:bg-black p-2">
        <div
          className="flex flex-row items-center w-14 h-14 gap-3 bg-[#1a1a1a] rounded-xl p-2 justify-center group hover:brightness-120 transition-all
            duration-300 cursor-pointer"
        >
          <MdMessage className="w-7 h-7 text-white group-hover:scale-110 transition-all duration-300" />
        </div>

        <div className="w-full h-px bg-black/20 dark:bg-white/20"></div>

        <div className="flex flex-col gap-1 h-fit w-full overflow-y-auto [&::-webkit-scrollbar]:hidden z-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="w-14 h-14 p-[2px] cursor-pointer"
              onMouseEnter={(e) => showTooltip("Pruebaaaaaaaaaaaa", e)}
              onMouseLeave={hideTooltip}
            >
              <img
                src="/image0.gif"
                className="w-full h-full object-cover rounded-xl"
                style={{
                  borderRadius: "12px",
                  transitionProperty: "border-radius",
                  transitionDuration: "100ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderRadius = "50%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderRadius = "12px";
                }}
              />
            </div>
          ))}
        </div>

        {/*
        <div className="w-full h-px bg-black/20 dark:bg-white/20"></div>

        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex flex-row items-center gap-3 bg-[#1a1a1a] rounded-xl p-2">
            <IoMdSettings className="w-10 h-10 text-white" />
          </div>
        </div>
        */}
      </div>
    </>
  );
}

export default Servers;
