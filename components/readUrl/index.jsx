import { useRouter } from 'next/dist/client/router';

export const ReadUrl = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <div className="flex flex-col  justify-center items-center content-center min-h-screen bg-gray-800 ">
        {!router.isReady ? (
          <div className="text-4xl text-yellow-300 font-extrabold">
            loading...
          </div>
        ) : (
          <>
            <div className="relative pt-56.25% w-full ">
              <iframe
                className="absolute top-0 left-0 w-full h-full "
                width="1900"
                height="1900"
                src={`https://www.youtube.com/embed/${id ? id : '4lfQXyv734E'}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
        <DlLink id={id} />
      </div>
    </>
  );
};
