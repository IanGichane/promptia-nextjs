import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover and Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        hello my name is Ian
      </p>
      {/* Feed component */}
      <Feed/>
    </section>
  );
}
