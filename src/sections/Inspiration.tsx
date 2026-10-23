import InspirationCard from "../components/InspirationCard";

const inspirations = [
  {
    title: "Avant-Garde",
    description: "Bold silhouettes & unexpected layers",
    image:
      "https://i.pinimg.com/736x/55/7d/de/557ddee793c14ff9c5307aaee77ffecf.jpg",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=wisdom%20kaye%20avant%20garde",
  },
  {
    title: "Tailored Elegance",
    description: "Refined cuts & timeless structure",
    image:
      "https://i.pinimg.com/736x/57/99/a5/5799a527be19bada591904d5699c79ba.jpg",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=luxury%20tailored%20menswear",
  },
  {
    title: "Retro Revival",
    description: "Vintage references with a modern edge",
    image:
      "https://i.pinimg.com/736x/b6/3f/71/b63f710cdf156a413c9dcffedb04b5ff.jpg",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=wisdom%20kaye%20retro%20fashion",
  },
  {
    title: "Finishing Touches",
    description: "Accessories that define the look",
    image:
      "https://i.pinimg.com/736x/f7/be/b7/f7beb75489d29e27343fe8c77be3f2a2.jpg",
    pinterestUrl:
      "https://www.pinterest.com/search/pins/?q=luxury%20menswear%20accessories",
  },
];

const Inspiration = () => {
  return (
    <section id="inspiration" className="px-8 py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.3em] text-white/40">
          THE STYLE ARCHIVE
        </p>

        <h2 className="font-cormorant mt-3 text-5xl text-white italic">
          A World of Inspiration
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/50">
          Curated references for a more personal expression of style.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {inspirations.map((item) => (
          <InspirationCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
