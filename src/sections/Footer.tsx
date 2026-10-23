const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-8 py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#home" className="font-cormorant text-3xl text-white italic">
          Wisdm.
        </a>

        <p className="text-xs text-white/40">
          Personal styling, thoughtfully curated.
        </p>

        <p className="text-xs text-white/40">
          © 2026 Wisdm. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
