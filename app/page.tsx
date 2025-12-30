import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">

        <img
          src="https://avatars.githubusercontent.com/alen20780"
          alt="Alen"
          className="w-24 h-24 rounded-full mx-auto border-2 border-white"
        />

        <h1 className="text-2xl font-bold">Alen Sarungbam</h1>

        <p className="text-gray-400">
          Software Developer | NIC Manipur
        </p>

        <div className="space-y-4">
          <a
            href="https://github.com/alen20780"
            target="_blank"
            className="block w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sarungbam-alen-meetei"
            target="_blank"
            className="block w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://alen20780.github.io/Alen"
            target="_blank"
            className="block w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
          >
            Portfolio
          </a>

          <a
            href="mailto:sarungbam.alen.meetei@gmail.com"
            className="block w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
          >
            Email Me
          </a>
        </div>

        <p className="text-xs text-gray-500 pt-6">
          Hosted on Vercel
        </p>

      </div>
    </main>
  );
}