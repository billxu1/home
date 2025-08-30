// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          About Me
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hi, I&apos;m Bill 👋</h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            I&apos;m a software engineer passionate about building things that make
            people&apos;s lives easier. My experience spans backend systems, APIs,
            automation, and modern web development.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Outside of coding, I enjoy exploring new ideas, contributing to open
            source, and constantly pushing myself to learn new technologies.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            This site is a collection of my work, thoughts, and experiments. 🚀
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/me.jpg" // put your image in public/me.jpg
              alt="Bill Xu"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
