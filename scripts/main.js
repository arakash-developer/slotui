// Navbar
let navbarButton = document.querySelector(".navabar_toggler");
let navbarCollapse = document.querySelector(".navbar_collapse");
let navbarClose = document.querySelector(".navbar_collapse .close");
let navbarLinks = document.querySelectorAll(".navbar_collapse .nav-link");
navbarButton.addEventListener("click", function () {
  navbarCollapse.classList.toggle("showNav");
  navbarButton.classList.toggle("show");
});
navbarClose.addEventListener("click", function () {
  navbarCollapse.classList.remove("showNav");
  navbarButton.classList.remove("show");
});

navbarLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navbarCollapse.classList.remove("showNav");
    navbarButton.classList.remove("show");
  });
});
//End Navbar

// Who Is For

const AllwhoisforButton = document.querySelectorAll(
  ".whoisfor .whoisfor_left .whoisfor_left_inner"
);
const whoisforRightImage = document.querySelector(
  ".whoisfor .whoisfor_right img"
);
AllwhoisforButton.forEach((item) => {
  item.addEventListener("click", () => {
    let data = item.getAttribute("data");
    whoisforRightImage.setAttribute(
      "src",
      `./assets/whoisfor/whoisfor${data ? data : 1}.png`
    );
    AllwhoisforButton.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// End Who Is For

//Faq
const AllfaqButton = document.querySelectorAll(".faq .faq_inner .item");
const faqButton = document.querySelector(".faq .faq_inner .item");
window.addEventListener("load", () => {
  faqButton.classList.add("active");
});
AllfaqButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Testimonial
const testimonialContainer = document.querySelector(".testimonial_container");
const loadmorebtn = document.querySelector(".load_more");
const loadmorebtnInner = document.querySelector(".loadmorebtnInner");
let reviews = [
  {
    id: 1,
    review: "5",
    text: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
    image: "./assets/testimonial/avatar1.png",
    author: "X_AE_A-13",
    author_title: "Product Designer, slothUI",
  },
  {
    id: 2,
    review: "3.5",
    text: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
    image: "./assets/testimonial/avatar4.png",
    author: "Oarack Babama",
    author_title: "Former President of US",
  },
  {
    id: 3,
    review: "2.5",
    text: "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
    image: "./assets/testimonial/avatar7.png",
    author: "Boe Jiden",
    author_title: "Former President Of Canada",
  },
  {
    id: 4,
    review: "3.5",
    text: "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
    image: "./assets/testimonial/avatar2.png",
    author: "Azunyan U. Wu",
    author_title: "CEO, nextlife.ai",
  },
  {
    id: 5,
    review: "4.5",
    text: "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
    image: "./assets/testimonial/avatar5.png",
    author: "Saylor Twift",
    author_title: "Famous Singer",
  },
  {
    id: 6,
    review: "5",
    text: " Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
    image: "./assets/testimonial/avatar8.png",
    author: "Vermillion D. Gray",
    author_title: "CEO, hacklife.ai",
  },
  {
    id: 7,
    review: "4",
    text: "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi. ",
    image: "./assets/testimonial/avatar3.png",
    author: "Mechatronics Yi",
    author_title: "CTO, fin4win.ai",
  },
  {
    id: 8,
    review: "3.5",
    text: "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
    image: "./assets/testimonial/avatar6.png",
    author: "Asuna Yuuki",
    author_title: "Virtual Swordsman",
  },
  {
    id: 9,
    review: "3.5",
    text: "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
    image: "./assets/testimonial/avatar9.png",
    author: "Zuckman Wu",
    author_title: "CEO, tech4life.ai",
  },
];

// loadmore function
let currentpage = 0;
let loadmore = (itemperpage = 3) => {
  let displayperdata = reviews.slice(currentpage, currentpage + itemperpage);
  displayperdata.forEach((item) => {
    let div = document.createElement("div");
    // div.classList.add("testimonial_box");
    div.innerHTML = `
     <div class="testimonial_inner flex flex-col">
    <div class="review_box">
              <div class="icons flex items-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="review_text">
              ${item.text}
              </p>
              <div class="flex avatar_details items-center">
                <img src=${item.image} alt="" />
                <div class="avatar_info">
                  <h3>${item.author}</h3>
                  <p>${item.author_title}</p>
                </div>
              </div>
            </div>
            </div>
`;

    testimonialContainer.appendChild(div);
  });
  currentpage += itemperpage;

  if (currentpage >= reviews.length) {
    loadmorebtnInner.textContent = "Load Less";
  }
};

// loadless function
let loadless = () => {
  currentpage = 0;
  testimonialContainer.innerHTML = "";
  loadmore();
  loadmorebtnInner.textContent = "Load More";
};

loadmorebtn.addEventListener("click", () => {
  if (currentpage >= reviews.length) {
    loadless();
  } else {
    loadmore();
  }
});

// divideArrayIntoChunks function
let divideArrayIntoChunks = (arr, size) => {
  result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// adjustMent function
let adjustMent = () => {
  if (window.innerWidth <= 1022 && window.innerWidth > 766) {
    let reviewsdevide = divideArrayIntoChunks(reviews, 2);
    reviewsdevide.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
       <div class="testimonial_inner flex flex-col custom">
      <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item[0]?.text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item[0]?.image} alt="" />
                  <div class="avatar_info">
                    <h3>${item[0]?.author}</h3>
                    <p>${item[0]?.author_title}</p>
                  </div>
                </div>
              </div>
              <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item[1]?.text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item[1]?.image} alt="" />
                  <div class="avatar_info">
                    <h3>${item[1]?.author}</h3>
                    <p>${item[1]?.author_title}</p>
                  </div>
                </div>
              </div>
            </div>
              </div>
  `;
      testimonialContainer.appendChild(div);
    });
    testimonialContainer.innerHTML = "";
    reviews.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
       <div class="testimonial_inner flex flex-col">
      <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item.text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item.image} alt="" />
                  <div class="avatar_info">
                    <h3>${item.author}</h3>
                    <p>${item.author_title}</p>
                  </div>
                </div>
              </div>
              </div>
  `;

      testimonialContainer.appendChild(div);
    });
  } else if (window.innerWidth > 1022) {
    testimonialContainer.innerHTML = "";
    let reviewsdevide = divideArrayIntoChunks(reviews, 3);

    reviewsdevide.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
       <div class="testimonial_inner flex flex-col">
      <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item[0].text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item[0].image} alt="" />
                  <div class="avatar_info">
                    <h3>${item[0].author}</h3>
                    <p>${item[0].author_title}</p>
                  </div>
                </div>
              </div>
              <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>  
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item[1].text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item[1].image} alt="" />
                  <div class="avatar_info">
                    <h3>${item[1].author}</h3>
                    <p>${item[1].author_title}</p>
                  </div>
                </div>
              </div>
              <div class="review_box">
                <div class="icons flex items-center">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="review_text">
                ${item[2].text}
                </p>
                <div class="flex avatar_details items-center">
                  <img src=${item[2].image} alt="" />
                  <div class="avatar_info">
                    <h3>${item[2].author}</h3>
                    <p>${item[2].author_title}</p>
                  </div>
                </div>
              </div>
              </div>
  `;
      testimonialContainer.appendChild(div);
    });
  } else {
    loadless();
  }
};

// window eventlistener
window.addEventListener("resize", adjustMent);
window.addEventListener("load", adjustMent);



let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

// window.onscroll = function () {
//   // const scrollHeight = window.scrollY;
//   // console.log("Scroll position: " + scrollHeight + "px");

//   // console.log("Screen height: " + screenHeight + "px");
//   let height = window.innerHeight;

//   let currentScrollPos = window.pageYOffset;
//   // console.log("Scroll position: " + currentScrollPos);

//   if (currentScrollPos > height/2) {
//     // navbar.classList.add('navbar_scroll');
//     console.log("scroll up 100");
//   } else {
//     console.log("scroll ");
//     // navbar.classList.remove('navbar_scroll');
//   }
// };
