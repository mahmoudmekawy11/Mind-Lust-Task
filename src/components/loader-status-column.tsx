import React from "react";
import Skeleton from "@mui/material/Skeleton";

const LoaderStatusColumn = () => {
  return (
    <div
      className={`flex-1 min-w-[260px] border border-gray-400 sm:min-w-[300px] p-2 rounded-md h-full flex flex-col`}
    >
      <div className="text-center font-bold mb-3 p-3 border-b border-gray-400">
        <div className="flex justify-center">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
            }}
            width="40%"
          />
        </div>
      </div>
      <div className="space-y-3 px-2  flex flex-col overflow-y-auto h-full">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="border border-gray-200 p-3  bg-white shadow-md cursor-pointer rounded-md space-y-3" key={index}>
            <div className="flex justify-center pb-2 border-b border-gray-300 w-full">
              <Skeleton
                variant="text"
                sx={{
                  fontSize: "1rem",
                }}
                width='80%'
              />
            </div>
            <Skeleton
              variant="text"
              sx={{
                fontSize: "1rem",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "1rem",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "1rem",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "1rem",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoaderStatusColumn;
