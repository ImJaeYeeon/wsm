// show/hide menu: toggle menu
const toggleMenu = function (toggleID, navListID) {
    //html->js
    const toggle = document.getElementById(toggleID);
    const navlist = document.getElementById(navListID);

    const clickHandler = function () {
        //show/hide menu: .show-menu
        navlist.classList.toggle('show-menu');
    }

    if (toggle && navlist) {
        //toggle click
        toggle.addEventListener('click', clickHandler);
    }
}
toggleMenu("nav-toggle", "nav-list");

// const say = () => console.log("Hello World4");

// const say = () => {
//     console.log("Hello World3");
// };

// const say = function () {
//     console.log("Hello World2");
// };

// function say() {
//     console.log("Hello World");
// }
// say();