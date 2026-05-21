import React from "react";
import Grid from "../shared/Grid";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

interface CarStatsProps {
  stats: StatCardProps[];
}

export default function CarStats({ stats }: CarStatsProps) {
  return (
    <section className="mt-15 md:mt-20">
      <Grid cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" gap={"gap-10"}>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </Grid>
    </section>
  );
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="w-full bg-white border border-gray-50 rounded-lg shadow-sm p-6 flex flex-col gap-4">
      {icon && (
        <div className="text-blue-600 text-2xl" aria-hidden="true">
          {icon}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="text-gray-500 font-medium text-sm tracking-wide uppercase">
          {title}
        </h3>
        <p className="text-4xl font-semibold text-gray-950">{value}</p>
      </div>
    </div>
  );
};
