import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="pdiv1">
        <h1 id="ph1">Hi, I am Hasan Ullah Khan</h1>
        <h2 id="ph2">FRONTEND DEVELOPER</h2>
        <div>
          <Image src={`/image/profile.jpg`} alt="" width={400} height={400}></Image>
        <p id="para">Aspiring Software Developer with a passion for learning and building software solutions. Proficient in basic programming concepts and currently enhancing skills in languages like [ TypeScript, Tailwind-Css and Css]. Eager to contribute to development teams, solve problems, and grow in the field of
          software development. Motivated to work on real-world projects and collaborate in a dynamic environment</p>
          </div>
        <a href="/contact"><button>Contact me</button></a>
      </div>
    </div>
  );
}
