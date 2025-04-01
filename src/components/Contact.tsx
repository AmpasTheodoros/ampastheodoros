
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Mail, Globe, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // We would normally handle the form submission here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-navy text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Interested in working together? Feel free to contact me for any project ideas or business inquiries.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-navy">Contact Information</h3>
                
                <div className="space-y-4">
                  <ContactItem 
                    icon={<Mail className="text-gold" />} 
                    label="Email"
                    value="theodoros@example.com"
                    link="mailto:theodoros@example.com"
                  />
                  
                  <ContactItem 
                    icon={<Globe className="text-gold" />} 
                    label="Website"
                    value="theodoros-ampas.com"
                    link="https://theodoros-ampas.com"
                  />
                  
                  <ContactItem 
                    icon={<Linkedin className="text-gold" />} 
                    label="LinkedIn"
                    value="linkedin.com/in/theodorosampas"
                    link="https://linkedin.com/in/theodorosampas"
                  />
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-navy mb-2">Location</h4>
                  <p className="text-gray-600">Thessaloniki, Central Macedonia, Greece</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96593.0091387361!2d22.874339237900223!3d40.64001895995891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9!2sThessaloniki%2C%20Greece!5e0!3m2!1sen!2sus!4v1598375304325!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Map of Thessaloniki"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-navy">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your Name" 
                        required 
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Subject" 
                      required 
                      className="border-gray-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your Message" 
                      required 
                      className="border-gray-300 min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-light text-white transition-colors duration-300"
                  >
                    Send Message <ArrowRight className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  label, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  link: string 
}) => {
  return (
    <div className="flex items-start">
      <div className="mt-1 mr-3">
        {icon}
      </div>
      <div>
        <p className="font-medium text-navy">{label}</p>
        <a href={link} className="text-gray-600 hover:text-gold transition-colors duration-300">
          {value}
        </a>
      </div>
    </div>
  );
};

export default Contact;
