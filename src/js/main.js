// second header
const secondHeaderBtnArrow = document.querySelector(".second-header__arrow");
const secondHeaderSelectBtn = document.querySelector(".second-header__select");
const secondSelectBtnItem = document.querySelectorAll(".second-select-btn__item");
const secondHeaderSecoundItem = document.querySelectorAll(".second-header__secound-item");

const openSecondHeaderModal = (btn1, btn2) => {
  btn2.classList.remove("active");
  btn1.classList.toggle("active");
};
const selectItems = (item1, item2) => {
  item1.addEventListener("click", () => {
    item2.forEach((e) => {
      e.classList.remove("active");
    });
    item1.classList.add("active");
  });
};
const addActiveBtnDeal = (btn, form) => {
  btn.classList.toggle("active");
  form.classList.toggle("active");
};

secondHeaderBtnArrow.addEventListener("click", () => {
  openSecondHeaderModal(secondHeaderBtnArrow, secondHeaderSelectBtn);
});
secondHeaderSelectBtn.addEventListener("click", () => {
  openSecondHeaderModal(secondHeaderSelectBtn, secondHeaderBtnArrow);
});
secondSelectBtnItem.forEach((item) => {
  selectItems(item, secondSelectBtnItem);
});
secondHeaderSecoundItem.forEach((item) => {
  selectItems(item, secondHeaderSecoundItem);
});

// kanban

const calculateAllSum = () => {
  const dealAllMoneyNew = document.getElementById("deal-all-money-new");
  const dealAllMoneyFailed = document.getElementById("deal-all-money-failed");
  const dealAllMoneyinWork = document.getElementById("deal-all-money-in-work");
  const dealAllMoneySuccess = document.getElementById("deal-all-money-success");
  const dealsPriceNew = document.querySelectorAll(".deals-new");
  const dealsPriceFailed = document.querySelectorAll(".deals-failed");
  const dealsPriceinWork = document.querySelectorAll(".deals-in-work");
  const dealsPriceSuccess = document.querySelectorAll(".deals-success");
  const kanbanAllMoney = document.querySelectorAll(".kanban__all-money");
  const dealPrice = document.querySelectorAll(".deal__price");
  const numberFormat = new Intl.NumberFormat("ru-RU");

  const orderAmount = (delPrice) => {
    let allSum = 0;
    for (let i = 0; i < delPrice.length; i++) {
      const dealChild = delPrice[i].children;
      if (dealChild[0] != undefined) {
        for (let l = 0; l < dealChild.length; l++) {
          allSum += dealChild[l].children[0].children[1].children[0].innerText * 1;
        }
      } else {
        allSum = 0;
      }
    }
    return allSum;
  };

  dealAllMoneyNew.innerText = `${numberFormat.format(orderAmount(dealsPriceNew))}`;
  dealAllMoneyFailed.innerText = `${numberFormat.format(orderAmount(dealsPriceFailed))}`;
  dealAllMoneyinWork.innerText = `${numberFormat.format(orderAmount(dealsPriceinWork))}`;
  dealAllMoneySuccess.innerText = `${numberFormat.format(orderAmount(dealsPriceSuccess))}`;

  dealPrice.forEach((item) => {
    item.innerText = `${item.innerText * 1}`;
  });
  kanbanAllMoney.forEach((item) => {
    const itemSpan = item.children[0];
    if (itemSpan.innerText == 0) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
};
calculateAllSum();

const createDealNew = document.getElementById("create-deal-new");
const createDealNewBtn = document.getElementById("create-deal-new-btn");
createDealNewBtn.addEventListener("click", () => {
  addActiveBtnDeal(createDealNewBtn, createDealNew);
});

const createDealFailed = document.getElementById("create-deal-failed");
const createDealFailedBtn = document.getElementById("create-deal-failed-btn");

createDealFailedBtn.addEventListener("click", () => {
  addActiveBtnDeal(createDealFailedBtn, createDealFailed);
});

// change currency

const changeCurrencyBtn = document.querySelectorAll(".create-deal__currency");
const createDealSelectWrapper = document.querySelectorAll(".create-deal__select-wrapper");
changeCurrencyBtn.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < changeCurrencyBtn.length; i++) {
      if (changeCurrencyBtn[i] === item) {
        createDealSelectWrapper[i].classList.toggle("active");
      }
    }
  });
});

const createDealSelectItem = document.querySelectorAll(".create-deal__select-item");
// const createDealCurrency = document.querySelectorAll(".create-deal__currency");

createDealSelectItem.forEach((item) => {
  item.addEventListener("click", () => {
    createDealSelectItem.forEach((e) => {
      e.classList.remove("active");
    });
    changeCurrencyBtn.forEach((el) => {
      el.innerText = `${item.innerText}`;
      createDealSelectItem.forEach((currencyItem) => {
        if (el.innerText == currencyItem.innerText) {
          currencyItem.classList.add("active");
        }
      });
    });
  });
});

// DRAG & DROP deals

const dragAndDrop = () => {
  const deals = document.querySelectorAll(".deals__deal");
  const kanbanDealsGrid = document.querySelectorAll(".kanban__deals");
  const kanbanContent = document.querySelectorAll(".kanban__content");
  let activeDeal;

  const dragStart = function () {
    activeDeal = this;
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  };
  const dragEnd = function () {
    this.classList.remove("hide");
    activeDeal = "";
  };
  const dragOver = function (e) {
    e.preventDefault();
    this.classList.add("drag-enter");
  };
  const dragEnter = function (e) {
    e.preventDefault();
    this.classList.add("drag-enter");
  };
  const dragLeave = function () {
    this.classList.remove("drag-enter");
  };
  const dragDrop = function () {
    this.append(activeDeal);
    setTimeout(() => {
      calculateAllSum();
    }, 0);
  };
  const dragDropGridContent = function () {
    this.classList.remove("drag-enter");
  };

  kanbanContent.forEach((gridContent) => {
    gridContent.addEventListener("dragover", dragOver);
    gridContent.addEventListener("dragenter", dragEnter);
    gridContent.addEventListener("dragleave", dragLeave);
    gridContent.addEventListener("drop", dragDropGridContent);
  });
  kanbanDealsGrid.forEach((gridDeals) => {
    gridDeals.addEventListener("drop", dragDrop);
  });

  deals.forEach((deal) => {
    deal.addEventListener("dragstart", dragStart);
    deal.addEventListener("dragend", dragEnd);
  });
};

dragAndDrop();

// company card

const openCompanyCard = () => {
  const companyCardClose = document.querySelector(".company-card__close");
  const clientCardClose = document.querySelector(".client-card__close");
  const companyCard = document.querySelector(".company-card");
  const clientCard = document.querySelector(".client-card");
  const dealCompany = document.querySelectorAll(".deal__company");
  const dealClient = document.querySelectorAll(".deal__client");

  const addActiveCard = (cardLink, card) => {
    cardLink.addEventListener("click", () => {
      card.classList.add("active");
    });
  };

  dealCompany.forEach((cardLink) => {
    addActiveCard(cardLink, companyCard);
  });
  dealClient.forEach((cardLink) => {
    addActiveCard(cardLink, clientCard);
  });
  companyCardClose.addEventListener("click", () => {
    companyCard.classList.remove("active");
  });
  clientCardClose.addEventListener("click", () => {
    clientCard.classList.remove("active");
  });
};
openCompanyCard();

const openEditModal = () => {
  const aboutEditBtn = document.getElementById("about-edit-btn");
  const aboutEditBtnTwo = document.getElementById("edit-form__btn");
  const aboutCancelBtn = document.getElementById("about-cancel-btn");
  const aboutDeleteBtn = document.getElementById("about-delete-btn");
  const aboutContent = document.querySelector(".about__content");
  const aboutEditForm = document.querySelector(".about__edit-form");
  const allWindowBg = document.querySelector(".all-window-bg");
  const about = document.querySelector(".about");

  aboutEditBtn.addEventListener("click", () => {
    aboutCancelBtn.classList.remove("no-active");
    aboutEditBtn.classList.add("no-active");
    aboutEditForm.classList.add("active");
    aboutContent.classList.add("no-active");
    allWindowBg.classList.add("active");
    about.classList.add("active");
    aboutDeleteBtn.classList.add("active");
  });
  aboutCancelBtn.addEventListener("click", () => {
    aboutEditBtn.classList.remove("no-active");
    aboutCancelBtn.classList.add("no-active");
    aboutEditForm.classList.remove("active");
    aboutContent.classList.remove("no-active");
    allWindowBg.classList.remove("active");
    about.classList.remove("active");
    aboutDeleteBtn.classList.remove("active");
  });
  aboutEditBtnTwo.addEventListener("click", (e) => {
    e.preventDefault();
    aboutEditBtn.classList.remove("no-active");
    aboutCancelBtn.classList.add("no-active");
    aboutEditForm.classList.remove("active");
    aboutContent.classList.remove("no-active");
    allWindowBg.classList.remove("active");
    about.classList.remove("active");
    aboutDeleteBtn.classList.remove("active");
  });
};
openEditModal();

const cardCompanyOpenSelect = () => {
  const editSelectText = document.querySelectorAll(".edit-select__text");
  const editSelectWrapper = document.querySelectorAll(".edit-select__wrapper");
  const editSelectItem = document.querySelectorAll(".edit-select__item");

  editSelectText.forEach((item) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < editSelectText.length; i++) {
        if (editSelectText[i] === item) {
          editSelectWrapper[i].classList.toggle("active");
        }
      }
    });
  });

  editSelectItem.forEach((selectItem) => {
    selectItem.addEventListener("click", () => {
      editSelectItem.forEach((item) => {
        item.classList.remove("active");
      });
    });
  });
};
cardCompanyOpenSelect();
