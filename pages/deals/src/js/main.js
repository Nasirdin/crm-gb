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
const dealAllMoneyNew = document.getElementById("deal-all-money-new");
const dealAllMoneyFailed = document.getElementById("deal-all-money-failed");
const dealPriceNew = document.querySelectorAll(".deal__price_new");
const dealPriceFailed = document.querySelectorAll(".deal__price_failed");
const kanbanAllMoney = document.querySelectorAll(".kanban__all-money");
const dealPrice = document.querySelectorAll(".deal__price");

const orderAmount = (delPrice) => {
  let allSum = 0;
  for (let i = 0; i < delPrice.length; i++) {
    allSum += delPrice[i].innerText * 1;
  }
  return allSum;
};
dealAllMoneyNew.innerText = `${orderAmount(dealPriceNew).toLocaleString("ru")}`;
dealAllMoneyFailed.innerText = `${orderAmount(dealPriceFailed).toLocaleString("ru")}`;

kanbanAllMoney.forEach((item) => {
  const itemSpan = item.children[0];
  if (itemSpan.innerText == 0) {
    item.style.display = "none";
  }
});
dealPrice.forEach((item) => {
  item.innerText = `${(item.innerText * 1).toLocaleString("ru")}`
})

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
const createDealCurrency = document.querySelectorAll(".create-deal__currency");

createDealSelectItem.forEach((item) => {
  item.addEventListener("click", () => {
    createDealSelectItem.forEach((e) => {
      e.classList.remove("active");
    });
    createDealCurrency.forEach((el) => {
      el.innerText = `${item.innerText}`;
      createDealSelectItem.forEach((currencyItem) => {
        if (el.innerText == currencyItem.innerText) {
          currencyItem.classList.add("active");
        }
      });
    });
  });
});
