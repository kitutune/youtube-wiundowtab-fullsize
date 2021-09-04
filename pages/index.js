export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center content-center h-screen bg-gray-300 ">
      <div className="relative pt-56.25% w-full ">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          width="1900"
          height="1900"
          src="https://www.youtube.com/embed/4lfQXyv734E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="border-8 text-xs  md:text-4xl lg:text-6xl">
        <a
          href="YoutubeFullSizeWindow.zip"
          download="YoutubeFullSizeWindow.zip"
        >
          DL Google Extensions（Unzip required）
        </a>
      </div>
    </div>
  );
}
