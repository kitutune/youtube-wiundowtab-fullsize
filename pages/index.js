import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();

  const id = router.query.id;
  return (
    <>
      <div className="flex flex-col  justify-center items-center content-center min-h-screen bg-gray-800 ">
        <div className="relative pt-56.25% w-full ">
          <iframe
            className="absolute top-0 left-0 w-full h-full "
            width="1900"
            height="1900"
            src={`https://www.youtube.com/embed/${id ? id : '4lfQXyv734E'}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {!id ? (
          <div className="border-8　 text-2xl bg-gray-800 text-center">
            <a
              href="YoutubeFullSizeWindow.zip"
              download="YoutubeFullSizeWindow.zip"
            >
              <p className="pt-1 text-yellow-50 hover:text-yellow-300">
                DL Google Extensions（Unzip required）
              </p>
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
