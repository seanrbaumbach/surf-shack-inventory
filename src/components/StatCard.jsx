function StatCard({ label, value, sublabel, icon: Icon, tone = 'ocean' }) {
  const tones = {
    ocean: 'bg-ocean-600 text-white',
    sand: 'bg-sand-500 text-white',
    coral: 'bg-coral-500 text-white',
    dark: 'bg-ocean-950 text-white',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-ocean-100 p-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-ocean-700/70">{label}</p>
        <p className="text-2xl font-bold text-ocean-950 mt-1">{value}</p>
        {sublabel && <p className="text-xs text-ocean-600/70 mt-1">{sublabel}</p>}
      </div>
      {Icon && (
        <div className={`rounded-xl p-3 ${tones[tone]} shrink-0`}>
          <Icon size={20} />
        </div>
      )}
    </div>
  );
}

export default StatCard;
