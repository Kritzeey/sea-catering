export interface Menu {
  name: string;
  image: string;
  description: string;
  nutrients: {
    cal: number; // kcal
    fat: number; // grams
    sfat: number; // grams
    carbo: number; // grams
    sugar: number; // grams
    fiber: number; // grams
    protein: number; // grams
    cholesterol: number; // milligrams
    sodium: number; // milligrams
  };
  allergens?: string[];
}

export const healthyMenu: Menu[] = [
  {
    name: "Grilled Lemon Herb Salmon",
    image:
      "https://static01.nyt.com/images/2024/11/24/multimedia/Salmon-With-Lemon-Herb-Marinaderex-zcfp/Salmon-With-Lemon-Herb-Marinaderex-zcfp-jumbo-v2.jpg?quality=75&auto=webp",
    description:
      "Fresh salmon fillet grilled with lemon, garlic, and herbs, served with quinoa and roasted vegetables.",
    nutrients: {
      cal: 520,
      fat: 28,
      sfat: 5,
      carbo: 30,
      sugar: 4,
      fiber: 6,
      protein: 38,
      cholesterol: 85,
      sodium: 300,
    },
    allergens: ["fish"],
  },
  {
    name: "Quinoa Chickpea Bowl",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/06/WU2412__chicken-quinoa-bowl_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1583516899411.webp",
    description:
      "Protein-packed bowl with quinoa, roasted chickpeas, kale, avocado, and tahini dressing.",
    nutrients: {
      cal: 470,
      fat: 18,
      sfat: 2,
      carbo: 55,
      sugar: 6,
      fiber: 9,
      protein: 20,
      cholesterol: 0,
      sodium: 280,
    },
  },
  {
    name: "Tofu Stir-Fry with Brown Rice",
    image:
      "https://shwetainthekitchen.com/wp-content/uploads/2014/03/Brown-Rice-Stir-Fry.jpg",
    description:
      "Crispy tofu tossed with colorful bell peppers, broccoli, and a light ginger-soy sauce over brown rice.",
    nutrients: {
      cal: 510,
      fat: 17,
      sfat: 2,
      carbo: 60,
      sugar: 7,
      fiber: 8,
      protein: 24,
      cholesterol: 0,
      sodium: 460,
    },
    allergens: ["soy"],
  },
  {
    name: "Turkey Meatballs with Zoodles",
    image:
      "https://www.cookwithcampbells.ca/wp-content/uploads/sites/24/assets/recipes/medium/medium_963.jpg",
    description:
      "Lean turkey meatballs baked and served over zucchini noodles with a light tomato basil sauce.",
    nutrients: {
      cal: 430,
      fat: 19,
      sfat: 4,
      carbo: 28,
      sugar: 5,
      fiber: 5,
      protein: 35,
      cholesterol: 95,
      sodium: 370,
    },
  },
  {
    name: "Vegan Lentil Shepherd's Pie",
    image: "",
    description:
      "Comforting dish made with seasoned lentils, carrots, and peas under a mashed cauliflower topping.",
    nutrients: {
      cal: 410,
      fat: 14,
      sfat: 1,
      carbo: 50,
      sugar: 7,
      fiber: 10,
      protein: 21,
      cholesterol: 0,
      sodium: 310,
    },
  },
  {
    name: "Thai Peanut Chicken Salad",
    image: "",
    description:
      "Crunchy slaw topped with grilled chicken and drizzled in a spicy peanut dressing.",
    nutrients: {
      cal: 590,
      fat: 27,
      sfat: 5,
      carbo: 35,
      sugar: 8,
      fiber: 4,
      protein: 42,
      cholesterol: 110,
      sodium: 520,
    },
    allergens: ["peanuts"],
  },
  {
    name: "Stuffed Bell Peppers",
    image: "",
    description:
      "Bell peppers filled with a mix of turkey, brown rice, beans, and herbs, baked until tender.",
    nutrients: {
      cal: 480,
      fat: 15,
      sfat: 3,
      carbo: 45,
      sugar: 6,
      fiber: 8,
      protein: 33,
      cholesterol: 70,
      sodium: 290,
    },
  },
  {
    name: "Shrimp and Avocado Quinoa Salad",
    image: "",
    description:
      "Zesty quinoa salad tossed with grilled shrimp, creamy avocado, cucumbers, and citrus vinaigrette.",
    nutrients: {
      cal: 530,
      fat: 22,
      sfat: 3,
      carbo: 40,
      sugar: 5,
      fiber: 6,
      protein: 35,
      cholesterol: 190,
      sodium: 400,
    },
    allergens: ["shellfish"],
  },
  {
    name: "Eggplant Chickpea Curry",
    image: "",
    description:
      "Indian-style curry made with tender eggplant, chickpeas, tomatoes, and warming spices.",
    nutrients: {
      cal: 440,
      fat: 16,
      sfat: 2,
      carbo: 55,
      sugar: 8,
      fiber: 9,
      protein: 19,
      cholesterol: 0,
      sodium: 360,
    },
  },
  {
    name: "Grilled Chicken Burrito Bowl",
    image: "",
    description:
      "A high-protein bowl with grilled chicken, black beans, brown rice, pico de gallo, and guacamole.",
    nutrients: {
      cal: 600,
      fat: 22,
      sfat: 4,
      carbo: 50,
      sugar: 4,
      fiber: 7,
      protein: 42,
      cholesterol: 90,
      sodium: 480,
    },
  },
  {
    name: "Spaghetti Squash with Pesto",
    image: "",
    description:
      "Roasted spaghetti squash tossed with homemade basil pesto and cherry tomatoes.",
    nutrients: {
      cal: 370,
      fat: 20,
      sfat: 3,
      carbo: 30,
      sugar: 6,
      fiber: 5,
      protein: 12,
      cholesterol: 10,
      sodium: 240,
    },
    allergens: ["tree nuts", "milk"],
  },
  {
    name: "Beef and Broccoli Stir-Fry",
    image: "",
    description:
      "Lean beef strips sautéed with broccoli and carrots in a low-sodium soy-ginger glaze.",
    nutrients: {
      cal: 510,
      fat: 18,
      sfat: 4,
      carbo: 35,
      sugar: 6,
      fiber: 4,
      protein: 38,
      cholesterol: 80,
      sodium: 550,
    },
    allergens: ["soy"],
  },
  {
    name: "Sweet Potato & Black Bean Tacos",
    image: "",
    description:
      "Roasted sweet potatoes and black beans in corn tortillas topped with lime crema and slaw.",
    nutrients: {
      cal: 460,
      fat: 15,
      sfat: 3,
      carbo: 55,
      sugar: 7,
      fiber: 9,
      protein: 16,
      cholesterol: 10,
      sodium: 380,
    },
    allergens: ["milk"],
  },
  {
    name: "Zucchini Noodle Pesto Chicken",
    image: "",
    description:
      "Low-carb zucchini noodles topped with grilled chicken and a creamy avocado pesto.",
    nutrients: {
      cal: 480,
      fat: 25,
      sfat: 4,
      carbo: 18,
      sugar: 3,
      fiber: 4,
      protein: 42,
      cholesterol: 75,
      sodium: 310,
    },
    allergens: ["tree nuts"],
  },
  {
    name: "Cauliflower Fried Rice",
    image: "",
    description:
      "Low-calorie fried rice substitute using cauliflower, peas, carrots, egg, and sesame oil.",
    nutrients: {
      cal: 390,
      fat: 14,
      sfat: 3,
      carbo: 28,
      sugar: 5,
      fiber: 6,
      protein: 20,
      cholesterol: 130,
      sodium: 420,
    },
    allergens: ["eggs", "soy"],
  },
  {
    name: "Miso Glazed Cod",
    image: "",
    description:
      "Flaky cod fillet glazed in miso and honey, served with bok choy and wild rice.",
    nutrients: {
      cal: 510,
      fat: 15,
      sfat: 2,
      carbo: 35,
      sugar: 6,
      fiber: 5,
      protein: 42,
      cholesterol: 70,
      sodium: 490,
    },
    allergens: ["fish", "soy"],
  },
  {
    name: "Kale and White Bean Soup",
    image: "",
    description:
      "Hearty, fiber-rich soup with kale, white beans, tomatoes, and herbs in a vegetable broth.",
    nutrients: {
      cal: 350,
      fat: 10,
      sfat: 1,
      carbo: 45,
      sugar: 6,
      fiber: 10,
      protein: 18,
      cholesterol: 0,
      sodium: 330,
    },
  },
  {
    name: "Chicken Tikka Masala Light",
    image: "",
    description:
      "A lighter version of the classic Indian dish, with grilled chicken in a creamy tomato-based sauce served with brown rice.",
    nutrients: {
      cal: 580,
      fat: 21,
      sfat: 5,
      carbo: 50,
      sugar: 7,
      fiber: 6,
      protein: 40,
      cholesterol: 120,
      sodium: 400,
    },
    allergens: ["milk"],
  },
  {
    name: "Vegan Buddha Bowl",
    image: "",
    description:
      "Nourishing bowl with sweet potatoes, chickpeas, kale, avocado, and tahini drizzle.",
    nutrients: {
      cal: 490,
      fat: 22,
      sfat: 3,
      carbo: 50,
      sugar: 8,
      fiber: 10,
      protein: 17,
      cholesterol: 0,
      sodium: 250,
    },
  },
  {
    name: "Lentil and Spinach Stew",
    image: "",
    description:
      "A hearty stew packed with protein-rich lentils, spinach, carrots, and a hint of cumin.",
    nutrients: {
      cal: 420,
      fat: 11,
      sfat: 1,
      carbo: 50,
      sugar: 6,
      fiber: 9,
      protein: 22,
      cholesterol: 0,
      sodium: 270,
    },
  },
];
