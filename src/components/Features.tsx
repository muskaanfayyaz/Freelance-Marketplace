import { Shield, Zap, Globe, CreditCard, MessageSquare, Award } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Protected transactions with escrow services to ensure safe payments for both clients and freelancers.",
    },
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Connect with qualified professionals in minutes, not weeks. Start your project immediately.",
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description: "Access skilled professionals from over 150 countries across all time zones.",
    },
    {
      icon: MessageSquare,
      title: "Real-time Communication",
      description: "Built-in messaging and video calls to collaborate seamlessly with your team.",
    },
    {
      icon: CreditCard,
      title: "Flexible Pricing",
      description: "Choose from hourly rates or fixed-price contracts that fit your budget and project needs.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Verified professionals with ratings, reviews, and portfolio showcases for confidence.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Why Choose Workifyo?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to make freelancing simple, secure, and successful for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
