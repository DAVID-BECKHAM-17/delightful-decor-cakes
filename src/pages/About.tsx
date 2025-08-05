import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every cake is crafted with passion and attention to detail, ensuring each bite is a moment of pure joy."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We use only the finest ingredients, sourced locally when possible, to create exceptional flavors."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your vision is our mission. We work closely with you to bring your cake dreams to life."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always Fresh",
      description: "All our cakes are baked fresh to order, ensuring maximum flavor and quality for your special day."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head Baker & Founder",
      description: "With 15 years of pastry experience, Sarah founded Sweet Dreams to share her passion for creating edible art."
    },
    {
      name: "Michael Chen",
      role: "Cake Designer",
      description: "Our creative genius who transforms your wildest cake dreams into stunning reality with artistic flair."
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Relations",
      description: "Emma ensures every customer feels special and helps coordinate the perfect cake for your event."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent">
              Our Sweet Story
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Founded in 2018 with a simple dream: to create cakes that not only taste incredible 
            but also become the centerpiece of life's most precious moments. What started in a small 
            kitchen has grown into a beloved bakery that has brought joy to hundreds of celebrations.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10 rounded-2xl p-8 text-left">
            <blockquote className="text-2xl italic text-center text-foreground/80">
              "We believe every celebration deserves a cake as special as the moment itself."
            </blockquote>
            <p className="text-center mt-4 text-muted-foreground">- Sarah Johnson, Founder</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Makes Us Special</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every aspect of our work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The talented individuals who bring sweetness to your celebrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-cake-rose/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-cake-rose rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Bakery</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Come see where the magic happens! Our bakery is open for consultations, 
                tastings, and to answer any questions about your perfect cake.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Sweet Street, Bakery District, CA 90210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(555) 123-CAKE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>hello@sweetdreamsbakery.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Tuesday - Sunday: 9AM - 6PM</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Tuesday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span className="font-medium text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Link to="/order" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-primary to-cake-rose hover:opacity-90">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/events" className="flex-1">
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;