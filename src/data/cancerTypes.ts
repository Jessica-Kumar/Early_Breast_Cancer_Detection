export interface CancerType {
  name: string;
  category: string;
  description: string;
  symptoms: string[];
  riskFactors: string[];
  prevention: string;
  imageUrl: string;
}

export const cancerTypes: CancerType[] = [
  {
    name: "Breast Cancer",
    category: "common",
    description: "Breast cancer forms in the cells of the breasts. It is the most common cancer diagnosed in women globally.",
    symptoms: [
      "New lump in the breast or underarm",
      "Thickening or swelling of part of the breast",
      "Irritation or dimpling of breast skin",
      "Redness or flaky skin in the nipple area",
      "Nipple discharge other than breast milk",
      "Any change in the size or shape of the breast"
    ],
    riskFactors: [
      "Being female",
      "Increasing age",
      "Personal or family history of breast cancer",
      "Inherited genes (BRCA1 and BRCA2)",
      "Radiation exposure",
      "Obesity",
      "Beginning your period at a younger age",
      "Starting menopause at an older age"
    ],
    prevention: "Regular screening mammograms, maintaining a healthy weight, regular physical activity, limiting alcohol consumption, and breastfeeding can help reduce the risk of breast cancer.",
    imageUrl: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Lung Cancer",
    category: "common",
    description: "Lung cancer is a type of cancer that begins in the lungs. It is the leading cause of cancer deaths worldwide.",
    symptoms: [
      "Persistent cough",
      "Coughing up blood",
      "Chest pain",
      "Hoarseness",
      "Weight loss",
      "Shortness of breath",
      "Feeling tired or weak"
    ],
    riskFactors: [
      "Smoking",
      "Exposure to secondhand smoke",
      "Previous radiation therapy",
      "Exposure to radon gas",
      "Exposure to asbestos and other carcinogens",
      "Family history of lung cancer"
    ],
    prevention: "Not smoking or quitting smoking is the most important measure to prevent lung cancer. Avoiding secondhand smoke and testing your home for radon can help reduce risk.",
    imageUrl: "https://images.pexels.com/photos/8460054/pexels-photo-8460054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Colorectal Cancer",
    category: "digestive",
    description: "Colorectal cancer starts in the colon or rectum. It's often found in adults older than 50 years.",
    symptoms: [
      "Change in bowel habits",
      "Blood in stool",
      "Diarrhea, constipation, or feeling that the bowel does not empty completely",
      "Abdominal pain, aches, or cramps that don't go away",
      "Unexplained weight loss"
    ],
    riskFactors: [
      "Age over 50",
      "Personal or family history of colorectal polyps or cancer",
      "Inflammatory bowel disease",
      "Low-fiber, high-fat diet",
      "Sedentary lifestyle",
      "Diabetes",
      "Obesity",
      "Smoking",
      "Heavy alcohol use"
    ],
    prevention: "Regular screening tests, maintaining a healthy weight, regular physical activity, limiting red meat consumption, and eating a diet rich in fruits, vegetables, and whole grains can help reduce risk.",
    imageUrl: "https://images.pexels.com/photos/3376788/pexels-photo-3376788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Prostate Cancer",
    category: "reproductive",
    description: "Prostate cancer is one of the most common types of cancer in men. It usually grows slowly and initially remains confined to the prostate gland.",
    symptoms: [
      "Trouble urinating",
      "Decreased force in the stream of urine",
      "Blood in semen",
      "Discomfort in the pelvic area",
      "Bone pain",
      "Erectile dysfunction"
    ],
    riskFactors: [
      "Age (risk increases with age)",
      "Race (more common in Black men)",
      "Family history",
      "Obesity",
      "Genetic mutations"
    ],
    prevention: "Maintaining a healthy weight, regular exercise, and eating a diet rich in fruits and vegetables may reduce risk. Regular screenings are important for early detection.",
    imageUrl: "https://images.pexels.com/photos/8460041/pexels-photo-8460041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Skin Cancer",
    category: "common",
    description: "Skin cancer is the abnormal growth of skin cells, most often developing on skin exposed to the sun.",
    symptoms: [
      "A new growth or sore that doesn't heal",
      "A change in an existing mole",
      "A flat lesion with a scaly, crusted surface",
      "A pearly or waxy bump",
      "A red nodule"
    ],
    riskFactors: [
      "Fair skin",
      "History of sunburns",
      "Excessive sun exposure",
      "Sunny or high-altitude climates",
      "Moles",
      "Family history of skin cancer",
      "Personal history of skin cancer",
      "Weakened immune system"
    ],
    prevention: "Limit or avoid exposure to UV radiation. Wear sunscreen year-round. Wear protective clothing. Avoid tanning beds. Check your skin regularly for changes.",
    imageUrl: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Leukemia",
    category: "blood",
    description: "Leukemia is cancer of the body's blood-forming tissues, including the bone marrow and lymphatic system.",
    symptoms: [
      "Fever or chills",
      "Persistent fatigue, weakness",
      "Frequent or severe infections",
      "Losing weight without trying",
      "Swollen lymph nodes",
      "Enlarged liver or spleen",
      "Easy bleeding or bruising",
      "Recurrent nosebleeds",
      "Tiny red spots in your skin (petechiae)",
      "Excessive sweating, especially at night",
      "Bone pain or tenderness"
    ],
    riskFactors: [
      "Previous cancer treatment",
      "Genetic disorders",
      "Exposure to certain chemicals",
      "Smoking",
      "Family history of leukemia"
    ],
    prevention: "While there's no known way to prevent most leukemias, avoiding smoking and exposure to chemicals like benzene may help reduce risk.",
    imageUrl: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Cervical Cancer",
    category: "reproductive",
    description: "Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina.",
    symptoms: [
      "Vaginal bleeding after intercourse, between periods or after menopause",
      "Watery, bloody vaginal discharge that may be heavy and have a foul odor",
      "Pelvic pain or pain during intercourse"
    ],
    riskFactors: [
      "HPV infection",
      "Having many sexual partners",
      "Early sexual activity",
      "Smoking",
      "Weakened immune system",
      "Long-term use of birth control pills",
      "Having many children"
    ],
    prevention: "HPV vaccination, regular Pap tests, practicing safe sex, and not smoking can help prevent cervical cancer.",
    imageUrl: "https://images.pexels.com/photos/7089413/pexels-photo-7089413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Lymphoma",
    category: "blood",
    description: "Lymphoma is a cancer of the lymphatic system, which is part of the body's germ-fighting network.",
    symptoms: [
      "Painless swelling of lymph nodes in your neck, armpits or groin",
      "Persistent fatigue",
      "Fever",
      "Night sweats",
      "Shortness of breath",
      "Unexplained weight loss",
      "Itchy skin"
    ],
    riskFactors: [
      "Age (some types more common in young adults, others in people over 55)",
      "Weakened immune system",
      "Certain infections (such as Epstein-Barr virus)",
      "Exposure to certain chemicals"
    ],
    prevention: "There is no proven way to prevent lymphoma, but avoiding risk factors such as HIV infection may help reduce risk.",
    imageUrl: "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];