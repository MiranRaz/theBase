import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default function VideoPlayer() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="C0DPdy98e4c"
        onClose={() => setOpen(false)}
      />
      <button className="details-trailer-text" onClick={() => setOpen(true)}>
        play trailer
      </button>
    </div>
  );
}
