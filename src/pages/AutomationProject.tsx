import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const AutomationProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link to="/#projects">
            <Button variant="ghost" className="mb-6 text-navy hover:text-gold">
              <ArrowLeft size={16} className="mr-2" /> Back to Projects
            </Button>
          </Link>
          
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Facebook Lead Ads to SMS Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              An instant notification system that sends SMS alerts to Greek businesses when new Facebook leads come in.
            </p>
          </div>
          
          {/* Project Image */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-12">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80" 
              alt="Facebook Lead Ads to SMS Automation" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">The Problem</h2>
                <p className="text-gray-600 mb-4">
                  Greek small and medium businesses often struggle with lead response times. When potential customers submit interest through Facebook Lead Ads, businesses are often not immediately notified, leading to delayed responses and lost opportunities.
                </p>
                <p className="text-gray-600 mb-4">
                  Studies show that responding to leads within the first 5 minutes increases conversion rates by over 80% compared to responding an hour later.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">The Solution</h2>
                <p className="text-gray-600 mb-4">
                  I created an automation workflow using Make.com (formerly Integromat) that connects Facebook Lead Ads with Routee's SMS gateway to deliver instant notifications.
                </p>
                <p className="text-gray-600 mb-4">
                  When a new lead is submitted through a Facebook ad, the automation:
                </p>
                <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                  <li>Captures the lead information from Facebook</li>
                  <li>Formats the data into a concise, actionable SMS message</li>
                  <li>Sends an immediate text message to the business owner via Routee's SMS gateway</li>
                  <li>Logs the lead information for future reference</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">The Benefits</h2>
                <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                  <li><span className="font-semibold">Immediate Response:</span> Business owners know about leads instantly</li>
                  <li><span className="font-semibold">Higher Conversion Rates:</span> Faster responses lead to more conversions</li>
                  <li><span className="font-semibold">No Technical Skills Required:</span> Easy to set up with the template</li>
                  <li><span className="font-semibold">Cost-Effective:</span> Affordable SMS rates through Routee</li>
                  <li><span className="font-semibold">Localized For Greece:</span> Properly formatted Greek text messages</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-navy mb-4">How It Works</h2>
                <p className="text-gray-600 mb-4">
                  The workflow consists of these key steps:
                </p>
                <ol className="list-decimal pl-5 text-gray-600 mb-4 space-y-4">
                  <li>
                    <span className="font-semibold block mb-1">Facebook Trigger</span>
                    The workflow starts when a new lead is submitted through Facebook Lead Ads.
                  </li>
                  <li>
                    <span className="font-semibold block mb-1">Data Processing</span>
                    The lead data (name, email, phone, etc.) is extracted and formatted into a readable message.
                  </li>
                  <li>
                    <span className="font-semibold block mb-1">SMS Notification</span>
                    The message is sent via Routee's API to the business owner's mobile phone.
                  </li>
                  <li>
                    <span className="font-semibold block mb-1">Lead Storage (Optional)</span>
                    The lead can also be stored in a spreadsheet, CRM, or database for future follow-up.
                  </li>
                </ol>
              </section>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-lg p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-4">Get This Template</h3>
                <p className="text-gray-600 mb-6">
                  Start using this automation in your business today. Click below to access the Make.com template.
                </p>
                
                <Button 
                  className="w-full bg-navy hover:bg-navy-light text-white mb-4"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Get Free Template <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
                
                <div className="space-y-4 mt-8">
                  <div>
                    <h4 className="font-semibold text-navy">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                      <li>Make.com account (free to start)</li>
                      <li>Facebook Lead Ads campaign</li>
                      <li>Routee account for SMS</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy">Estimated Setup Time:</h4>
                    <p className="text-gray-600 mt-1">15-20 minutes</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-navy">Support:</h4>
                    <p className="text-gray-600 mt-1">
                      Need help setting up? <a href="https://www.theodorosampas.com/#contact" className="text-gold hover:underline">Contact me</a> for a free 15-minute consultation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutomationProject;