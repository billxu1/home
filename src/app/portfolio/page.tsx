import Head from "next/head";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A web app that does amazing things using Next.js and Tailwind CSS.",
    image: "/project1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A microservice backend project built with Node.js and Express.",
    image: "/project2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "An automation tool for improving workflows with Python and AWS.",
    image: "/project3.jpg",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Bill Xu's Portfolio" />
      </Head>

      <main className="bg-neutral-950 text-neutral-100 min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            My Portfolio
          </h1>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">Some of My Work</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {projects.map(project => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-400">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
