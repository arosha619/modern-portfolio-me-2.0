export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-4xl font-bold mb-4">Welcome to Modern Portfolio</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        This is your new homepage using the Next.js App Router. You can customize this page by editing <code>app/page.jsx</code>.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/about" className="btn">About</a>
        <a href="/services" className="btn">Services</a>
        <a href="/work" className="btn">Work</a>
        <a href="/testimonials" className="btn">Testimonials</a>
        <a href="/contact" className="btn">Contact</a>
      </div>
    </div>
  );
} 