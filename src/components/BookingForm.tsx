const BookingForm = () => {
  return (
    <section id="contact" className="px-8 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.3em] text-white/40">GET IN TOUCH</p>

        <h2 className="font-cormorant mt-3 text-5xl text-white italic">
          Let's Define Your Style
        </h2>

        <p className="mt-3 text-sm text-white/50">
          Tell me about your style and let’s create something personal.
        </p>

        <form className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
          />

          <textarea
            rows={4}
            placeholder="Tell me about your styling needs..."
            className="w-full resize-y border-b border-white/20 bg-transparent py-3 text-white outline-none placeholder:text-white/40 focus:border-white"
          />

          <button
            type="button"
            className="border border-white bg-white px-8 py-3 text-xs tracking-widest text-black transition hover:bg-transparent hover:text-white"
          >
            SEND INQUIRY ↗
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
