import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function TopProductsChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 h-full">
      <h3 className="font-semibold text-ocean-950 mb-4">Top Sellers (last 30 days)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} layout="vertical" margin={{ left: 10, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5f2f5" />
          <XAxis type="number" tick={{ fontSize: 12 }} stroke="#7fa8b5" />
          <YAxis
            type="category"
            dataKey="name"
            width={140}
            tick={{ fontSize: 11 }}
            stroke="#7fa8b5"
          />
          <Tooltip cursor={{ fill: '#eefbfc' }} />
          <Bar dataKey="unitsSoldLast30" fill="#1c7c98" radius={[0, 6, 6, 0]} name="Units sold" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopProductsChart;
