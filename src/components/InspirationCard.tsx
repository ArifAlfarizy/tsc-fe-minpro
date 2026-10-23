type InspirationCardProps = {
  title: string;
  description: string;
  image: string;
  pinterestUrl: string;
};

const InspirationCard = ({
  title,
  description,
  image,
  pinterestUrl,
}: InspirationCardProps) => {
  return (
    <a
      href={pinterestUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h3 className="font-cormorant text-2xl text-white italic">{title}</h3>

        <p className="mt-1 text-sm text-white/50">{description}</p>

        <span className="mt-3 inline-block text-xs text-white/70 transition group-hover:text-white">
          Explore on Pinterest ↗
        </span>
      </div>
    </a>
  );
};

export default InspirationCard;
