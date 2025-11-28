import { Code, Palette, PenTool, Megaphone, Video, BarChart, FileText, Music } from "lucide-react";

export function Categories() {
  const categories = [
    {
      icon: Code,
      name: "Development & IT",
      jobs: "12,450 jobs",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: Palette,
      name: "Design & Creative",
      jobs: "8,320 jobs",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "hover:bg-purple-600",
    },
    {
      icon: PenTool,
      name: "Writing & Content",
      jobs: "6,890 jobs",
      color: "bg-green-100 text-green-600",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: Megaphone,
      name: "Marketing & Sales",
      jobs: "5,670 jobs",
      color: "bg-orange-100 text-orange-600",
      hoverColor: "hover:bg-orange-600",
    },
    {
      icon: Video,
      name: "Video & Animation",
      jobs: "4,230 jobs",
      color: "bg-red-100 text-red-600",
      hoverColor: "hover:bg-red-600",
    },
    {
      icon: BarChart,
      name: "Data & Analytics",
      jobs: "3,890 jobs",
      color: "bg-indigo-100 text-indigo-600",
      hoverColor: "hover:bg-indigo-600",
    },
    {
      icon: FileText,
      name: "Admin & Support",
      jobs: "5,120 jobs",
      color: "bg-pink-100 text-pink-600",
      hoverColor: "hover:bg-pink-600",
    },
    {
      icon: Music,
      name: "Music & Audio",
      jobs: "2,340 jobs",
      color: "bg-teal-100 text-teal-600",
      hoverColor: "hover:bg-teal-600",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Explore Popular Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect freelancer for your project across diverse skill categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={`p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all group text-left ${category.hoverColor} hover:border-transparent`}
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors`}>
                  <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-1 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 transition-colors">
                  {category.jobs}
                </p>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-2">
            View All Categories
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
