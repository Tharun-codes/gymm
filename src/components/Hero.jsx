import { ArrowRight, Dumbbell, Target } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-secondary via-accent to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-primary" size={24} />
              <span className="text-orange-400 font-semibold">Premium Fitness Center</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="text-gradient"> Body</span>
              & Mind
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ultimate fitness experience with state-of-the-art equipment, 
              expert trainers, and a supportive community dedicated to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-secondary transition-all">
                View Membership
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-400">Expert Trainers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-gray-400">Equipment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-gray-400">Happy Members</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-400 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
                <Dumbbell className="text-primary w-full h-64 mb-4" />
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Premium Equipment</h3>
                  <p className="text-gray-400">Latest fitness technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
