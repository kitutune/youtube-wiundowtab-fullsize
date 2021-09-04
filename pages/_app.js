import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="border-8　 text-2xl h-screen bg-gray-800 text-center">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
