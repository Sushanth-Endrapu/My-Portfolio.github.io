// import skill from "./skills.js";
// console.log(skill);
// var prevScrollpos = window.pageYOffset;
// var header = document.querySelector("header");
// var isCursorAtTop = false;
// var timeout;

// function hideHeader() {
//   header.style.transform = "translateY(-100%)";
// }

// function showHeader() {
//   header.style.transform = "translateY(0)";
// }

// function handleScroll() {
//   var currentScrollPos = window.pageYOffset;

//   if (prevScrollpos > currentScrollPos) {
//     showHeader();
//   } else {
//     hideHeader();
//   }

//   prevScrollpos = currentScrollPos;
// }

// function handleMouseEnter() {
//   clearTimeout(timeout);
//   isCursorAtTop = true;
//   showHeader();
// }

// function handleMouseLeave() {
//   timeout = setTimeout(function () {
//     isCursorAtTop = false;
//     hideHeader();
//   }, 1000);
// }

// function handleMouseMove(event) {
//   if (event.clientY <= 70) {
//     isCursorAtTop = true;
//     showHeader();
//   } else if (!isCursorAtTop) {
//     handleMouseLeave();
//   }
// }

// window.addEventListener("scroll", handleScroll);
// header.addEventListener("mouseenter", handleMouseEnter);
// header.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("mousemove", handleMouseMove);

// there initially and disappears on scrolling down and appears on scrolling up
// var prevScrollpos = window.pageYOffset;
// var header = document.querySelector("header");

// function handleScroll() {
//   var currentScrollPos = window.pageYOffset;

//   if (prevScrollpos > currentScrollPos) {
//     header.style.transform = "translateY(0)";
//   } else {
//     header.style.transform = "translateY(-100%)";
//   }

//   prevScrollpos = currentScrollPos;
// }

// window.addEventListener("scroll", handleScroll);

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // User is scrolling up
    document.querySelector("header").style.top = "0";
  } else {
    // User is scrolling down
    document.querySelector("header").style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
};

// let prevScrollPos = window.pageYOffset;
// const navbar = document.querySelector('header');

// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     navbar.classList.add('show');
//   } else {
//     navbar.classList.remove('show');
//   }

//   prevScrollPos = currentScrollPos;
// };

const animatedText = document.getElementById("animatedText");
const texts = ["I am a developer", "I am a Programmer"];
let index = 0;
let charIndex = 0;

function animateText() {
  if (charIndex < texts[index].length) {
    animatedText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(animateText, 80);
  } else {
    setTimeout(deleteText, 1500);
  }
}

function deleteText() {
  if (charIndex >= 0) {
    animatedText.textContent = texts[index].substring(0, charIndex);
    charIndex--;
    setTimeout(deleteText, 40);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(animateText, 500);
  }
}

animateText();







  // Get the <ul> element
  const skillList = document.querySelector("#skills ul");

  // Create a skill tooltip element
  const skillTooltip = document.createElement("div");
  skillTooltip.classList.add("skill-tooltip");
  document.body.appendChild(skillTooltip);

  // Add event listener to each <li> element
  skillList.addEventListener("mouseover", function (event) {
    // Check if the event target  is an <li> element
    if (event.target.tagName === "LI") {
      // Get the skill name from the data-skill attribute
      const skillName = event.target.getAttribute("data-skill");

      // Set the content and position of the skill tooltip
      skillTooltip.textContent = `Click to View: ${skillName}`;
      skillTooltip.style.visibility = "visible";
      skillTooltip.style.top = `${event.target.offsetTop - skillTooltip.offsetHeight}px`;
      skillTooltip.style.left = `${event.target.offsetLeft}px`;
    }
  });

  // Clear the skill tooltip when mouse leaves the <ul> element
  skillList.addEventListener("mouseout", function () {
    skillTooltip.style.visibility = "hidden";
  });







const reactKnowledge = `
<h3>React</h3>
<p>I possess extensive knowledge in React, making me a valuable asset as a developer. With an understanding of JSX, I can write expressive code to create captivating user interfaces. I can build reusable components and effectively utilizing props to pass data between them. My understanding of React's virtual DOM  ensures optimal performance. State management is a strength, as I utilize hooks like useState to handle component state. I am adept at conditional rendering and event handling, creating dynamic and interactive interfaces. Styling is another forte, with proficiency in CSS and integration with libraries like Material UI. React form handling is an additional skill I possess. With my expertise, I can deliver quality React applications.</p>
`;
const javaScriptKnowledge = `
<h3>Java Script</h3>
<p>I possess intermediate knowledge in JavaScript, a powerful programming language for web development. With my skill level, I am proficient in using JavaScript to add interactivity and dynamic functionality to web pages. I can manipulate HTML elements, handle user interactions, and validate form input using JavaScript. I have an understanding of variables, data types, control structures, functions, and objects in JavaScript. I am experienced in DOM manipulation, event handling. Additionally, I can utilize JavaScript libraries and frameworks to streamline development and create interactive web applications. My intermediate JavaScript skills enable me to create dynamic and engaging user experiences on the web.</p>
`;
const CSSKnowledge = `
<h3>CSS</h3>
<p>I possess intermediate knowledge in CSS (Cascading Style Sheets), a vital component of web development. With my skill level, I am proficient in using CSS to enhance the appearance and layout of web pages. I can apply styles to HTML elements, such as colors, fonts, backgrounds, borders, and spacing, to create visually appealing designs. I have an understanding of CSS selectors and box model concepts. I am experienced in creating responsive layouts using media queries and implementing CSS frameworks. Additionally, I can use CSS animations and transitions to add interactive elements to web pages. My intermediate CSS skills allow me to create engaging and well-designed user interfaces for web applications.</p>
`;

const HTMLKnowledge = `
<h3>HTML</h3>
<p>I possess intermediate knowledge in HTML (Hypertext Markup Language), the fundamental markup language for web development. With my skill level, I am proficient in utilizing HTML tags, attributes, and structure to create well-designed web pages and applications. I am experienced in organizing content using headings, paragraphs, lists, tables, and forms. I can incorporate multimedia elements, such as images and videos, and apply basic styling using inline styles or CSS. Moreover, I have an understanding of semantic HTML, accessibility best practices, and responsive design techniques. My intermediate HTML skills enable me to develop visually appealing and user-friendly web pages.</p>
`;

const PythonKnowledge = `
<h3>Python</h3>
<p>I possess intermediate knowledge in Python, a versatile and widely-used programming language. With my skill level, I am proficient in utilizing Python for automation as well (selenium). I have a strong understanding of Python syntax, data structures, control flow, and object-oriented programming concepts. I can effectively work with built-in functions and modules, as well as third-party libraries and frameworks. I am experienced in handling file operations. Additionally, I have knowledge of popular Python libraries such as BS4, Pandas and requests. My intermediate Python skills allow me to develop robust and efficient solutions for diverse programming tasks.</p>
`;


const skills = document.querySelectorAll("#skills li");
const skillContentContainer = document.getElementById(
  "skill-content-container"
);

skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    const skillName = skill.getAttribute("data-skill");
    skillContentContainer.innerHTML = getSkillContent(skillName);
    skillContentContainer.style.display = "block";
  });
});

function getSkillContent(skillName) {
  // Replace with your own content for each skill
  switch (skillName) {
    case "HTML":
      return HTMLKnowledge;
    case "CSS":
      return CSSKnowledge;
    case "JavaScript":
      return javaScriptKnowledge;
    case "Python":
      return PythonKnowledge;
    case "React":
      return reactKnowledge;
    default:
      return "";
  }
}

// JavaScript code to handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink =
      "mailto:sample2003test@gmail.com?subject=Message%20from%20" +
      name +
      "&body=" +
      encodeURIComponent(message);
    window.location.href = mailtoLink;
  });






 
 