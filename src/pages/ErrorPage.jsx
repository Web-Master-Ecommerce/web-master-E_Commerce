import React from "react";

const Page404 = () => {
  return (
    <section className="py-10 bg-white font-serif">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 text-center">
            <div
              className="h-96 bg-center bg-no-repeat flex items-center justify-center"
              style={{
                backgroundImage:
                  "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
              }}
            >
              <h1 className="text-[80px] -mt-90 text-red-500">Error 404</h1>
            </div>

            <div className="-mt-12">
              <h3 className="text-2xl mb-2 text-gray-700">Look like you're lost</h3>
              <p className="mb-4 text-gray-500">The page you are looking for is not available!</p>
              <a
                href="/"
                className="inline-block px-5 py-2 bg-green-600 text-white"
              >
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
