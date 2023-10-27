import React, { useState, useEffect, useRef } from "react";
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
  progressColor: "black",
  cursorColor: "black",
  hideScrollbar: false,
  container: ref
});

const loadPlayer = (opt, player, videoRef, waveformRef) => {
  player.src(opt);
  player.on("waveReady", (event) => {
    console.log("waveform: ready!");
    console.log(player.wavesurfer().waveReady);
  });
  player.on("playbackFinish", (event) => {
    console.log("waveform: playbackFinish!");
  });
  player.on("error", (event) => {
    console.log("waveform: error!");
  });
  player.on("abort", (event) => {
    console.log("waveform: abort!");
  });
  player.on("ready", (event) => {
    console.log("video.js ready");
  });
};

function VideoPlayer2({ src, videoRef, onWaveformRef }) {
  const waveformRef = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    const waveSurferOptions = formWaveSurferOptions(waveformRef.current);
    player.current = videojs(
      videoRef.current,
      {
        crossorigin: "anonymous",
        cors: "anonymous",
        playbackRates: [0.5, 1, 1.5, 2, 4],
        plugins: {
          wavesurfer: waveSurferOptions
        }
      },
      function () {
        var msg =
          "Using video.js " +
          videojs.VERSION +
          " with videojs-wavesurfer " +
          videojs.getPluginVersion("wavesurfer") +
          " and wavesurfer.js " +
          WaveSurfer.VERSION;
        videojs.log(msg);
      }
    );
  }, []);

  useEffect(() => {
    const mediaType = src.type;
    const opt = {
      src: src,
      type: mediaType
    };
    loadPlayer(opt, player.current, videoRef, waveformRef);

    // Expose the waveformRef to the parent component
    if (onWaveformRef && typeof onWaveformRef === "function") {
      onWaveformRef(waveformRef);
    }

    return () => {
      console.log("Clean player");
    };
  }, [videoRef, src]);

  return (
    <div>
      <video
        className="video-js"
        ref={videoRef}
        controls
        width="420"
        height="264"
        data-setup="{}"
      ></video>
      <div id="wave">
        <div id="wave-timeline"></div>
        <div id="waveform" ref={waveformRef}></div>
      </div>
      
    </div>
  );
}

export default VideoPlayer2;
