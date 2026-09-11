/*
|--------------------------------------------------------------------------
| NutriPlan
|--------------------------------------------------------------------------
| Complete JavaScript for:
| - Monthly Menu
| - Special Diets
| - Favorites
| - Orders navigation
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

function meal(name, description, calories, emoji) {
    return {
        name,
        description,
        calories,
        emoji
    };
}


/*
|--------------------------------------------------------------------------
| MAIN MONTHLY MENU
|--------------------------------------------------------------------------
| 15 breakfasts + 15 lunches + 15 dinners.
|
| During the 30 days, every meal is used exactly twice.
|--------------------------------------------------------------------------
*/

const monthlyMealPool = {

    breakfasts: [
        meal(
            "Mandazi & Tea",
            "Fresh mandazi served with African tea.",
            420,
            "☕"
        ),
        meal(
            "Chapati & Omelette",
            "Soft chapati served with a vegetable omelette.",
            460,
            "🍳"
        ),
        meal(
            "Oatmeal & Banana",
            "Oats served with banana and milk.",
            390,
            "🥣"
        ),
        meal(
            "Bread, Avocado & Egg",
            "Whole-grain bread with avocado and boiled egg.",
            410,
            "🥑"
        ),
        meal(
            "Cassava & Milk",
            "Boiled cassava served with warm milk.",
            400,
            "🥛"
        ),
        meal(
            "Pancakes & Fruit",
            "Homemade pancakes with seasonal fruits.",
            430,
            "🥞"
        ),
        meal(
            "Millet Porridge",
            "Traditional millet porridge.",
            350,
            "🥣"
        ),
        meal(
            "Boiled Eggs & Toast",
            "Eggs served with whole-grain toast.",
            380,
            "🍳"
        ),
        meal(
            "Fruit Yogurt Bowl",
            "Natural yogurt with banana, mango and oats.",
            360,
            "🥭"
        ),
        meal(
            "Sweet Potato & Tea",
            "Boiled sweet potatoes served with tea.",
            390,
            "🍠"
        ),
        meal(
            "Banana Pancakes",
            "Pancakes prepared with fresh banana.",
            410,
            "🥞"
        ),
        meal(
            "Corn Porridge",
            "Warm corn porridge with milk.",
            340,
            "🥣"
        ),
        meal(
            "Egg Sandwich",
            "Whole-grain sandwich with egg and vegetables.",
            400,
            "🥪"
        ),
        meal(
            "Avocado Toast",
            "Whole-grain toast topped with fresh avocado.",
            370,
            "🥑"
        ),
        meal(
            "Chapati & Beans",
            "Chapati served with lightly seasoned beans.",
            440,
            "🫘"
        )
    ],

    lunches: [
        meal(
            "Ugali & Grilled Chicken",
            "Ugali served with grilled chicken and vegetables.",
            720,
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
            "Fufu served with a rich chicken stew.",
            740,
            "🍲"
        ),
        meal(
            "Jollof Rice & Fish",
            "West African jollof rice served with grilled fish.",
            680,
            "🐟"
        ),
        meal(
            "Matoke & Beef",
            "Traditional matoke cooked with beef.",
            710,
            "🍌"
        ),
        meal(
            "Chicken Biryani",
            "Aromatic basmati rice with spiced chicken.",
            730,
            "🍗"
        ),
        meal(
            "Rice & Beef Stew",
            "Steamed rice served with slow-cooked beef.",
            690,
            "🍚"
        ),
        meal(
            "Ugali & Tilapia",
            "Ugali served with grilled tilapia and sukuma wiki.",
            700,
            "🐟"
        ),
        meal(
            "Chapati & Chicken Curry",
            "Chapati served with chicken curry.",
            710,
            "🍛"
        ),
        meal(
            "Fish Curry & Rice",
            "Fish cooked in curry sauce with steamed rice.",
            670,
            "🐟"
        ),
        meal(
            "Goat Stew & Ugali",
            "Tender goat stew served with ugali.",
            730,
            "🍲"
        ),
        meal(
            "Beans & Plantain",
            "Beans served with cooked plantain.",
            610,
            "🍌"
        ),
        meal(
            "Fried Rice & Chicken",
            "Vegetable fried rice with grilled chicken.",
            690,
            "🍚"
        ),
        meal(
            "Cassava & Fish Stew",
            "Cassava served with tomato fish stew.",
            650,
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
            "Rice cooked with mixed seasonal vegetables.",
            510,
            "🍚"
        ),
        meal(
            "Sweet Potato & Beans",
            "Boiled sweet potatoes served with beans.",
            490,
            "🍠"
        ),
        meal(
            "Vegetable Pasta",
            "Pasta tossed with vegetables and tomato sauce.",
            520,
            "🍝"
        ),
        meal(
            "Pumpkin Soup",
            "Creamy pumpkin soup served with bread.",
            430,
            "🥣"
        ),
        meal(
            "Lentil Curry & Rice",
            "Lentil curry served with steamed rice.",
            560,
            "🍛"
        ),
        meal(
            "Potato Vegetable Stew",
            "Potatoes cooked with carrots, tomatoes and greens.",
            500,
            "🥔"
        ),
        meal(
            "Grilled Fish & Salad",
            "Grilled fish served with a fresh vegetable salad.",
            470,
            "🐟"
        ),
        meal(
            "Bean Vegetable Soup",
            "Beans cooked with fresh vegetables.",
            450,
            "🍲"
        ),
        meal(
            "Mashed Potatoes & Vegetables",
            "Creamy mashed potatoes with vegetables.",
            480,
            "🥔"
        ),
        meal(
            "Vegetable Chapati Wrap",
            "Chapati filled with fresh cooked vegetables.",
            460,
            "🌯"
        ),
        meal(
            "Rice & Lentils",
            "Steamed rice served with seasoned lentils.",
            510,
            "🍚"
        ),
        meal(
            "Chicken Vegetable Soup",
            "Light chicken soup with seasonal vegetables.",
            440,
            "🍲"
        ),
        meal(
            "Spinach Pasta",
            "Pasta cooked with spinach and tomato.",
            500,
            "🍝"
        ),
        meal(
            "Pumpkin & Beans",
            "Pumpkin cooked with seasoned beans.",
            470,
            "🎃"
        ),
        meal(
            "Vegetable Omelette",
            "Egg omelette filled with fresh vegetables.",
            410,
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
                monthlyMealPool.breakfasts[i % 15],

            lunch:
                monthlyMealPool.lunches[(i + 5) % 15],

            dinner:
                monthlyMealPool.dinners[(i + 10) % 15]
        });

    }

    return menu;
}


const monthlyMenu = generateMonthlyMenu();


/*
|--------------------------------------------------------------------------
| SPECIAL DIETS
|--------------------------------------------------------------------------
*/

const specialDietMenus = {

    vegetarian: {

        name: "Vegetarian",
        icon: "🥗",

        breakfasts: [
            meal("Oatmeal & Banana", "Oats with banana and milk.", 360, "🥣"),
            meal("Avocado Toast", "Whole-grain toast with avocado.", 350, "🥑"),
            meal("Fruit Yogurt Bowl", "Yogurt, fresh fruit and oats.", 340, "🥭"),
            meal("Millet Porridge", "Traditional millet porridge.", 330, "🥣"),
            meal("Sweet Potato & Tea", "Boiled sweet potato with tea.", 370, "🍠"),
            meal("Vegetable Omelette", "Eggs with tomato and vegetables.", 390, "🍳"),
            meal("Banana Pancakes", "Fresh banana pancakes.", 400, "🥞"),
            meal("Cassava & Milk", "Boiled cassava with warm milk.", 380, "🥛"),
            meal("Apple Cinnamon Oats", "Oats with apple and cinnamon.", 350, "🍎"),
            meal("Chapati & Beans", "Chapati served with beans.", 420, "🫘"),
            meal("Fruit Salad & Yogurt", "Fresh fruits with yogurt.", 330, "🍓"),
            meal("Corn Porridge", "Warm corn porridge with milk.", 320, "🥣"),
            meal("Bread & Avocado", "Whole-grain bread and avocado.", 360, "🥑"),
            meal("Pumpkin Pancakes", "Soft pumpkin pancakes.", 380, "🥞"),
            meal("Rice Porridge", "Warm creamy rice porridge.", 330, "🥣")
        ],

        lunches: [
            meal("Vegetable Jollof Rice", "Jollof rice with mixed vegetables.", 580, "🍚"),
            meal("Lentil Curry & Rice", "Lentil curry with steamed rice.", 560, "🍛"),
            meal("Beans & Plantain", "Beans served with cooked plantain.", 590, "🍌"),
            meal("Vegetable Pasta", "Pasta with tomato and vegetables.", 520, "🍝"),
            meal("Ugali & Bean Stew", "Ugali with beans and greens.", 600, "🫘"),
            meal("Vegetable Biryani", "Spiced rice with vegetables.", 570, "🍛"),
            meal("Matoke & Beans", "Matoke cooked with seasoned beans.", 590, "🍌"),
            meal("Vegetable Couscous", "Couscous with fresh vegetables.", 510, "🥗"),
            meal("Chapati & Lentils", "Chapati served with lentils.", 560, "🫓"),
            meal("Rice & Chickpea Curry", "Rice with chickpea curry.", 550, "🍚"),
            meal("Sweet Potato & Beans", "Sweet potatoes with beans.", 520, "🍠"),
            meal("Vegetable Fried Rice", "Rice fried with mixed vegetables.", 540, "🍚"),
            meal("Cassava & Bean Stew", "Cassava served with bean stew.", 560, "🍲"),
            meal("Potato Lentil Curry", "Potato and lentil curry.", 530, "🍛"),
            meal("Plantain Vegetable Stew", "Plantain cooked with vegetables.", 540, "🍌")
        ],

        dinners: [
            meal("Pumpkin Soup", "Creamy pumpkin soup.", 390, "🎃"),
            meal("Bean Vegetable Soup", "Bean soup with vegetables.", 430, "🍲"),
            meal("Vegetable Rice Soup", "Rice soup with fresh vegetables.", 420, "🍚"),
            meal("Spinach Pasta", "Pasta with spinach and tomato.", 470, "🍝"),
            meal("Potato Vegetable Stew", "Potatoes with mixed vegetables.", 460, "🥔"),
            meal("Corn & Bean Salad", "Corn, beans and vegetables.", 410, "🥗"),
            meal("Lentil Soup", "Seasoned lentil soup.", 420, "🍲"),
            meal("Vegetable Stir Fry", "Fresh stir-fried vegetables.", 400, "🥦"),
            meal("Pumpkin & Beans", "Pumpkin cooked with beans.", 440, "🎃"),
            meal("Tomato Pasta", "Pasta with tomato sauce.", 450, "🍝"),
            meal("Rice & Lentils", "Rice served with seasoned lentils.", 470, "🍚"),
            meal("Baked Potatoes & Salad", "Potatoes with fresh salad.", 430, "🥔"),
            meal("Matoke Vegetable Stew", "Matoke with vegetables.", 440, "🍌"),
            meal("Sweet Potato Soup", "Sweet potato vegetable soup.", 400, "🍠"),
            meal("Beans & Rice Bowl", "Rice topped with beans.", 480, "🍚")
        ]
    },


    diabetic: {

        name: "Diabetic",
        icon: "🩺",

        breakfasts: [
            meal("Oats & Berries", "Unsweetened oats with berries.", 310, "🥣"),
            meal("Egg & Avocado", "Boiled egg with fresh avocado.", 330, "🥑"),
            meal("Vegetable Omelette", "Egg omelette with vegetables.", 340, "🍳"),
            meal("Plain Yogurt & Seeds", "Unsweetened yogurt with seeds.", 300, "🥣"),
            meal("Whole-Grain Toast & Egg", "Toast served with boiled egg.", 320, "🍞"),
            meal("Millet Porridge", "Unsweetened millet porridge.", 310, "🥣"),
            meal("Avocado Toast", "Whole-grain toast with avocado.", 320, "🥑"),
            meal("Boiled Sweet Potato", "Small serving of sweet potato.", 300, "🍠"),
            meal("Spinach Omelette", "Eggs cooked with spinach.", 320, "🍳"),
            meal("Oats & Apple", "Oats with sliced apple.", 310, "🍎"),
            meal("Plain Yogurt Bowl", "Yogurt with low-sugar fruits.", 300, "🥛"),
            meal("Egg & Tomato Toast", "Whole-grain toast with egg.", 320, "🍞"),
            meal("Corn Porridge", "Unsweetened corn porridge.", 300, "🥣"),
            meal("Scrambled Eggs & Greens", "Eggs with fresh greens.", 330, "🍳"),
            meal("Avocado & Egg Bowl", "Avocado with boiled egg.", 340, "🥑")
        ],

        lunches: [
            meal("Grilled Chicken Salad", "Chicken with vegetables and greens.", 480, "🥗"),
            meal("Brown Rice & Fish", "Brown rice with grilled fish.", 520, "🐟"),
            meal("Beans & Vegetables", "Beans with fresh vegetables.", 490, "🫘"),
            meal("Ugali & Tilapia", "Moderate ugali with tilapia and greens.", 530, "🐟"),
            meal("Lentils & Brown Rice", "Lentils served with brown rice.", 500, "🍚"),
            meal("Chicken & Vegetables", "Grilled chicken with vegetables.", 490, "🍗"),
            meal("Fish & Sweet Potato", "Fish with boiled sweet potato.", 510, "🐟"),
            meal("Bean Salad Bowl", "Beans and vegetables.", 460, "🥗"),
            meal("Chicken Vegetable Soup", "Chicken soup with vegetables.", 450, "🍲"),
            meal("Matoke & Beans", "Moderate serving of matoke and beans.", 510, "🍌"),
            meal("Fish Vegetable Stew", "Fish cooked with vegetables.", 480, "🐟"),
            meal("Grilled Chicken & Brown Rice", "Chicken and brown rice.", 510, "🍗"),
            meal("Lentil Vegetable Bowl", "Lentils with vegetables.", 470, "🥗"),
            meal("Beef & Greens", "Lean beef with fresh greens.", 500, "🥩"),
            meal("Chickpea Salad", "Chickpeas and vegetables.", 450, "🥗")
        ],

        dinners: [
            meal("Vegetable Soup", "Light vegetable soup.", 350, "🍲"),
            meal("Grilled Fish Salad", "Fish with fresh salad.", 410, "🐟"),
            meal("Chicken & Spinach", "Chicken breast with spinach.", 430, "🍗"),
            meal("Lentil Soup", "Lentil soup without added sugar.", 390, "🍲"),
            meal("Bean Vegetable Soup", "Beans with vegetables.", 400, "🫘"),
            meal("Egg & Vegetable Salad", "Eggs with mixed vegetables.", 390, "🥗"),
            meal("Fish & Broccoli", "Grilled fish with broccoli.", 420, "🐟"),
            meal("Chicken Vegetable Bowl", "Chicken with vegetables.", 420, "🍗"),
            meal("Pumpkin Soup", "Light pumpkin soup.", 370, "🎃"),
            meal("Spinach Omelette", "Egg omelette with spinach.", 380, "🍳"),
            meal("Vegetable Stir Fry", "Low-oil stir-fried vegetables.", 360, "🥦"),
            meal("Chicken Soup", "Light chicken soup.", 400, "🍲"),
            meal("Bean Salad", "Beans with greens and tomato.", 380, "🥗"),
            meal("Fish Vegetable Soup", "Fish soup with vegetables.", 410, "🐟"),
            meal("Lentils & Greens", "Lentils with leafy vegetables.", 390, "🥬")
        ]
    },


    peanutFree: {

        name: "Peanut-Free",
        icon: "🚫🥜",

        breakfasts: [
            meal("Chapati & Omelette", "Chapati with vegetable omelette.", 440, "🍳"),
            meal("Oatmeal & Banana", "Oats with banana.", 370, "🥣"),
            meal("Mandazi & Tea", "Fresh mandazi and tea.", 410, "☕"),
            meal("Sweet Potato & Milk", "Sweet potato with milk.", 390, "🍠"),
            meal("Pancakes & Fruit", "Pancakes with fresh fruit.", 410, "🥞"),
            meal("Avocado Toast", "Toast with avocado.", 350, "🥑"),
            meal("Millet Porridge", "Traditional millet porridge.", 340, "🥣"),
            meal("Egg Sandwich", "Egg sandwich with vegetables.", 400, "🥪"),
            meal("Cassava & Tea", "Boiled cassava and tea.", 370, "☕"),
            meal("Banana Pancakes", "Banana pancakes.", 400, "🥞"),
            meal("Fruit Yogurt Bowl", "Yogurt and fresh fruit.", 350, "🥭"),
            meal("Boiled Eggs & Toast", "Eggs with whole-grain toast.", 380, "🍳"),
            meal("Rice Porridge", "Warm rice porridge.", 350, "🥣"),
            meal("Chapati & Beans", "Chapati with beans.", 430, "🫘"),
            meal("Pumpkin Pancakes", "Pumpkin pancakes.", 390, "🥞")
        ],

        lunches: [
            meal("Chicken Biryani", "Chicken biryani prepared without peanuts.", 690, "🍗"),
            meal("Ugali & Tilapia", "Ugali with tilapia and greens.", 680, "🐟"),
            meal("Beef Pilau", "Beef pilau prepared without peanuts.", 690, "🍛"),
            meal("Matoke & Beef", "Matoke with beef stew.", 680, "🍌"),
            meal("Jollof Rice & Fish", "Jollof rice and grilled fish.", 660, "🐟"),
            meal("Chicken & Rice", "Chicken served with steamed rice.", 650, "🍗"),
            meal("Fufu & Fish Stew", "Fufu with fish stew.", 670, "🐟"),
            meal("Chapati & Chicken Curry", "Chapati with chicken curry.", 680, "🍛"),
            meal("Goat Stew & Ugali", "Goat stew with ugali.", 700, "🍲"),
            meal("Fish Pilau", "Pilau rice served with fish.", 650, "🐟"),
            meal("Beef & Potatoes", "Beef stew with potatoes.", 660, "🥔"),
            meal("Chicken Pasta", "Chicken pasta in tomato sauce.", 640, "🍝"),
            meal("Beans & Plantain", "Beans with cooked plantain.", 580, "🍌"),
            meal("Vegetable Jollof", "Jollof rice with vegetables.", 570, "🍚"),
            meal("Cassava & Fish", "Cassava served with fish stew.", 630, "🐟")
        ],

        dinners: [
            meal("Chicken Vegetable Soup", "Chicken and vegetable soup.", 430, "🍲"),
            meal("Vegetable Pasta", "Pasta with tomato and vegetables.", 480, "🍝"),
            meal("Grilled Fish & Salad", "Fish with fresh salad.", 450, "🐟"),
            meal("Lentil Curry & Rice", "Lentil curry with rice.", 510, "🍛"),
            meal("Pumpkin Soup", "Creamy pumpkin soup.", 400, "🎃"),
            meal("Rice & Beans", "Rice and seasoned beans.", 490, "🍚"),
            meal("Potato Vegetable Stew", "Potato vegetable stew.", 460, "🥔"),
            meal("Chicken & Pumpkin", "Chicken with pumpkin.", 470, "🍗"),
            meal("Bean Vegetable Soup", "Bean and vegetable soup.", 420, "🍲"),
            meal("Vegetable Omelette", "Egg omelette with vegetables.", 400, "🍳"),
            meal("Sweet Potato Soup", "Sweet potato soup.", 400, "🍠"),
            meal("Tomato Pasta", "Pasta with tomato sauce.", 470, "🍝"),
            meal("Vegetable Rice", "Rice with mixed vegetables.", 480, "🍚"),
            meal("Lentil Soup", "Seasoned lentil soup.", 410, "🍲"),
            meal("Baked Potato Salad", "Baked potato with vegetables.", 440, "🥔")
        ]
    },


    highProtein: {

        name: "High Protein",
        icon: "💪",

        breakfasts: [
            meal("Egg & Chicken Wrap", "Egg and grilled chicken wrap.", 470, "🌯"),
            meal("Greek Yogurt & Oats", "High-protein yogurt with oats.", 410, "🥣"),
            meal("Egg & Avocado Toast", "Egg and avocado on toast.", 430, "🥑"),
            meal("Chicken Omelette", "Egg omelette with chicken.", 460, "🍳"),
            meal("Beans & Eggs", "Beans served with boiled eggs.", 440, "🫘"),
            meal("Tuna Egg Sandwich", "Tuna and egg sandwich.", 470, "🥪"),
            meal("Yogurt Banana Bowl", "Yogurt, banana and oats.", 400, "🍌"),
            meal("Scrambled Eggs & Beans", "Eggs with beans.", 450, "🍳"),
            meal("Chicken Breakfast Wrap", "Chicken and vegetables in chapati.", 480, "🌯"),
            meal("Egg & Sweet Potato", "Eggs with sweet potato.", 430, "🍠"),
            meal("Protein Oat Bowl", "Oats with milk and yogurt.", 420, "🥣"),
            meal("Fish & Egg Toast", "Fish, egg and whole-grain bread.", 470, "🐟"),
            meal("Bean Omelette", "Omelette served with beans.", 440, "🍳"),
            meal("Chicken Avocado Toast", "Chicken and avocado toast.", 460, "🥑"),
            meal("Egg Yogurt Bowl", "Eggs served with yogurt and oats.", 420, "🥣")
        ],

        lunches: [
            meal("Grilled Chicken & Rice", "Chicken breast with rice.", 680, "🍗"),
            meal("Beef & Sweet Potato", "Lean beef with sweet potato.", 690, "🥩"),
            meal("Tilapia & Ugali", "Tilapia served with ugali.", 670, "🐟"),
            meal("Chicken Biryani", "Chicken with spiced rice.", 700, "🍗"),
            meal("Beef & Beans", "Lean beef served with beans.", 680, "🥩"),
            meal("Fish & Brown Rice", "Grilled fish with brown rice.", 650, "🐟"),
            meal("Chicken & Lentils", "Chicken with lentils.", 660, "🍗"),
            meal("Goat Stew & Ugali", "Goat stew with ugali.", 710, "🍲"),
            meal("Beef Pilau", "Beef and spiced rice.", 700, "🍛"),
            meal("Chicken Pasta", "Chicken with tomato pasta.", 670, "🍝"),
            meal("Fish & Beans", "Fish served with beans.", 640, "🐟"),
            meal("Chicken Matoke", "Chicken stew with matoke.", 660, "🍌"),
            meal("Beef & Rice", "Lean beef with rice.", 680, "🍚"),
            meal("Chicken & Chickpeas", "Chicken with chickpeas.", 650, "🍗"),
            meal("Tilapia & Potatoes", "Tilapia with potatoes.", 640, "🐟")
        ],

        dinners: [
            meal("Chicken Salad", "Grilled chicken with salad.", 480, "🥗"),
            meal("Fish & Vegetables", "Grilled fish with vegetables.", 470, "🐟"),
            meal("Beef Vegetable Soup", "Beef and vegetable soup.", 490, "🍲"),
            meal("Egg & Chicken Salad", "Chicken and egg salad.", 480, "🥗"),
            meal("Lentils & Chicken", "Chicken with lentils.", 500, "🍗"),
            meal("Fish & Lentil Bowl", "Fish with lentils.", 490, "🐟"),
            meal("Chicken Vegetable Soup", "Chicken soup with vegetables.", 460, "🍲"),
            meal("Beef & Greens", "Lean beef with greens.", 490, "🥩"),
            meal("Tuna Potato Salad", "Tuna with potato and vegetables.", 480, "🐟"),
            meal("Chicken & Beans", "Chicken served with beans.", 500, "🍗"),
            meal("Fish & Egg Salad", "Fish and egg salad.", 470, "🥗"),
            meal("Beef Lentil Bowl", "Beef served with lentils.", 500, "🥩"),
            meal("Chicken & Pumpkin", "Chicken with roasted pumpkin.", 470, "🎃"),
            meal("Tilapia Salad", "Tilapia with fresh vegetables.", 460, "🐟"),
            meal("Egg Bean Bowl", "Eggs served with beans.", 460, "🫘")
        ]
    }
};


/*
|--------------------------------------------------------------------------
| Generate 30-day Special Diet Menu
|--------------------------------------------------------------------------
*/

function generateDietMenu(diet) {

    const menu = [];

    for (let i = 0; i < 30; i++) {

        menu.push({

            breakfast:
                diet.breakfasts[i % diet.breakfasts.length],

            lunch:
                diet.lunches[
                    (i + 5) % diet.lunches.length
                ],

            dinner:
                diet.dinners[
                    (i + 10) % diet.dinners.length
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


/*
|--------------------------------------------------------------------------
| Favorites
|--------------------------------------------------------------------------
*/

let savedMeals = JSON.parse(
    localStorage.getItem("nutriplanFavorites")
) || [];


/*
|--------------------------------------------------------------------------
| DOM Elements
|--------------------------------------------------------------------------
*/

const daysContainer =
    document.getElementById("daysContainer");

const mealsContainer =
    document.getElementById("mealsContainer");

const selectedDayTitle =
    document.getElementById("selectedDayTitle");

const navItems =
    document.querySelectorAll(".nav-item");

const pages =
    document.querySelectorAll(".page");


/*
|--------------------------------------------------------------------------
| Render Monthly Menu Days
|--------------------------------------------------------------------------
*/

function renderDays() {

    if (!daysContainer) {
        return;
    }

    daysContainer.innerHTML = "";

    monthlyMenu.forEach((day, index) => {

        const button =
            document.createElement("button");

        button.className = "day-card";

        if (index === selectedDay) {
            button.classList.add("active");
        }

        button.innerHTML = `
            <span class="day-number">
                ${index + 1}
            </span>

            <span class="day-label">
                Day
            </span>
        `;

        button.addEventListener(
            "click",
            () => selectDay(index)
        );

        daysContainer.appendChild(button);
    });
}


/*
|--------------------------------------------------------------------------
| Select Monthly Menu Day
|--------------------------------------------------------------------------
*/

function selectDay(index) {

    selectedDay = index;

    renderDays();
    renderMeals();

    const selectedCard =
        daysContainer.children[index];

    if (selectedCard) {

        selectedCard.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }
}


/*
|--------------------------------------------------------------------------
| Render Monthly Menu Meals
|--------------------------------------------------------------------------
*/

function renderMeals() {

    if (!mealsContainer) {
        return;
    }

    const day =
        monthlyMenu[selectedDay];

    selectedDayTitle.textContent =
        `Day ${selectedDay + 1}`;

    mealsContainer.innerHTML = "";

    createMealCard(
        "Breakfast",
        day.breakfast,
        mealsContainer
    );

    createMealCard(
        "Lunch",
        day.lunch,
        mealsContainer
    );

    createMealCard(
        "Dinner",
        day.dinner,
        mealsContainer
    );
}


/*
|--------------------------------------------------------------------------
| Generic Meal Card
|--------------------------------------------------------------------------
*/

function createMealCard(
    type,
    mealData,
    container
) {

    const saved =
        savedMeals.includes(mealData.name);

    const card =
        document.createElement("article");

    card.className = "meal-card";

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

                <span class="calories">
                    🔥 ${mealData.calories} kcal
                </span>

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

    container.appendChild(card);
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

    const index =
        savedMeals.indexOf(mealName);

    if (index === -1) {

        savedMeals.push(mealName);

        button.textContent = "❤️";

        button.classList.add("saved");

    } else {

        savedMeals.splice(index, 1);

        button.textContent = "🤍";

        button.classList.remove("saved");
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

navItems.forEach(item => {

    item.addEventListener(
        "click",
        function () {

            const pageId =
                this.dataset.page;

            if (!pageId) {
                return;
            }


            pages.forEach(page => {
                page.classList.remove(
                    "active-page"
                );
            });


            navItems.forEach(nav => {
                nav.classList.remove(
                    "active"
                );
            });


            const selectedPage =
                document.getElementById(
                    pageId
                );


            if (selectedPage) {

                selectedPage.classList.add(
                    "active-page"
                );
            }


            this.classList.add(
                "active"
            );


            if (pageId === "savedPage") {
                renderSavedMeals();
            }

        }
    );

});


/*
|--------------------------------------------------------------------------
| Special Diet Cards
|--------------------------------------------------------------------------
*/

document
    .querySelectorAll(".diet-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const dietKey =
                    card.dataset.diet;

                openDiet(dietKey);
            }
        );

    });


/*
|--------------------------------------------------------------------------
| Open Special Diet
|--------------------------------------------------------------------------
*/

function openDiet(dietKey) {

    if (!specialDietMenus[dietKey]) {
        return;
    }


    selectedDiet =
        specialDietMenus[dietKey];

    selectedDietDay = 0;


    const listView =
        document.getElementById(
            "dietListView"
        );

    const menuView =
        document.getElementById(
            "dietMenuView"
        );


    listView.classList.add("hidden");

    menuView.classList.remove("hidden");


    document
        .getElementById(
            "selectedDietName"
        )
        .textContent =
        selectedDiet.name;


    document
        .getElementById(
            "selectedDietIcon"
        )
        .textContent =
        selectedDiet.icon;


    renderDietDays();
    renderDietMeals();
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

            document
                .getElementById(
                    "dietMenuView"
                )
                .classList.add(
                    "hidden"
                );


            document
                .getElementById(
                    "dietListView"
                )
                .classList.remove(
                    "hidden"
                );

        }
    );
}


/*
|--------------------------------------------------------------------------
| Render Diet Days
|--------------------------------------------------------------------------
*/

function renderDietDays() {

    const container =
        document.getElementById(
            "dietDaysContainer"
        );

    if (!container) {
        return;
    }


    container.innerHTML = "";


    for (let i = 0; i < 30; i++) {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "day-card";


        if (i === selectedDietDay) {

            button.classList.add(
                "active"
            );
        }


        button.innerHTML = `

            <span class="day-number">
                ${i + 1}
            </span>

            <span class="day-label">
                Day
            </span>

        `;


        button.addEventListener(
            "click",
            () => selectDietDay(i)
        );


        container.appendChild(
            button
        );
    }
}


/*
|--------------------------------------------------------------------------
| Select Diet Day
|--------------------------------------------------------------------------
*/

function selectDietDay(index) {

    selectedDietDay = index;

    renderDietDays();

    renderDietMeals();


    const container =
        document.getElementById(
            "dietDaysContainer"
        );


    if (
        container &&
        container.children[index]
    ) {

        container
            .children[index]
            .scrollIntoView({

                behavior: "smooth",
                inline: "center",
                block: "nearest"

            });
    }
}


/*
|--------------------------------------------------------------------------
| Render Diet Meals
|--------------------------------------------------------------------------
*/

function renderDietMeals() {

    if (!selectedDiet) {
        return;
    }


    const menu =
        generateDietMenu(
            selectedDiet
        );


    const day =
        menu[selectedDietDay];


    const title =
        document.getElementById(
            "selectedDietDayTitle"
        );


    if (title) {

        title.textContent =
            `Day ${selectedDietDay + 1}`;
    }


    const container =
        document.getElementById(
            "dietMealsContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


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
| Find Saved Meal Information
|--------------------------------------------------------------------------
*/

function getAllAvailableMeals() {

    const allMeals = [];


    /*
    |--------------------------------------------------------------------------
    | Monthly Menu
    |--------------------------------------------------------------------------
    */

    monthlyMenu.forEach(
        (day, index) => {

            allMeals.push({

                ...day.breakfast,
                type: "Breakfast",
                source:
                    `Monthly Menu - Day ${index + 1}`

            });


            allMeals.push({

                ...day.lunch,
                type: "Lunch",
                source:
                    `Monthly Menu - Day ${index + 1}`

            });


            allMeals.push({

                ...day.dinner,
                type: "Dinner",
                source:
                    `Monthly Menu - Day ${index + 1}`

            });

        }
    );


    /*
    |--------------------------------------------------------------------------
    | Special Diets
    |--------------------------------------------------------------------------
    */

    Object
        .values(specialDietMenus)
        .forEach(diet => {

            diet.breakfasts.forEach(
                item => {

                    allMeals.push({

                        ...item,
                        type: "Breakfast",
                        source: diet.name

                    });
                }
            );


            diet.lunches.forEach(
                item => {

                    allMeals.push({

                        ...item,
                        type: "Lunch",
                        source: diet.name

                    });
                }
            );


            diet.dinners.forEach(
                item => {

                    allMeals.push({

                        ...item,
                        type: "Dinner",
                        source: diet.name

                    });
                }
            );

        });


    return allMeals;
}


/*
|--------------------------------------------------------------------------
| Saved Meals Page
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


    if (savedMeals.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🤍
                </div>

                <h3>
                    No saved meals
                </h3>

                <p>
                    Tap the heart icon on a meal
                    to save it here.
                </p>

            </div>
        `;

        return;
    }


    const allMeals =
        getAllAvailableMeals();


    /*
    |--------------------------------------------------------------------------
    | Avoid showing duplicates when a meal occurs on several days.
    |--------------------------------------------------------------------------
    */

    const alreadyDisplayed =
        new Set();


    savedMeals.forEach(
        savedMealName => {


            if (
                alreadyDisplayed.has(
                    savedMealName
                )
            ) {
                return;
            }


            const mealData =
                allMeals.find(
                    item =>
                        item.name ===
                        savedMealName
                );


            if (!mealData) {
                return;
            }


            alreadyDisplayed.add(
                savedMealName
            );


            createSavedMealCard(
                mealData,
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

            <div class="meal-type">
                ${mealData.type}
            </div>

            <div class="meal-name">
                ${mealData.name}
            </div>

            <p class="meal-description">
                ${mealData.description}
            </p>

            <div class="meal-footer">

                <span class="calories">
                    🔥 ${mealData.calories} kcal
                </span>

                <button
                    class="favorite-button saved"
                    aria-label="Remove saved meal"
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

            renderSavedMeals();
        }
    );


    container.appendChild(
        card
    );
}


/*
|--------------------------------------------------------------------------
| Remove Favorite
|--------------------------------------------------------------------------
*/

function removeSavedMeal(mealName) {

    savedMeals =
        savedMeals.filter(
            name =>
                name !== mealName
        );


    localStorage.setItem(
        "nutriplanFavorites",
        JSON.stringify(savedMeals)
    );
}


/*
|--------------------------------------------------------------------------
| Orders Placeholder
|--------------------------------------------------------------------------
| Orders will be implemented in the next step.
|--------------------------------------------------------------------------
*/

function renderOrders() {

    const container =
        document.getElementById(
            "ordersContainer"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                🛍️
            </div>

            <h3>
                No orders yet
            </h3>

            <p>
                Your meal orders will appear here.
            </p>

        </div>
    `;
}


/*
|--------------------------------------------------------------------------
| Validate Meal Repetition
|--------------------------------------------------------------------------
| Useful during development.
|
| It checks that no meal appears more than twice
| inside a generated menu.
|--------------------------------------------------------------------------
*/

function validateMenu(menu) {

    const count = {};


    menu.forEach(day => {

        const meals = [
            day.breakfast,
            day.lunch,
            day.dinner
        ];


        meals.forEach(item => {

            count[item.name] =
                (count[item.name] || 0)
                + 1;

        });
    });


    const repeatedTooOften =
        Object.entries(count)
            .filter(
                ([name, total]) =>
                    total > 2
            );


    if (
        repeatedTooOften.length >
        0
    ) {

        console.warn(
            "Meals repeated more than twice:",
            repeatedTooOften
        );
    }

}


/*
|--------------------------------------------------------------------------
| Validate Main Menu
|--------------------------------------------------------------------------
*/

validateMenu(monthlyMenu);


/*
|--------------------------------------------------------------------------
| Validate Special Diet Menus
|--------------------------------------------------------------------------
*/

Object.values(
    specialDietMenus
).forEach(diet => {

    validateMenu(
        generateDietMenu(diet)
    );

});


/*
|--------------------------------------------------------------------------
| Start Application
|--------------------------------------------------------------------------
*/

renderDays();

renderMeals();

renderOrders();