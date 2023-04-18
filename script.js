let tabs = document.querySelectorAll(".tab-btn");
let tabContents = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    let tabId = event.target.id;

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    document.getElementById(`${tabId}-tab`).classList.add("active");
    event.target.classList.add("active");
  });
});
