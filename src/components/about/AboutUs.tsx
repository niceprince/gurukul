"use client";

import React from "react";
import { Target, Eye, Heart, Book, Users, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutContent } from "@/mock/mock";

export const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <Book className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              हमारे गुरुकुलम के बारे में
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              एक पवित्र संस्था जो प्राचीन वैदिक ज्ञान के संरक्षण और आधुनिक विश्व
              के लिए मस्तिष्क का पोषण करने के लिए समर्पित है।
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="border-2 border-red-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-3xl text-red-700">
                  हमारा विशेष कार्य
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  {aboutContent.mission}
                </CardDescription>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-red-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-3xl text-red-700">
                  हमारा दृष्टिकोण
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  {aboutContent.vision}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The timeless principles that guide our educational approach
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-red-200 bg-white shadow-xl">
              <CardContent className="p-8">
                <ul className="space-y-6">
                  {aboutContent.values.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-lg text-gray-800 font-medium leading-relaxed">
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the unique blend of traditional and modern education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-red-700">
                  Dedicated Gurus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Learn from experienced scholars and devotees who are
                  passionate about sharing Vedic knowledge
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-red-700">
                  Holistic Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Integrated approach combining Vedic studies, modern academics,
                  yoga, and character development
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-red-700">
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Our students excel in both spiritual growth and academic
                  achievements, leading meaningful lives
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 via-rose-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-5xl">ॐ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Devoted Community
            </h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              At VED MANTRA Gurukul, we don&apos;t just educate students – we
              nurture enlightened souls who carry forward the torch of ancient
              wisdom while embracing modern progress. Our community of students,
              teachers, and devotees creates a sacred space for growth,
              learning, and spiritual awakening.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
