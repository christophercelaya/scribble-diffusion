import Link from "next/link";

export default function Footer({ events }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center lil-text mt-8">
        <div className="inline-block py-3 px-4 border bg-gray-200 rounded-lg">
          🍿 :D{" "}
          <Link
            href=""
            target="_blank"
          >
           </Link>
          .
        </div>
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://openai.com" target="_blank">
          GPT-3.5 Turbo
        </Link>{" "}
        {/* by{" "}
        <Link
          href="https://chriscelaya.xyz"
          target="_blank"
        >
          chriscelaya
        </Link> */}
        ,{" "}      </div>
    </footer>
  );
}
