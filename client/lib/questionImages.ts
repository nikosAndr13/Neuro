import {
  Brain,
  Heart,
  Zap,
  Moon,
  Coffee,
  Users,
  Target,
  Shield,
  Clock,
  Waves,
  Battery,
  AlertCircle,
} from "lucide-react";

export const getQuestionIcon = (questionId: number) => {
  const iconMap: Record<number, any> = {
    1: Battery, // Physical exhaustion
    2: Brain, // Headaches/tension
    3: AlertCircle, // Digestive issues
    4: Heart, // Heart racing
    5: Zap, // Dizziness
    6: Shield, // Chronic pain
    7: AlertCircle, // Anxiety
    8: Waves, // Overwhelming emotions
    9: Target, // Mood swings
    10: Heart, // Emotional numbness
    11: Shield, // Hypervigilant
    12: Brain, // Sadness
    13: Brain, // Concentration
    14: Zap, // Brain fog
    15: Target, // Decision making
    16: Brain, // Memory
    17: AlertCircle, // Thinking under pressure
    18: Clock, // Need to stay busy
    19: Users, // People pleasing
    20: Shield, // Withdrawing
    21: Target, // Boundaries
    22: Heart, // Coping behaviors
    23: Moon, // Sleep - falling asleep
    24: Moon, // Sleep - staying asleep
    25: Coffee, // Unrefreshing sleep
    26: Coffee, // Caffeine dependence
    27: Users, // Social drain
    28: Brain, // Present in conversations
    29: Users, // Social anxiety
    30: Waves, // Overwhelm in busy places
  };

  return iconMap[questionId] || Brain;
};

export const getQuestionColor = (questionId: number) => {
  // Color categories based on question type
  if ([1, 2, 3, 4, 5, 6].includes(questionId)) {
    return "text-red-500"; // Physical symptoms - red
  }
  if ([7, 8, 9, 10, 11, 12].includes(questionId)) {
    return "text-orange-500"; // Emotional symptoms - orange
  }
  if ([13, 14, 15, 16, 17].includes(questionId)) {
    return "text-purple-500"; // Cognitive symptoms - purple
  }
  if ([18, 19, 20, 21, 22].includes(questionId)) {
    return "text-blue-500"; // Behavioral symptoms - blue
  }
  if ([23, 24, 25, 26].includes(questionId)) {
    return "text-indigo-500"; // Sleep symptoms - indigo
  }
  if ([27, 28, 29, 30].includes(questionId)) {
    return "text-emerald-500"; // Social symptoms - emerald
  }
  return "text-teal-500"; // Default
};
