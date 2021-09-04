import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;
  return (
    <div className="flex justify-center items-center content-center h-screen bg-gray-300 ">
      <div className="relative pt-56.25% w-full ">
        <iframe
          className="absolute top-0 left-0 w-full h-full "
          width="1900"
          height="1900"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
