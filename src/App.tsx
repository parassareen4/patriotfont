import React, { useState } from 'react';
import { ChevronDown, Flag, Menu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://patriotfont.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', state: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sections = [
    {
      title: 'LIFE',
      subtitle: 'Recognition',
      image: './image3.png', // Mountain landscape
      content: 'Americans will fully recognize themselves as a people, not merely citizens or residents of a country, but a people bearing a unique national interest rooted in our heritage on this continent. Our people, born to this nation of our European race, must reforge themselves as a new collective capable of asserting our right to cultural independence. The LIFE of this nation, unique among all others, will be defended.'
    },
    {
      title: 'LIBERTY',
      subtitle: 'Revolution',
      image: './image4.png', // Forest landscape
      content: 'The revival of the American revolutionary spirit will guide the people towards their inalienable right to self determination on the course to fulfill their destiny. America will be unshackled from tyrannical rule. The corrupt and ineffective State which subverts the national interest to favor a global plutocracy is no longer legitimate to govern, and must face alteration or abolition. An unwavering resistance will meet all enemies of the people and the nation, both foreign and domestic. The LIBERTY of our people, paramount to our cause, will be secured.'
    },
    {
      title: 'VICTORY',
      subtitle: 'Achievement',
      image: 'src/images/image5.png', // Lake landscape
      content: 'Success comes through dedication and perseverance. Together, we will achieve our goals and create lasting positive change for our future. The VICTORY we seek is the realization of a nation that truly serves its people and preserves its heritage for generations to come.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-oswald">
     {/* Navigation */}
<nav className="fixed w-full bg-white z-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <img 
          src='src/images/image8.png'
          alt="Patriot Front Logo"
          className="h-10" // Adjust height as needed
        />
      </div>
      <div className="hidden md:block">
        <div className="flex items-center space-x-6">
          {['BONE', 'ACTION', 'UPDATES', 'MARKET', 'SOCIAL', 'JOIN'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-black hover:text-red-600 uppercase text-sm font-medium tracking-wider ${item === 'JOIN' ? 'text-red-600' : ''}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
  
  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="md:hidden bg-white py-2 px-4">
      {['BONE', 'ACTION', 'UPDATES', 'MARKET', 'SOCIAL', 'JOIN'].map((item) => (
        <a 
          key={item} 
          href="#" 
          className={`block py-2 text-black hover:text-red-600 uppercase text-sm font-medium tracking-wider ${item === 'JOIN' ? 'text-red-600' : ''}`}
        >
          {item}
        </a>
      ))}
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section className="relative h-screen" id="hero">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            backgroundImage: "url('src/images/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}></div>
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-8 tracking-widest">BUILD THE FUTURE</h1>
            <button className="bg-red-700 text-white px-8 py-3 rounded hover:bg-red-800 transition tracking-wider">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative h-screen" id="contact">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            backgroundImage: "url('src/images/image2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}></div>
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative flex items-center h-full">
          <div className="w-full bg-white/90 py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-5xl font-bold text-blue-900 mb-4 tracking-widest">HELP RECLAIM AMERICA</h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-blue-900 text-blue-900 placeholder-blue-900 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="PHONE #"
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-blue-900 text-blue-900 placeholder-blue-900 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-blue-900 text-blue-900 placeholder-blue-900 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="STATE"
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-blue-900 text-blue-900 placeholder-blue-900 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white px-8 py-3 rounded hover:bg-red-800 transition tracking-wider"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section key={section.title} className="relative h-screen" id={section.title.toLowerCase()}>
          <div className="absolute inset-0">
            <div className="w-full h-full" style={{
              backgroundImage: `url('${section.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed"
            }}></div>
            <div className="absolute inset-0 bg-blue-900/40"></div>
          </div>
          <div className="relative flex items-center h-full">
            <div className="w-full bg-white/90 py-16">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-5xl font-bold text-blue-900 mb-4 tracking-widest">{section.title}</h2>
                <h3 className="text-xl font-semibold text-blue-900 mb-6 tracking-wider">{section.subtitle}</h3>
                <p className="text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="relative h-screen" id="faq">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            backgroundImage: "url('src/images/image6.png')", // Desk with notebook
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}></div>
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative flex items-center h-full">
          <div className="w-full bg-white/90 py-16">
            <div className="max-w-4xl mx-auto px-4">
              {[
                { question: 'What is our mission?', answer: 'Our mission is to build a stronger, more united community that honors our heritage while looking toward the future.' },
                { question: 'How can you get involved?', answer: 'You can get involved by joining our movement, attending local events, or volunteering your time and talents.' },
                { question: 'Where do we operate?', answer: 'We operate across all 50 states with strong local chapters in communities nationwide.' },
                { question: 'What are our core values?', answer: 'Our core values include liberty, integrity, community, service, and dedication to a better future.' }
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <details className="group">
                    <summary className="w-full bg-blue-900 text-white p-4 flex justify-between items-center hover:bg-blue-800 transition tracking-wider cursor-pointer">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="bg-white p-4 border border-blue-900 text-blue-900">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative h-screen" id="cta">
        <div className="absolute inset-0">
          <div className="w-full h-full" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')", // Earth from space
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}></div>
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative flex items-center h-full">
          <div className="w-full bg-white/90 py-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-900 mb-8 tracking-widest">JOIN THE MOVEMENT</h2>
              <button className="bg-red-700 text-white px-8 py-3 rounded hover:bg-red-800 transition tracking-wider">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
            {['HOME', 'ABOUT', 'UPDATES', 'MISSION', 'CONTACT', 'JOIN'].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300 tracking-wider">
                {item}
              </a>
            ))}
          </div>
          <p className="text-sm tracking-wider">© 2025 Vision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;