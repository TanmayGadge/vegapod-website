"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidepanel = ({ pages }) => {
  const [sideOpen, setSideOpen] = useState(false);

  function toggleSidebar() {
    setSideOpen((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <>
      <div className={`lg:hidden rounded-xl`}>
        <button className="p-2" onClick={toggleSidebar}>
          {!sideOpen ? (
            <svg
              id="hamburger-icon"
              class="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              aria-hidden="true"
              class="w-5 h-5 "
              viewBox="0 0 48 48"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M 35.548828 4.9511719 A 1.50015 1.50015 0 0 0 34.263672 5.6523438 L 23.5 21.349609 L 12.736328 5.6523438 A 1.50015 1.50015 0 0 0 11.462891 4.9824219 A 1.50015 1.50015 0 0 0 10.263672 7.3476562 L 21.681641 24 L 10.263672 40.652344 A 1.50015 1.50015 0 1 0 12.736328 42.347656 L 23.5 26.650391 L 34.263672 42.347656 A 1.50015 1.50015 0 1 0 36.736328 40.652344 L 25.318359 24 L 36.736328 7.3476562 A 1.50015 1.50015 0 0 0 35.548828 4.9511719 z"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {sideOpen && (
        <div className=" fixed left-5 top-20  bg-white p-2 rounded-3xl lg:hidden">
          <div className="bg-light-100 h-full w-full p-4 rounded-3xl">
            <ul className="h-full flex flex-col p-4 text-2xl overflow-scroll">
              {pages.map((page) => {
                return (
                  <Link
                    key={page.id}
                    href={page.href}
                    className="hover:underline underline-offset-4 p-4 "
                    onClick={toggleSidebar}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidepanel;
