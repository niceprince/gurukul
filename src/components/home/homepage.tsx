import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  GraduationCap,
  Users,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { schoolInfo, features, testimonials, programs } from "@/mock/mock";
import CarouselPage from "./CarouselPage";

const iconMap = {
  BookOpen,
  Heart,
  GraduationCap,
  Users,
};

export type IconName = keyof typeof iconMap;

export const Homepage = () => {
  return (
    <div className="min-h-screen">
      <CarouselPage />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-500 via-red-200 to-orange-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZGRkZCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Om Symbol with animation */}
            <div className="mb-6 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-white font-bold text-4xl">ॐ</span>
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-yellow-500 w-6 h-6 animate-bounce" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent leading-tight">
              {schoolInfo.name}
            </h1>

            <p className="text-xl md:text-2xl text-red-700 font-semibold mb-4">
              {schoolInfo.tagline}
            </p>

            <p className="text-lg text-gray-700 mb-4 max-w-2xl leading-relaxed">
              {schoolInfo.description}
            </p>
            <p className="text-xl md:text-xl text-red-700 font-semibold mb-8">
              “विद्या सर्वत्र विनय देती है, विनय से योग्यता, योग्यता से धन और धन
              से धर्म की रक्षा होती है।”
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              हमारा गुरुकुल क्यों चुनें?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              प्राचीन ज्ञान और आधुनिक शिक्षा के उत्तम सामंजस्य का अनुभव करें।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card
                  key={feature.id}
                  className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-red-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              हमारे कार्यक्रम
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हर आयु वर्ग के लिए अनुकूलित व्यापक शिक्षा।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-red-700">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              लोग क्या कहते हैं!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हमारे समर्पित समुदाय से सुनें!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-rose-100 pt-4">
                    <p className="font-semibold text-red-700">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 via-rose-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZjIwIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              आज ही अपनी पवित्र यात्रा शुरू करें!
            </h2>
            <p className="text-xl mb-8 text-rose-100">
              हमारे समर्पित समुदाय में शामिल हों और वैदिक ज्ञान पर आधारित
              परिवर्तनकारी शिक्षा का अनुभव करें।
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-rose-50 shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-10 py-6"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
