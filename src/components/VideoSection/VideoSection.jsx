import React, { useState, useRef, useEffect } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setIsPlaying(false);
      }
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <section className="video-section">
      <div className="video-section-content">
        <div className="video-container">
          <div
            className="video-wrapper"
            onClick={togglePlay}
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            <video
              ref={videoRef}
              src="/planet-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="video-element"
              onPlay={handlePlay}
              onPause={handlePause}
            />

            <div
              className={`play-button-overlay ${isPlaying ? "playing" : "paused"}`}
            >
              {isPlaying ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  width="80px"
                  height="80px"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  width="100px"
                  height="100px"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="text-container">
          <h2 className="video-heading">
            How Planetary Data Helps Us
            <br />
            Understand Space
          </h2>
          <p className="video-paragraph">
            Planetary science goes beyond images. Comparing{" "}
            <span className="highlight">mass</span>,{" "}
            <span className="highlight">diameter</span>,<br />
            <span className="highlight">gravity</span>, and{" "}
            <span className="highlight">density</span>, we gain insight into how
            planets form, behave,
            <br />
            and interact within the solar system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;