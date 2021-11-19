import { XIcon } from '@heroicons/react/solid';

import Link from 'next/link';

import React from 'react';
import { Facebook, GitHub, Twitter } from 'react-feather';

interface MobileExpandableMenuProps {
  toggleMenuVisible: (boolean) => void;
}

export const MobileExpandableMenu: React.FC<MobileExpandableMenuProps> = ({
  toggleMenuVisible,
}) => {
  return (
    <div className="absolute z-10 w-full overflow-y-auto ">
      <div className="relative w-full h-full mobile-menu-bg transition-opacity duration-1000 ease-in-out">
        <div className="w-10/12 mx-auto ">
          <div className="grid justify-items-stretch">
            <XIcon
              onClick={() => toggleMenuVisible(false)}
              className="mt-8 mb-2 text-white justify-self-end"
              style={{ width: 24, height: 24 }}
            />
          </div>
          <div className="w-full bg-white " style={{ height: 0.32 }}></div>
          <Link href="https://launch.popcorn.network/" passHref>
            <a>
              <h1
                className="ml-3 text-4xl font-bold text-white hover:text-gray-700 font-landing"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                Token Launch Auction
              </h1>
            </a>
          </Link>
          <div
            className="w-full bg-white opacity-50"
            style={{ height: 0.72 }}
          ></div>
          <Link href="/docs/Popcorn_whitepaper_v1.pdf" passHref>
            <a>
              <h1
                className="ml-3 text-4xl font-bold text-white hover:text-gray-700 font-landing"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                Whitepaper
              </h1>
            </a>
          </Link>
          <div
            className="w-full bg-white opacity-50"
            style={{ height: 0.72 }}
          ></div>
          <Link href="/team" passHref>
            <a>
              <h1
                className="ml-3 text-4xl font-bold text-white hover:text-gray-700 font-landing"
                style={{ marginTop: 18, marginBottom: 18 }}
              >
                Team & Contributors
              </h1>
            </a>
          </Link>
          <div
            className="w-full bg-white opacity-50"
            style={{ height: 0.72 }}
          ></div>
          <div
            className="w-full grid grid-cols-4 my-5 mx-auto justify-items-center"
            style={{ marginTop: 18, marginBottom: 18 }}
          >
            <div>
              <Link href="https://github.com/popcorndao" passHref>
                <GitHub
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/PopcornDAO" passHref>
                <Facebook
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <Twitter
                  className="text-white cursor-pointer"
                  style={{ width: 33, height: 33 }}
                />
              </Link>
            </div>
            <div>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <img
                  src="/images/discord-white-thick.svg"
                  alt="discord"
                  className=" text-white cursor-pointer discord"
                  style={{ width: 33, height: 33 }}
                ></img>
              </Link>
            </div>
          </div>
          <div className="w-full bg-white" style={{ height: 0.72 }}></div>
          <div className="flex flex-row justify-evenly py-6">
            <div className="flex flex-col space-y-3 w-1/2">
              <p className="font-bold uppercase text-base font-landing text-white">
                Site
              </p>
              <Link href="/" passHref>
                <a className="text-xl text-white text-semibold">Home</a>
              </Link>
              <Link href="/about" passHref>
                <a
                  className="text-xl text-white text-semibold"
                  target="_window"
                >
                  About us
                </a>
              </Link>
              <Link href="https://medium.com/popcorndao" passHref>
                <a
                  className="text-xl text-white text-semibold"
                  target="_window"
                >
                  Blog
                </a>
              </Link>
            </div>
            <div className="ml-20 flex flex-col space-y-3 w-1/2">
              <p className="font-bold uppercase text-base font-landing text-white">
                Connect
              </p>
              <Link href="https://twitter.com/Popcorn_DAO" passHref>
                <a
                  className="text-xl text-white text-semibold"
                  target="_window"
                >
                  Twitter
                </a>
              </Link>
              <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                <a
                  className="text-xl text-white text-semibold"
                  target="_window"
                >
                  Discord
                </a>
              </Link>
              <Link href="https://github.com/popcorndao" passHref>
                <a
                  className="text-xl text-white text-semibold"
                  target="_window"
                >
                  Github
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-3 mt-10" style={{paddingBottom: 100}}>
            <p className="font-bold uppercase text-base font-landing text-white">
              Documentation
            </p>
            <Link href="/" passHref>
              <a className="text-xl text-white text-semibold">Gitbook</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};