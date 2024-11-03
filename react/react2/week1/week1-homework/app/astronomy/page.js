import React from "react";

export default async function AstronomyPic() {
  const API_KEY = "EeSfTBChJ8VYja2AH2LetV3iDAGAaAd7hT14qCfZ";

  const apiResponse = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!apiResponse.ok) {
    throw new Error("Astronomy picture not found");
  }
  const astronomyPic = await apiResponse.json();
  return (
    <div className="min-h-screen w-full">
      {astronomyPic && (
        <div className="flex flex-col items-center justify-center gap-5 py-5">
          <img
            className="border-2 h-96 w-96"
            src={astronomyPic.url}
            alt={astronomyPic.title}
          ></img>
          <div className="max-w-2xl bg-[#262b40] py-5 px-6 mx-3">
            <p className="text-md mx-auto">{astronomyPic.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
