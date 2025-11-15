"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { schoolInfo } from "@/mock/mock";

export const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              हमारे साथ जुड़े।
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              हमें आपसे सुनना अच्छा लगेगा। प्रवेश, पूछताछ या हमारे गुरुकुल के
              बारे में अधिक जानने के लिए हमसे संपर्क करें।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">{schoolInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Email</h3>
                <p className="text-sm text-gray-600 break-all">
                  {schoolInfo.email}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Location</h3>
                <p className="text-sm text-gray-600">
                  श्री शिव मन्दिर, ग्रीन एनक्लेव, चिपियाना बुजुर्ग, गौतम बुद्ध
                  नगर – 201009, उ.प्र.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Hours</h3>
                <p className="text-sm text-gray-600">Mon-Sat: 8AM-6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-700 mb-4">
                हमें एक संदेश भेजें
              </h2>
              <p className="text-gray-600">
                नीचे दिया गया फॉर्म भरें और हम यथाशीघ्र उत्तर देंगे।
              </p>
            </div>

            <Card className="border-2 border-red-200 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">
                        पूरा नाम *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-2 border-rose-200 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        मेल पता *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-2 border-rose-200 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        फ़ोन नंबर
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-rose-200 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">
                        विषय *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-2 border-rose-200 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">
                      संदेश *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-2 border-rose-200 focus:border-red-500 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
                  >
                    {isSubmitting ? "Sending..." : "मेसेज भेजें"}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              हमारे परिसर पर जाएँ
            </h2>
            <p className="text-gray-600">
              आइए, हमारे गुरुकुल के पवित्र वातावरण का अनुभव करें।
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-red-200 shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-rose-100 to-red-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">
                    श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम्
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
