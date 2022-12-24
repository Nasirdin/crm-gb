// second header
const secondHeaderBtnArrow = document.querySelector(".second-header__arrow");
// const secondHeaderSelectBtn = document.querySelector(".second-header__select");
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
// secondHeaderSelectBtn.addEventListener("click", () => {
//   openSecondHeaderModal(secondHeaderSelectBtn, secondHeaderBtnArrow);
// });
secondSelectBtnItem.forEach((item) => {
  selectItems(item, secondSelectBtnItem);
});
secondHeaderSecoundItem.forEach((item) => {
  selectItems(item, secondHeaderSecoundItem);
});

// kanban

// const calculateAllSum = () => {
//   const dealAllMoneyNew = document.getElementById("deal-all-money-new");
//   const dealAllMoneyFailed = document.getElementById("deal-all-money-failed");
//   const dealAllMoneyinWork = document.getElementById("deal-all-money-in-work");
//   const dealAllMoneySuccess = document.getElementById("deal-all-money-success");
//   const dealsPriceNew = document.querySelectorAll(".deals-new");
//   const dealsPriceFailed = document.querySelectorAll(".deals-failed");
//   const dealsPriceinWork = document.querySelectorAll(".deals-in-work");
//   const dealsPriceSuccess = document.querySelectorAll(".deals-success");
//   const kanbanAllMoney = document.querySelectorAll(".kanban__all-money");
//   const dealPrice = document.querySelectorAll(".deal__price");
//   const numberFormat = new Intl.NumberFormat("ru-RU");

//   const orderAmount = (delPrice) => {
//     let allSum = 0;
//     for (let i = 0; i < delPrice.length; i++) {
//       const dealChild = delPrice[i].children;
//       if (dealChild[0] != undefined) {
//         for (let l = 0; l < dealChild.length; l++) {
//           allSum += dealChild[l].children[0].children[1].children[0].innerText * 1;
//         }
//       } else {
//         allSum = 0;
//       }
//     }
//     return allSum;
//   };

//   dealAllMoneyNew.innerText = `${numberFormat.format(orderAmount(dealsPriceNew))}`;
//   dealAllMoneyFailed.innerText = `${numberFormat.format(orderAmount(dealsPriceFailed))}`;
//   dealAllMoneyinWork.innerText = `${numberFormat.format(orderAmount(dealsPriceinWork))}`;
//   dealAllMoneySuccess.innerText = `${numberFormat.format(orderAmount(dealsPriceSuccess))}`;

//   dealPrice.forEach((item) => {
//     item.innerText = `${item.innerText * 1}`;
//   });
//   kanbanAllMoney.forEach((item) => {
//     const itemSpan = item.children[0];
//     if (itemSpan.innerText == 0) {
//       item.style.display = "none";
//     } else {
//       item.style.display = "block";
//     }
//   });
// };
// calculateAllSum();

// const createDealNew = document.getElementById("create-deal-new");
// const createDealNewBtn = document.getElementById("create-deal-new-btn");
// createDealNewBtn.addEventListener("click", () => {
//   addActiveBtnDeal(createDealNewBtn, createDealNew);
// });

// const createDealFailed = document.getElementById("create-deal-failed");
// const createDealFailedBtn = document.getElementById("create-deal-failed-btn");

// createDealFailedBtn.addEventListener("click", () => {
//   addActiveBtnDeal(createDealFailedBtn, createDealFailed);
// });

// // change currency

// const changeCurrencyBtn = document.querySelectorAll(".create-deal__currency");
// const createDealSelectWrapper = document.querySelectorAll(".create-deal__select-wrapper");
// changeCurrencyBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     for (let i = 0; i < changeCurrencyBtn.length; i++) {
//       if (changeCurrencyBtn[i] === item) {
//         createDealSelectWrapper[i].classList.toggle("active");
//       }
//     }
//   });
// });

// const createDealSelectItem = document.querySelectorAll(".create-deal__select-item");
// // const createDealCurrency = document.querySelectorAll(".create-deal__currency");

// createDealSelectItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     createDealSelectItem.forEach((e) => {
//       e.classList.remove("active");
//     });
//     changeCurrencyBtn.forEach((el) => {
//       el.innerText = `${item.innerText}`;
//       createDealSelectItem.forEach((currencyItem) => {
//         if (el.innerText == currencyItem.innerText) {
//           currencyItem.classList.add("active");
//         }
//       });
//     });
//   });
// });

// // DRAG & DROP deals

// const dragAndDrop = () => {
//   const deals = document.querySelectorAll(".deals__deal");
//   const kanbanDealsGrid = document.querySelectorAll(".kanban__deals");
//   const kanbanContent = document.querySelectorAll(".kanban__content");
//   let activeDeal;

//   const dragStart = function () {
//     activeDeal = this;
//     setTimeout(() => {
//       this.classList.add("hide");
//     }, 0);
//   };
//   const dragEnd = function () {
//     this.classList.remove("hide");
//     activeDeal = "";
//   };
//   const dragOver = function (e) {
//     e.preventDefault();
//     this.classList.add("drag-enter");
//   };
//   const dragEnter = function (e) {
//     e.preventDefault();
//     this.classList.add("drag-enter");
//   };
//   const dragLeave = function () {
//     this.classList.remove("drag-enter");
//   };
//   const dragDrop = function () {
//     this.append(activeDeal);
//     setTimeout(() => {
//       calculateAllSum();
//     }, 0);
//   };
//   const dragDropGridContent = function () {
//     this.classList.remove("drag-enter");
//   };

//   kanbanContent.forEach((gridContent) => {
//     gridContent.addEventListener("dragover", dragOver);
//     gridContent.addEventListener("dragenter", dragEnter);
//     gridContent.addEventListener("dragleave", dragLeave);
//     gridContent.addEventListener("drop", dragDropGridContent);
//   });
//   kanbanDealsGrid.forEach((gridDeals) => {
//     gridDeals.addEventListener("drop", dragDrop);
//   });

//   deals.forEach((deal) => {
//     deal.addEventListener("dragstart", dragStart);
//     deal.addEventListener("dragend", dragEnd);
//   });
// };

// dragAndDrop();

// company card

// const openModalCard = () => {
//   // const companyCardClose = document.querySelector(".company-card__close");
//   // const clientCardClose = document.querySelector(".client-card__close");
//   const createDealCardClose = document.querySelector(".create-deal-card__close");
//   // const companyCard = document.querySelector(".company-card");
//   // const clientCard = document.querySelector(".client-card");
//   const createDealCard = document.querySelector(".create-deal-card");
//   // const dealCompany = document.querySelectorAll(".deal__company");
//   // const dealClient = document.querySelectorAll(".deal__client");
//   const createDealPlus = document.querySelectorAll(".create-deal-plus");
//   const allWindowBg = document.querySelector(".all-window-bg");

//   const addActiveCard = (cardLink, card) => {
//     cardLink.addEventListener("click", () => {
//       card.classList.add("active");
//     });
//   };
//   // dealCompany.forEach((cardLink) => {
//   //   addActiveCard(cardLink, companyCard);
//   // });
//   // dealClient.forEach((cardLink) => {
//   //   addActiveCard(cardLink, clientCard);
//   // });
//   createDealPlus.forEach((cardLink) => {
//     cardLink.addEventListener("click", () => {
//       createDealCard.classList.add("active");
//       allWindowBg.classList.add("active")
//     });
//   });
//   // companyCardClose.addEventListener("click", () => {
//   //   companyCard.classList.remove("active");
//   // });
//   // clientCardClose.addEventListener("click", () => {
//   //   clientCard.classList.remove("active");
//   // });
//   createDealCardClose.addEventListener("click", () => {
//     createDealCard.classList.remove("active");
//   });
// };
// openModalCard();

// const openEditModal = () => {
//   const companyAboutEditBtns = document.querySelectorAll(".company-about-edit-btn");
//   const clientAboutEditBtns = document.querySelectorAll(".client-about-edit-btn");
//   const cancelCompanyEditFormBtn = document.getElementById("cancel-company-edit-form-btn");
//   const cancelClientEditFormBtn = document.getElementById("cancel-client-edit-form-btn");
//   const companyAboutCancelBtns = document.querySelectorAll(".company-about-cancel-btn");
//   const clientAboutCancelBtns = document.querySelectorAll(".client-about-cancel-btn");
//   const aboutDeleteBtns = document.querySelectorAll(".about-delete-btn");
//   const aboutContents = document.querySelectorAll(".about__content");
//   const companyAboutEditForm = document.querySelector("#company-edit-card");
//   const clientAboutEditForm = document.querySelector("#client-edit-card");
//   const allWindowBg = document.querySelector(".all-window-bg");
//   const abouts = document.querySelectorAll(".about");
//   const cardBoxes = document.querySelectorAll(".card-box");

//   const removeClassActive = (items) => {
//     items.forEach((item) => {
//       item.classList.remove("active");
//     });
//   };
//   const removeClassNoActive = (items) => {
//     items.forEach((item) => {
//       item.classList.remove("no-active");
//     });
//   };
//   const addClassActive = (items) => {
//     items.forEach((item) => {
//       item.classList.add("active");
//     });
//   };
//   const addClassNoActive = (items) => {
//     items.forEach((item) => {
//       item.classList.add("no-active");
//     });
//   };

//   const clickEditBtn = (aboutEditBtn, aboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns) => {
//     aboutEditBtn.classList.add("no-active");
//     removeClassNoActive(aboutCancelBtns);
//     addClassNoActive(aboutContents);
//     allWindowBg.classList.add("active");
//     addClassActive(abouts);
//     addClassActive(aboutDeleteBtns);
//   };
//   const clickCancelBtn = (aboutEditBtns, aboutCancelBtn, aboutContents, allWindowBg, abouts, aboutDeleteBtns) => {
//     removeClassNoActive(aboutEditBtns);
//     aboutCancelBtn.classList.add("no-active");
//     removeClassNoActive(aboutContents);
//     allWindowBg.classList.remove("active");
//     removeClassActive(abouts);
//     removeClassActive(aboutDeleteBtns);
//   };
//   const clickEditBtnTwo = (aboutEditBtns, aboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns) => {
//     removeClassNoActive(aboutEditBtns);
//     addClassNoActive(aboutCancelBtns);
//     removeClassNoActive(aboutContents);
//     allWindowBg.classList.remove("active");
//     removeClassActive(abouts);
//     removeClassActive(aboutDeleteBtns);
//   };

//   companyAboutEditBtns.forEach((aboutEditBtn) => {
//     aboutEditBtn.addEventListener("click", () => {
//       companyAboutEditForm.classList.add("active");
//       clickEditBtn(aboutEditBtn, companyAboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//       addClassActive(cardBoxes);
//     });
//   });
//   clientAboutEditBtns.forEach((aboutEditBtn) => {
//     aboutEditBtn.addEventListener("click", () => {
//       clientAboutEditForm.classList.add("active");
//       clickEditBtn(aboutEditBtn, clientAboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//       addClassActive(cardBoxes);
//     });
//   });
//   companyAboutCancelBtns.forEach((aboutCancelBtn) => {
//     aboutCancelBtn.addEventListener("click", () => {
//       companyAboutEditForm.classList.remove("active");
//       clickCancelBtn(companyAboutEditBtns, aboutCancelBtn, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//       removeClassActive(cardBoxes);
//     });
//   });
//   clientAboutCancelBtns.forEach((aboutCancelBtn) => {
//     aboutCancelBtn.addEventListener("click", () => {
//       clientAboutEditForm.classList.remove("active");
//       clickCancelBtn(clientAboutEditBtns, aboutCancelBtn, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//       removeClassActive(cardBoxes);
//     });
//   });

//   // cancelCompanyEditFormBtn.addEventListener("click", (e) => {
//   //   e.preventDefault();
//   //   clickEditBtnTwo(companyAboutEditBtns, companyAboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//   //   companyAboutEditForm.classList.remove("active");
//   //   removeClassActive(cardBoxes);
//   // });
//   cancelClientEditFormBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     clickEditBtnTwo(clientAboutEditBtns, clientAboutCancelBtns, aboutContents, allWindowBg, abouts, aboutDeleteBtns);
//     clientAboutEditForm.classList.remove("active");
//     removeClassActive(cardBoxes);
//   });
// };
// openEditModal();

// const cardCompanyOpenSelect = () => {
//   const editSelectText = document.querySelectorAll(".edit-select__text");
//   const editSelectWrapper = document.querySelectorAll(".edit-select__wrapper");
//   const editSelectItem = document.querySelectorAll(".edit-select__item");

//   editSelectText.forEach((item) => {
//     item.addEventListener("click", () => {
//       for (let i = 0; i < editSelectText.length; i++) {
//         if (editSelectText[i] === item) {
//           editSelectWrapper[i].classList.toggle("active");
//         }
//       }
//     });
//   });

//   editSelectItem.forEach((selectItem) => {
//     selectItem.addEventListener("click", () => {
//       editSelectItem.forEach((item) => {
//         item.classList.remove("active");
//       });
//     });
//   });
// };
// cardCompanyOpenSelect();

const markedRows = () => {
  const rowCompany = document.querySelectorAll(".row-company");
  const tabelAllMark = document.querySelector(".tabel__all-mark");
  const tabelNoted = document.querySelector(".tabel__noted");
  const tabelTotal = document.querySelector(".tabel__total");
  tabelNoted.innerText = `0/${rowCompany.length}`;
  tabelTotal.innerText = `${rowCompany.length}`;

  rowCompany.forEach((companyItem) => {
    const markItem = companyItem.children[0].children[0];
    markItem.addEventListener("click", () => {
      markItem.classList.toggle("marked");
      let res = 0;
      rowCompany.forEach((item) => {
        if (item.children[0].children[0].classList.value === "row-company__mark marked") {
          res++;
        }
      });
      tabelNoted.innerText = `${res}/${rowCompany.length}`;
    });
  });

  let allMark = false;
  tabelAllMark.addEventListener("click", () => {
    if (!allMark) {
      rowCompany.forEach((companyItem) => {
        const markItem = companyItem.children[0].children[0];
        markItem.classList.add("marked");
        tabelAllMark.classList.add("marked");
      });
      allMark = true;
      tabelNoted.innerText = `${rowCompany.length}/${rowCompany.length}`;
    } else {
      allMark = false;
      rowCompany.forEach((companyItem) => {
        const markItem = companyItem.children[0].children[0];
        markItem.classList.remove("marked");
        tabelAllMark.classList.remove("marked");
      tabelNoted.innerText = `0/${rowCompany.length}`;
      });
    }
  });
};
markedRows();
