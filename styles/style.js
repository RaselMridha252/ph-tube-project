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
// ------------------------------------------------------------------

// ভিডিও সেকসন
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos#")
    .then((res) => res.json())
    .then((date) => videoCategories(date.videos));
};

const videoCategories = (videos) => {
  const videoContainer = document.getElementById("videoContainer");
  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
                <figure class="relative">
                  <img class="w-full h-[150px] object-cover" src="${video.thumbnail}"/>
                    <span class="absolute bottom-2 right-2 bg-[#171717] text-white text-sm font-normal p-2 rounded-md">${video.others.posted_date}</span>
                </figure>
                <div class=" flex gap-3">
                   <div class="py-2">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                   </div> 
                  <div>
                    <h2 class="font-bold text-base">${video.title}</h2>
                    <p>${video.authors[0].profile_name}</p>
                    <p>${video.others.views} views</p>
                  </div>
                </div>
              </div>
    `;
    videoContainer.append(videoCard);
  });
};

loadVideo();

loadCategories();

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "${video.others.views}": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }
