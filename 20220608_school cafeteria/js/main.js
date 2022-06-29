// show/hide menu: toggle menu
const toggleMenu = (toggleID, navListID) => {
    //html->js
    const toggle = document.getElementById(toggleID);
    const navlist = document.getElementById(navListID);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navlist) {
        //toggle click
        toggle.addEventListener('click', () => {
            //show/hide menu: .show-menu
            navlist.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-square");
        });
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

const addNow = (mainCardId) => {
    //html -> js
    const mainCard = document.getElementById(mainCardId);
    //지금 몇시? 다음 식사 -> 몇번째 카드인지
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    // console.log(`${hour}시 ${minute}분`);
    minute = hour * 60 + minute; //현재 시와 분을 통해 분으로 단위 통일

    //지금 시각 -> index
    //조식 끝 :7:30 ->1
    //중식 끝:13:10->2
    //석식 끝:18:10->0
    //다음 식사 -> 몇번째 카드인지
    index = 0;
    if (minute >= 18 * 60 + 10) { //10:10 <= now
        index = 0;
    } else if (minute >= 13 * 60 + 10) { //13:10<=now
        index = 2;
    } else if (minute >= 7 * 60 + 30) { //7:30<=now
        index = 1;
    }
    let selectedCard = mainCard.getElementsByClassName('card')[index];
    //.now 클래스 추가
    selectedCard.classList.add('now');
}

addNow('main-card');