
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechInnovate',
      quote: 'Theodoros helped us implement AI solutions that transformed our business operations. His expertise and strategic approach delivered outstanding results.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GrowthMentor',
      quote: 'Working with Theodoros on our mentorship program was a game-changer. His insights and guidance helped us scale our business by 200% in just 18 months.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Director, AIInnovate',
      quote: 'Theodoros has a unique ability to translate complex AI concepts into practical business applications. His consultation was invaluable to our product development.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'David Park',
      role: 'CEO, CloudSolutions',
      quote: 'The SaaS platform Theodoros helped us develop has completely revolutionized how we serve our customers. His technical expertise combined with business acumen is rare and invaluable.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
  ];
  
  return (
    <section id="testimonials" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white text-center">Client Testimonials</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here's what clients and partners have to say about working with me.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="text-gold mb-4" size={32} />
                        <p className="italic text-gray-200 mb-6">"{testimonial.quote}"</p>
                        <div className="mt-auto flex items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-gold text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-transparent border-white text-white hover:bg-white/20" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-transparent border-white text-white hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
