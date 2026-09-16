import { Waves } from 'lucide-react';
import { company } from '../data/inventory';

function Header() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="bg-ocean-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-ocean-500/20 rounded-xl p-2.5">
            <Waves size={24} className="text-ocean-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">{company.name}</h1>
            <p className="text-ocean-300 text-sm">{company.tagline}</p>
          </div>
        </div>
        <div className="text-right text-sm text-ocean-200">
          <p>{today}</p>
          <p className="text-ocean-400 text-xs mt-0.5">
            {company.locations.length} store locations · demo data
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
