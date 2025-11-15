// Mock data for Gurukul School Website
import { IconName } from "@/components/home/homepage";

// Step 3: Define your feature type
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: IconName;
}

export const schoolInfo = {
  name: "श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम्",
  tagline: "अनाम नारायण सेवा गुरुकुलम् ट्रस्ट द्वारा संचालित",
  description:
    "श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम् में विद्यार्थियों को वेद, संस्कृत, धर्म और संस्कृति की प्राचीन परम्पराओं के साथ आधुनिक शिक्षा का भी समुचित ज्ञान दिया जाता है। हाँ शिक्षा का उद्देश्य केवल रोजगार प्राप्त करना नहीं, बल्कि चरित्र निर्माण, संस्कार संवर्धन और मानव सेवा के भाव को जागृत करना है। गुरुकुल में वेद-पाठ, योगाभ्यास, संस्कृत अध्ययन, शारीरिक एवं मानसिक विकास के लिए विविध गतिविधियाँ संचालित की जाती हैं। हमारा संकल्प है — ",
  phone: "+91 9520559292",
  email: "info@SriPremdarshananandVedaVidyaGurukulam.com",
  address:
    "श्री शिव मन्दिर, ग्रीन एनक्लेव, चिपियाना बुजुर्ग, गौतम बुद्ध नगर – 201009, उ.प्र.",
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Vedic Education",
    description:
      "Traditional Sanskrit, Vedic texts, and ancient wisdom taught by experienced scholars",
    icon: "BookOpen",
  },
  {
    id: 2,
    title: "Spiritual Development",
    description:
      "Daily meditation, yoga, and prayer sessions for holistic growth of mind, body, and soul",
    icon: "Heart",
  },
  {
    id: 3,
    title: "Modern Curriculum",
    description:
      "Balanced integration of contemporary subjects with traditional Gurukul teachings",
    icon: "GraduationCap",
  },
  {
    id: 4,
    title: "Devoted Teachers",
    description:
      "Experienced Gurus and devotees dedicated to nurturing each student's potential",
    icon: "Users",
  },
];

export const aboutContent = {
  mission:
    "प्राचीन ज्ञान और समकालीन शिक्षा के उत्तम मिश्रण के माध्यम से छात्रों को आधुनिक चुनौतियों के लिए तैयार करते हुए वैदिक ज्ञान का संरक्षण और प्रचार करना।",
  vision:
    "ऐसे प्रबुद्ध व्यक्तियों का निर्माण करना जो भारतीय संस्कृति, मूल्यों और आध्यात्मिकता में निहित हों तथा शैक्षणिक और व्यावसायिक गतिविधियों में उत्कृष्टता प्राप्त करें।",
  values: [
    "Dharma - Righteousness and moral values",
    "Vidya - Knowledge and learning",
    "Seva - Selfless service to humanity",
    "Satya - Truth and honesty",
    "Shanti - Peace and harmony",
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Radha Sharma",
    role: "Parent",
    text: "VED MANTRA Gurukul has transformed my child's life. The perfect blend of spiritual and academic education is remarkable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Alumni",
    text: "The Vedic teachings and values I learned here continue to guide me in my professional and personal life.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Desai",
    role: "Current Student",
    text: "Every day at the Gurukul is a journey of self-discovery and learning. The Gurus are incredibly supportive.",
    rating: 5,
  },
];

export const programs = [
  {
    id: 1,
    title: "Primary Gurukul (Ages 6-10)",
    description:
      "Foundation in Vedic chanting, basic Sanskrit, and core academic subjects",
  },
  {
    id: 2,
    title: "Secondary Gurukul (Ages 11-15)",
    description:
      "Advanced Vedic studies, Sanskrit literature, and integrated modern curriculum",
  },
  {
    id: 3,
    title: "Senior Gurukul (Ages 16-18)",
    description:
      "Specialized Vedic streams, competitive exam preparation, and spiritual leadership",
  },
];
