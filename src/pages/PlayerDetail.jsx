import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { soccerPlayers } from "../assets/data";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const foundPlayer = soccerPlayers.find(
      (player) => player.id === parseInt(id)
    );
    setPlayer(foundPlayer);
    console.log(foundPlayer);
  }, [id]);

  if (!player) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />
      <div className="sp mx-auto max-w-7xl px-2 py-10 lg:px-0">
        <div className="overflow-hidden">
          <div className="mb-9 pt-4 md:px-6 md:pt-7 lg:mb-2 lg:p-8 2xl:p-10 2xl:pt-10">
            <div className="items-start justify-between lg:flex lg:space-x-8">
              <div className="mb-6 items-center justify-center overflow-hidden md:mb-8 lg:mb-0 xl:flex">
                <div className="w-full xl:flex xl:flex-row-reverse">
                  <div className="relative mb-2.5 w-full shrink-0 overflow-hidden rounded-md border md:mb-3 xl:w-[480px] 2xl:w-[650px]">
                    <div className="relative flex items-center justify-center">
                      <img
                        alt={player.name}
                        src={player.imageUrl}
                        width={650}
                        height={590}
                        className="rounded-lg object-cover md:h-[300px] md:w-full lg:h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-col lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                <div className="pb-5">
                  <h2 className="text-xl font-semibold md:text-xl xl:text-4xl">
                    Name : {player.name}
                  </h2>
                  <p className="mt-8  font-semibold text-3xl">
                    Nationality : {player.nationality}
                  </p>
                </div>
                <div className="mt-6 pt-0.5 text-2xl">
                  <h4 className="text-15px mb-3 font-normal capitalize text-opacity-70">
                    Position : {player.position}
                  </h4>
                </div>
                <div className="pb-2" />
                <div className="pt-6 ">
                  <h3 className=" mb-3 font-semibold sm:text-base lg:mb-3.5">
                    Description :
                  </h3>
                  <p className="text-xl">{player.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayerDetail;
