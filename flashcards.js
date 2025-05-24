// Flashcard Database with Image Support
const flashcardsDatabase = {
  'science': {
    'physics': [
      {
        question: "Solve this physics equation:",
        questionImg: "./images/newtons-laws.png",  // Correct format
        answer: "F = ma (Newton's Second Law)",
        answerImg: "./images/free-body-diagram.png"  // Correct format
      },
      {
        question: "What does this circuit diagram represent?",
        questionImg: "./images/simple-circuit.png",  // Remove 'public/'
        answer: "Simple circuit with resistor and voltage source",
        answerImg: "./images/series-circuit.png"  // Remove 'public/'
      }
    ],
    'human-body': [
      {
        "question": "What foods are mentioned as examples in the book?",
        "answer": "Steak, chicken, sausages, vegetables, beans, and beverages."
      },
      {
        "question": "Why is food essential for humans?",
        "answer": "It provides materials for survival, including energy and nutrients."
      },
      {
        "question": "Why does studying or playing sports make you hungry?",
        "answer": "These activities require energy, which comes from food."
      },
      {
        "question": "List the six essential nutrient classes.",
        "answer": "Carbohydrates, fats, proteins, vitamins, minerals, water."
      },
      {
        "question": "Which three nutrients provide energy?",
        "answer": "Carbohydrates, fats, proteins."
      },
      {
        "question": "Do vitamins, minerals, or water provide energy? Cite evidence.",
        "answer": "No. Figure 1 shows their energy contribution as zero.",
        "answerImg": "./images/Screenshot-2025-05-21-184402.png"  // Changed from 24-091402
      },
      {
        "question": "Define one calorie as per the book.",
        "answer": "The energy needed to raise 1 gram of water by 1°C at 1 atm pressure."
      },
      {
        "question": "Rank fats, carbs, and proteins by energy/gram using Figure 1.",
        "answer": "Fats (highest) > Carbohydrates ≈ Proteins.",
        "questionImg": "./images/Screenshot-2025-05-21-184402.png"  // Example format
      },
      {
        "question": "How much more energy do fats provide than proteins? (Use Figure 1)",
        "answer": "~2x more (e.g., fats ~9 cal/gram vs. proteins ~4 cal/gram).",
        "questionImg": "./images/Screenshot-2025-05-21-184402.png"
      },
      {
        "question": "Besides energy, what do nutrients support?",
        "answer": "Survival and growth."
      },
      {
        "question": "How does the book define a \"Calorie\" (capital C)?",
        "answer": "1 Calorie = 1,000 calories (1 kcal); the energy needed to raise 1 kg of water by 1°C at 1 atm pressure."
      },
      {
        "question": "What units measure food energy? (Checkpoint question)",
        "answer": "Calories (capital C) and joules (1 Calorie = 4.184 kilojoules)."
      },
      {
        "question": "Why does physical activity increase the need to eat?",
        "answer": "Activity \"burns\" calories, and the body restores them through food."
      },
      {
        "question": "List 4 factors affecting energy needs.",
        "answer": "Physical activity, growth rate, age, gender."
      },
      {
        "question": "Why might a teenager need more calories than an adult?",
        "answer": "Due to higher growth rates and physical activity."
      },
      {
        "question": "Define \"sedentary,\" \"moderately active,\" and \"active\" lifestyles.",
        "answer": "Sedentary: Light daily activities.\nModerately active: 150 mins/week of moderate exercise (e.g., walking).\nActive: 75 mins/week of vigorous sports (e.g., jogging, basketball).",
        "answerImg": "./images/Screenshot-2025-05-21-184239.png"
      },
      {
        "question": "How many Calories/day does a sedentary 14-year-old girl need?",
        "answer": "1,800 Calories (from Table 1).",
        "questionImg": "./images/Screenshot-2025-05-21-184239.png"
      },
      {
        "question": "Compare energy needs for active 14-18-year-old males vs. females.",
        "answer": "Males: 3,000 Cal; Females: 2,400 Cal.",
        "questionImg": "./images/Screenshot-2025-05-21-184239.png"
      },
      {
        "question": "Why do 2-3-year-olds need fewer Calories than 14-18-year-olds despite rapid growth?",
        "answer": "Teens have higher muscle mass and activity levels, outweighing growth rate."
      },
      {
        "question": "Convert 500 Calories to kilojoules using the book's formula.",
        "answer": "500 Cal × 4.184 kJ/Cal = 2,092 kJ."
      },
      {
        "question": "What elements compose carbohydrates?",
        "answer": "Carbon, oxygen, and hydrogen."
      },
      {
        "question": "What are the two major types of carbohydrates? (Checkpoint)",
        "answer": "Simple sugars (monosaccharides/disaccharides) and complex carbohydrates (polysaccharides like starch and fiber)."
      },
      {
        "question": "Why is glucose important?",
        "answer": "It's the major energy source for the body (monosaccharide from broken-down carbs)."
      },
      {
        "question": "Why can't the body use fiber for energy?",
        "answer": "It cannot be broken down into sugar molecules.",
        "answerImg": "./images/Screenshot-2025-05-21-184317.png"
      },
      {
        "question": "What elements compose fats?",
        "answer": "Carbon, oxygen, and hydrogen (glycerol + fatty acids)."
      },
      {
        "question": "List 3 roles of fats in the body.",
        "answer": "Cell structure, organ protection/support, and heat retention."
      },
      {
        "question": "Compare saturated and unsaturated fats. (Checkpoint)",
        "answer": "Saturated: Solid at room temp (animal products, palm/coconut oil); high cholesterol.\nUnsaturated: Liquid at room temp (vegetables, seafood like salmon).",
        "answerImg": "./images/Screenshot-2025-05-21-184317.png"
      },
      {
        "question": "Is dietary cholesterol necessary? Why?",
        "answer": "No—the liver produces all needed cholesterol."
      },
      {
        "question": "What elements compose proteins?",
        "answer": "Nitrogen, hydrogen, carbon, and oxygen."
      },
      {
        "question": "What distinguishes essential vs. nonessential amino acids? (Checkpoint)",
        "answer": "Nonessential: 12 made by the body.\nEssential: 9 obtained from food (meat, milk, beans, eggs)."
      },
      {
        "question": "Name 2 vital roles of amino acids.",
        "answer": "Tissue growth/repair and energy source.",
        "answerImg": "./images/Screenshot-2025-05-21-184327.png"
      },
      {
        "question": "List 4 foods rich in proteins.",
        "answer": "Meat, poultry, fish, dairy, nuts, beans, lentils."
      },
      {
        "question": "Why might fats provide more energy than carbs/proteins per gram? (Link to earlier graph)",
        "answer": "Fats have higher calorie density (~9 Cal/g) due to molecular structure."
      },
      {
        "question": "How does fiber intake support health despite lacking energy?",
        "answer": "Aids digestion and nutrient absorption (implied by indigestibility)."
      },
      {
        "question": "How are vitamins classified? Give examples of each type.",
        "answer": "Water-soluble: Vitamins C & B\nFat-soluble: Vitamins A, D, E, K",
        "answerImg": "./images/Screenshot-2025-05-21-184349.png"
      },
      {
        "question": "Why are vitamins essential?",
        "answer": "They enable critical chemical reactions in the body."
      },
      {
        "question": "How do humans obtain minerals?",
        "answer": "Directly from plants/fruits or indirectly via animal products."
      },
      {
        "question": "Why is calcium important?",
        "answer": "Builds bones and teeth."
      },
      {
        "question": "Identify functions of iron and magnesium.",
        "answer": "Iron: Supports red blood cell function\nMagnesium: Essential for muscle function"
      },
      {
        "question": "What percentage of body weight is water?",
        "answer": "65-75%"
      },
      {
        "question": "List 3 roles of water in the body.",
        "answer": "Medium for nutrient breakdown\nMain component of blood/fluids\nTransports nutrients",
        "answerImg": "./images/Screenshot-2025-05-21-184349.png"
      },
      {
        "question": "What is the recommended daily water intake?",
        "answer": "6-8 glasses (varies by age/weight)."
      },
      {
        "question": "What 3 criteria define a balanced diet?",
        "answer": "Meets energy needs\nProvides all essential nutrients\nIncludes nutrient variety"
      },
      {
        "question": "Why must food intake match energy use?",
        "answer": "To maintain health and prevent imbalances."
      },
      {
        "question": "Contrast vitamins and minerals in origin and requirement.",
        "answer": "Vitamins: Made by living things; needed in small amounts\nMinerals: From soil; required for structural/functional roles"
      },
      {
        "question": "Why is water \"the most important nutrient\"?",
        "answer": "All vital processes (e.g., digestion, transport) depend on it."
      },
      {
        "question": "According to Figure 8, how should a healthy diet be divided?",
        "answer": "50% fruits & vegetables\n50% grains & proteins",
        "questionImg": "./images/Screenshot-2025-05-21-184407.png"
      },
      {
        "question": "Which food class should dominate daily intake per Figure 8?",
        "answer": "Fruits and vegetables (50% of diet)."
      },
      {
        "question": "Compare healthy vs. limited fats with examples.",
        "answer": "Healthy: Olive oil\nLimit: Butter (saturated fat)"
      },
      {
        "question": "What's better: whole grains or refined grains? Give examples.",
        "answer": "Whole grains (e.g., brown rice) > refined grains (e.g., white bread)."
      },
      {
        "question": "List 3 healthy protein sources to prioritize.",
        "answer": "Fish, lean meats, beans, nuts."
      },
      {
        "question": "What are the rules for sugars and dairy?",
        "answer": "Minimize added sugars\nLimit dairy to 1 serving/day"
      },
      {
        "question": "What daily Calorie intake does Table 2 assume?",
        "answer": "2,000 Calories.",
        "questionImg": "./images/Screenshot-2025-05-21-184407.png"
      },
      {
        "question": "Using Table 2, what's the recommended daily:\na) Carbohydrate intake?\nb) Saturated fat limit?",
        "answer": "a) 270g carbs\nb) <20g saturated fat"
      },
      {
        "question": "How much fiber is advised daily per Table 2?",
        "answer": ">25g."
      },
      {
        "question": "How much daily physical activity is recommended?",
        "answer": "At least 1 hour."
      },
      {
        "question": "Why might fruits/vegetables and grains/proteins share equal plate space?",
        "answer": "Ensures balanced micronutrient (vitamins/minerals) and macronutrient (energy) intake."
      },
      {
        "question": "Could someone need more than 2,000 Calories/day? What would adjust?",
        "answer": "Yes—active teens/adults need more; macros scale up proportionally (e.g., 3,000 Cal = 1.5x all values)."
      },
      {
        "question": "Why are food labels useful?",
        "answer": "They help evaluate/comparе nutritional value per serving and show:\nCalories/nutrients per serving\nServings per container"
      },
      {
        "question": "If daily protein need = 50g (from Table 2), how many servings of this product (24g protein/serving) meet that need?",
        "answer": "~2 servings (48g).",
        "questionImg": "./images/Screenshot-2025-05-21-184428.png"
      },
      {
        "question": "What does \"15g Total Fat = 21% DV\" imply?",
        "answer": "One serving provides 21% of the recommended daily fat intake (based on 2,000 Cal)."
      },
      {
        "question": "If you eat the entire container (4 servings), how many calories do you consume?",
        "answer": "310 Cal × 4 = 1,240 Calories."
      },
      {
        "question": "What is obesity, and what health risks does it pose?",
        "answer": "Excess fat accumulation harming health (e.g., cardiovascular diseases)."
      },
      {
        "question": "What happens with severe Caloric deficiency?",
        "answer": "Extreme malnutrition → starvation."
      },
      {
        "question": "How is BMI calculated? Write the formula.",
        "answer": "BMI = weight (kg) / height² (m)"
      },
      {
        "question": "Calculate BMI for a person who is 1.75m tall and weighs 68kg.",
        "answer": "BMI = 68 / 1.75² = 22.2"
      },
      {
        "question": "Why might %DV be inaccurate for some people?",
        "answer": "Based on 2,000 Cal; needs vary by age/activity (e.g., athletes need more)."
      },
      {
        "question": "Why can't BMI alone determine health?",
        "answer": "Doesn't distinguish fat/muscle (e.g., athletes may have high BMI but low fat)."
      },
      {
        "question": "If a food has 10g sugar/serving and you eat 3 servings, what %DV of \"Total Sugars\" (90g max) is that?",
        "answer": "(30g / 90g) × 100 = 33% DV"
      },
      {
        "question": "Which is worse per serving: 5g saturated fat or 3g trans fat? Why?",
        "answer": "Trans fat (no safe intake; saturated fat has 20g daily limit)."
      },
      {
        "question": "Why is vitamin C considered an essential nutrient?",
        "answer": "The body cannot produce or store it; must be obtained daily from food."
      },
      {
        "question": "List 3 vital roles of vitamin C in the body.",
        "answer": "Wound healing\nMaintenance of cartilage, bones, and teeth\nTissue repair and growth"
      },
      {
        "question": "What health problems can vitamin C deficiency cause?",
        "answer": "Anemia\nReduced infection resistance\nGingivitis (gum inflammation)"
      },
      {
        "question": "What defines an \"essential nutrient\"?",
        "answer": "Nutrients the body cannot produce; must be obtained through diet."
      },
      {
        "question": "Why do water-soluble vitamins (like vitamin C) require daily intake?",
        "answer": "They are not stored in the body; excess is excreted."
      },
      {
        "question": "What are the three main functions of the digestive system?",
        "answer": "Breakdown of food\nAbsorption of nutrients into blood\nElimination of waste"
      },
      {
        "question": "List the 5 main organs of the digestive tract.",
        "answer": "Mouth → Esophagus → Stomach → Small intestine → Large intestine",
        "answerImg": "./images/Screenshot-2025-05-21-184521.png"
      },
      {
        "question": "Compare mechanical and chemical digestion. Where does each begin?",
        "answer": "Mechanical: Physical breakdown (teeth cutting/grinding in mouth)\nChemical: Enzymatic breakdown (e.g., amylase in saliva)"
      },
      {
        "question": "Match these enzymes to their roles:\na) Amylase\nb) Pepsin\nc) Lipase",
        "answer": "a) Carbohydrate breakdown (mouth/small intestine)\nb) Protein digestion (stomach)\nc) Fat breakdown (small intestine)"
      },
      {
        "question": "What two digestive processes begin in the mouth?",
        "answer": "Mechanical digestion (chewing)\nChemical digestion (salivary amylase acts on carbs)"
      },
      {
        "question": "How does food move through the esophagus?",
        "answer": "Via peristalsis (wave-like muscle contractions)"
      },
      {
        "question": "Why is pepsinogen (not pepsin) secreted in the stomach?",
        "answer": "Pepsinogen is inactive; converts to pepsin (active enzyme) in acidic stomach pH."
      },
      {
        "question": "How do villi enhance nutrient absorption in the small intestine?",
        "answer": "Increase surface area for nutrient uptake into bloodstream."
      },
      {
        "question": "What is bile's primary function in digestion?",
        "answer": "Emulsifies fats (breaks them into smaller droplets for lipase action)."
      },
      {
        "question": "If the esophagus is blocked, which digestive functions are compromised?",
        "answer": "All downstream processes (stomach/small intestine digestion/absorption)."
      },
      {
        "question": "Why can't pepsin digest fats or amylase digest proteins?",
        "answer": "Enzymes are substrate-specific (pepsin only cleaves peptide bonds)."
      },
      {
        "question": "What are the two stages of food digestion?",
        "answer": "Mechanical (physical breakdown) and chemical (enzymatic breakdown)."
      },
      {
        "question": "What is an enzyme, and why is it specific?",
        "answer": "A protein that speeds up reactions; each enzyme works on only one substrate (e.g., amylase only breaks down starch)."
      },
      {
        "question": "What does salivary amylase do to starch? Where does this occur?",
        "answer": "Breaks starch into maltose (glucose disaccharide) in the mouth."
      },
      {
        "question": "Why do enzymes work better on small food particles?",
        "answer": "Increased surface area for enzyme-substrate contact."
      },
      {
        "question": "How is a bolus created, and what is its purpose?",
        "answer": "Tongue mixes chewed food with saliva into a soft ball for easy swallowing."
      },
      {
        "question": "How does the epiglottis prevent choking?",
        "answer": "Flaps down to block the trachea during swallowing, directing food to the esophagus.",
        "questionImg": "./images/Screenshot-2025-05-21-184532.png"
      },
      {
        "question": "List 3 components of saliva and their functions.",
        "answer": "Water: Dissolves food\nMucus: Lubricates food\nAmylase: Begins starch digestion"
      },
      {
        "question": "If amylase is denatured, what digestive process is impaired?",
        "answer": "Starch → maltose conversion; may cause undigested carbs in gut."
      },
      {
        "question": "Why can't you breathe while swallowing?",
        "answer": "Epiglottis blocks trachea temporarily (see Figure 13 phases)."
      },
      {
        "question": "What is the primary role of the esophagus?",
        "answer": "To move food from the mouth to the stomach via peristalsis."
      },
      {
        "question": "Describe peristalsis and its importance.",
        "answer": "Wave-like muscle contractions that push food through the digestive tract; ensures one-directional movement."
      },
      {
        "question": "Describe the stomach's shape and muscular features.",
        "answer": "J-shaped organ with elastic walls and 3 layers of smooth muscles (allows stretching and mixing).",
        "answerImg": "./images/Screenshot-2025-05-21-184547.png"
      },
      {
        "question": "List 3 functions of the stomach.",
        "answer": "Temporary food storage\nMechanical mixing (churning)\nProtein digestion initiation"
      },
      {
        "question": "Where do stomach digestive juices come from?",
        "answer": "Glands in the stomach lining (see Figure 15)."
      },
      {
        "question": "Why does the stomach need three muscle layers?",
        "answer": "To enable powerful churning (mechanical digestion) in multiple directions."
      },
      {
        "question": "Why does the stomach release food slowly into the small intestine?",
        "answer": "To allow proper nutrient absorption and avoid overwhelming the intestine."
      },
      {
        "question": "What enables mechanical digestion in the stomach?",
        "answer": "Three layers of smooth muscles contract involuntarily to mash and mix food with gastric fluids."
      },
      {
        "question": "Why does the stomach need three muscle layers?",
        "answer": "To generate powerful, multidirectional contractions for thorough food mixing."
      },
      {
        "question": "What two key substances does gastric juice contain?",
        "answer": "Hydrochloric acid (HCl) and pepsinogen (inactive pepsin)."
      },
      {
        "question": "How is pepsin activated, and what does it digest?",
        "answer": "HCl converts pepsinogen → pepsin; pepsin breaks proteins into polypeptides."
      },
      {
        "question": "What is chyme, and how is it created?",
        "answer": "A soupy mixture formed when stomach muscles/enzymes liquefy food."
      },
      {
        "question": "Why doesn't the stomach digest itself?",
        "answer": "Thick mucus shields the stomach lining from HCl and pepsin."
      },
      {
        "question": "Why is pepsin initially secreted as pepsinogen?",
        "answer": "To prevent premature enzyme activity from damaging stomach glands."
      },
      {
        "question": "How does HCl's low pH aid digestion?",
        "answer": "Activates pepsin\nDissolves food minerals\nKills ingested pathogens"
      },
      {
        "question": "Could pepsin digest carbohydrates? Why?",
        "answer": "No—pepsin only cleaves peptide bonds in proteins (enzyme specificity)."
      },
      {
        "question": "What happens to chyme in the duodenum?",
        "answer": "Digestion continues with juices from pancreas/liver; acidic chyme is neutralized."
      },
      {
        "question": "How does the small intestine protect itself from stomach acid?",
        "answer": "Secretes mucus/water and receives sodium bicarbonate from pancreatic juice."
      },
      {
        "question": "How does bile aid fat digestion?",
        "answer": "Emulsifies fats → increases surface area for lipase action."
      },
      {
        "question": "Trace bile's path from production to use.",
        "answer": "Liver → gallbladder → small intestine via duct."
      },
      {
        "question": "Name the three major pancreatic enzymes and their substrates.",
        "answer": "Lipase: Fats → glycerol + fatty acids\nTrypsin: Proteins → amino acids\nPancreatic amylase: Starch → maltose"
      },
      {
        "question": "What are two functions of sodium bicarbonate?",
        "answer": "Neutralizes acidic chyme\nProtects duodenum from HCl/pepsin"
      },
      {
        "question": "Why must chyme be neutralized for pancreatic enzymes?",
        "answer": "Pancreatic enzymes (e.g., trypsin) require alkaline pH to function."
      },
      {
        "question": "How do bile and lipase work together?",
        "answer": "Bile emulsifies fats → lipase breaks them down efficiently."
      },
      {
        "question": "What is the primary function of the ileum?",
        "answer": "To digest remaining undigested molecules and absorb nutrients."
      },
      {
        "question": "How does the ileum's structure support absorption?",
        "answer": "Lined with thin cell layer (maximizes surface area for nutrient uptake)."
      },
      {
        "question": "What is a peptic ulcer?",
        "answer": "Painful sores in stomach/duodenum lining due to mucus layer damage."
      },
      {
        "question": "What are two causes of peptic ulcers?",
        "answer": "Helicobacter pylori infection\nAnti-inflammatory drug use",
        "answerImg": "./images/Screenshot 2025-05-21 184619.png"  // This format is correct
      },
      {
        "question": "List three symptoms of peptic ulcers.",
        "answer": "Burning abdominal pain\nNausea\nVomiting"
      },
      {
        "question": "Why does mucus erosion lead to ulcers?",
        "answer": "Exposes cells to stomach acid → tissue damage and sores and mucus also protects the stomach from acid."
      },
      {
        "question": "Why are duodenal ulcers more common than stomach ulcers?",
        "answer": "Duodenum lacks stomach's thick mucus protection against acid."
      },
      {
        "question": "What is one key advantage of villi in the small intestine?",
        "answer": "Increase surface area for faster nutrient absorption.",
        "answerImg": "./images/Screenshot-2025-05-21-184641.png"  // Update this format
      },
      {
        "question": "Describe how villi and microvilli enhance absorption.",
        "answer": "Villi: Fingerlike projections create ridges\nMicrovilli: Microscopic protrusions on villi cells → further increase surface area"
      },
      {
        "question": "How do nutrients enter the bloodstream?",
        "answer": "Pass from villi surface cells → blood vessels within each villus."
      },
      {
        "question": "What happens to absorbed glucose in cells?",
        "answer": "React with oxygen in cellular respiration to release energy."
      },
      {
        "question": "List two uses of absorbed fats.",
        "answer": "Build cell membranes\nEnergy production (reacts with oxygen)"
      },
      {
        "question": "How are amino acids used by cells?",
        "answer": "Synthesize proteins for cell structure/function."
      },
      {
        "question": "What do gut bacteria in the large intestine do?",
        "answer": "Break down undigested fibers → short fatty acids\nProduce vitamins (e.g., vitamin K)"
      },
      {
        "question": "What happens to water in the large intestine?",
        "answer": "Absorbed into bloodstream; remaining waste forms stool."
      },
      {
        "question": "What is diarrhea?",
        "answer": "Loose, watery stools due to reduced fluid absorption/increased secretion in large intestine."
      },
      {
        "question": "What are two common causes of diarrhea?",
        "answer": "Viral/bacterial intestinal infections\nParasite-contaminated food/water"
      },
      {
        "question": "Why would a smooth small intestine impair health?",
        "answer": "Reduced surface area → slower/less nutrient absorption → malnutrition."
      },
      {
        "question": "Why is hydration critical during diarrhea?",
        "answer": "Large intestine absorbs less water → risk of severe fluid loss."
      },
      {
        "question": "What are three ways the excretory system removes waste?",
        "answer": "Kidneys: Filter blood → urine\nLungs: Exhale CO₂ + water vapor\nSkin: Sweat (water/salt/heat)",
        "answerImg": "./images/Screenshot-2025-05-21-184725.png"
      },
      {
        "question": "Why is waste elimination vital?",
        "answer": "Maintains equilibrium (homeostasis) between nutrients used and wastes produced."
      },
      {
        "question": "What does sweat contain?",
        "answer": "Water, salt, and other wastes."
      },
      {
        "question": "How does sweating cool the body?",
        "answer": "Evaporation of sweat from skin removes heat."
      },
      {
        "question": "Why are kidneys called \"body filters\"?",
        "answer": "They continuously filter blood → remove wastes (urea) → return needed substances to blood."
      },
      {
        "question": "Trace the flow of urine from kidneys to excretion.",
        "answer": "Kidneys → ureters → bladder → urethra."
      },
      {
        "question": "How do lungs and skin complement kidney function?",
        "answer": "Lungs: Remove gaseous waste (CO₂)\nSkin: Eliminates heat/water/salts kidneys don't process"
      },
      {
        "question": "Why must kidneys filter blood continuously?",
        "answer": "To prevent toxin buildup (e.g., urea) that disrupts homeostasis."
      },
      {
        "question": "What percentage of blood enters the kidneys with each heartbeat? What wastes are removed?",
        "answer": "~20% via renal arteries; removes urea, water, and other wastes."
      },
      {
        "question": "What is urine composed of?",
        "answer": "Watery fluid containing urea and other waste molecules."
      },
      {
        "question": "Trace the route of waste from kidneys to excretion.",
        "answer": "Kidneys → ureters → bladder → urethra → outside body.",
        "questionImg": "./images/Screenshot-2025-05-21-184755.png"
      },
      {
        "question": "What is the role of ureters?",
        "answer": "Transport urine from kidneys to bladder."
      },
      {
        "question": "How much urine can the bladder store? How is it expelled?",
        "answer": "Up to 1 liter; muscular walls contract to push urine through urethra."
      },
      {
        "question": "How do kidney stones form?",
        "answer": "Aggregated crystals from filtered substances in kidneys."
      },
      {
        "question": "What are two signs of kidney stones?",
        "answer": "Severe pain and blood in urine."
      },
      {
        "question": "How are large kidney stones treated?",
        "answer": "Broken into smaller fragments by ultrasound for easier passage.",
        "answerImg": "./images/Screenshot-2025-05-21-184755.png"
      },
      {
        "question": "Why do large kidney stones cause severe pain?",
        "answer": "They obstruct ureters → urine backs up in kidneys → pressure/pain."
      },
      {
        "question": "Why must kidneys filter blood continuously?",
        "answer": "Prevents toxic buildup of urea/wastes in bloodstream."
      },
      {
        "question": "What is a nephron?",
        "answer": "The functional unit of the kidney; a tiny tube that filters blood to form urine."
      },
      {
        "question": "How does blood enter and exit the nephron?",
        "answer": "Enters: Via renal artery → capillaries in nephron\nExits: Filtered blood returns through renal vein"
      },
      {
        "question": "What does the nephron capsule do?",
        "answer": "Collects filtered materials (urea, water, glucose) from capillaries."
      },
      {
        "question": "What is the role of collecting ducts?",
        "answer": "Transport urine from nephrons → ureters → bladder."
      },
      {
        "question": "What happens to glucose and water in the nephron tube?",
        "answer": "Reabsorbed into the bloodstream (glucose entirely, water variably)."
      },
      {
        "question": "What remains to form urine after reabsorption?",
        "answer": "Urea, excess water, and other wastes."
      },
      {
        "question": "How does water availability affect nephron function?",
        "answer": "Excess water: Minimal reabsorption → dilute urine\nDehydration: Maximal reabsorption → concentrated urine"
      },
      {
        "question": "How do nephrons maintain blood glucose levels?",
        "answer": "Reabsorb 100% of filtered glucose to prevent energy loss."
      },
      {
        "question": "Why might kidney failure cause swelling (edema)?",
        "answer": "Impaired water/waste filtration → fluid retention in tissues."
      }    ],
    'chemistry': []
  },
  'math': {
    'algebra3': [
      {
        question: "Solve this quadratic equation:",
        questionImg: "./images/quadratic-formula.png",
        answer: "x = [-b ± √(b²-4ac)] / 2a (Quadratic Formula)"
      }
    ],
    'geometry2': [
      {
        question: "Calculate the area of this shape:",
        questionImg: "./images/triangle-area.png",
        answer: "Area = ½ × base × height (Triangle area formula)"
      }
    ]
  },
  'social-studies': {
    'social-studies': []
  },
  'computing': {
    'computing': []
  },
  'english': {
    'vocabulary': [{ question: "ferny", answer: "(adj.) overgrown with ferns (green plants with large leaves and no flowers)" },
{ question: "smote", answer: "(v.) hit with a strong blow" },
{ question: "leaf-fringed", answer: "(adj.) covered with leaves" },
{ question: "sill", answer: "(n.) a shelf below a window, either inside or outside a building" },
{ question: "perplexed", answer: "(adj.) confused; puzzled" },
{ question: "dwelt", answer: "(v.) lived in a place" },
{ question: "lone", answer: "(adj.) isolated; remote" },
{ question: "thronging", answer: "(v.) gathering or crowding together somewhere in very large numbers" },
{ question: "turf", answer: "(n.) grass and the upper layer of soil held together by roots" },
{ question: "stir", answer: "(n.) a slight physical movement" },
{ question: "surged", answer: "(v.) moved suddenly and powerfully" },
{ question: "plunging", answer: "(adj.) falling or dropping suddenly and rapidly" },
{ question: "hoofs", answer: "(n.) the hard part of an animal’s foot, especially a horse" },
{ question: "indolent", answer: "(adj.) lazy or lethargic" },
{ question: "averse", answer: "(adj.) having strong feelings of opposition" },
{ question: "correspondence", answer: "(n.) communication by exchanging letters" },
{ question: "obliges", answer: "(v.) to obligate or require action" },
{ question: "charmed", answer: "(adj.) very pleased" },
{ question: "neglect", answer: "(n.) carelessness; disregard" },
{ question: "voluntarily", answer: "(adj.) optional; done of one’s own free will" },
{ question: "bargain", answer: "(n.) agreement or contract as a result of negotiation" },
{ question: "vexation", answer: "(n.) irritation" },
{ question: "chagrin", answer: "(n.) humiliation; annoyance" },
{ question: "impression", answer: "(n.) influence or effect" },
{ question: "tempted", answer: "(v.) to have an urge or inclination to do something" },
{ question: "ambitious", answer: "(adj.) having the desire to be powerful, famous, or successful" },
{ question: "repose", answer: "(n.) a state of rest after hard work" },
{ question: "liberty", answer: "(n.) freedom from restraint" },
{ question: "virtue", answer: "(n.) morally good behavior" },
{ question: "attain", answer: "(v.) to achieve or obtain" },
{ question: "bustles", answer: "(n.) noisy or energetic activity" },
{ question: "esteem", answer: "(n.) high regard" },
{ question: "benevolent", answer: "(adj.) well-meaning and kind" },
{ question: "laudable", answer: "(adj.) worthy of praise" },
{ question: "pursuit", answer: "(n.) the act of following or chasing someone or something" },
{ question: "contracts", answer: "(v.) to bring on oneself" },
{ question: "brute", answer: "(n.) physically cruel or savage" },
{ question: "conceive", answer: "(v.) form an idea; imagine" },
{ question: "miseries", answer: "(n.) a state of great unhappiness" },
{ question: "auction", answer: "(n.) a sale to the highest bidder" },
{ question: "unalterable", answer: "(adj.) not capable of being changed" },
{ question: "heinous", answer: "(adj.) awful and shocking; evil" },
{ question: "misdemeanors", answer: "(n.) crimes or wrongdoings that are minor" },
{ question: "commissioner", answer: "(n.) an important official chosen as a representative of governmental authority" },
{ question: "treaty", answer: "(n.) a formal written agreement between countries or political authorities" },
{ question: "grossly", answer: "(adv.) extremely; greatly" },
{ question: "conduct", answer: "(n.) behavior" },
{ question: "manners", answer: "(n.) ways people behave towards each other" },
{ question: "fort", answer: "(n.) a fortified military base" },
{ question: "rapids", answer: "(n.) fast-flowing, turbulent parts of a river" },
{ question: "particular", answer: "(adj.) very attentive to accuracy; meticulous" },
{ question: "tributary", answer: "(n.) a river or stream flowing into a larger river" },
{ question: "bluff", answer: "(n.) a steep cliff or bank" },
{ question: "adjoined", answer: "(v.) were very near or joined with" },
{ question: "undisputed", answer: "(adj.) not called in question; accepted" },
{ question: "prostrate", answer: "(adj.) lying face down on the ground" },
{ question: "digressing", answer: "(v.) moving away temporarily from the main topic" },
{ question: "bartering", answer: "(v.) trading goods/services without money" },
{ question: "goods", answer: "(n.) items to be bought or sold" },
{ question: "kegs", answer: "(n.) small barrels for storing drinks" },
{ question: "provisions", answer: "(n.) essential supplies (food, equipment)" },
{ question: "gaudy", answer: "(adj.) too bright and unpleasantly decorated" },
{ question: "flint", answer: "(n.) a stone that produces sparks with steel" },
{ question: "retires", answer: "(v.) exits a room or place" },
{ question: "courting", answer: "(adj.) romantic; with intention of marrying" },
{ question: "ascertain", answer: "(v.) confirm something as certain" },
{ question: "indiscretion", answer: "(n.) risky or irresponsible behavior" },
{ question: "exploits", answer: "(n.) brave or daring acts" },
{ question: "hoed", answer: "(v.) dug up using a garden hoe" },
{ question: "retaliate", answer: "(v.) get revenge; hurt someone who harmed you" },
{ question: "instigated", answer: "(v.) caused to begin; initiated" },
{ question: "produce", answer: "(n.) agricultural products" },
{ question: "consent", answer: "(v.) agree to do something" },
{ question: "ripe", answer: "(adj.) fully developed and ready to eat" },
{ question: "roasting ears", answer: "(n.) young corn ears suitable for roasting" },
{ question: "glimmered", answer: "(v.) to shine faintly" },
{ question: "plodding", answer: "(adj.) slow-moving and unexciting" },
{ question: "consolation", answer: "(n.) comfort received by someone" },
{ question: "pranks", answer: "(n.) practical jokes" },
{ question: "birch", answer: "(n.) a type of tree with thin, peeling bark" },
{ question: "browse", answer: "(v.) to feed on leaves" },
{ question: "torment", answer: "(n.) a cause of suffering" },
{ question: "lingering", answer: "(v.) to stay in one place longer than necessary" },
{ question: "loitered", answer: "(v.) to stand or wait around without purpose" },
{ question: "manufacturing", answer: "(n.) producing goods in large numbers" },
{ question: "wistful", answer: "(adj.) nostalgic" },
{ question: "brook", answer: "(n.) a small stream" },
{ question: "pasture", answer: "(n.) land covered with grass for grazing" },
{ question: "waded", answer: "(v.) to walk with effort through water" },
{ question: "chase", answer: "(v.) to pursue to catch someone/something" },
{ question: "discreetly", answer: "(adv.) carefully to avoid attention" },
{ question: "gallantly", answer: "(adv.) in a brave, heroic manner" },
{ question: "gunning", answer: "(v.) to shoot" },
{ question: "trial", answer: "(n.) someone/something that tests patience" },
{ question: "tucked away", answer: "(v.) to hide in a safe place" },
{ question: "awed", answer: "(adj.) filled with wonder" },
{ question: "gravity", answer: "(n.) extreme importance" },
{ question: "lumpy", answer: "(adj.) covered with bumps" },
{ question: "bade", answer: "(v.) to utter a greeting" },
{ question: "fare", answer: "(v.) to travel" },
{ question: "primitive", answer: "(adj.) very basic and unsophisticated" },
{ question: "dreary", answer: "(adj.) depressingly dull" },
{ question: "squalor", answer: "(n.) very bad and dirty conditions" },
{ question: "thrift", answer: "(n.) using money carefully" },
{ question: "quaint", answer: "(adj.) pleasantly unusual" },
{ question: "tame", answer: "(v.) to domesticate" },
{ question: "scanted", answer: "(v.) to provide insufficiently" },
{ question: "hitch", answer: "(v.) to connect or get along" },
{ question: "demure", answer: "(adj.) reserved and shy" },
{ question: "preserved", answer: "(adj.) kept in good condition" },
{ question: "snared", answer: "(v.) to trap an animal" },
{ question: "hoptoad", answer: "(n.) a type of toad" },
{ question: "queer", answer: "(adj.) strange; odd" },
{ question: "marshes", answer: "(n.) wet lands in all seasons" },
{ question: "migrating", answer: "(v.) to move from one region to another" },
{ question: "hindered", answer: "(v.) to obstruct" },
{ question: "spectators", answer: "(n.) watchers of an event" },
{ question: "hovered", answer: "(v.) to linger closely" },
{ question: "troubled", answer: "(adj.) worried or anxious" },
{ question: "bough", answer: "(n.) a main branch of a tree" },
{ question: "waned", answer: "(v.) to decrease; disappear" },
{ question: "premonition", answer: "(n.) a feeling something will happen" },
{ question: "traversed", answer: "(v.) to cross from one place to another" },
{ question: "elusive", answer: "(adj.) difficult to catch" },
{ question: "felled", answer: "(v.) to cut down (a tree)" },
{ question: "sturdy", answer: "(adj.) strong and solid" },
{ question: "wistfully", answer: "(adv.) with longing" },
{ question: "fancied", answer: "(adj.) imagined to be true" },
{ question: "drowsy", answer: "(adj.) tired and almost asleep" },
{ question: "jarred", answer: "(v.) to damage" },
{ question: "mount", answer: "(v.) to climb" },
{ question: "tingling", answer: "(adj.) causing a prickling sensation" },
{ question: "dew", answer: "(n.) tiny water drops on cool surfaces" },
{ question: "fluttered off", answer: "(v.) to fly rapidly" },
{ question: "pettishly", answer: "(adv.) angrily about trivial matters" },
{ question: "chafed", answer: "(v.) to become sore from rubbing" },
{ question: "enterprise", answer: "(n.) bold pursuit" },
{ question: "mainmast", answer: "(n.) chief structure of a ship" },
{ question: "ponderous", answer: "(adj.) slow/clumsy due to weight" },
{ question: "wending", answer: "(v.) to move in a specific direction" },
{ question: "thrushes", answer: "(n.) songbirds" },
{ question: "steeples", answer: "(n.) church towers" },
{ question: "pageant", answer: "(n.) a glamorous event" },
{ question: "giddy", answer: "(adj.) causing dizziness" },
{ question: "perched", answer: "(v.) to rest on something" },
{ question: "vexed", answer: "(adj.) frustrated and annoyed" },
{ question: "wavers", answer: "(v.) to move quiveringly" },
{ question: "perilous", answer: "(adj.) full of danger" },
{ question: "frock", answer: "(n.) a woman’s dress" },
{ question: "smeared", answer: "(v.) to cover with stains" },
{ question: "rebukes", answer: "(v.) to express disapproval" },
{ question: "punctilious", answer: "(adj.) concerned about precise accordance with details" },
{ question: "patriotism", answer: "(n.) love for one's country" },
{ question: "fern", answer: "(n.) plant with large, delicate leaves and no flowers" },
{ question: "scudded", answer: "(v.) moved quickly" },
{ question: "mossy", answer: "(adj.) covered with moss" },
{ question: "knolls", answer: "(n.) small round hills" },
{ question: "wraps", answer: "(n.) outer garments like coats or shawls" },
{ question: "somber", answer: "(adj.) dark and gloomy" },
{ question: "peal", answer: "(n.) loud sound or series of sounds" },
{ question: "tottered", answer: "(v.) walked unsteadily" },
{ question: "dogmatic", answer: "(adj.) expressing opinions as certainly correct" },
{ question: "permanence", answer: "(n.) state of lasting forever" },
{ question: "buckwheat", answer: "(n.) plant with seeds used for flour" },
{ question: "drawl", answer: "(n.) slow way of speaking with long vowels" },
{ question: "alluded", answer: "(v.) hinted at indirectly" },
{ question: "clank", answer: "(n.) sharp metallic ringing sound" },
{ question: "oblong", answer: "(adj.) longer in one direction" },
{ question: "wan", answer: "(adj.) dim, faint" },
{ question: "coils", answer: "(n.) series of loops" },
{ question: "eminent", answer: "(adj.) successful and respected" },
{ question: "indignation", answer: "(n.) anger at something unjust" },
{ question: "uttering", answer: "(v.) sending forth sounds" },
{ question: "hollow", answer: "(adj.) not sincere" },
{ question: "groans", answer: "(n.) low moaning sounds" },
{ question: "acute", answer: "(adj.) severe, sharp" },
{ question: "agony", answer: "(n.) great physical/emotional pain" },
{ question: "pellets", answer: "(n.) small hard round pieces" },
{ question: "vaulted", answer: "(adj.) built in an arch shape" },
{ question: "frilled", answer: "(adj.) with pleated fabric edging" },
{ question: "grudge", answer: "(n.) lasting anger" },
{ question: "foolhardy", answer: "(adj.) foolishly bold" },
{ question: "abject", answer: "(adj.) very severe" },
{ question: "clammy", answer: "(adj.) unpleasantly wet/cold" },
{ question: "hissed", answer: "(v.) angry whisper" },
{ question: "moaning", answer: "(v.) uttering low sounds" },
{ question: "piteous", answer: "(adj.) deserving pity" },
{ question: "specter", answer: "(n.) ghost" },
{ question: "carven", answer: "(adj.) ornamented by carving" },
{ question: "placard", answer: "(n.) large notice/poster" },
{ question: "grapple", answer: "(v.) seize and struggle" },
{ question: "chivalry", answer: "(n.) medieval knightly values" },
{ question: "phantasmic", answer: "(adj.) ghostly" },
{ question: "oriel window", answer: "(n.) projecting bay window" },
{ question: "conscientious", answer: "(adj.) meticulous" },
{ question: "wainscoting", answer: "(n.) wooden wall panels" },
{ question: "hemmed", answer: "(v.) surrounded restrictively" },
{ question: "paralytic", answer: "(adj.) causing paralysis" },
{ question: "canopy", answer: "(n.) cloth cover above sacred objects" },
{ question: "hedge", answer: "(n.) boundary of shrubs" },
{ question: "absurd", answer: "(adj.) ridiculously unreasonable" },
{ question: "petulantly", answer: "(adv.) irritably" },
{ question: "abstract", answer: "(adj.) relating to general ideas" },
{ question: "ethics", answer: "(n.) moral principles" },
{ question: "starched", answer: "(v.) made clothing stiff" },
{ question: "meekly", answer: "(adv.) submissively" },
{ question: "nightingale", answer: "(n.) songbird" },
{ question: "wrung", answer: "(v.) twisted hands in anguish" },
{ question: "falter", answer: "(v.) stumble" },
{ question: "dusky", answer: "(adj.) somewhat dark" },
{ question: "goggle", answer: "(adj.) staring" },
{ question: "cavern", answer: "(n.) large cave" },
{ question: "frantic", answer: "(adj.) fast and nervous" },
{ question: "scuffle", answer: "(n.) short fight" },
{ question: "scour", answer: "(v.) clear a region" },
{ question: "awestruck", answer: "(adj.) filled with wonder" },
{ question: "casket", answer: "(n.) jewelry box" },
{ question: "smothered", answer: "(v.) covered thickly" },
{ question: "hearse", answer: "(n.) coffin vehicle" },
{ question: "tuft", answer: "(n.) decorative thread bunch" },
{ question: "leaden", answer: "(adj.) lacking spirit" },
{ question: "scruples", answer: "(n.) ethical principles" },
{ question: "rendered", answer: "(v.) performed a service" },
{ question: "pluck", answer: "(n.) determination" }],
    'grammar': []
  }
};