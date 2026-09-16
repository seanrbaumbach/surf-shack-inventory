import { useMemo } from 'react';
import { Boxes, DollarSign, AlertTriangle, PackageX } from 'lucide-react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import CategoryChart from './components/CategoryChart';
import TopProductsChart from './components/TopProductsChart';
import RevenueChart from './components/RevenueChart';
import LowStockAlerts from './components/LowStockAlerts';
import InventoryTable from './components/InventoryTable';
import { inventory, categories, revenueTrend } from './data/inventory';

function App() {
  const stats = useMemo(() => {
    const totalUnits = inventory.reduce((sum, i) => sum + i.stock, 0);
    const totalValue = inventory.reduce((sum, i) => sum + i.stock * i.cost, 0);
    const lowStock = inventory.filter((i) => i.stock <= i.reorderLevel);
    const outOfStock = inventory.filter((i) => i.stock === 0);
    return {
      skuCount: inventory.length,
      totalUnits,
      totalValue,
      lowStockCount: lowStock.length,
      outOfStockCount: outOfStock.length,
      lowStockItems: [...lowStock].sort((a, b) => a.stock - b.stock),
    };
  }, []);

  const categoryData = useMemo(
    () =>
      categories.map((cat) => ({
        category: cat,
        stock: inventory.filter((i) => i.category === cat).reduce((s, i) => s + i.stock, 0),
      })),
    []
  );

  const topProducts = useMemo(
    () =>
      [...inventory]
        .sort((a, b) => b.unitsSoldLast30 - a.unitsSoldLast30)
        .slice(0, 7)
        .map((i) => ({ name: i.name, unitsSoldLast30: i.unitsSoldLast30 }))
        .reverse(),
    []
  );

  return (
    <div className="min-h-screen bg-sand-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="SKUs Tracked"
            value={stats.skuCount}
            sublabel="Across 5 categories"
            icon={Boxes}
            tone="ocean"
          />
          <StatCard
            label="Units In Stock"
            value={stats.totalUnits.toLocaleString()}
            sublabel="All locations combined"
            icon={Boxes}
            tone="sand"
          />
          <StatCard
            label="Inventory Value"
            value={`$${stats.totalValue.toLocaleString()}`}
            sublabel="At cost"
            icon={DollarSign}
            tone="dark"
          />
          <StatCard
            label="Low Stock Items"
            value={stats.lowStockCount}
            sublabel={`${stats.outOfStockCount} out of stock`}
            icon={AlertTriangle}
            tone="coral"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <CategoryChart data={categoryData} />
          <TopProductsChart data={topProducts} />
          <LowStockAlerts items={stats.lowStockItems} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <RevenueChart data={revenueTrend} />
        </div>

        <InventoryTable items={inventory} />

        <footer className="text-center text-xs text-ocean-700/40 pb-6">
          Salt Line Surf Co. is a fictional brand created for portfolio/demo purposes. All data shown is mock data.
        </footer>
      </main>
    </div>
  );
}

export default App;
