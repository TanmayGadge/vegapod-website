
import React from "react";
import Link from "next/link";

const NotFound = () => {



  return (
    <section className="bg-light-100 p-8">
      <div className="mx-w-7xl mx-auto w-fit space-y-8">
        <h1 className="text-5xl font-semibold w-fit">Oops, Wrong turn...</h1>
        <p className="w-1/2 pb-8">
          Looks like you've wandered off the beaten path. Our team is working to
          get you back on track and find what you're looking for.
        </p>

        <Link
          className="rounded-lg border border-primary-800 p-2 "
          style={{
            boxShadow: "0 2px 2px  #012347",
          }}
          href={"/"}

        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
