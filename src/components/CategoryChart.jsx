import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#1c7c98', '#dd9535', '#ff6f59', '#3fb9d0', '#a75f25'];

function CategoryChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 h-full">
      <h3 className="font-semibold text-ocean-950 mb-4">Stock by Category</h3>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="stock"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;
