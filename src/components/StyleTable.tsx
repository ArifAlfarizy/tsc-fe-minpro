type StyleCategory = {
  category: string;
  details: string;
  occasion: string;
};

type StyleTableProps = {
  title: string;
  items: StyleCategory[];
};

const StyleTable = ({ title, items }: StyleTableProps) => {
  return (
    <div className="w-full">
      <h2 className="font-cormorant mb-5 text-3xl text-white italic">
        {title}
      </h2>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-white/5 text-white/50">
            <tr>
              <th className="px-4 py-3 font-normal">Category</th>
              <th className="px-4 py-3 font-normal">Details</th>
              <th className="px-4 py-3 font-normal">Occasion</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10 text-white/80">
            {items.map((item) => (
              <tr key={item.category}>
                <td className="px-4 py-4 font-medium">{item.category}</td>
                <td className="px-4 py-4 leading-relaxed">{item.details}</td>
                <td className="px-4 py-4 leading-relaxed">{item.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StyleTable;
