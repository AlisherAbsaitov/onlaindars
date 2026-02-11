import React from "react";
import darsOne from "../videos/darsone.mp4"
import darstwo from "../videos/darstwo.mp4"
export default function VideoSection() {
  const videos = [
    { id: 1, src: darsOne, title: "Beautiful Moment 1" },
    { id: 2, src: darstwo, title: "Beautiful Moment 2" },
  ];

  return (
    <main className="flex-1">
      <div className="max-w-6xl px-4 py-10 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-primary">
          My Favorite Videos
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => {
            console.log(video);
            
            return (
              <div
                key={video.id}
                className="overflow-hidden bg-white shadow-lg rounded-2xl"
              >
                <video controls className="object-cover w-full h-56">
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="p-4 font-medium text-center">{video.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
