import { Dumbbell, Heart, Users, Zap, Calendar, Award } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs and equipment.'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve your cardiovascular health with treadmills, ellipticals, bikes, and group cardio classes.'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energizing group fitness classes including yoga, pilates, spinning, and high-intensity training.'
    },
    {
      icon: Zap,
      title: 'Personal Training',
      description: 'Get personalized attention and customized workout plans from our certified personal trainers.'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Access the gym 24/7 with flexible membership options that fit your busy lifestyle.'
    },
    {
      icon: Award,
      title: 'Nutrition Guidance',
      description: 'Receive expert nutrition advice and meal planning to complement your fitness journey.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
