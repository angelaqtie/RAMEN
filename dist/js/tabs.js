const tabs = document.querySelectorAll(".Drinks__text");
const contents = document.querySelectorAll(".Drinks__details");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActivetab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActivetab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
