
// ফেইজ এ ক্যাটাগরির ডাটা লোড করলাম
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}

// এখান থেকে বাটনে ডায়নামিকাল ভাবে ডাটা লোড করবো

function displayCategories(categories) {
  // এখানে যে কটেইনারে ডাটা ডায়নামিক ভাবে লোড করবো তাকে আইডি এর মাধমে ধরলাম।
  const categoriesContainer = document.getElementById("categoriesContainer");
  //  এবার একটা লুপ অপারেশনের মাধ্যমে অ্যারে এর সব ডাটা একটা একটা করে ধরবো।
  for (let categorie of categories) {
    // এবার প্রতিটা সিঙ্গাল ডাটাকে একটা নতুন ডিভএর মধ্যে জমা করবো।
    const categorieDiv = document.createElement("div");
    // এবার এই ডিভের মধ্যে একটা ইনার html বানাবো। ও ডায়নামিক ভাবে সিঙ্গাল ডাটা পাঠাবো।
    categorieDiv.innerHTML = `
    <button class="btn btn-sm btn hover:bg-[#FF1F3D] hover:text-white">${categorie.category}</button>`;
    // এবং শেষে তাকে তার পিতার সংসারে পাঠিয়ে দেবো।
    categoriesContainer.append(categorieDiv);
    
  }
}

loadCategories();
