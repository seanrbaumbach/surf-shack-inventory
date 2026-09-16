import { AlertTriangle } from 'lucide-react';

function LowStockAlerts({ items }) {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 h-full flex flex-col items-center justify-center text-center text-ocean-700/60">
        <p className="text-sm">All stock levels look healthy. 🤙</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={18} className="text-coral-600" />
        <h3 className="font-semibold text-ocean-950">Low Stock Alerts</h3>
        <span className="ml-auto text-xs font-medium bg-coral-500/10 text-coral-600 px-2 py-0.5 rounded-full">
          {items.length}
        </span>
      </div>
      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-lg bg-coral-500/5 border border-coral-500/20 px-3 py-2"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium text-ocean-950 truncate">{item.name}</p>
              <p className="text-xs text-ocean-700/60">{item.sku} · {item.location}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-coral-600">{item.stock} left</p>
              <p className="text-[11px] text-ocean-700/50">reorder at {item.reorderLevel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowStockAlerts;
