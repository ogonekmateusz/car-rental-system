interface Statistic {
  id: number;
  title: String;
  subTitle: String;
}

export default function Stat({ stat }: { stat: Statistic }) {
  return (
    <div> 
      <h3 className="text-3xl font-bold text-gray-900">{stat.title}</h3>
      <p className="mt-2 text-md text-gray-500 tracking-wide">{stat.subTitle}</p>
    </div>
  );
}
