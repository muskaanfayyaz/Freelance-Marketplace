import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-white">
              Ready to Transform Your Work Experience?
            </h2>
            <p className="text-indigo-100">
              Join thousands of clients and freelancers who trust Workifyo to deliver
              exceptional results. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Talk to Sales
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-white">No credit card required</div>
                <div className="text-indigo-200">Get started in minutes</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY0MzYxNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
