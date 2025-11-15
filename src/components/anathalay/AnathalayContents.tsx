import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

const AnathalayContents = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="max-w-436 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <Image
                  src="/images/anath-narayan-seva-gurukulam.png"
                  width={436}
                  height={436}
                  alt="Anath"
                  style={{ width: "436px" }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              अनाथ नारायण सेवा गुरुकुलम ट्रस्ट
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              एक पवित्र संस्था जो प्राचीन वैदिक ज्ञान के संरक्षण और आधुनिक विश्व
              के लिए मस्तिष्क का पोषण करने के लिए समर्पित है।
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <User className="w-8 h-8 text-white" />
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
    </div>
  );
};

export default AnathalayContents;
