const allTabs = document.querySelectorAll(`[data-tabs]`);

import * as utils from "../modules/utils.js";

if (allTabs.length > 0) {
  allTabs.forEach((tabs) => {
    if (tabs.classList.contains("tabs--mobile-disabled") && window.innerWidth < 650) {
      return false;
    }
    const blockLinks = tabs.querySelector(`.tabs-links`);
    const blockBodys = tabs.querySelector(`.tabs-bodys`);

    tabs.addEventListener("click", (e) => {
      tabsHandler(e, blockLinks, blockBodys);
    });
  });
}

function tabsHandler(e, blockLinks, blockBodys) {
  const targetElement = e.target;

  if (targetElement.closest(`[data-tab-link]`)) {
    const tab = targetElement.dataset.tabLink;
    const activeLink = blockLinks.querySelector(`.active`);
    const activeBody = blockBodys.querySelector(`.active`);

    if (targetElement.classList.contains("active")) {
      return false;
    }

    if (blockBodys.querySelector(`[data-tab-body="${tab}"]`)) {
      const tabBody = blockBodys.querySelector(`[data-tab-body="${tab}"]`);
      targetElement.classList.add("active");
      tabBody.classList.add("active");
    } else {
      return false;
    }

    if (activeLink || activeBody) {
      activeLink.classList.remove("active");
      activeBody.classList.remove("active");
    }
  }
}
