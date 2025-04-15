import MessageCircle from "../../../icons/MessageCircle.svg?react";
import MdMessage from "../../../icons/MdMessage.svg?react";
import MdGroups from "../../../icons/MdGroups.svg?react";
import FaFile from "../../../icons/FaFile.svg?react";
import ActivityHeartbeat from "../../../icons/ActivityHeartbeat.svg?react";
import FaFacebook from "../../../icons/FaFacebook.svg?react";
import FaInstagram from "../../../icons/FaInstagram.svg?react";
import FaTwitter from "../../../icons/FaTwitter.svg?react";
import FaYoutube from "../../../icons/FaYoutube.svg?react";

function Landing() {
  return (
    <div className="flex flex-col relative w-full h-fit bg-day-primary dark:bg-night-primary">
      <div className="flex flex-row items-center justify-between px-15 py-3">
        <div className="flex flex-row items-center gap-3">
          <MessageCircle className="w-10 h-10 text-day-secondary dark:text-night-secondary" />
          <h1 className="text-2xl font-semibold text-black dark:text-white">Platica</h1>
        </div>

        <div className="flex-row gap-5 hidden md:flex text-black text-lg dark:text-white font-medium ml-20">
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <div className="hidden md:flex flex-row gap-3 font-medium text-black dark:text-white">
          <a href="/dashboard" className="shadow-[0_0_5px_0px] shadow-black/20 dark:shadow-white/20 px-4 py-1 rounded-md">
            Login
          </a>
          <a href="/register" className="bg-day-secondary text-white px-4 py-1 rounded-md">
            Register
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-black/20 dark:bg-white/20"></div>

      <div className="flex flex-col justify-center items-center px-10 py-3 gap-3 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white text-center">Connect. Chat. Communicate.</h1>
        <p className="text-gray-700 dark:text-gray-400 text-lg md:text-2xl font-light w-full md:w-1/2 text-center">
          Join our modern chat platform for instant messaging, communities, and seamless communication. Create your own servers or
          chat privately with friends.
        </p>
      </div>

      <div id="features" className="flex flex-col justify-center items-center w-full px-10 py-3 gap-3 mt-20 mb-10">
        <h1 className="text-4xl font-bold text-black dark:text-white">Features</h1>
        <span className="w-full text-gray-700 dark:text-gray-400 text-lg md:text-2xl text-center font-light mb-5">
          Discover all the features that make our chat platform perfect for any type of communication.
        </span>

        <div className="flex flex-row flex-wrap justify-center w-[80%] items-center gap-5">
          <div
            className="flex flex-col justify-center items-center gap-2 w-fit h-fit shadow-[0_0_4px_0px] shadow-black/20 dark:shadow-white/20 px-5 py-3
              rounded-xl bg-white/20 dark:bg-black/20"
          >
            <div className="flex flex-row items-center gap-4">
              <MdMessage className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
              <h1 className="text-2xl font-bold text-black dark:text-white">Private & Group Chats</h1>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-lg font-light w-90 text-center">
              Chat with friends or create your own server to chat with your friends.
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-2 w-fit h-fit shadow-[0_0_4px_0px] shadow-black/20 dark:shadow-white/20 px-5 py-3
              rounded-xl bg-white/20 dark:bg-black/20"
          >
            <div className="flex flex-row items-center gap-4">
              <MdGroups className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
              <h1 className="text-2xl font-bold text-black dark:text-white">Server Communities</h1>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-lg font-light w-90 text-center">
              Create your own server to chat with your friends.
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-2 w-fit h-fit shadow-[0_0_4px_0px] shadow-black/20 dark:shadow-white/20 px-5 py-3
              rounded-xl bg-white/20 dark:bg-black/20"
          >
            <div className="flex flex-row items-center gap-4">
              <FaFile className="w-6 h-6 text-day-secondary dark:text-night-secondary" />
              <h1 className="text-2xl font-bold text-black dark:text-white">Media Sharing</h1>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-lg font-light w-90 text-center">Share media with your friends.</p>
          </div>

          <div
            className="flex flex-col justify-center items-center gap-2 w-fit h-fit shadow-[0_0_4px_0px] shadow-black/20 dark:shadow-white/20 px-5 py-3
              rounded-xl bg-white/20 dark:bg-black/20"
          >
            <div className="flex flex-row items-center gap-4">
              <ActivityHeartbeat className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
              <h1 className="text-2xl font-bold text-black dark:text-white">Real Time Experience</h1>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-lg font-light w-90 text-center">Share media with your friends.</p>
          </div>
        </div>
      </div>

      <header
        id="about"
        className="flex flex-row flex-wrap justify-center items-start w-full h-fit px-10 py-10 gap-10 bg-day-tertiary dark:bg-night-tertiary
          text-white"
      >
        <div className="flex flex-col justify-center items-start gap-3 w-fit">
          <div className="flex flex-row items-center gap-3">
            <MessageCircle className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
            <h1 className="text-[18px] font-semibold">Platica</h1>
          </div>
          <span className="text-[13px] font-light w-90">
            A modern chat platform for instant messaging, communities, and seamless communication.
          </span>

          <div className="flex flex-row items-center gap-3">
            <FaFacebook className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
            <FaInstagram className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
            <FaTwitter className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
            <FaYoutube className="w-7 h-7 text-day-secondary dark:text-night-secondary" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 mr-20">
          <span className="text-[20px] font-semibold">Product</span>
          <span className="text-[14px] font-light">Feature</span>
          <span className="text-[14px] font-light">Download</span>
          <span className="text-[14px] font-light">Security</span>
        </div>

        <div className="flex flex-col items-start gap-3">
          <span className="text-[20px] font-semibold">Resources</span>
          <span className="text-[14px] font-light">Documentation</span>
          <span className="text-[14px] font-light">API</span>
          <span className="text-[14px] font-light">Support</span>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center w-full h-fit pb-5 gap-5 text-white bg-day-tertiary dark:bg-night-tertiary">
        <div className="w-[90%] h-px bg-white/20"></div>
        <span className="text-[13px] font-light">All rights reserved. Copyright © 2025 Platica.</span>
      </div>
    </div>
  );
}

export default Landing;
