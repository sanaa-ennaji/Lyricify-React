import axiosClient from "@/axiosClient";
import { SimpleCard } from "@/components/ui/Simplecard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Spinner } from "@material-tailwind/react";

function parseSearchLyricResults(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  // Get all SearchLyricResult nodes
  const results = xmlDoc.getElementsByTagName("SearchLyricResult");
  const lyricResults = [];

  // Loop through each result
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    // Extract the relevant data for each result
    const trackId = result.getElementsByTagName("TrackId")[0]?.textContent;
    const artist = result.getElementsByTagName("Artist")[0]?.textContent;
    const song = result.getElementsByTagName("Song")[0]?.textContent;
    const songUrl = result.getElementsByTagName("SongUrl")[0]?.textContent;

    // Push an object with the data into an array
    lyricResults.push({
      trackId,
      artist,
      song,
      songUrl,
    });
  }

  return lyricResults;
}

const Dashboard = () => {
  // `http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=${data}`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showSongs, setShowSongs] = useState(null);
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getSongsfil(data) {
    setLoading(true);
    setInput(data);
    try {
      const response = await axiosClient.get(
        `/SearchLyricText?lyricText=${data}`
      );
      // .then(console.log(response.data));
      const lyricResults = parseSearchLyricResults(response.data);
      setShowSongs(lyricResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const onSubmit = (data) => {
    console.log(data.text);
    getSongsfil(data.text);
    console.log(showSongs);
  };

  // useEffect(() => {
  //   getSongsfil(input);
  // }, [input]);

  console.log(input);

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
              <form
                className="flex w-full max-w-sm items-center space-x-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  placeholder="Lyrics"
                  className="text-black"
                  {...register("text")}
                />
                <Button type="submit" variant="outline" className="text-black">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" container grid grid-cols-3 grid-rows-1 gap-4 pb-10">
        {loading ? (
          <Spinner
            className="h-16 w-16 text-gray-900/50 justify-self-end"
            color="green"
          />
        ) : (
          showSongs &&
          showSongs.map((item, index) => (
            <SimpleCard
              key={index}
              info={item}
              description={item.description}
            />
          ))
        )}
        {/* <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard /> */}
      </div>
    </section>
  );
};

export default Dashboard;
