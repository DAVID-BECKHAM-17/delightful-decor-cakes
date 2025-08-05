import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Heart, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    orderType: "",
    experience: "",
    suggestions: ""
  });
  const { toast } = useToast();

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely perfect wedding cake! The design was exactly what we dreamed of and the taste was incredible. Our guests are still talking about it!"
    },
    {
      name: "Mike R.",
      rating: 5,  
      text: "Best birthday cake ever! My daughter's unicorn cake was magical and delicious. The attention to detail was amazing."
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Professional service and outstanding quality. They delivered our corporate event cake on time and it was a huge hit with everyone."
    }
  ];

  const handleSubmitFeedback = () => {
    if (!feedback.name || !feedback.experience || rating === 0) {
      toast({
        title: "Please fill in required fields",
        description: "Name, rating, and experience are required to submit feedback.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank you for your feedback! ⭐",
      description: "Your review helps us continue to improve and create even better cakes.",
    });

    // Reset form
    setFeedback({
      name: "",
      email: "",
      orderType: "",
      experience: "",
      suggestions: ""
    });
    setRating(0);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent">
              We'd Love Your Feedback
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your experience matters to us! Share your thoughts about our cakes and service 
            to help us continue creating sweet memories for our customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                Share Your Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={feedback.name}
                    onChange={(e) => setFeedback(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={feedback.email}
                    onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="orderType">What did you order?</Label>
                <Input
                  id="orderType"
                  placeholder="e.g., Wedding cake, Birthday cake, Cupcakes"
                  value={feedback.orderType}
                  onChange={(e) => setFeedback(prev => ({ ...prev, orderType: e.target.value }))}
                />
              </div>

              <div>
                <Label>How would you rate your experience? *</Label>
                <div className="flex gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer transition-colors ${
                        star <= (hoveredRating || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {rating === 5 && "Excellent! ⭐"}
                    {rating === 4 && "Very good! 👍"}
                    {rating === 3 && "Good! 👌"}
                    {rating === 2 && "Fair 😐"}
                    {rating === 1 && "Needs improvement 😔"}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="experience">Tell us about your experience *</Label>
                <Textarea
                  id="experience"
                  placeholder="How was the taste? The design? The service? We'd love to hear all about it!"
                  rows={4}
                  value={feedback.experience}
                  onChange={(e) => setFeedback(prev => ({ ...prev, experience: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="suggestions">Any suggestions for improvement?</Label>
                <Textarea
                  id="suggestions"
                  placeholder="Help us serve you better! What could we do differently?"
                  rows={3}
                  value={feedback.suggestions}
                  onChange={(e) => setFeedback(prev => ({ ...prev, suggestions: e.target.value }))}
                />
              </div>

              <Button 
                onClick={handleSubmitFeedback}
                className="w-full bg-gradient-to-r from-primary to-cake-rose hover:opacity-90 shadow-lg"
                size="lg"
              >
                Submit Feedback
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Customer Testimonials */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground">
                Read about the sweet experiences from our wonderful customers
              </p>
            </div>

            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-card to-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-medium text-primary">{testimonial.name}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Thank You for Choosing Us!</h3>
                <p className="text-muted-foreground mb-6">
                  Every cake we create is made with love and passion. Your feedback helps us 
                  continue to grow and create even more magical moments.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/order">
                    <Button className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90">
                      Order Another Cake
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;