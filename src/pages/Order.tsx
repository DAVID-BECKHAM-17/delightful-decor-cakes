import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, ShoppingCart, Calendar, User, MessageSquare, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [orderData, setOrderData] = useState({
    // Basic Info
    eventType: location.state?.eventType || "",
    cakeType: "",
    size: "",
    servings: "",
    eventDate: "",
    
    // Personal Info
    customerName: "",
    email: "",
    phone: "",
    
    // Customization
    flavor: "",
    specialMessage: "",
    decorations: [] as string[],
    additionalRequests: "",
    
    // Special Add-ons
    candles: false,
    photoEdible: false,
    giftBox: false,
    deliveryService: false
  });

  const steps = [
    { id: 1, title: "Event Details", icon: <Calendar className="h-5 w-5" /> },
    { id: 2, title: "Personal Info", icon: <User className="h-5 w-5" /> },
    { id: 3, title: "Customization", icon: <MessageSquare className="h-5 w-5" /> },
    { id: 4, title: "Special Items", icon: <Sparkles className="h-5 w-5" /> },
    { id: 5, title: "Review & Order", icon: <ShoppingCart className="h-5 w-5" /> }
  ];

  const cakeTypes = [
    "Wedding Cake",
    "Birthday Cake", 
    "Anniversary Cake",
    "Baby Shower Cake",
    "Graduation Cake",
    "Corporate Event Cake",
    "Custom Theme Cake"
  ];

  const flavors = [
    "Vanilla Bean",
    "Chocolate Fudge", 
    "Red Velvet",
    "Lemon Zest",
    "Strawberry",
    "Carrot Cake",
    "Funfetti",
    "Cookies & Cream"
  ];

  const decorationOptions = [
    "Fresh Flowers",
    "Fondant Decorations", 
    "Buttercream Roses",
    "Gold/Silver Accents",
    "Themed Toppers",
    "Piped Borders",
    "Chocolate Drip",
    "Edible Pearls"
  ];

  const handleDecorationChange = (decoration: string, checked: boolean) => {
    if (checked) {
      setOrderData(prev => ({
        ...prev,
        decorations: [...prev.decorations, decoration]
      }));
    } else {
      setOrderData(prev => ({
        ...prev,
        decorations: prev.decorations.filter(d => d !== decoration)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitOrder = () => {
    toast({
      title: "Order Submitted Successfully! 🎉",
      description: "We'll contact you within 24 hours to confirm your order details.",
    });
    
    // Redirect to feedback page after a short delay
    setTimeout(() => {
      navigate("/feedback");
    }, 2000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <Select 
                value={orderData.eventType} 
                onValueChange={(value) => setOrderData(prev => ({ ...prev, eventType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your event type" />
                </SelectTrigger>
                <SelectContent>
                  {cakeTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="size">Cake Size</Label>
                <Select 
                  value={orderData.size} 
                  onValueChange={(value) => setOrderData(prev => ({ ...prev, size: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6-inch">6" Round (Serves 8-10)</SelectItem>
                    <SelectItem value="8-inch">8" Round (Serves 12-16)</SelectItem>
                    <SelectItem value="10-inch">10" Round (Serves 20-25)</SelectItem>
                    <SelectItem value="12-inch">12" Round (Serves 30-40)</SelectItem>
                    <SelectItem value="multi-tier">Multi-Tier (Custom)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="servings">Expected Guests</Label>
                <Input
                  id="servings"
                  placeholder="Number of guests"
                  value={orderData.servings}
                  onChange={(e) => setOrderData(prev => ({ ...prev, servings: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="eventDate">Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                value={orderData.eventDate}
                onChange={(e) => setOrderData(prev => ({ ...prev, eventDate: e.target.value }))}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="customerName">Full Name</Label>
              <Input
                id="customerName"
                placeholder="Your full name"
                value={orderData.customerName}
                onChange={(e) => setOrderData(prev => ({ ...prev, customerName: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={orderData.email}
                onChange={(e) => setOrderData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="(555) 123-4567"
                value={orderData.phone}
                onChange={(e) => setOrderData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="flavor">Cake Flavor</Label>
              <Select 
                value={orderData.flavor} 
                onValueChange={(value) => setOrderData(prev => ({ ...prev, flavor: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your favorite flavor" />
                </SelectTrigger>
                <SelectContent>
                  {flavors.map((flavor) => (
                    <SelectItem key={flavor} value={flavor}>{flavor}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="specialMessage">Special Message on Cake</Label>
              <Input
                id="specialMessage"
                placeholder="e.g., 'Happy Birthday Sarah!', 'Congratulations!'"
                value={orderData.specialMessage}
                onChange={(e) => setOrderData(prev => ({ ...prev, specialMessage: e.target.value }))}
              />
            </div>

            <div>
              <Label>Decorations & Style</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {decorationOptions.map((decoration) => (
                  <div key={decoration} className="flex items-center space-x-2">
                    <Checkbox
                      id={decoration}
                      checked={orderData.decorations.includes(decoration)}
                      onCheckedChange={(checked) => 
                        handleDecorationChange(decoration, checked as boolean)
                      }
                    />
                    <Label htmlFor={decoration} className="text-sm">{decoration}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="additionalRequests">Additional Requests</Label>
              <Textarea
                id="additionalRequests"
                placeholder="Any special requirements, dietary restrictions, or design ideas..."
                rows={4}
                value={orderData.additionalRequests}
                onChange={(e) => setOrderData(prev => ({ ...prev, additionalRequests: e.target.value }))}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Special Add-ons</h3>
              <p className="text-muted-foreground">Make your cake even more special with these extras</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox
                      id="candles"
                      checked={orderData.candles}
                      onCheckedChange={(checked) => 
                        setOrderData(prev => ({ ...prev, candles: checked as boolean }))
                      }
                    />
                    <Label htmlFor="candles" className="text-lg font-medium">Birthday Candles</Label>
                  </div>
                  <p className="text-muted-foreground">Premium birthday candles with matches included</p>
                  <p className="text-primary font-medium mt-2">+$5</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox
                      id="photoEdible"
                      checked={orderData.photoEdible}
                      onCheckedChange={(checked) => 
                        setOrderData(prev => ({ ...prev, photoEdible: checked as boolean }))
                      }
                    />
                    <Label htmlFor="photoEdible" className="text-lg font-medium">Edible Photo Print</Label>
                  </div>
                  <p className="text-muted-foreground">Print your favorite photo directly on the cake</p>
                  <p className="text-primary font-medium mt-2">+$15</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox
                      id="giftBox"
                      checked={orderData.giftBox}
                      onCheckedChange={(checked) => 
                        setOrderData(prev => ({ ...prev, giftBox: checked as boolean }))
                      }
                    />
                    <Label htmlFor="giftBox" className="text-lg font-medium">Premium Gift Box</Label>
                  </div>
                  <p className="text-muted-foreground">Beautiful packaging perfect for gifting</p>
                  <p className="text-primary font-medium mt-2">+$10</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Checkbox
                      id="deliveryService"
                      checked={orderData.deliveryService}
                      onCheckedChange={(checked) => 
                        setOrderData(prev => ({ ...prev, deliveryService: checked as boolean }))
                      }
                    />
                    <Label htmlFor="deliveryService" className="text-lg font-medium">Delivery Service</Label>
                  </div>
                  <p className="text-muted-foreground">Professional delivery to your event location</p>
                  <p className="text-primary font-medium mt-2">+$25</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Order Summary</h3>
              <p className="text-muted-foreground">Please review your order details before submitting</p>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-primary">Event Details</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Event:</span> {orderData.eventType}</div>
                      <div><span className="font-medium">Size:</span> {orderData.size}</div>
                      <div><span className="font-medium">Date:</span> {orderData.eventDate}</div>
                      <div><span className="font-medium">Guests:</span> {orderData.servings}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-primary">Contact Information</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Name:</span> {orderData.customerName}</div>
                      <div><span className="font-medium">Email:</span> {orderData.email}</div>
                      <div><span className="font-medium">Phone:</span> {orderData.phone}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-primary">Customization</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Flavor:</span> {orderData.flavor}</div>
                      <div><span className="font-medium">Message:</span> {orderData.specialMessage || "None"}</div>
                      <div><span className="font-medium">Decorations:</span> {orderData.decorations.join(", ") || "Standard"}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-4 text-primary">Add-ons</h4>
                    <div className="space-y-2 text-sm">
                      {orderData.candles && <div>✓ Birthday Candles (+$5)</div>}
                      {orderData.photoEdible && <div>✓ Edible Photo Print (+$15)</div>}
                      {orderData.giftBox && <div>✓ Premium Gift Box (+$10)</div>}
                      {orderData.deliveryService && <div>✓ Delivery Service (+$25)</div>}
                      {!orderData.candles && !orderData.photoEdible && !orderData.giftBox && !orderData.deliveryService && (
                        <div>No additional items selected</div>
                      )}
                    </div>
                  </div>
                </div>

                {orderData.additionalRequests && (
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold text-lg mb-2 text-primary">Additional Requests</h4>
                    <p className="text-sm bg-secondary/50 p-4 rounded-lg">{orderData.additionalRequests}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 via-cake-pink/10 to-cake-golden/10 rounded-2xl p-6 text-center">
              <p className="text-muted-foreground mb-4">
                After submitting your order, our team will contact you within 24 hours to confirm 
                details and provide a final quote with pricing.
              </p>
              <Button 
                onClick={submitOrder}
                size="lg" 
                className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90 shadow-lg"
              >
                Submit Order
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-cake-rose bg-clip-text text-transparent">
              Place Your Order
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's create the perfect cake for your special moment
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary -translate-y-1/2 -z-10"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 transition-all duration-300 ease-in-out" 
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          ></div>
          
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                currentStep >= step.id 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-background border-secondary text-muted-foreground'
              }`}>
                {step.icon}
              </div>
              <span className={`text-sm mt-2 font-medium ${
                currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-secondary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              {steps.find(s => s.id === currentStep)?.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={currentStep === 1}
            className="border-primary/20 hover:bg-primary/5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {currentStep < 5 && (
            <Button 
              onClick={nextStep}
              className="bg-gradient-to-r from-primary to-cake-rose hover:opacity-90"
            >
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;