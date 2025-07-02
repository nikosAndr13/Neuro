export interface PopupData {
  questionId: number;
  message: string;
  testimonial: {
    text: string;
    name: string;
    rating: number;
  };
}

export const popupData: PopupData[] = [
  {
    questionId: 1, // Physical exhaustion
    message:
      "Thousands of women struggle with chronic fatigue before discovering Neurotoned's bottom-up approach to restoring natural energy.",
    testimonial: {
      text: "I went from needing 3 cups of coffee just to function to having natural energy that lasts all day. The transformation has been incredible.",
      name: "Sarah M.",
      rating: 5,
    },
  },
  {
    questionId: 7, // Anxiety
    message:
      "You're not alone. Many women find relief from constant worry through Neurotoned's nervous system regulation techniques.",
    testimonial: {
      text: "The anxiety that controlled my life for years started melting away within the first week. I finally feel calm and in control.",
      name: "Jennifer L.",
      rating: 5,
    },
  },
  {
    questionId: 8, // Overwhelming emotions
    message:
      "Almost there! You're about to get a personalized plan to help you regulate overwhelming emotions naturally.",
    testimonial: {
      text: "My emotional rollercoaster finally stopped. I can handle stress without falling apart now. It's life-changing.",
      name: "Maria R.",
      rating: 5,
    },
  },
  {
    questionId: 10, // Emotional numbness
    message:
      "Many women experience emotional disconnection before learning Neurotoned's approach to reconnecting with your feelings safely.",
    testimonial: {
      text: "I thought I'd never feel joy again. The program helped me reconnect with my emotions in a healthy, manageable way.",
      name: "Lisa K.",
      rating: 5,
    },
  },
  {
    questionId: 13, // Concentration issues
    message:
      "Brain fog is incredibly common! You're about to discover how to clear mental cloudiness and regain sharp focus.",
    testimonial: {
      text: "My brain fog completely lifted. I can think clearly and focus for hours without mental fatigue. It's amazing.",
      name: "Amanda T.",
      rating: 5,
    },
  },
  {
    questionId: 18, // Need to stay busy
    message:
      "You're not alone in feeling like you need to stay constantly busy. Neurotoned teaches you how to find peace in stillness.",
    testimonial: {
      text: "I used to feel guilty about resting. Now I can actually relax without anxiety. The nervous system work is powerful.",
      name: "Rachel P.",
      rating: 5,
    },
  },
  {
    questionId: 23, // Sleep issues
    message:
      "Sleep struggles are one of the most common signs of nervous system dysregulation. Help is coming!",
    testimonial: {
      text: "I went from lying awake for hours to falling asleep peacefully within minutes. My sleep quality completely transformed.",
      name: "Diana S.",
      rating: 5,
    },
  },
  {
    questionId: 27, // Social overwhelm
    message:
      "Social exhaustion is real! You're about to learn techniques to enjoy social connection without feeling drained.",
    testimonial: {
      text: "I can finally enjoy social gatherings without needing days to recover. I feel present and energized with others now.",
      name: "Nicole C.",
      rating: 5,
    },
  },
];

export const getPopupForQuestion = (questionId: number): PopupData | null => {
  return popupData.find((popup) => popup.questionId === questionId) || null;
};
