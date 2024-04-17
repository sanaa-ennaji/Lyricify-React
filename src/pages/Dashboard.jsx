import { SimpleCard } from "@/components/ui/Simplecard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Dashboard = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Find your favourites Songs.
            <span className="sm:block">
              {" "}
              Search By Lyrics,Title or Artist name.{" "}
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Lyrics" className="text-black" />
              <Button type="submit" variant="outline" className="text-black">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container grid grid-cols-3 grid-rows-1 gap-4 pb-10">
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </div>
    </section>
  );
};

export default Dashboard;
