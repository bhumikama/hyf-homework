"use client";
import { Image } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const API_KEY = "SRBznWgCq2YasRPIDHpRCIDTLfwc5ANCtsTVsiYD";

function EpicPicture() {
  const router = useRouter();
  const [epicImage, setEpicImage] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  useEffect(() => {
    if (!date) {
      setLoading(false);
      return;
    }
    const fetchEpicImage = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiResponse = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${API_KEY}`
        );
        if (!apiResponse.ok) {
          throw new Error(`Error : ${apiResponse.statusText}`);
        }
        const epicImageResult = await apiResponse.json();
        if (epicImageResult.length > 0) {
          const imgUrl = `https://api.nasa.gov/EPIC/archive/natural/${epicImageResult[0].date
            .split(" ")[0]
            .replace(/-/g, "/")}/png/${
            epicImageResult[0].image
          }.png?api_key=${API_KEY}`;
          setEpicImage(imgUrl);
        } else {
          console.log("No images were found for this date");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEpicImage();
  }, [date]);

  const handleClick = () => {
    router.push("/epic");
    setEpicImage("");
  };
  return (
    <div>
      {!date && (
        <p className="text-center text-xl font-semibold">
          Please enter the date in this format YYYY-MM-DD as a query parameter
        </p>
      )}
      {error && <p style={{ color: "red" }}>Error : {error}</p>}
      {epicImage && (
        <div className="flex flex-col justify-center items-center gap-5 py-6 my-4">
          <h3 className="text-2xl font-semibold text-center">{`Epic Image Generated for "${date}"`}</h3>
          <div className="w-96 h-96">
            <img
              className="w-full bg-[#262b40]"
              src={epicImage}
              alt={`Epic image for the date : ${date}`}
            />
          </div>
          <Button variant="outlined" onClick={handleClick}>
            Change Date
          </Button>
        </div>
      )}
    </div>
  );
}

export default EpicPicture;
