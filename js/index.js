const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', siteContent.nav["img-src"]);

let nav = document.getElementsByTagName("nav").item(0);

let firstLink = nav.children.item(0);
firstLink.innerText = siteContent.nav['nav-item-1'];

let secondLink = nav.children.item(1);
secondLink.innerText = siteContent.nav['nav-item-2'];

let thirdLink = nav.children.item(2);
thirdLink.innerText = siteContent.nav['nav-item-3'];


let fourthLink = nav.children.item(3);
fourthLink.innerText = siteContent.nav['nav-item-4'];

let fifthLink = nav.children.item(4);
fifthLink.innerText = siteContent.nav['nav-item-5'];

let sixthLink = nav.children.item(4);
sixthLink.innerText = siteContent.nav['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.src = siteContent.nav["img-src"];

let h1 = document.querySelector(".cta .cta-text h1");
h1.innerText = siteContent.cta.h1;


let button = document.querySelector("button");
button.innerText = siteContent.cta.button;

let headerImage = document.getElementById("cta-img");
headerImage.src = siteContent.cta['img-src'];


let featuresHeading =  document.getElementsByClassName("top-content")[0].children.item(0).children.item(0);
featuresHeading.innerText = siteContent["main-content"]["features-h4"];


let featuresParagraph =  document.getElementsByClassName("top-content")[0].children.item(0).children.item(1);
featuresText.innerText = siteContent["main-content"]["features-content"];

let aboutHeading =  document.getElementsByClassName("top-content")[0].children.item(1).children.item(0);
aboutHeading.innerText = siteContent["main-content"]["about-h4"];

let aboutText =  document.getElementsByClassName("top-content")[0].children.item(1).children.item(1);
aboutText.innerText = siteContent["main-content"]["about-content"];

let middleImage = document.getElementById("middle-img");
middleImage.src = "img/mid-page-accent.jpg";
/* 
let servicestHeading =  document.getElementsByClassName("top-content")[0].children.item(1).children.item(0);
servicestHeading.innerText = siteContent["main-content"]["about-h4"];

let servicesText =  document.getElementsByClassName("top-content")[0].children.item(1).children.item(1);
servicesText.innerText = siteContent["main-content"]["about-content"]; */