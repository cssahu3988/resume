const VideoPlayer = ({ src }) => {
    return (
      <video width="100%" controls autoPlay>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

export default VideoPlayer;
