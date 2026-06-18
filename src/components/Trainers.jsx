import { Instagram, Linkedin, Mail } from 'lucide-react'

function Trainers() {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Strength & Conditioning',
      image: '🏋️‍♀️',
      experience: '8 years',
      description: 'Former competitive athlete with expertise in building muscle and improving athletic performance.'
    },
    {
      name: 'Mike Chen',
      specialty: 'HIIT & Cardio',
      image: '🏃‍♂️',
      experience: '6 years',
      description: 'Certified HIIT specialist focused on fat loss and cardiovascular health improvement.'
    },
    {
      name: 'Emily Rodriguez',
      specialty: 'Yoga & Pilates',
      image: '🧘‍♀️',
      experience: '10 years',
      description: 'Registered yoga teacher helping clients achieve flexibility, balance, and mental wellness.'
    },
    {
      name: 'David Thompson',
      specialty: 'Bodybuilding',
      image: '💪',
      experience: '12 years',
      description: 'Professional bodybuilder with proven track record of competition preparation success.'
    }
  ]

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guidance from certified professionals dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-8xl">{trainer.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Instagram size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold mb-2">{trainer.specialty}</p>
                <p className="text-sm text-gray-500 mb-3">{trainer.experience} experience</p>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
