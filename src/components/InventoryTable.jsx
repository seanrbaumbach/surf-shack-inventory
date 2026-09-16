import { useMemo, useState } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';
import { categories, categoryIcons } from '../data/inventory';

const columns = [
  { key: 'name', label: 'Product' },
  { key: 'category', label: 'Category' },
  { key: 'sku', label: 'SKU' },
  { key: 'location', label: 'Location' },
  { key: 'stock', label: 'Stock' },
  { key: 'price', label: 'Price' },
  { key: 'unitsSoldLast30', label: 'Sold (30d)' },
];

function statusFor(item) {
  if (item.stock <= item.reorderLevel * 0.5) return { label: 'Critical', classes: 'bg-coral-500/10 text-coral-600' };
  if (item.stock <= item.reorderLevel) return { label: 'Low', classes: 'bg-sand-500/15 text-sand-700' };
  return { label: 'In stock', classes: 'bg-ocean-600/10 text-ocean-700' };
}

function InventoryTable({ items }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortKey, setSortKey] = useState('name');
  const [sortDir, setSortDir] = useState('asc');

  const filtered = useMemo(() => {
    let rows = items.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.sku.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || item.category === category;
      return matchesQuery && matchesCategory;
    });

    rows = [...rows].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const dir = sortDir === 'asc' ? 1 : -1;
      if (typeof av === 'string') return av.localeCompare(bv) * dir;
      return (av - bv) * dir;
    });

    return rows;
  }, [items, query, category, sortKey, sortDir]);

  function toggleSort(key) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between mb-4">
        <h3 className="font-semibold text-ocean-950">Inventory ({filtered.length})</h3>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ocean-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product or SKU..."
              className="pl-9 pr-3 py-2 text-sm rounded-lg border border-ocean-100 focus:outline-none focus:ring-2 focus:ring-ocean-300 w-full sm:w-56"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 text-sm rounded-lg border border-ocean-100 focus:outline-none focus:ring-2 focus:ring-ocean-300"
          >
            <option>All</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ocean-700/60 border-b border-ocean-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => toggleSort(col.key)}
                  className="py-2 pr-4 font-medium cursor-pointer select-none whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <ArrowUpDown size={12} className={sortKey === col.key ? 'opacity-100' : 'opacity-30'} />
                  </span>
                </th>
              ))}
              <th className="py-2 pr-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => {
              const status = statusFor(item);
              return (
                <tr key={item.id} className="border-b border-ocean-50 hover:bg-ocean-50/40">
                  <td className="py-2 pr-4 font-medium text-ocean-950 whitespace-nowrap">
                    <span className="mr-1">{categoryIcons[item.category]}</span>
                    {item.name}
                  </td>
                  <td className="py-2 pr-4 text-ocean-700/70 whitespace-nowrap">{item.category}</td>
                  <td className="py-2 pr-4 text-ocean-700/50 whitespace-nowrap">{item.sku}</td>
                  <td className="py-2 pr-4 text-ocean-700/70 whitespace-nowrap">{item.location}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{item.stock}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">${item.price}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{item.unitsSoldLast30}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.classes}`}>
                      {status.label}
                    </span>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="py-8 text-center text-ocean-700/50">
                  No products match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryTable;
