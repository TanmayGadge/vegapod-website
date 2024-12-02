import ButtonDark from "@/components/Button/ButtonDark";
import React from "react";

const Page = () => {
  return (
    <section className="bg-light-100 p-2">
      <div className="max-w-7xl p-4 mx-auto">
        <form action="" className="mx-auto w-fit p-2">
          <div className="mx-auto w-fit p-2">
            <label htmlFor="name" className="">
              Name:
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="p-2 rounded-sm border-2 border-opacity-40 border-black"
            />
          </div>
          <div className="mx-auto w-fit p-2">
            <label htmlFor="email" className="">
              Email:
            </label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="xyz@example.com"
              className="p-2 rounded-sm border-2 border-opacity-40 border-black"
            />
          </div>
          <div className="mx-auto w-fit p-2">
            <label htmlFor="query" className="">
              Query:
            </label>
            <br />
            <input
              type="text"
              id="query"
              placeholder="Say something"
              className="p-2 rounded-sm border-2 border-opacity-40 border-black"
            />
          </div>
          <button className="bg-primary-800  text-light-100 rounded-xl p-4 flex items-center h-12 select-none mt-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
