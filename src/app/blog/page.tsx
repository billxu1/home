import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Sample blog post data
const popularPosts = [
  { id: 1, title: "Understanding React Hooks", excerpt: "A deep dive into React Hooks and best practices.", image: "/blog1.jpg" },
  { id: 2, title: "Next.js 13 Tips", excerpt: "Tips and tricks for building apps with Next.js 13.", image: "/blog2.jpg" },
  { id: 3, title: "CSS Grid vs Flexbox", excerpt: "When to use Grid vs Flexbox in modern layouts.", image: "/blog3.jpg" },
];

const recentPosts = [
  { id: 4, title: "TypeScript for Beginners", excerpt: "Getting started with TypeScript in 2025.", image: "/blog4.jpg" },
  { id: 5, title: "Deploying Next.js to Vercel", excerpt: "Step-by-step guide to deploy your Next.js app.", image: "/blog5.jpg" },
  { id: 6, title: "Accessibility in Web Apps", excerpt: "Making your apps more inclusive for everyone.", image: "/blog6.jpg" },
];

export default function BlogLandingPage() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Bill Xu's Blog" />
      </Head>

      <main className="bg-neutral-950 text-neutral-100 min-h-screen">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Welcome to the Blog
          </h1>
        </section>

        {/* Popular Posts */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8">🔥 Popular Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-neutral-400">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800">
          <h2 className="text-3xl font-semibold mb-8">🆕 Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative w-full h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-neutral-400">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
