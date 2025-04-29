import React from 'react';
import { Heart, Award, Users, Mail, Phone, Lightbulb, Clock, HandHeart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Emily Carter",
      role: "Medical Director",
      bio: "Board-certified oncologist with over 15 years of experience in cancer treatment and research. Dr. Carter leads our medical advisory team.",
      imageUrl: "https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Rodriguez",
      role: "Executive Director",
      bio: "Michael brings 20 years of healthcare management experience to our organization, focusing on creating accessible cancer education resources.",
      imageUrl: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Research",
      bio: "Leading our research initiatives, Dr. Wilson specializes in early detection technologies and has published numerous papers on cancer screening.",
      imageUrl: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Johnson",
      role: "Patient Advocate",
      bio: "As a cancer survivor herself, Sarah leads our patient advocacy programs and ensures all resources meet the needs of those affected by cancer.",
      imageUrl: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-indigo-500" />,
      title: "Medical Accuracy",
      description: "We're committed to providing scientifically accurate, evidence-based information reviewed by medical professionals."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Education First",
      description: "We believe knowledge empowers patients and communities to make informed health decisions."
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-500" />,
      title: "Early Detection",
      description: "We advocate for proactive health monitoring and regular screenings to catch cancer in its earliest, most treatable stages."
    },
    {
      icon: <HandHeart className="h-8 w-8 text-pink-500" />,
      title: "Compassionate Support",
      description: "We approach our work with empathy, acknowledging the emotional and physical challenges of cancer."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 text-pink-400 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">About CancerDetect</h1>
            <p className="text-xl text-indigo-100 mb-8">
              We're dedicated to improving cancer outcomes through education, early detection, and connecting people with resources they need.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/education" className="btn bg-white text-indigo-700 hover:bg-indigo-50">
                Our Resources
              </Link>
              <Link to="/symptom-checker" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Try Symptom Checker
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-indigo-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                CancerDetect is dedicated to reducing cancer mortality through education, early detection tools, and connecting patients with resources for timely intervention.
              </p>
              <p className="text-gray-700">
                We strive to make reliable cancer information accessible to everyone, empowering individuals to recognize warning signs and seek appropriate medical care.
              </p>
            </div>
            
            <div className="bg-pink-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-pink-700">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a world where no one dies from cancer due to late detection, where all communities have equal access to cancer education and screening resources.
              </p>
              <p className="text-gray-700">
                Through technology and community outreach, we aim to bridge gaps in cancer knowledge and reduce disparities in cancer outcomes across all populations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at CancerDetect, from content creation to resource development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of medical professionals, researchers, and advocates work together to create reliable resources and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="section bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Since our founding, we've worked tirelessly to improve cancer outcomes through education and awareness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Symptom assessments completed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">120+</div>
              <div className="text-blue-100">Healthcare providers in our network</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Users took recommended screening actions</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-blue-100">Research publications funded</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic mb-6">
              "The resources provided by CancerDetect played a crucial role in my early diagnosis. Their symptom checker prompted me to see a doctor immediately, which likely saved my life."
            </blockquote>
            <div className="font-semibold">— Maria S., Breast Cancer Survivor</div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading healthcare institutions, research organizations, and advocacy groups to ensure quality and reach.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <Users className="h-10 w-10 text-gray-400 mx-auto" />
                  <div className="mt-2 text-gray-500 font-medium">Partner Organization</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-indigo-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="mb-6">
                  Have questions about our organization or want to collaborate? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" />
                    <span>info@cancerdetect.example</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" />
                    <span>(800) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 mt-0.5" />
                    <span>
                      For partnership inquiries:<br />
                      partners@cancerdetect.example
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold mb-4">Send Us A Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="section bg-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us spread awareness about the importance of early cancer detection and education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="btn bg-white text-teal-700 hover:bg-teal-50">
              Volunteer With Us
            </a>
            <a href="#" className="btn bg-teal-700 text-white hover:bg-teal-800">
              Make a Donation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;