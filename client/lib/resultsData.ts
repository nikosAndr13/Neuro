import { QuizResult } from "./quizData";

export interface ResultContent {
  title: string;
  subtitle: string;
  description: string;
  insights: string[];
  recommendations: string[];
  transformation: string;
  ctaTitle: string;
  ctaDescription: string;
  color: string;
  graphColor: string;
}

export const getResultContent = (result: QuizResult): ResultContent => {
  switch (result.level) {
    case "optimal":
      return {
        title: "Thriving Nervous System",
        subtitle: "Your vagal tone is strong and resilient",
        description:
          "Congratulations! Your nervous system shows excellent regulation and resilience. You're managing stress well and your body is in a balanced state most of the time.",
        insights: [
          "You have strong stress recovery abilities",
          "Your sleep quality is generally good",
          "You maintain emotional balance during challenges",
          "Your body's rest-and-digest functions are working optimally",
        ],
        recommendations: [
          "Continue your current wellness practices",
          "Focus on maintaining your strong foundation",
          "Consider becoming a support system for others",
          "Explore advanced nervous system optimization techniques",
        ],
        transformation:
          "In 30 days with Neurotoned, you'll become an even more resilient, grounded woman who can handle any challenge life throws your way while maintaining your inner peace and vitality.",
        ctaTitle: "Optimize Your Already Strong Foundation",
        ctaDescription:
          "Take your nervous system from good to extraordinary with our advanced protocols designed for high-functioning women.",
        color: "emerald",
        graphColor: "#10b981",
      };

    case "moderate":
      return {
        title: "Resilient But Stretched",
        subtitle: "Your nervous system is coping but showing some strain",
        description:
          "You're managing life's demands reasonably well, but your nervous system is sending signals that it needs more support. You likely have periods of feeling balanced mixed with times of overwhelm.",
        insights: [
          "You experience manageable stress but recovery takes longer",
          "Some physical symptoms are starting to appear",
          "Your emotional regulation works most of the time",
          "Sleep and energy levels fluctuate",
        ],
        recommendations: [
          "Implement consistent stress management practices",
          "Prioritize sleep hygiene and recovery time",
          "Add gentle nervous system regulation techniques",
          "Create stronger boundaries in your daily life",
        ],
        transformation:
          "In 30 days with Neurotoned, you'll transform from surviving to truly thriving - feeling calm, energized, and emotionally steady every single day.",
        ctaTitle: "Upgrade from Surviving to Thriving",
        ctaDescription:
          "Bridge the gap between managing and mastering your nervous system with proven techniques for busy women.",
        color: "amber",
        graphColor: "#f59e0b",
      };

    case "low":
      return {
        title: "Overwhelmed & Depleted",
        subtitle: "Your nervous system is struggling to keep up",
        description:
          "Your body and mind are working overtime to manage daily stressors. You're likely experiencing multiple symptoms that interfere with your quality of life and well-being.",
        insights: [
          "Chronic stress is taking a toll on your body",
          "Recovery from stressful events takes significantly longer",
          "Physical symptoms are becoming more frequent",
          "Emotional regulation feels challenging most days",
        ],
        recommendations: [
          "Urgent need for nervous system support and healing",
          "Focus on foundational practices like breathwork",
          "Prioritize rest and nervous system reset time",
          "Consider professional support for stress management",
        ],
        transformation:
          "In 30 days with Neurotoned, you'll experience a complete nervous system reset - going from overwhelmed and exhausted to calm, clear, and energetically vibrant.",
        ctaTitle: "Reclaim Your Calm & Energy",
        ctaDescription:
          "Break free from the cycle of overwhelm with our comprehensive nervous system reset program designed specifically for depleted women.",
        color: "orange",
        graphColor: "#ea580c",
      };

    case "dysregulated":
      return {
        title: "Severely Dysregulated",
        subtitle: "Your nervous system needs immediate support",
        description:
          "Your nervous system is in a state of chronic dysregulation, significantly impacting your daily life, relationships, and overall well-being. This level of stress isn't sustainable and requires focused intervention.",
        insights: [
          "Your body is stuck in chronic fight-or-flight mode",
          "Multiple body systems are affected by chronic stress",
          "Emotional regulation feels nearly impossible",
          "Sleep, digestion, and energy are severely compromised",
        ],
        recommendations: [
          "Immediate nervous system intervention is crucial",
          "Focus on basic regulation techniques first",
          "Prioritize professional support and community",
          "Gentle, consistent practices over intense efforts",
        ],
        transformation:
          "In 30 days with Neurotoned, you'll experience a life-changing transformation from constant dysregulation to feeling grounded, peaceful, and in control of your nervous system for the first time in years.",
        ctaTitle: "Complete Nervous System Reset",
        ctaDescription:
          "Get the comprehensive support you need to break free from chronic dysregulation and reclaim your life with our 30-day healing program.",
        color: "red",
        graphColor: "#dc2626",
      };
  }
};

export const testimonials = [
  {
    name: "Sarah M.",
    text: "After 30 days with Neurotoned, I went from constant anxiety and exhaustion to feeling calm and energized. My sleep improved dramatically and I finally feel like myself again.",
    rating: 5,
    before: "Severely Dysregulated",
    after: "Thriving",
  },
  {
    name: "Jennifer L.",
    text: "I thought feeling overwhelmed was just part of being a busy mom. Neurotoned taught me it doesn't have to be. I'm now managing stress so much better.",
    rating: 5,
    before: "Low Vagal Tone",
    after: "Resilient",
  },
  {
    name: "Maria R.",
    text: "The transformation has been incredible. My digestion improved, my mood stabilized, and I have energy to actually enjoy my life again.",
    rating: 5,
    before: "Overwhelmed",
    after: "Balanced",
  },
];

export const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most women notice improvements in sleep and stress levels within the first week. Significant nervous system changes typically occur within 2-3 weeks of consistent practice.",
  },
  {
    question: "Is this program suitable for busy mothers?",
    answer:
      "Absolutely! The program is designed specifically for busy women. Most techniques take 5-15 minutes and can be done anywhere, even with children around.",
  },
  {
    question: "What if I have trauma or severe anxiety?",
    answer:
      "Our gentle, trauma-informed approach is safe for most women. However, we always recommend consulting with your healthcare provider if you have severe mental health concerns.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No special equipment needed! Everything can be done with just your body and breath. We provide some optional tools that can enhance your practice.",
  },
  {
    question: "What makes this different from other wellness programs?",
    answer:
      "Neurotoned is specifically focused on nervous system regulation using scientifically-backed techniques. It's not just about relaxation - it's about creating lasting physiological changes.",
  },
];
