import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex justify-center items-center content-center h-screen bg-gray-300 ">
      <div className="relative pt-56.25% w-full ">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          width="1900"
          height="1900"
          src="https://www.youtube.com/embed/9ZnKR7QPu_E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
