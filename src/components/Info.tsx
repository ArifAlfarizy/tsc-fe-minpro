const services = [
  "Personalized outfits tailored to your unique style and lifestyle.",
  "Build a versatile and timeless wardrobe with essential pieces.",
  "Discover colors that enhance your natural features and appearance.",
  "Curated fashion pieces selected to match your style and needs.",
];

const Info = () => {
  return (
    <div className="flex justify-center gap-10 px-8 text-center">
      <div className="py-5">
        <h1 className="font-cormorant mb-3 text-3xl text-white italic">
          Wisdm - Eclectic High Fashion.
        </h1>
        <p className="w-110 text-white italic opacity-70">
          "The message is to embrace your individuality and have confidence in
          your personal style."
        </p>
        <p className="mt-10 w-110 text-start text-white italic opacity-70">
          A fashion consultant dedicated to helping you discover your personal
          style, curate timeless wardrobes, and express your individuality
          through thoughtfully selected pieces.
        </p>
        <ul className="mt-10 list-disc text-start text-white italic opacity-70">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
      <img
        src="https://www.interviewmagazine.com/wp-content/uploads/2025/10/WisdomKaye8-scaled.jpg"
        className="h-96 w-66 rounded-xl"
      />
    </div>
  );
};

export default Info;
