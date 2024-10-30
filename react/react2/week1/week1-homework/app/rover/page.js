"use client";
import React, { useEffect, useState } from "react";
const API_KEY = "EeSfTBChJ8VYja2AH2LetV3iDAGAaAd7hT14qCfZ";

const RoverElement = ({ date, src, roverName }) => {
  return (
    <div className="max-w-sm mx-auto bg-[#262b40] border border-white rounded-lg shadow-md overflow-hidden">
      <img className="h-96 w-full" src={src} />
      <div className="text-center">
        <p className="font-semibold text-lg">{roverName}</p>
        <p className="italic text-sm"> On {date}</p>
      </div>
    </div>
  );
};
export default function RoverPhoto() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roverPhotos, setRoverPhotos] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const apiResponse = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`
        );
        if (!apiResponse.ok) {
          throw new Error(`Error : ${apiResponse.statusText}`);
        }
        const roverPicture = await apiResponse.json();
        setRoverPhotos(roverPicture);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRoverPhotos();
  }, []);
  return (
    <>
      <h1 className="text-3xl text-center font-bold my-6">Mars Rover Photos</h1>
      <div className="min-h-screen w-full flex items-center justify-center">
        {loading && <p>Loading Rover Photos...</p>}
        {error && <p style={{ color: "red" }}>Error : {error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-6">
            {roverPhotos.photos.map((item, index) => (
              <RoverElement
                key={`pic-${index}`}
                src={item.img_src}
                date={item.earth_date}
                roverName={item.rover.name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
