export interface QuizQuestion {
  id: number;
  question: string;
  category:
    | "physical"
    | "emotional"
    | "cognitive"
    | "behavioral"
    | "sleep"
    | "social";
}

export const quizQuestions: QuizQuestion[] = [
  // Physical symptoms
  {
    id: 1,
    question:
      "Do you often feel physically exhausted even after a full night's sleep?",
    category: "physical",
  },
  {
    id: 2,
    question: "Do you experience frequent headaches or muscle tension?",
    category: "physical",
  },
  {
    id: 3,
    question:
      "Do you have digestive issues like bloating, IBS, or constipation?",
    category: "physical",
  },
  {
    id: 4,
    question:
      "Do you notice your heart racing or shallow breathing when stressed?",
    category: "physical",
  },
  {
    id: 5,
    question: "Do you feel dizzy or lightheaded regularly?",
    category: "physical",
  },
  {
    id: 6,
    question: "Do you experience chronic pain or muscle stiffness?",
    category: "physical",
  },

  // Emotional symptoms
  {
    id: 7,
    question:
      "Do you find yourself feeling anxious or worried most of the time?",
    category: "emotional",
  },
  {
    id: 8,
    question: "Do your emotions feel overwhelming or out of control?",
    category: "emotional",
  },
  {
    id: 9,
    question: "Do you experience frequent mood swings throughout the day?",
    category: "emotional",
  },
  {
    id: 10,
    question:
      "Do you feel emotionally numb or disconnected from your feelings?",
    category: "emotional",
  },
  {
    id: 11,
    question: "Do you feel like you're always 'on edge' or hypervigilant?",
    category: "emotional",
  },
  {
    id: 12,
    question: "Do you struggle with feelings of sadness or hopelessness?",
    category: "emotional",
  },

  // Cognitive symptoms
  {
    id: 13,
    question: "Do you have trouble concentrating or staying focused?",
    category: "cognitive",
  },
  {
    id: 14,
    question: "Do you experience 'brain fog' or mental cloudiness?",
    category: "cognitive",
  },
  {
    id: 15,
    question: "Do you have difficulty making decisions, even simple ones?",
    category: "cognitive",
  },
  {
    id: 16,
    question: "Do you struggle to remember things or feel mentally scattered?",
    category: "cognitive",
  },
  {
    id: 17,
    question: "Do you find it hard to think clearly under pressure?",
    category: "cognitive",
  },

  // Behavioral symptoms
  {
    id: 18,
    question:
      "Do you feel the need to stay constantly busy, even when exhausted?",
    category: "behavioral",
  },
  {
    id: 19,
    question:
      "Do you often say 'yes' to things you don't want to do to avoid conflict?",
    category: "behavioral",
  },
  {
    id: 20,
    question:
      "Do you find yourself withdrawing from activities you used to enjoy?",
    category: "behavioral",
  },
  {
    id: 21,
    question: "Do you struggle to set boundaries with others?",
    category: "behavioral",
  },
  {
    id: 22,
    question:
      "Do you turn to food, shopping, or other behaviors when stressed?",
    category: "behavioral",
  },

  // Sleep symptoms
  {
    id: 23,
    question: "Do you have trouble falling asleep at night?",
    category: "sleep",
  },
  {
    id: 24,
    question: "Do you wake up frequently during the night?",
    category: "sleep",
  },
  {
    id: 25,
    question: "Do you wake up feeling unrested, even after 7-8 hours of sleep?",
    category: "sleep",
  },
  {
    id: 26,
    question: "Do you rely on caffeine or stimulants to get through the day?",
    category: "sleep",
  },

  // Social symptoms
  {
    id: 27,
    question: "Do social situations leave you feeling drained or overwhelmed?",
    category: "social",
  },
  {
    id: 28,
    question: "Do you find it difficult to be present in conversations?",
    category: "social",
  },
  {
    id: 29,
    question: "Do you avoid social gatherings or feel anxious in groups?",
    category: "social",
  },
  {
    id: 30,
    question: "Do loud environments or busy places feel overwhelming to you?",
    category: "social",
  },
];

export interface QuizResponse {
  questionId: number;
  answer: boolean; // true for yes, false for no
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  level: "optimal" | "moderate" | "low" | "dysregulated";
  categoryScores: Record<string, number>;
}

export const calculateResult = (responses: QuizResponse[]): QuizResult => {
  const yesCount = responses.filter((r) => r.answer === true).length;
  const totalQuestions = quizQuestions.length;
  const score = yesCount;

  let level: QuizResult["level"];
  if (score <= 8) level = "optimal";
  else if (score <= 15) level = "moderate";
  else if (score <= 22) level = "low";
  else level = "dysregulated";

  // Calculate category scores
  const categoryScores: Record<string, number> = {};
  const categoryTotals: Record<string, number> = {};

  quizQuestions.forEach((q) => {
    if (!categoryTotals[q.category]) categoryTotals[q.category] = 0;
    categoryTotals[q.category]++;
  });

  responses.forEach((response) => {
    const question = quizQuestions.find((q) => q.id === response.questionId);
    if (question && response.answer) {
      if (!categoryScores[question.category])
        categoryScores[question.category] = 0;
      categoryScores[question.category]++;
    }
  });

  return { score, totalQuestions, level, categoryScores };
};
