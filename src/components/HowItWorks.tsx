import { UserPlus, Search, MessageCircle, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const clientSteps = [
    {
      icon: UserPlus,
      title: "Create an Account",
      description: "Sign up for free and tell us about your project needs.",
    },
    {
      icon: Search,
      title: "Find Talent",
      description: "Browse profiles, portfolios, and reviews to find the perfect match.",
    },
    {
      icon: MessageCircle,
      title: "Collaborate",
      description: "Communicate directly, share files, and manage your project.",
    },
    {
      icon: CheckCircle,
      title: "Get Results",
      description: "Approve work and release payments securely through our platform.",
    },
  ];

  const freelancerSteps = [
    {
      icon: UserPlus,
      title: "Build Your Profile",
      description: "Showcase your skills, experience, and portfolio to attract clients.",
    },
    {
      icon: Search,
      title: "Find Projects",
      description: "Browse opportunities and submit proposals that match your expertise.",
    },
    {
      icon: MessageCircle,
      title: "Deliver Work",
      description: "Collaborate with clients and deliver high-quality results on time.",
    },
    {
      icon: CheckCircle,
      title: "Get Paid",
      description: "Receive secure payments directly to your account upon completion.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            How Workifyo Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started is easy, whether you're hiring or looking for work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Clients */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
                For Clients
              </div>
            </div>
            <div className="space-y-6">
              {clientSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* For Freelancers */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                For Freelancers
              </div>
            </div>
            <div className="space-y-6">
              {freelancerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
