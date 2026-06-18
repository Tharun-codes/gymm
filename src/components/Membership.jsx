import { Check } from 'lucide-react'

function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        'Gym access during off-peak hours',
        'Basic equipment usage',
        'Locker room access',
        '1 free personal training session',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '59',
      period: '/month',
      description: 'Most popular choice',
      features: [
        '24/7 gym access',
        'All equipment usage',
        'Group fitness classes',
        '5 personal training sessions',
        'Nutrition consultation',
        'Mobile app access',
        'Guest pass (2/month)'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '99',
      period: '/month',
      description: 'For serious athletes',
      features: [
        '24/7 gym access',
        'Priority equipment booking',
        'Unlimited group classes',
        'Unlimited personal training',
        'Custom meal plans',
        'Spa & sauna access',
        'Towel service',
        'Unlimited guest passes'
      ],
      popular: false
    }
  ]

  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Membership <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                plan.popular 
                  ? 'border-2 border-primary transform scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gradient">${plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-green-600" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-orange-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Membership
