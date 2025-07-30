const tabList = document.querySelectorAll(".nav-list li");
const contentList = document.querySelectorAll(".content_list li");

init(0);

function init(q) {
  tabList[q].classList.add("on");
  contentList[q].classList.add("active");
}

function reset() {
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].classList.remove("on");
    contentList[i].classList.remove("active");
  }
}

tabList.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    reset();
    init(index);
  });
});