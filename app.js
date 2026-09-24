/*
|--------------------------------------------------------------------------
| NutriPlan
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Meal Helper
|--------------------------------------------------------------------------
*/

function meal(
    name,
    description,
    calories,
    emoji
) {
    return {
        name,
        description,
        calories,
        emoji
    };
}


/*
|--------------------------------------------------------------------------
| Monthly Menu
|--------------------------------------------------------------------------
*/

const monthlyMealPool = {

    breakfasts: [

        meal(
            "Mandazi & Tea",
            "Fresh mandazi served with milk tea.",
            420,
            "☕"
        ),

        meal(
            "Chapati & Omelette",
            "Chapati served with a vegetable omelette.",
            460,
            "🍳"
        ),

        meal(
            "Oatmeal & Banana",
            "Warm oatmeal served with banana.",
            350,
            "🥣"
        ),

        meal(
            "Bread, Avocado & Egg",
            "Whole-grain bread with avocado and egg.",
            400,
            "🥑"
        ),

        meal(
            "Cassava & Milk",
            "Boiled cassava served with milk.",
            390,
            "🥛"
        ),

        meal(
            "Pancakes & Fruit",
            "Soft pancakes served with fresh fruit.",
            410,
            "🥞"
        ),

        meal(
            "Millet Porridge",
            "Warm millet porridge.",
            330,
            "🥣"
        ),

        meal(
            "Boiled Eggs & Toast",
            "Boiled eggs served with toast.",
            380,
            "🍳"
        ),

        meal(
            "Fruit Yogurt Bowl",
            "Fresh fruits served with yogurt.",
            340,
            "🥣"
        ),

        meal(
            "Sweet Potato & Tea",
            "Boiled sweet potato served with tea.",
            370,
            "🍠"
        ),

        meal(
            "Banana Pancakes",
            "Homemade banana pancakes.",
            400,
            "🥞"
        ),

        meal(
            "Corn Porridge",
            "Traditional corn porridge.",
            320,
            "🥣"
        ),

        meal(
            "Egg Sandwich",
            "Egg sandwich with fresh vegetables.",
            390,
            "🥪"
        ),

        meal(
            "Avocado Toast",
            "Toast topped with fresh avocado.",
            370,
            "🥑"
        ),

        meal(
            "Breakfast Chapati & Beans",
            "Chapati served with beans.",
            450,
            "🫘"
        )
    ],


    lunches: [

        meal(
            "Ugali & Grilled Chicken",
            "Ugali served with grilled chicken and vegetables.",
            680,
            "🍗"
        ),

        meal(
            "Beef Pilau",
            "Spiced rice cooked with tender beef.",
            700,
            "🍛"
        ),

        meal(
            "Fufu & Chicken Stew",
            "Fufu served with rich chicken stew.",
            690,
            "🍲"
        ),

        meal(
            "Jollof Rice & Fish",
            "Jollof rice served with grilled fish.",
            670,
            "🐟"
        ),

        meal(
            "Matoke & Beef",
            "Matoke cooked with tender beef.",
            660,
            "🍌"
        ),

        meal(
            "Chicken Biryani",
            "Spiced biryani rice with chicken.",
            720,
            "🍗"
        ),

        meal(
            "Rice & Beef Stew",
            "Rice served with beef stew.",
            680,
            "🍲"
        ),

        meal(
            "Ugali & Tilapia",
            "Ugali served with tilapia and vegetables.",
            650,
            "🐟"
        ),

        meal(
            "Chapati & Chicken Curry",
            "Chapati served with chicken curry.",
            700,
            "🍛"
        ),

        meal(
            "Fish Curry & Rice",
            "Fish curry served with rice.",
            660,
            "🐟"
        ),

        meal(
            "Goat Stew & Ugali",
            "Goat stew served with ugali.",
            710,
            "🍲"
        ),

        meal(
            "Beans & Plantain",
            "Beans served with cooked plantain.",
            630,
            "🍌"
        ),

        meal(
            "Fried Rice & Chicken",
            "Vegetable fried rice served with chicken.",
            690,
            "🍚"
        ),

        meal(
            "Cassava & Fish Stew",
            "Cassava served with fish stew.",
            640,
            "🐟"
        ),

        meal(
            "Spaghetti Bolognese",
            "Spaghetti served with beef tomato sauce.",
            680,
            "🍝"
        )
    ],


    dinners: [

        meal(
            "Vegetable Rice",
            "Rice cooked with mixed vegetables.",
            480,
            "🍚"
        ),

        meal(
            "Sweet Potato & Beans",
            "Sweet potato served with beans.",
            490,
            "🍠"
        ),

        meal(
            "Vegetable Pasta",
            "Pasta served with vegetables.",
            500,
            "🍝"
        ),

        meal(
            "Pumpkin Soup",
            "Creamy pumpkin soup.",
            390,
            "🎃"
        ),

        meal(
            "Dinner Lentil Curry & Rice",
            "Lentil curry served with rice.",
            510,
            "🍛"
        ),

        meal(
            "Potato Vegetable Stew",
            "Potatoes cooked with mixed vegetables.",
            470,
            "🥔"
        ),

        meal(
            "Grilled Fish & Salad",
            "Grilled fish served with salad.",
            500,
            "🐟"
        ),

        meal(
            "Bean Vegetable Soup",
            "Beans cooked with fresh vegetables.",
            440,
            "🍲"
        ),

        meal(
            "Mashed Potatoes & Vegetables",
            "Mashed potatoes served with vegetables.",
            470,
            "🥔"
        ),

        meal(
            "Vegetable Chapati Wrap",
            "Chapati filled with fresh vegetables.",
            460,
            "🌯"
        ),

        meal(
            "Dinner Rice & Lentils",
            "Rice served with cooked lentils.",
            490,
            "🍚"
        ),

        meal(
            "Chicken Vegetable Soup",
            "Chicken soup with mixed vegetables.",
            470,
            "🍲"
        ),

        meal(
            "Spinach Pasta",
            "Pasta served with spinach.",
            480,
            "🍝"
        ),

        meal(
            "Pumpkin & Beans",
            "Pumpkin served with beans.",
            450,
            "🎃"
        ),

        meal(
            "Vegetable Omelette",
            "Egg omelette with vegetables.",
            430,
            "🍳"
        )
    ]
};


/*
|--------------------------------------------------------------------------
| Generate Monthly Menu
|--------------------------------------------------------------------------
*/

function generateMonthlyMenu() {

    const menu = [];

    for (let i = 0; i < 30; i++) {

        menu.push({

            breakfast:
                monthlyMealPool
                    .breakfasts[
                        i %
                        monthlyMealPool
                            .breakfasts
                            .length
                    ],

            lunch:
                monthlyMealPool
                    .lunches[
                        (i + 5) %
                        monthlyMealPool
                            .lunches
                            .length
                    ],

            dinner:
                monthlyMealPool
                    .dinners[
                        (i + 10) %
                        monthlyMealPool
                            .dinners
                            .length
                    ]
        });
    }

    return menu;
}


const monthlyPlans =
    generateMonthlyMenu();


/*
|--------------------------------------------------------------------------
| Special Diet Menus
|--------------------------------------------------------------------------
*/

const specialDietMenus = {


    vegetarian: {

        name: "Vegetarian",

        icon: "🥗",

        breakfasts: [

            meal("Vegetarian Oat Bowl", "Oats with banana and fruit.", 340, "🥣"),
            meal("Vegetarian Avocado Toast", "Toast with fresh avocado.", 360, "🥑"),
            meal("Vegetarian Millet Porridge", "Warm millet porridge.", 320, "🥣"),
            meal("Fruit Yogurt Bowl", "Fresh fruit with yogurt.", 330, "🍓"),
            meal("Vegetable Omelette Breakfast", "Eggs with vegetables.", 370, "🍳"),
            meal("Sweet Potato Breakfast", "Sweet potato served with tea.", 340, "🍠"),
            meal("Banana Pancakes Breakfast", "Banana pancakes.", 380, "🥞"),
            meal("Corn Porridge Breakfast", "Corn porridge.", 310, "🥣"),
            meal("Vegetarian Egg Sandwich", "Egg sandwich with vegetables.", 380, "🥪"),
            meal("Cassava Breakfast", "Cassava served with milk.", 350, "🥛"),
            meal("Vegetarian Chapati Beans", "Chapati with beans.", 420, "🫘"),
            meal("Vegetarian Yogurt Oats", "Yogurt with oats.", 330, "🥣"),
            meal("Vegetarian Toast Eggs", "Toast with eggs.", 360, "🍳"),
            meal("Fruit Oat Bowl", "Fresh fruit with oats.", 340, "🍌"),
            meal("Vegetarian Potato Omelette", "Potato omelette.", 400, "🍳")
        ],

        lunches: [

            meal("Vegetarian Rice & Beans", "Rice served with beans.", 560, "🍚"),
            meal("Vegetarian Lentil Curry", "Lentils with rice.", 550, "🍛"),
            meal("Vegetarian Matoke", "Matoke with vegetables.", 540, "🍌"),
            meal("Vegetarian Jollof Rice", "Jollof rice with vegetables.", 560, "🍚"),
            meal("Vegetarian Chapati Curry", "Chapati with vegetable curry.", 570, "🍛"),
            meal("Vegetarian Pilau", "Vegetable pilau.", 550, "🍚"),
            meal("Vegetarian Fufu Stew", "Fufu with vegetable stew.", 570, "🍲"),
            meal("Vegetarian Ugali Greens", "Ugali served with greens.", 530, "🥬"),
            meal("Vegetarian Pasta", "Pasta with vegetables.", 540, "🍝"),
            meal("Vegetarian Beans Plantain", "Beans with plantain.", 560, "🍌"),
            meal("Vegetarian Chickpea Rice", "Chickpeas with rice.", 550, "🫘"),
            meal("Vegetarian Sweet Potato Bowl", "Sweet potato and vegetables.", 520, "🍠"),
            meal("Vegetarian Lentil Rice Bowl", "Rice with lentils.", 550, "🍚"),
            meal("Vegetarian Cassava Beans", "Cassava served with beans.", 540, "🫘"),
            meal("Vegetarian Vegetable Wrap", "Vegetables wrapped in chapati.", 530, "🌯")
        ],

        dinners: [

            meal("Vegetarian Pumpkin Soup", "Pumpkin soup.", 380, "🎃"),
            meal("Vegetarian Lentil Soup", "Lentil soup.", 400, "🍲"),
            meal("Vegetarian Bean Soup", "Bean vegetable soup.", 410, "🫘"),
            meal("Vegetarian Spinach Pasta", "Spinach with pasta.", 430, "🍝"),
            meal("Vegetarian Rice Vegetables", "Rice and vegetables.", 420, "🍚"),
            meal("Vegetarian Sweet Potato Beans", "Sweet potato and beans.", 430, "🍠"),
            meal("Vegetarian Potato Stew", "Potato vegetable stew.", 410, "🥔"),
            meal("Vegetarian Omelette Dinner", "Vegetable omelette.", 390, "🍳"),
            meal("Vegetarian Lentils Greens", "Lentils and leafy greens.", 410, "🥬"),
            meal("Vegetarian Pumpkin Beans", "Pumpkin and beans.", 420, "🎃"),
            meal("Vegetarian Vegetable Soup", "Mixed vegetable soup.", 370, "🍲"),
            meal("Vegetarian Chickpea Salad", "Chickpeas with vegetables.", 400, "🥗"),
            meal("Vegetarian Bean Salad", "Beans with fresh salad.", 400, "🥗"),
            meal("Vegetarian Rice Lentils", "Rice and lentils.", 430, "🍚"),
            meal("Vegetarian Vegetable Wrap Dinner", "Vegetable chapati wrap.", 420, "🌯")
        ]
    },


    diabetic: {

        name: "Diabetic",

        icon: "🩺",

        breakfasts: [

            meal("Diabetic Oats & Berries", "Unsweetened oats with berries.", 290, "🥣"),
            meal("Diabetic Eggs & Tomato", "Boiled eggs with tomato.", 280, "🍳"),
            meal("Diabetic Avocado Toast", "Whole-grain toast and avocado.", 300, "🥑"),
            meal("Diabetic Plain Yogurt", "Plain yogurt with fruit.", 270, "🥣"),
            meal("Diabetic Vegetable Omelette", "Eggs with vegetables.", 300, "🍳"),
            meal("Diabetic Millet Porridge", "Unsweetened millet porridge.", 280, "🥣"),
            meal("Diabetic Sweet Potato Egg", "Sweet potato with egg.", 300, "🍠"),
            meal("Diabetic Apple Oats", "Oats with apple.", 290, "🍎"),
            meal("Diabetic Egg Spinach Toast", "Egg and spinach toast.", 300, "🍞"),
            meal("Diabetic Fruit Yogurt", "Fruit with plain yogurt.", 270, "🍓"),
            meal("Diabetic Banana Oats", "Oats with banana.", 300, "🍌"),
            meal("Diabetic Scrambled Eggs", "Eggs with leafy greens.", 290, "🍳"),
            meal("Diabetic Corn Porridge", "Unsweetened corn porridge.", 270, "🥣"),
            meal("Diabetic Yogurt Oats", "Plain yogurt and oats.", 280, "🥣"),
            meal("Diabetic Egg Avocado", "Egg with avocado.", 300, "🥑")
        ],

        lunches: [

            meal("Diabetic Chicken Salad", "Grilled chicken with salad.", 420, "🥗"),
            meal("Diabetic Brown Rice Fish", "Brown rice with grilled fish.", 450, "🐟"),
            meal("Diabetic Lentil Bowl", "Lentils with vegetables.", 420, "🥗"),
            meal("Diabetic Chicken Sweet Potato", "Chicken and sweet potato.", 460, "🍗"),
            meal("Diabetic Bean Salad", "Beans with vegetables.", 400, "🫘"),
            meal("Diabetic Tilapia Vegetables", "Tilapia and vegetables.", 430, "🐟"),
            meal("Diabetic Chicken Soup", "Chicken vegetable soup.", 390, "🍲"),
            meal("Diabetic Brown Rice Beans", "Brown rice and beans.", 440, "🍚"),
            meal("Diabetic Fish Salad", "Fish with salad.", 410, "🐟"),
            meal("Diabetic Matoke Beans", "Matoke and beans.", 450, "🍌"),
            meal("Diabetic Chicken Broccoli", "Chicken with broccoli.", 410, "🥦"),
            meal("Diabetic Chickpea Salad", "Chickpea salad.", 400, "🥗"),
            meal("Diabetic Lean Beef Greens", "Lean beef with greens.", 440, "🥩"),
            meal("Diabetic Lentils Rice", "Lentils with brown rice.", 430, "🍚"),
            meal("Diabetic Chicken Wrap", "Chicken vegetable wrap.", 440, "🌯")
        ],

        dinners: [

            meal("Diabetic Vegetable Soup", "Light vegetable soup.", 320, "🍲"),
            meal("Diabetic Grilled Fish Salad", "Fish and salad.", 350, "🐟"),
            meal("Diabetic Chicken Spinach", "Chicken with spinach.", 370, "🍗"),
            meal("Diabetic Lentil Soup", "Light lentil soup.", 340, "🍲"),
            meal("Diabetic Bean Soup", "Beans with vegetables.", 350, "🫘"),
            meal("Diabetic Egg Salad", "Eggs with vegetables.", 340, "🥗"),
            meal("Diabetic Fish Broccoli", "Fish with broccoli.", 370, "🐟"),
            meal("Diabetic Chicken Bowl", "Chicken and vegetables.", 380, "🍗"),
            meal("Diabetic Pumpkin Soup", "Light pumpkin soup.", 320, "🎃"),
            meal("Diabetic Spinach Omelette", "Spinach omelette.", 340, "🍳"),
            meal("Diabetic Vegetable Stir Fry", "Mixed vegetables.", 320, "🥦"),
            meal("Diabetic Light Chicken Soup", "Chicken soup.", 350, "🍲"),
            meal("Diabetic Dinner Bean Salad", "Beans and vegetables.", 330, "🥗"),
            meal("Diabetic Fish Soup", "Fish vegetable soup.", 350, "🐟"),
            meal("Diabetic Lentils Greens", "Lentils and greens.", 340, "🥬")
        ]
    },


    weightGain: {

        name: "Weight Gain",

        icon: "📈",

        breakfasts: [

            meal("Peanut Butter Banana Toast", "Whole-grain toast with peanut butter and banana.", 520, "🍌"),
            meal("Eggs, Avocado & Chapati", "Eggs with avocado and chapati.", 540, "🍳"),
            meal("Oats, Banana & Milk", "Oats with banana and whole milk.", 500, "🥣"),
            meal("Mandazi, Eggs & Tea", "Mandazi with eggs and milk tea.", 550, "☕"),
            meal("Sweet Potato & Omelette", "Sweet potato and omelette.", 510, "🍠"),
            meal("Greek Yogurt Granola Bowl", "Yogurt with granola and fruit.", 480, "🥣"),
            meal("Gain Chapati & Beans", "Chapati with beans.", 530, "🫘"),
            meal("Banana Pancakes & Yogurt", "Banana pancakes with yogurt.", 520, "🥞"),
            meal("Avocado Egg Sandwich", "Egg and avocado sandwich.", 510, "🥪"),
            meal("Gain Cassava & Milk", "Cassava and whole milk.", 490, "🥛"),
            meal("Rice Porridge & Banana", "Rice porridge with banana.", 470, "🥣"),
            meal("Chicken Egg Wrap", "Chicken and egg chapati wrap.", 550, "🌯"),
            meal("Millet Porridge & Eggs", "Millet porridge with eggs.", 500, "🥣"),
            meal("Fruit Yogurt Oat Bowl", "Fruit, yogurt and oats.", 480, "🥭"),
            meal("Potato Omelette & Toast", "Potato omelette with toast.", 520, "🍳")
        ],

        lunches: [

            meal("Gain Chicken Biryani", "Chicken biryani with vegetables.", 780, "🍗"),
            meal("Gain Beef Pilau", "Spiced rice with beef.", 760, "🍛"),
            meal("Gain Ugali & Beef Stew", "Ugali with beef stew.", 790, "🍲"),
            meal("Gain Jollof Rice & Chicken", "Jollof rice with chicken.", 770, "🍚"),
            meal("Gain Matoke & Beef", "Matoke with beef.", 750, "🍌"),
            meal("Gain Fish Curry & Rice", "Fish curry with rice.", 730, "🐟"),
            meal("Gain Chapati & Chicken Curry", "Chapati and chicken curry.", 760, "🍛"),
            meal("Gain Goat Stew & Ugali", "Goat stew and ugali.", 790, "🍲"),
            meal("Gain Chicken Pasta", "Chicken pasta.", 740, "🍝"),
            meal("Gain Rice Beans Avocado", "Rice, beans and avocado.", 720, "🥑"),
            meal("Gain Fufu Chicken Stew", "Fufu with chicken stew.", 780, "🍲"),
            meal("Gain Beef Mashed Potatoes", "Beef with mashed potatoes.", 750, "🥔"),
            meal("Gain Tilapia & Rice", "Tilapia with rice.", 720, "🐟"),
            meal("Gain Chicken Sweet Potatoes", "Chicken with sweet potatoes.", 730, "🍠"),
            meal("Gain Beef Chapati Wrap", "Beef chapati wrap.", 740, "🌯")
        ],

        dinners: [

            meal("Gain Chicken Rice Bowl", "Chicken with rice and vegetables.", 650, "🍗"),
            meal("Gain Beef & Potatoes", "Beef stew with potatoes.", 670, "🥔"),
            meal("Gain Fish & Sweet Potato", "Fish with sweet potato.", 620, "🐟"),
            meal("Gain Lentil Curry & Rice", "Lentils with rice.", 610, "🍛"),
            meal("Gain Chicken Pasta Dinner", "Chicken pasta.", 650, "🍝"),
            meal("Gain Beans & Plantain", "Beans with plantain.", 600, "🍌"),
            meal("Gain Egg Fried Rice", "Egg fried rice.", 610, "🍚"),
            meal("Gain Chicken Soup Bread", "Chicken soup with bread.", 590, "🍲"),
            meal("Gain Beef Rice Bowl", "Beef with rice.", 660, "🥩"),
            meal("Gain Matoke & Chicken", "Matoke with chicken.", 630, "🍌"),
            meal("Gain Tilapia & Potatoes", "Tilapia with potatoes.", 610, "🐟"),
            meal("Gain Dinner Chapati Beans", "Chapati with beans.", 620, "🫘"),
            meal("Gain Chicken Pumpkin", "Chicken with pumpkin.", 590, "🎃"),
            meal("Gain Dinner Rice Lentils", "Rice with lentils.", 600, "🍚"),
            meal("Gain Beef Vegetable Pasta", "Beef and vegetable pasta.", 650, "🍝")
        ]
    },


    weightLoss: {

        name: "Weight Loss",

        icon: "📉",

        breakfasts: [

            meal("Loss Oats & Berries", "Unsweetened oats with berries.", 290, "🥣"),
            meal("Loss Boiled Eggs & Tomato", "Boiled eggs with tomato.", 280, "🍳"),
            meal("Loss Avocado Toast", "Whole-grain toast with avocado.", 300, "🥑"),
            meal("Loss Plain Yogurt & Fruit", "Plain yogurt with fruit.", 270, "🥣"),
            meal("Loss Vegetable Omelette", "Egg omelette with vegetables.", 300, "🍳"),
            meal("Loss Millet Porridge", "Unsweetened millet porridge.", 280, "🥣"),
            meal("Loss Sweet Potato & Egg", "Sweet potato with egg.", 300, "🍠"),
            meal("Loss Apple Cinnamon Oats", "Oats with apple and cinnamon.", 290, "🍎"),
            meal("Loss Egg Spinach Toast", "Toast with egg and spinach.", 300, "🍞"),
            meal("Loss Fruit Salad Yogurt", "Fruit with plain yogurt.", 270, "🍓"),
            meal("Loss Banana Oat Bowl", "Oats with banana.", 300, "🍌"),
            meal("Loss Scrambled Eggs Greens", "Eggs with leafy greens.", 290, "🍳"),
            meal("Loss Corn Porridge", "Unsweetened corn porridge.", 270, "🥣"),
            meal("Loss Yogurt Oat Bowl", "Plain yogurt with oats.", 280, "🥣"),
            meal("Loss Egg Avocado Bowl", "Egg with avocado.", 300, "🥑")
        ],

        lunches: [

            meal("Loss Grilled Chicken Salad", "Chicken breast with vegetables.", 420, "🥗"),
            meal("Loss Brown Rice & Fish", "Brown rice with grilled fish.", 450, "🐟"),
            meal("Loss Lentil Vegetable Bowl", "Lentils with vegetables.", 420, "🥗"),
            meal("Loss Chicken & Sweet Potato", "Chicken and sweet potato.", 460, "🍗"),
            meal("Loss Bean Salad Bowl", "Beans and vegetables.", 400, "🫘"),
            meal("Loss Tilapia & Vegetables", "Tilapia with vegetables.", 430, "🐟"),
            meal("Loss Chicken Vegetable Soup", "Chicken vegetable soup.", 390, "🍲"),
            meal("Loss Brown Rice & Beans", "Brown rice and beans.", 440, "🍚"),
            meal("Loss Fish & Salad", "Fish with salad.", 410, "🐟"),
            meal("Loss Matoke & Beans", "Matoke with beans.", 450, "🍌"),
            meal("Loss Chicken & Broccoli", "Chicken with broccoli.", 410, "🥦"),
            meal("Loss Chickpea Salad", "Chickpeas with vegetables.", 400, "🥗"),
            meal("Loss Lean Beef & Greens", "Lean beef with greens.", 440, "🥩"),
            meal("Loss Lentils & Brown Rice", "Lentils with brown rice.", 430, "🍚"),
            meal("Loss Chicken Salad Wrap", "Chicken vegetable wrap.", 440, "🌯")
        ],

        dinners: [

            meal("Loss Vegetable Soup", "Light vegetable soup.", 320, "🍲"),
            meal("Loss Grilled Fish Salad", "Fish and salad.", 350, "🐟"),
            meal("Loss Chicken & Spinach", "Chicken with spinach.", 370, "🍗"),
            meal("Loss Lentil Soup", "Light lentil soup.", 340, "🍲"),
            meal("Loss Bean Vegetable Soup", "Beans and vegetables.", 350, "🫘"),
            meal("Loss Egg Vegetable Salad", "Eggs and vegetables.", 340, "🥗"),
            meal("Loss Fish & Broccoli", "Fish with broccoli.", 370, "🐟"),
            meal("Loss Chicken Vegetable Bowl", "Chicken and vegetables.", 380, "🍗"),
            meal("Loss Pumpkin Soup", "Light pumpkin soup.", 320, "🎃"),
            meal("Loss Spinach Omelette", "Spinach omelette.", 340, "🍳"),
            meal("Loss Vegetable Stir Fry", "Mixed vegetables.", 320, "🥦"),
            meal("Loss Chicken Soup", "Light chicken soup.", 350, "🍲"),
            meal("Loss Bean Salad", "Beans with vegetables.", 330, "🥗"),
            meal("Loss Fish Vegetable Soup", "Fish vegetable soup.", 350, "🐟"),
            meal("Loss Lentils & Greens", "Lentils with leafy greens.", 340, "🥬")
        ]
    },


    highProtein: {

        name: "High Protein",

        icon: "💪",

        breakfasts: [

            meal("Protein Eggs & Toast", "Eggs with whole-grain toast.", 420, "🍳"),
            meal("Protein Yogurt Bowl", "Greek yogurt with fruit.", 400, "🥣"),
            meal("Protein Chicken Wrap", "Chicken and egg breakfast wrap.", 450, "🌯"),
            meal("Protein Oats Milk", "Oats with milk.", 410, "🥣"),
            meal("Protein Omelette", "Three-egg vegetable omelette.", 430, "🍳"),
            meal("Protein Egg Avocado", "Egg and avocado toast.", 420, "🥑"),
            meal("Protein Millet Eggs", "Millet porridge with eggs.", 430, "🥣"),
            meal("Protein Yogurt Oats", "Yogurt with oats.", 410, "🥣"),
            meal("Protein Chicken Sandwich", "Chicken sandwich.", 440, "🥪"),
            meal("Protein Egg Sweet Potato", "Eggs with sweet potato.", 420, "🍠"),
            meal("Protein Bean Chapati", "Beans with chapati.", 440, "🫘"),
            meal("Protein Banana Oats", "Banana oats with milk.", 410, "🍌"),
            meal("Protein Egg Spinach", "Eggs with spinach.", 400, "🍳"),
            meal("Protein Yogurt Fruit", "Greek yogurt and fruit.", 390, "🥣"),
            meal("Protein Potato Eggs", "Potatoes and eggs.", 440, "🥔")
        ],

        lunches: [

            meal("Protein Chicken Rice", "Chicken with rice.", 650, "🍗"),
            meal("Protein Beef Pilau", "Beef pilau.", 670, "🥩"),
            meal("Protein Tilapia Ugali", "Tilapia and ugali.", 640, "🐟"),
            meal("Protein Chicken Sweet Potato", "Chicken and sweet potato.", 620, "🍠"),
            meal("Protein Beef Rice", "Beef with rice.", 650, "🥩"),
            meal("Protein Chicken Pasta", "Chicken pasta.", 630, "🍝"),
            meal("Protein Goat Ugali", "Goat stew and ugali.", 670, "🍲"),
            meal("Protein Fish Rice", "Fish with rice.", 620, "🐟"),
            meal("Protein Chicken Chapati", "Chicken curry and chapati.", 650, "🍛"),
            meal("Protein Beef Potatoes", "Beef and potatoes.", 640, "🥔"),
            meal("Protein Chicken Matoke", "Chicken with matoke.", 630, "🍌"),
            meal("Protein Lentil Rice", "Lentils with rice.", 590, "🍚"),
            meal("Protein Tilapia Potatoes", "Tilapia and potatoes.", 620, "🐟"),
            meal("Protein Beef Wrap", "Beef chapati wrap.", 640, "🌯"),
            meal("Protein Chicken Beans", "Chicken and beans.", 650, "🫘")
        ],

        dinners: [

            meal("Protein Chicken Salad", "Chicken and salad.", 520, "🍗"),
            meal("Protein Fish Vegetables", "Fish and vegetables.", 500, "🐟"),
            meal("Protein Beef Greens", "Lean beef and greens.", 530, "🥩"),
            meal("Protein Chicken Soup", "Chicken vegetable soup.", 490, "🍲"),
            meal("Protein Egg Salad", "Eggs and salad.", 470, "🥗"),
            meal("Protein Tilapia Broccoli", "Tilapia and broccoli.", 510, "🐟"),
            meal("Protein Chicken Spinach", "Chicken and spinach.", 500, "🍗"),
            meal("Protein Beef Vegetables", "Beef and vegetables.", 520, "🥩"),
            meal("Protein Lentil Bowl", "Lentils and vegetables.", 470, "🥗"),
            meal("Protein Chicken Pumpkin", "Chicken with pumpkin.", 490, "🎃"),
            meal("Protein Fish Salad", "Fish and salad.", 490, "🐟"),
            meal("Protein Egg Vegetable Bowl", "Eggs and vegetables.", 470, "🍳"),
            meal("Protein Chicken Broccoli", "Chicken and broccoli.", 500, "🥦"),
            meal("Protein Beef Soup", "Beef vegetable soup.", 510, "🍲"),
            meal("Protein Lentils Greens", "Lentils and leafy greens.", 460, "🥬")
        ]
    }
};
const snackPools = {

    weightGain: [
        meal("Banana & Peanut Butter", "Banana served with peanut butter.", 280, "🍌"),
        meal("Yogurt & Granola", "Plain yogurt with granola.", 260, "🥣"),
        meal("Avocado Toast Snack", "Whole-grain toast with avocado.", 250, "🥑"),
        meal("Milk & Banana", "Whole milk served with banana.", 240, "🥛"),
        meal("Egg & Toast Snack", "Boiled egg served with toast.", 230, "🍳"),
        meal("Sweet Potato Snack", "Boiled sweet potato.", 220, "🍠"),
        meal("Fruit Yogurt Snack", "Fresh fruit served with yogurt.", 230, "🍓"),
        meal("Chapati & Egg Snack", "Small chapati served with egg.", 270, "🌯"),
        meal("Oat Yogurt Snack", "Oats mixed with plain yogurt.", 250, "🥣"),
        meal("Banana Oat Snack", "Banana served with oats.", 240, "🍌"),
        meal("Avocado Egg Snack", "Avocado served with boiled egg.", 260, "🥑"),
        meal("Milk Oat Snack", "Oats served with whole milk.", 250, "🥛"),
        meal("Fruit Granola Snack", "Fresh fruit with granola.", 240, "🥭"),
        meal("Potato Egg Snack", "Small potato served with egg.", 260, "🥔"),
        meal("Yogurt Banana Snack", "Plain yogurt with banana.", 230, "🥣")
    ],

    weightLoss: [
        meal("Apple & Yogurt", "Fresh apple with plain yogurt.", 160, "🍎"),
        meal("Boiled Egg Snack", "One boiled egg with tomato.", 140, "🍳"),
        meal("Banana Snack", "Fresh banana.", 120, "🍌"),
        meal("Fruit Salad Snack", "Small fresh fruit salad.", 150, "🍓"),
        meal("Plain Yogurt Snack", "Unsweetened plain yogurt.", 130, "🥣"),
        meal("Apple Snack", "Fresh apple.", 100, "🍎"),
        meal("Sweet Potato Light Snack", "Small boiled sweet potato.", 150, "🍠"),
        meal("Egg & Cucumber", "Boiled egg with cucumber.", 140, "🥒"),
        meal("Orange & Yogurt", "Fresh orange with plain yogurt.", 150, "🍊"),
        meal("Avocado Light Snack", "Small serving of avocado.", 160, "🥑"),
        meal("Carrot Yogurt Snack", "Carrot sticks with plain yogurt.", 130, "🥕"),
        meal("Papaya Snack", "Fresh papaya.", 110, "🥭"),
        meal("Pineapple Snack", "Fresh pineapple.", 110, "🍍"),
        meal("Egg Tomato Snack", "Boiled egg with fresh tomato.", 140, "🍅"),
        meal("Watermelon Snack", "Fresh watermelon.", 100, "🍉")
    ]
};

/*
|--------------------------------------------------------------------------
| Generate 30 Day Diet
|--------------------------------------------------------------------------
*/

function generateDietMenu(diet) {

    const menu = [];

    for (let i = 0; i < 30; i++) {

        menu.push({

            breakfast:
                diet.breakfasts[
                    i %
                    diet.breakfasts.length
                ],

            lunch:
                diet.lunches[
                    (i + 5) %
                    diet.lunches.length
                ],

            dinner:
                diet.dinners[
                    (i + 10) %
                    diet.dinners.length
                ]
        });
    }

    return menu;
}


/*
|--------------------------------------------------------------------------
| Application State
|--------------------------------------------------------------------------
*/

let selectedDay = 0;

let selectedDiet = null;

let selectedDietDay = 0;


let savedMeals =
    JSON.parse(
        localStorage.getItem(
            "nutriplanFavorites"
        )
    ) || [];


let nutritionProfile =
    JSON.parse(
        localStorage.getItem(
            "nutriplanProfile"
        )
    ) || null;


let calculatedNutritionPlan = null;


/*
|--------------------------------------------------------------------------
| Monthly Days
|--------------------------------------------------------------------------
*/

function renderDays() {

    const container =
        document.getElementById(
            "daysContainer"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    monthlyPlans.forEach(
        (day, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "day-button";

            if (index === selectedDay) {
                button.classList.add(
                    "active"
                );
            }

            button.innerHTML = `
                <span>Day</span>
                <strong>${index + 1}</strong>
            `;

            button.addEventListener(
                "click",
                () => {

                    selectedDay =
                        index;

                    renderDays();
                    renderMeals();
                }
            );

            container.appendChild(
                button
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Monthly Meals
|--------------------------------------------------------------------------
*/

function renderMeals() {

    const container =
        document.getElementById(
            "mealsContainer"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const day =
        monthlyPlans[selectedDay];

    const title =
        document.getElementById(
            "selectedDayTitle"
        );

    if (title) {
        title.textContent =
            `Day ${selectedDay + 1}`;
    }

    createMealCard(
        "Breakfast",
        day.breakfast,
        container
    );

    createMealCard(
        "Lunch",
        day.lunch,
        container
    );

    createMealCard(
        "Dinner",
        day.dinner,
        container
    );
}


/*
|--------------------------------------------------------------------------
| Meal Card
|--------------------------------------------------------------------------
*/

function createMealCard(
    type,
    mealData,
    container
) {

    const saved =
        savedMeals.includes(
            mealData.name
        );

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "meal-card";


    const calorieContent =
        mealData.portionFactor
            ? `
                <div class="calorie-details">

                    <span class="base-calories">
                        Base:
                        ${mealData.calories}
                        kcal
                    </span>

                    <span class="portion">
                        Recommended portion:
                        ${mealData.portionFactor}×
                    </span>

                    <span class="calories">
                        🔥
                        ${mealData.targetCalories}
                        kcal
                    </span>

                </div>
            `
            : `
                <span class="calories">
                    🔥
                    ${mealData.calories}
                    kcal
                </span>
            `;


    card.innerHTML = `

        <div class="meal-image">
            ${mealData.emoji}
        </div>

        <div class="meal-info">

            <div class="meal-header">

                <div>

                    <div class="meal-type">
                        ${type}
                    </div>

                    <div class="meal-name">
                        ${mealData.name}
                    </div>

                </div>

            </div>

            <p class="meal-description">
                ${mealData.description}
            </p>

            <div class="meal-footer">

                ${calorieContent}

                <button
                    class="favorite-button
                    ${saved ? "saved" : ""}"
                    aria-label="Save meal"
                >
                    ${saved ? "❤️" : "🤍"}
                </button>

            </div>

        </div>
    `;


    const favoriteButton =
        card.querySelector(
            ".favorite-button"
        );


    favoriteButton.addEventListener(
        "click",
        () => {

            toggleFavorite(
                mealData.name,
                favoriteButton
            );
        }
    );


    container.appendChild(
        card
    );
}


/*
|--------------------------------------------------------------------------
| Favorites
|--------------------------------------------------------------------------
*/

function toggleFavorite(
    mealName,
    button
) {

    if (
        savedMeals.includes(
            mealName
        )
    ) {

        savedMeals =
            savedMeals.filter(
                name =>
                    name !== mealName
            );

        button.textContent =
            "🤍";

        button.classList.remove(
            "saved"
        );

    } else {

        savedMeals.push(
            mealName
        );

        button.textContent =
            "❤️";

        button.classList.add(
            "saved"
        );
    }


    localStorage.setItem(
        "nutriplanFavorites",
        JSON.stringify(savedMeals)
    );
}


/*
|--------------------------------------------------------------------------
| Navigation
|--------------------------------------------------------------------------
*/

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );


const pages =
    document.querySelectorAll(
        ".page"
    );


function showPage(pageId) {

    pages.forEach(
        page => {

            page.classList.remove(
                "active-page"
            );
        }
    );


    navItems.forEach(
        nav => {

            nav.classList.remove(
                "active"
            );
        }
    );


    const page =
        document.getElementById(
            pageId
        );


    if (page) {
        page.classList.add(
            "active-page"
        );
    }


    const nav =
        document.querySelector(
            `[data-page="${pageId}"]`
        );


    if (nav) {
        nav.classList.add(
            "active"
        );
    }


    if (
        pageId ===
        "savedPage"
    ) {

        renderSavedMeals();
    }

}


navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                showPage(
                    item.dataset.page
                );
            }
        );
    }
);


/*
|--------------------------------------------------------------------------
| Special Diet Cards
|--------------------------------------------------------------------------
*/

document
    .querySelectorAll(
        ".diet-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    openDiet(
                        card.dataset.diet
                    );
                }
            );
        }
    );


/*
|--------------------------------------------------------------------------
| Open Diet
|--------------------------------------------------------------------------
*/

function openDiet(dietKey) {

    if (
        !specialDietMenus[
            dietKey
        ]
    ) {

        console.error(
            "Diet not found:",
            dietKey
        );

        return;
    }


    selectedDiet =
        specialDietMenus[
            dietKey
        ];


    selectedDietDay = 0;


    selectedDiet.menu =
        generateDietMenu(
            selectedDiet
        );


    const listView =
        document.getElementById(
            "dietListView"
        );


    const menuView =
        document.getElementById(
            "dietMenuView"
        );


    if (
        !listView ||
        !menuView
    ) {

        console.error(
            "Diet HTML views not found."
        );

        return;
    }


    listView.classList.add(
        "hidden"
    );


    menuView.classList.remove(
        "hidden"
    );


    const name =
        document.getElementById(
            "selectedDietName"
        );


    const icon =
        document.getElementById(
            "selectedDietIcon"
        );


    if (name) {
        name.textContent =
            selectedDiet.name;
    }


    if (icon) {
        icon.textContent =
            selectedDiet.icon;
    }


    renderDietDays();

    renderDietMeals();
}


/*
|--------------------------------------------------------------------------
| Diet Days
|--------------------------------------------------------------------------
*/

function renderDietDays() {

    const container =
        document.getElementById(
            "dietDaysContainer"
        );


    if (
        !container ||
        !selectedDiet
    ) {

        return;
    }


    container.innerHTML = "";


    selectedDiet.menu.forEach(
        (day, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "day-button";


            if (
                index ===
                selectedDietDay
            ) {

                button.classList.add(
                    "active"
                );
            }


            button.innerHTML = `
                <span>Day</span>
                <strong>${index + 1}</strong>
            `;


            button.addEventListener(
                "click",
                () => {

                    selectedDietDay =
                        index;

                    renderDietDays();

                    renderDietMeals();
                }
            );


            container.appendChild(
                button
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Personalized Calories
|--------------------------------------------------------------------------
*/

const calorieDistribution = {

    breakfast: 0.25,

    lunch: 0.35,

    dinner: 0.30,

    snack: 0.10
};


/*
|--------------------------------------------------------------------------
| Adjust Meal Portion
|--------------------------------------------------------------------------
*/

function calculateAdjustedMeal(
    mealData,
    mealTargetCalories
) {

    let portionFactor =
        mealTargetCalories /
        mealData.calories;


    /*
     * Avoid extremely unrealistic
     * automatic portion sizes.
     */

    portionFactor =
        Math.max(
            0.75,
            Math.min(
                portionFactor,
                1.50
            )
        );


    const adjustedCalories =
        mealData.calories *
        portionFactor;


    return {

        ...mealData,

        targetCalories:
            Math.round(
                adjustedCalories
            ),

        portionFactor:
            portionFactor.toFixed(2)
    };
}


/*
|--------------------------------------------------------------------------
| Personalized Day
|--------------------------------------------------------------------------
*/

function buildPersonalizedDay(
    day,
    dailyTarget,
    dietKey,
    dayIndex
) {

    const snack =
        snackPools[dietKey][
            dayIndex % snackPools[dietKey].length
        ];

    return {

        breakfast: calculateAdjustedMeal(
            day.breakfast,
            dailyTarget * calorieDistribution.breakfast
        ),

        lunch: calculateAdjustedMeal(
            day.lunch,
            dailyTarget * calorieDistribution.lunch
        ),

        dinner: calculateAdjustedMeal(
            day.dinner,
            dailyTarget * calorieDistribution.dinner
        ),

        snack: calculateAdjustedMeal(
            snack,
            dailyTarget * calorieDistribution.snack
        )
    };
}

function createDailyNutritionSummary(
    day,
    dailyTarget,
    container
) {
    const breakfastCalories =
        day.breakfast.targetCalories ??
        day.breakfast.calories;

    const lunchCalories =
        day.lunch.targetCalories ??
        day.lunch.calories;

    const dinnerCalories =
        day.dinner.targetCalories ??
        day.dinner.calories;

    const snackCalories =
        day.snack
            ? (
                day.snack.targetCalories ??
                day.snack.calories
            )
            : 0;

    const plannedCalories =
        breakfastCalories +
        lunchCalories +
        dinnerCalories +
        snackCalories;

    const difference =
        plannedCalories - dailyTarget;

    const summary =
        document.createElement("div");

    summary.className =
        "nutrition-summary";

    summary.innerHTML = `
        <div class="nutrition-summary-header">
            <div>
                <span class="summary-label">
                    Daily Nutrition
                </span>

                <h3>
                    Day ${selectedDietDay + 1}
                </h3>
            </div>

            <div class="target-calories">
                ${dailyTarget}
                <small>kcal target</small>
            </div>
        </div>

        <div class="nutrition-progress">
            <div
                class="nutrition-progress-bar"
                style="width:
                    ${Math.min(
                        (plannedCalories / dailyTarget) * 100,
                        100
                    )}%"
            ></div>
        </div>

        <div class="nutrition-total">

            <div>
                <span>Planned</span>
                <strong>
                    ${plannedCalories} kcal
                </strong>
            </div>

            <div>
                <span>Difference</span>
                <strong>
                    ${
                        difference > 0
                            ? "+"
                            : ""
                    }${difference} kcal
                </strong>
            </div>

        </div>

        <div class="meal-calorie-summary">

            <div>
                <span>Breakfast</span>
                <strong>
                    ${breakfastCalories}
                </strong>
            </div>

            <div>
                <span>Lunch</span>
                <strong>
                    ${lunchCalories}
                </strong>
            </div>

            <div>
                <span>Dinner</span>
                <strong>
                    ${dinnerCalories}
                </strong>
            </div>

            <div>
                <span>Snack</span>
                <strong>
                    ${snackCalories}
                </strong>
            </div>

        </div>
    `;

    container.appendChild(summary);
}
/*
|--------------------------------------------------------------------------
| Render Diet Meals
|--------------------------------------------------------------------------
*/

function renderDietMeals() {

    const container =
        document.getElementById(
            "dietMealsContainer"
        );


    if (
        !container ||
        !selectedDiet ||
        !selectedDiet.menu
    ) {

        return;
    }


    container.innerHTML = "";


    let day =
        selectedDiet.menu[
            selectedDietDay
        ];


    const personalized =
        calculatedNutritionPlan &&
        (
            selectedDiet.name ===
                "Weight Gain" ||

            selectedDiet.name ===
                "Weight Loss"
        );


    if (personalized) {

        const dietKey =
    calculatedNutritionPlan.goal === "gain"
        ? "weightGain"
        : "weightLoss";

day = buildPersonalizedDay(
    day,
    calculatedNutritionPlan.target,
    dietKey,
    selectedDietDay
);
    }
if (personalized) {
    createDailyNutritionSummary(
        day,
        calculatedNutritionPlan.target,
        container
    );
}

    const title =
        document.getElementById(
            "selectedDietDayTitle"
        );


    if (title) {

        title.textContent =
            `Day ${
                selectedDietDay + 1
            }`;
    }


    createMealCard(
        "Breakfast",
        day.breakfast,
        container
    );


    createMealCard(
        "Lunch",
        day.lunch,
        container
    );


    createMealCard(
        "Dinner",
        day.dinner,
        container
    );
if (personalized && day.snack) {
    createMealCard(
        "Snack",
        day.snack,
        container
    );
}

    /*
     * Show reserved snack calories
     * for personalized plans.
     */

    if (personalized) {

        
    }
}


/*
|--------------------------------------------------------------------------
| Back From Diet
|--------------------------------------------------------------------------
*/

const backToDiets =
    document.getElementById(
        "backToDiets"
    );


if (backToDiets) {

    backToDiets.addEventListener(
        "click",
        () => {

            const menuView =
                document.getElementById(
                    "dietMenuView"
                );


            const listView =
                document.getElementById(
                    "dietListView"
                );


            if (menuView) {

                menuView.classList.add(
                    "hidden"
                );
            }


            if (listView) {

                listView.classList.remove(
                    "hidden"
                );
            }
        }
    );
}


/*
|--------------------------------------------------------------------------
| Get All Meals
|--------------------------------------------------------------------------
*/

function getAllAvailableMeals() {

    const allMeals = [];


    monthlyPlans.forEach(
        day => {

            allMeals.push(
                day.breakfast,
                day.lunch,
                day.dinner
            );
        }
    );


    Object.values(
        specialDietMenus
    ).forEach(
        diet => {

            [
                ...diet.breakfasts,
                ...diet.lunches,
                ...diet.dinners
            ].forEach(
                item => {

                    allMeals.push(
                        item
                    );
                }
            );
        }
    );


    return allMeals;
}


/*
|--------------------------------------------------------------------------
| Saved Meals
|--------------------------------------------------------------------------
*/

function renderSavedMeals() {

    const container =
        document.getElementById(
            "savedMealsContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (
        savedMeals.length === 0
    ) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ❤️
                </div>

                <h3>
                    No saved meals yet
                </h3>

                <p>
                    Save meals you like
                    and they will appear here.
                </p>

            </div>
        `;

        return;
    }


    const allMeals =
        getAllAvailableMeals();


    const displayed =
        new Set();


    savedMeals.forEach(
        mealName => {

            if (
                displayed.has(
                    mealName
                )
            ) {

                return;
            }


            const found =
                allMeals.find(
                    item =>
                        item.name ===
                        mealName
                );


            if (!found) {
                return;
            }


            displayed.add(
                mealName
            );


            createSavedMealCard(
                found,
                container
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Saved Meal Card
|--------------------------------------------------------------------------
*/

function createSavedMealCard(
    mealData,
    container
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "meal-card";


    card.innerHTML = `

        <div class="meal-image">
            ${mealData.emoji}
        </div>

        <div class="meal-info">

            <div class="meal-name">
                ${mealData.name}
            </div>

            <p class="meal-description">
                ${mealData.description}
            </p>

            <div class="meal-footer">

                <span class="calories">
                    🔥
                    ${mealData.calories}
                    kcal
                </span>

                <button
                    class="favorite-button saved"
                >
                    ❤️
                </button>

            </div>

        </div>
    `;


    const button =
        card.querySelector(
            ".favorite-button"
        );


    button.addEventListener(
        "click",
        () => {

            removeSavedMeal(
                mealData.name
            );
        }
    );


    container.appendChild(
        card
    );
}


/*
|--------------------------------------------------------------------------
| Remove Saved Meal
|--------------------------------------------------------------------------
*/

function removeSavedMeal(
    mealName
) {

    savedMeals =
        savedMeals.filter(
            name =>
                name !== mealName
        );


    localStorage.setItem(
        "nutriplanFavorites",
        JSON.stringify(
            savedMeals
        )
    );


    renderSavedMeals();

    renderMeals();


    if (selectedDiet) {
        renderDietMeals();
    }
}


/*
|--------------------------------------------------------------------------
| Nutrition Profile
|--------------------------------------------------------------------------
*/

const profileButton =
    document.getElementById(
        "profileButton"
    );


if (profileButton) {

    profileButton.addEventListener(
        "click",
        () => {

            showPage(
                "profilePage"
            );

            loadNutritionProfile();
        }
    );
}


/*
|--------------------------------------------------------------------------
| Back From Profile
|--------------------------------------------------------------------------
*/

const backFromProfile =
    document.getElementById(
        "backFromProfile"
    );


if (backFromProfile) {

    backFromProfile.addEventListener(
        "click",
        () => {

            showPage(
                "monthlyPage"
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Calculate BMR
|--------------------------------------------------------------------------
*/

function calculateBMR(
    sex,
    weight,
    height,
    age
) {

    const base =
        (10 * weight) +
        (6.25 * height) -
        (5 * age);


    if (sex === "male") {
        return base + 5;
    }


    return base - 161;
}


/*
|--------------------------------------------------------------------------
| Maintenance Calories
|--------------------------------------------------------------------------
*/

function calculateMaintenanceCalories(
    bmr,
    activityFactor
) {

    return (
        bmr *
        activityFactor
    );
}


/*
|--------------------------------------------------------------------------
| Goal Calories
|--------------------------------------------------------------------------
*/

function calculateGoalCalories(
    maintenance,
    goal
) {

    switch (goal) {

        case "loss":

            return Math.max(
                maintenance - 400,
                1200
            );


        case "gain":

            return (
                maintenance + 400
            );


        default:

            return maintenance;
    }
}


/*
|--------------------------------------------------------------------------
| Nutrition Form
|--------------------------------------------------------------------------
*/

const nutritionProfileForm =
    document.getElementById(
        "nutritionProfileForm"
    );


if (nutritionProfileForm) {

    nutritionProfileForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const profile = {

                age:
                    Number(
                        document
                            .getElementById(
                                "userAge"
                            )
                            .value
                    ),

                sex:
                    document
                        .getElementById(
                            "userSex"
                        )
                        .value,

                weight:
                    Number(
                        document
                            .getElementById(
                                "userWeight"
                            )
                            .value
                    ),

                height:
                    Number(
                        document
                            .getElementById(
                                "userHeight"
                            )
                            .value
                    ),

                activity:
                    Number(
                        document
                            .getElementById(
                                "activityLevel"
                            )
                            .value
                    ),

                goal:
                    document
                        .getElementById(
                            "nutritionGoal"
                        )
                        .value
            };


            nutritionProfile =
                profile;


            localStorage.setItem(
                "nutriplanProfile",
                JSON.stringify(
                    profile
                )
            );


            calculateNutritionPlan(
                profile
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Calculate Nutrition Plan
|--------------------------------------------------------------------------
*/

function calculateNutritionPlan(
    profile
) {

    const bmr =
        calculateBMR(
            profile.sex,
            profile.weight,
            profile.height,
            profile.age
        );


    const maintenance =
        calculateMaintenanceCalories(
            bmr,
            profile.activity
        );


    const target =
        calculateGoalCalories(
            maintenance,
            profile.goal
        );


    calculatedNutritionPlan = {

        bmr:
            Math.round(
                bmr
            ),

        maintenance:
            Math.round(
                maintenance
            ),

        target:
            Math.round(
                target
            ),

        goal:
            profile.goal
    };


    displayNutritionResult(
        calculatedNutritionPlan
    );
}


/*
|--------------------------------------------------------------------------
| Display Nutrition Result
|--------------------------------------------------------------------------
*/

function displayNutritionResult(
    plan
) {

    const result =
        document.getElementById(
            "nutritionResult"
        );


    if (!result) {
        return;
    }


    result.classList.remove(
        "hidden"
    );


    document
        .getElementById(
            "targetCalories"
        )
        .textContent =
        plan.target;


    document
        .getElementById(
            "bmrResult"
        )
        .textContent =
        `${plan.bmr} kcal`;


    document
        .getElementById(
            "maintenanceResult"
        )
        .textContent =
        `${plan.maintenance} kcal`;


    const goalNames = {

        loss:
            "Weight Loss",

        maintain:
            "Maintain Weight",

        gain:
            "Weight Gain"
    };


    document
        .getElementById(
            "goalResult"
        )
        .textContent =
        goalNames[
            plan.goal
        ];


    const recommendation =
        document.getElementById(
            "recommendationText"
        );


    if (!recommendation) {
        return;
    }


    if (
        plan.goal ===
        "loss"
    ) {

        recommendation.textContent =
            `Your estimated maintenance intake is ${plan.maintenance} kcal/day. Your initial NutriPlan target is approximately ${plan.target} kcal/day.`;

    } else if (
        plan.goal ===
        "gain"
    ) {

        recommendation.textContent =
            `Your estimated maintenance intake is ${plan.maintenance} kcal/day. Your initial NutriPlan target is approximately ${plan.target} kcal/day.`;

    } else {

        recommendation.textContent =
            `Your estimated maintenance requirement is approximately ${plan.target} kcal/day.`;
    }
}


/*
|--------------------------------------------------------------------------
| Load Saved Nutrition Profile
|--------------------------------------------------------------------------
*/

function loadNutritionProfile() {

    if (!nutritionProfile) {
        return;
    }


    const age =
        document.getElementById(
            "userAge"
        );

    const sex =
        document.getElementById(
            "userSex"
        );

    const weight =
        document.getElementById(
            "userWeight"
        );

    const height =
        document.getElementById(
            "userHeight"
        );

    const activity =
        document.getElementById(
            "activityLevel"
        );

    const goal =
        document.getElementById(
            "nutritionGoal"
        );


    if (age) {
        age.value =
            nutritionProfile.age;
    }


    if (sex) {
        sex.value =
            nutritionProfile.sex;
    }


    if (weight) {
        weight.value =
            nutritionProfile.weight;
    }


    if (height) {
        height.value =
            nutritionProfile.height;
    }


    if (activity) {
        activity.value =
            nutritionProfile.activity;
    }


    if (goal) {
        goal.value =
            nutritionProfile.goal;
    }


    calculateNutritionPlan(
        nutritionProfile
    );
}


/*
|--------------------------------------------------------------------------
| Open Recommended Menu
|--------------------------------------------------------------------------
*/

const openRecommendedPlan =
    document.getElementById(
        "openRecommendedPlan"
    );


if (openRecommendedPlan) {

    openRecommendedPlan.addEventListener(
        "click",
        () => {

            if (
                !calculatedNutritionPlan
            ) {

                return;
            }


            let dietKey = null;


            if (
                calculatedNutritionPlan
                    .goal ===
                "loss"
            ) {

                dietKey =
                    "weightLoss";

            } else if (
                calculatedNutritionPlan
                    .goal ===
                "gain"
            ) {

                dietKey =
                    "weightGain";

            } else {

                showPage(
                    "monthlyPage"
                );

                return;
            }


            /*
             * First open Special Diets page.
             */

            showPage(
                "dietsPage"
            );


            /*
             * Then open the recommended diet.
             */

            openDiet(
                dietKey
            );
        }
    );
}


/*
|--------------------------------------------------------------------------
| Validate Menu
|--------------------------------------------------------------------------
*/

function validateMenu(
    menu
) {

    const counts = {};


    menu.forEach(
        day => {

            [
                day.breakfast,
                day.lunch,
                day.dinner
            ].forEach(
                item => {

                    counts[item.name] =
                        (
                            counts[
                                item.name
                            ] || 0
                        ) + 1;
                }
            );
        }
    );


    const repeated =
        Object.entries(
            counts
        )
        .filter(
            ([name, total]) =>
                total > 2
        );


    if (
        repeated.length > 0
    ) {

        console.warn(
            "Meals repeated more than twice:",
            repeated
        );
    }
}


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
*/

renderDays();

renderMeals();

renderOrders();

validateMenu(
    monthlyPlans
);