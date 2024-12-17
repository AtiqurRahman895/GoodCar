import { useEffect } from 'react';

const YouTubeVideo = () => {
  useEffect(() => {
    // Load the YouTube Iframe API script
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      // Create the YouTube player instance
      new window.YT.Player('yt-player', {
        videoId: 'NPH3XPNuR70', // Replace with your video ID
        playerVars: {
          autoplay: 1,
          loop: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1, // Minimizes YouTube logo
          playlist: 'NPH3XPNuR70', // Loop the same video
        },
      });
    };
  }, []);

  return (
    <div
      id="yt-player"
      className="min-h-[100%] min-w-[100%] object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
    ></div>
  );
};

export default YouTubeVideo;
