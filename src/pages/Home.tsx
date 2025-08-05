import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Star, Users } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cake-cream via-background to-cake-pink/20">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cake-brown to-primary bg-clip-text text-transparent">
                    Sweet Dreams
                  </span>
                  <br />
                  <span className="text-foreground">Come True</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Handcrafted with love, our artisanal cakes turn every moment into a celebration. 
                  From intimate gatherings to grand events, we create edible masterpieces.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/order">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90 shadow-lg">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/events">
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                    View Gallery
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Cake Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Star Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroCake} 
                  alt="Beautiful chocolate cake with roses" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary fill-current" />
                  <span className="font-semibold">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cake Types */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent">
                Our Signature Creations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two delicious worlds of flavor, each crafted to perfection for your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Wedding Cakes */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={weddingCake} 
                    alt="Elegant wedding cake" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Wedding Cakes</h3>
                    <p className="text-white/90 text-sm">Elegant and sophisticated designs</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Make your special day even more memorable with our exquisite wedding cakes. 
                    Each tier is a work of art, featuring delicate decorations and premium flavors.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Multi-tier designs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Custom decorations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Premium ingredients</span>
                    </div>
                  </div>
                  
                  <Link to="/events">
                    <Button className="w-full bg-gradient-to-r from-primary to-cake-rose">
                      Explore Wedding Cakes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Birthday Cakes */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={birthdayCake} 
                    alt="Colorful birthday cake" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Birthday Cakes</h3>
                    <p className="text-white/90 text-sm">Fun and colorful celebrations</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Celebrate another year of joy with our vibrant birthday cakes. 
                    From whimsical designs to classic favorites, we make birthdays unforgettable.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Custom messages</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Themed decorations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>All ages welcome</span>
                    </div>
                  </div>
                  
                  <Link to="/events">
                    <Button className="w-full bg-gradient-to-r from-primary to-cake-rose">
                      Explore Birthday Cakes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Something
              <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent block">
                Sweet & Special?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's bring your cake dreams to life. Whether it's a grand celebration or an intimate gathering, 
              we're here to make it deliciously memorable.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/order">
                <Button size="lg" className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90 shadow-lg">
                  Start Your Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;