import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import WaveSurfer from "wavesurfer.js";
import Wavesurfer from "videojs-wavesurfer/dist/videojs.wavesurfer.js";
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";

const formWaveSurferOptions = (ref) => ({
  backend: "MediaElement",
  displayMilliseconds: false,
  debug: true,
  waveColor: "#336699",
  progressColor: "purple",
  cursorColor: "black",
  hideScrollbar: false,
  width: 500,
  container: ref
});

const VideoWave = ({ isFilePicked=true, selectedFile }) => {
  console.log("Start to render <WaveUrlPlayer>");
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  useEffect(() => {
    if (isFilePicked === true) {
      setPlay(false);
     
      const options = formWaveSurferOptions(waveformRef.current);
      if (wavesurfer.current === null) {
        wavesurfer.current = WaveSurfer.create(options);
      }

      wavesurfer.current.load(selectedFile);
      wavesurfer.current.on("play", function () {
        setPlay(true);
      });
      wavesurfer.current.on("pause", function () {
        setPlay(false);
      });

      wavesurfer.current.on("ready", function () {
        console.log("Ready to draw the waveform");
      });
      wavesurfer.current.on("waveform-ready", function () {
        console.log("After draw the waveform");
      });
    }
    return () => {
      if (wavesurfer.current) {
        console.log("destory wavesurfer");
        wavesurfer.current.empty();
        // wavesurfer.current.destroy();
      }
    };
  }, [isFilePicked, selectedFile]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
  };

  return (
    <div>
      {console.log("Rendered <waveform>")}
      <button className="button1" onClick={handlePlayPause}>
        {playing ? "Press to Pause" : "Press to Play"}
      </button>
      <div style={{
        width:'55vw',
      }} id="waveform" ref={waveformRef}></div>
    </div>
  );
};

export default VideoWave;
