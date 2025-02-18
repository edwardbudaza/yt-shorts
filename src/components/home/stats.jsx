import { stats } from '@/constants';

export const Stats = () => {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="px-4">
          <div className="text-2xl font-bold text-primary">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
