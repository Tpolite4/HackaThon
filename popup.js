function randomQuote(affirmations) {
  // let quote = {};
  // function func() {
  const random = Math.floor(Math.random() * affirmations.length); //randomizer method used to go through the array of affirmations
  // if (affirmations[random] === undefined) return undefined;
  // else {
  // return affirmations.pop(affirmations[random]);
  // }
  return affirmations[random]; // accesses the actual quote using bracket notation
}
// return;
// }
let affirmations = [
  'I invite nourishing energy and wonderful people into my day',
  'I have all the energy and confidence I need to make the most of today.',
  'My positive, beneficial energy makes me powerful.',
  'I radiate confidence, positiveness, and readiness toward everyone around me.',
  'I reject negativity. I let go of what no longer serves me.',
  'I am energetic, and I’m ready to face whatever the day holds.',
  'A powerful aura of energy and light surrounds me.',
  'I am open to receiving beneficial energy from the universe.',
  'I focus on thoughts that empower and uplift me. I release thoughts that drain me and bring me down.',
  'My thoughts are clear, open, and uplifting. They nourish my mind and soul.',
  'Each day, my life gets better in every way.',
  'I am grateful for the blessings I already have and the blessings that come to me throughout each day.',
  'The universe sends me the opportunities I need. I will embrace them and prioritize the ones that match my personal vision.',
  'I’m ready to fill my heart and mind with energy and live with satisfaction and peace.',
  'I am a magnet for good thoughts and energy. Everything I need flows through me.',
  'Today, I choose to love myself just as I am.',
  'I love who I am today. I love my mind. I love my body. I love my soul.',
  'I am on the path to becoming my best self and living my best life. I will embrace every step along the way.',
  'I am worthy of good things. I have a right to comfort and prosperity.',
  'I let go of thoughts and beliefs that no longer serve me. Today, I am open to seeing myself in new ways.',
  'I am beautiful. I am unique. I have a wonderful sense of humor. I am truly special.',
  'I give myself time and opportunity to heal.',
  'I am the hero in my own story. I’m eager to turn to the next page.',
  'I am entitled to take up space. I move through the world freely and confidently.',
  'I am at peace with who I am. I won’t apologize for being me.',
  'I am balanced, independent, and strong.',
  'I am responsible for my own satisfaction and well-being.',
  'Today, I will show myself love and compassion.',
  'I don’t need anyone else’s approval, just my own.',
  'I freely give and receive love.',
  'I make the healthiest choices possible for my mental and physical health.',
  'I can make small changes each day toward weight loss and well-being.',
  'My body is one of a kind. It is worthy of respect and I celebrate its uniqueness.',
  'I embrace my shape as it changes and evolves.',
  'I can say no to foods that don’t promote health and wellness.',
  'My body deserves to be cared for. I strengthen it through nourishing food and exercise.',
  'Food is neither my enemy nor my friend. It doesn’t hold power over me.',
  'I am allowed to enjoy food.',
  'It’s okay if I don’t love my figure all the time.',
  'Weight is an arbitrary number. How I feel is what matters.',
  'My body is strong and beautiful.',
  'Numbers on the scale do not determine my worth.',
  'My inner beauty is more important than my dress size.',
  'Today, I’ll let go of my unhealthy thoughts and behaviors around food.',
  'I control how much I eat and what foods I choose.',
];
const randomElement = randomQuote(affirmations);
console.log(randomElement);
console.log(affirmations[38]);

// console.log(quote);
//     array.pop(array[elem]);
//   }
//   return randomQuote(array.length--);
// }
// return random;
// const random = Math.floor(Math.random() * array.length);
// return random;
// }

// const random = Math.floor(Math.random() * array.length);

// randomIndex();
// console.log(array[randomQuote]);

// const random = randomIndex(affirmations);
// console.log(affirmations(random))

// function affirm(affirmations) {
//   console.log(affirmations[(Math.floor(Math.random() * affirmations.length))]);
//   let dailyAffirmation = '';
//   for (let i = 0; i < affirmations.length; i++) {
//     affirmations[Math.floor(Math.random() * affirmations.length)];
//     dailyAffirmation = affirmations[i];
//     console.log[i]
//   }
//   return dailyAffirmation;
// }

// }
// affirm();
