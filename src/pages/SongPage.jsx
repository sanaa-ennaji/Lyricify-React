import axiosClient from "@/axiosClient";
import { DefaultTimeline } from "@/components/ui/Timeline";
import { Input } from "@/components/ui/input";
import { Button, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

function parseXMLLyrics(xmlData) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  const lyricElement = xmlDoc.getElementsByTagName("Lyric")[0];
  return lyricElement ? lyricElement.textContent : "Lyric not found";
}

const SongPage = () => {
  const [showLyrics, setShowLyrics] = useState(null);
  let { state } = useLocation();
  const [loading, setLoading] = useState(true);
  async function getSongslyric(state) {
    setLoading(true);
    // setInput(data);
    console.log(state.info.artist);
    console.log("async function");
    try {
      const response = await axiosClient.get(
        `/SearchLyricDirect?artist=${state.info.artist}&song=${state.info.song}`
      );
      const lyric = parseXMLLyrics(response.data);
      setShowLyrics(lyric);
      console.log("lyric received ", showLyrics);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getSongslyric(state);
  }, []);
  console.log("Received info:", state.info.artist);
  console.log("Lyrics:", showLyrics);
  return (
    <div className=" bg-blue-gray-900">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-5 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {state.info.song}
              <span className="sm:block py-2"> By {state.info.artist}. </span>
            </h1>
          </div>
          <div className=" mt-36 grid grid-cols-2 grid-rows-1 gap-8">
            <div className=" text-center">
              <h1 className=" font-extrabold text-3xl pb-3">Lyrics</h1>
              <p className="">
                {loading ? (
                  <Spinner
                    className="h-16 w-16 text-gray-900/50 justify-self-end"
                    color="green"
                  />
                ) : (
                  showLyrics
                )}
              </p>
            </div>
            <div className="w-[32rem]">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon color="white" />
                    <Typography
                      variant="h6"
                      color="white"
                      className="leading-none"
                    >
                      Titre
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-300"
                    >
                      {state.info.song}
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-3">
                    <TimelineIcon color="white" />
                    <Typography
                      variant="h6"
                      color="white"
                      className="leading-none"
                    >
                      Album
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-300"
                    >
                      {state.info.artist}
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader className="h-3">
                    <TimelineIcon color="white" />
                    <Typography
                      variant="h6"
                      color="white"
                      className="leading-none"
                    >
                      Artist
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal text-gray-300"
                    >
                      {state.info.artist}
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SongPage;
