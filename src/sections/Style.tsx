import StyleTable from "../components/StyleTable";

const styleItems = [
  {
    category: "Color Palette",
    details: "Rich neutrals, muted tones & bold accents",
    occasion: "Everyday Wear, Formal Events",
  },
  {
    category: "Material",
    details: "Wool, Leather, Silk & Velvet",
    occasion: "Evening Events, Special Occasions",
  },
  {
    category: "Types of Clothing",
    details: "Tailored Blazers, Flared Trousers & Statement Coats",
    occasion: "Business Meetings, Fashion Events",
  },
  {
    category: "Footwear",
    details: "Leather Boots, Loafers & Statement Shoes",
    occasion: "Casual Outings, Formal Events",
  },
  {
    category: "Accessories",
    details: "Statement Jewelry, Leather Belts & Vintage Bags",
    occasion: "Date Nights, Fashion Events, Everyday Wear",
  },
];

const Style = () => {
  return (
    <section id="style" className="px-8 py-12">
      <StyleTable title="Style Identity" items={styleItems} />
    </section>
  );
};

export default Style;
