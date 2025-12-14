import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-8 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Problem Solver, Tech Enthusiast
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Sakthi Manikandan - Full Stack Developer"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Sakthi Manikandan A, a dedicated Full-Stack Developer
                specializing in{" "}
                <span className="font-bold text-white">
                  React.js, React Native, Laravel, and PostgreSQL
                </span>
                . I'm passionate about building scalable and efficient applications
                that solve real-world problems.
              </p>
              <p className="text-white">
                Currently working as a Software Developer at{" "}
                <span className="font-bold text-white">
                  Pranion Technology Ventures Private Limited
                </span>
                , I've contributed to major projects including Kalyan CLAP, Amaze ERP,
                and Camino - building everything from social media platforms to travel
                management systems and internal tools.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-blue-500 pl-4">
                  <p className="text-white">
                    I'm a Computer Science Engineering graduate from P.S.R Engineering College
                    with a CGPA of 8.4. My expertise spans across frontend development with
                    React and React Native, backend development with Laravel and PHP, and
                    working with modern tools like N8N, Superset, and Filament. I'm eager to
                    contribute my skills to create meaningful value and drive innovation.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Sakthi Manikandan A
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-semibold">Software Developer</span>
                      <span className="text-gray-400">@ Pranion Technology</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>📍 Sivakasi, Tamil Nadu, India</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
