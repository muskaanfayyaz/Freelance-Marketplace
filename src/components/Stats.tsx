export function Stats() {
  const stats = [
    { value: "1M+", label: "Active Users" },
    { value: "500K+", label: "Projects Completed" },
    { value: "150+", label: "Countries" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="bg-white py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-indigo-600">{stat.value}</div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
