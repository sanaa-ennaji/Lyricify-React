import { DefaultTimeline } from "@/components/ui/Timeline";
import { Input } from "@/components/ui/input";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useLocation } from "react-router-dom";

const SongPage = () => {
  let location = useLocation();
  const info = location.state?.info;
  // console.log(info);
  console.log("Received info:", location.state);
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-5 h-screen">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {info}
              <span className="sm:block py-2"> By {info}. </span>
            </h1>
          </div>
          <div className=" mt-36 grid grid-cols-2 grid-rows-1 gap-8">
            <div className=" text-center">
              <h1 className=" font-extrabold text-3xl pb-3">Lyrics</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                placeat quis! Nostrum veniam mollitia quibusdam odio libero,
                ratione sequi excepturi architecto quod incidunt nihil expedita
                fuga eos cumque! Corrupti odit at hic expedita quis sed, fugit
                sint animi eaque? Voluptatibus eos ut eaque cum id voluptatem
                assumenda debitis saepe excepturi, aperiam facere. Aliquid id
                itaque atque dignissimos, voluptatum magnam qui praesentium
                commodi? Exercitationem ipsam nam optio reiciendis qui fugiat
                illum cum beatae. Veritatis sequi id voluptate, laudantium,
                quibusdam facilis dolor quaerat atque ducimus, delectus cumque!
                Veniam nulla aspernatur soluta. Debitis quod, ducimus, repellat
                sequi provident quam velit accusantium, sapiente doloremque
                expedita amet tempore laboriosam id quaerat quisquam magni neque
                ullam asperiores dolore explicabo perferendis tenetur?
                Exercitationem ipsa obcaecati a dolor.
              </p>
            </div>
            <DefaultTimeline />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SongPage;
