import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Heart, Gift, Sparkles } from "lucide-react";
import weddingCake from "@/assets/wedding-cake.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";

const EventCakes = () => {
  const eventTypes = [
    {
      title: "Wedding Cakes",
      description: "Elegant multi-tier cakes that make your special day unforgettable",
      features: ["Custom designs", "Multiple flavors", "Fresh flowers", "Personalized toppers"],
      image: weddingCake,
      price: "Starting from  ₹450",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Birthday Celebrations",
      description: "Fun and colorful cakes perfect for birthdays of all ages",
      features: ["Themed decorations", "Custom messages", "Photo printing", "Number candles"],
      image: birthdayCake,
      price: "Starting from  ₹350",
      icon: <Gift className="h-6 w-6" />
    },
    {
      title: "Anniversary Cakes",
      description: "Romantic and sophisticated cakes to celebrate your love story",
      features: ["Elegant designs", "Gold accents", "Fresh berries", "Custom inscriptions"],
      image: weddingCake,
      price: "Starting from  ₹480",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Corporate Events",
      description: "Professional cakes for business celebrations and milestones",
      features: ["Logo printing", "Brand colors", "Large portions", "Professional delivery"],
      image: cupcakes,
      price: "Starting from  ₹800",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Baby Showers",
      description: "Sweet and adorable cakes to welcome the newest family member",
      features: ["Pastel colors", "Baby themes", "Gender reveals", "Cute decorations"],
      image: cupcakes,
      price: "Starting from  ₹650",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Graduation Parties",
      description: "Celebrate achievements with cakes that honor success",
      features: ["School colors", "Diploma designs", "Cap decorations", "Achievement themes"],
      image: birthdayCake,
      price: "Starting from  ₹780",
      icon: <Sparkles className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent">
              Event Cakes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Make every celebration extraordinary with our custom event cakes. 
            From intimate gatherings to grand celebrations, we create edible masterpieces 
            that become the centerpiece of your special moments.
          </p>
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {eventTypes.map((event, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-secondary/20"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon and Price */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-card/90 backdrop-blur-sm p-2 rounded-lg text-primary">
                      {event.icon}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {event.price}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Order Button */}
                  <Link to="/order" state={{ eventType: event.title }}>
                    <Button className="w-full bg-gradient-to-r from-primary to-cake-rose hover:opacity-90">
                      Order {event.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don't See Your Event Type?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We love creating custom cakes for any celebration! Contact us to discuss your unique event needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/order">
              <Button size="lg" className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90">
                Custom Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCakes;