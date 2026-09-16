import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function currency(v) {
  return `$${(v / 1000).toFixed(0)}k`;
}

function RevenueChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 h-full">
      <h3 className="font-semibold text-ocean-950 mb-4">Revenue Trend (6 months)</h3>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ left: -10, right: 10 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dd9535" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#dd9535" stopOpacity={0.02} />
          </linearGradient>
        </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f4e0b3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#a75f25" />
          <YAxis tickFormatter={currency} tick={{ fontSize: 12 }} stroke="#a75f25" />
          <Tooltip formatter={(v) => [`$${v.toLocaleString()}`, 'Revenue']} />
          <Area type="monotone" dataKey="revenue" stroke="#ca7a2a" strokeWidth={2} fill="url(#revenueFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
