export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tighter mb-1">
            ERROR NARRATOR
          </h3>
          <p className="text-gray-500 text-sm">
            Made for developers, by developers.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-mono text-gray-400">
          <a
            href="https://www.npmjs.com/package/error-narrator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            NPM
          </a>
          <a
            href="https://github.com/Mikewon98/error-narrator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            License MIT
          </a>
        </div>
      </div>
    </footer>
  );
};
