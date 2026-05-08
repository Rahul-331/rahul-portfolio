function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Dandu Rahul. Built with React and Tailwind.
        </p>
        <p className="text-sm text-cyan-300">Crafting polished digital experiences for electronics, embedded systems and web development.</p>
      </div>
    </footer>
  )
}

export default Footer