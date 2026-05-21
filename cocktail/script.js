const drinks = [
  {
    id: "peanut-highball",
    name: "元長花生 Highball",
    type: "酒精調酒",
    category: "cocktail",
    produceId: "peanut",
    produce: "元長花生",
    origin: "雲林元長",
    flavors: ["堅果香", "微甜", "氣泡感"],
    abv: "約 8%",
    allergy: "含花生",
    image: "assets/drink-peanut-highball.webp",
    intro:
      "以元長花生作為風味基底，搭配威士忌與氣泡水，呈現堅果香與清爽口感，讓在地花生成為酒吧招牌風味。"
  },
  {
    id: "gukeng-coffee-cocktail",
    name: "古坑咖啡調酒",
    type: "酒精調酒",
    category: "cocktail",
    produceId: "coffee",
    produce: "古坑咖啡",
    origin: "雲林古坑",
    flavors: ["咖啡香", "微苦", "成熟感"],
    abv: "約 10%",
    allergy: "含咖啡因",
    image: "assets/drink-coffee-cocktail.webp",
    intro:
      "使用古坑咖啡作為主風味，搭配蘭姆酒或伏特加，讓咖啡的烘焙香與酒感結合，呈現成熟的酒吧飲品風格。"
  },
  {
    id: "orange-gin-fizz",
    name: "柳丁 Gin Fizz",
    type: "酒精調酒",
    category: "cocktail",
    produceId: "orange",
    produce: "古坑柳丁",
    origin: "雲林古坑",
    flavors: ["柑橘香", "酸甜", "清爽"],
    abv: "約 7%",
    allergy: "無",
    image: "assets/drink-orange-gin-fizz.webp",
    intro: "將古坑柳丁的酸甜香氣帶入琴酒與氣泡調飲中，適合作為容易入口的清爽型調酒。"
  },
  {
    id: "orange-spritz-zero",
    name: "柳丁 Spritz 0%",
    type: "0% 酒感飲品",
    category: "zero",
    produceId: "orange",
    produce: "古坑柳丁",
    origin: "雲林古坑",
    flavors: ["氣泡", "酸甜", "清爽"],
    abv: "0%",
    allergy: "無",
    image: "assets/drink-orange-spritz-zero.webp",
    intro:
      "以柳丁汁、氣泡水與少量通寧水設計，透過酸度、氣泡與微苦尾韻，模擬酒吧飲品的成熟口感。"
  },
  {
    id: "pomelo-tonic-zero",
    name: "文旦 Tonic 0%",
    type: "0% 酒感飲品",
    category: "zero",
    produceId: "pomelo",
    produce: "斗六文旦",
    origin: "雲林斗六",
    flavors: ["微苦", "酸香", "尾韻"],
    abv: "0%",
    allergy: "無",
    image: "assets/drink-pomelo-tonic-zero.webp",
    intro: "利用文旦的微苦與果香，搭配通寧水與氣泡感，讓不喝酒者也能參與微醺氛圍。"
  },
  {
    id: "coffee-tonic-zero",
    name: "古坑咖啡 Tonic 0%",
    type: "0% 酒感飲品",
    category: "zero",
    produceId: "coffee",
    produce: "古坑咖啡",
    origin: "雲林古坑",
    flavors: ["咖啡苦味", "氣泡", "成熟感"],
    abv: "0%",
    allergy: "含咖啡因",
    image: "assets/drink-coffee-tonic-zero.webp",
    intro:
      "以冷萃咖啡搭配通寧水，保留咖啡苦味與氣泡層次，做出不像一般果汁的 0% 酒感飲品。"
  }
];

const produceStories = {
  peanut: {
    kicker: "Nutty Signature",
    name: "元長花生",
    origin: "雲林元長",
    lead: "花生讓 Highball 不只清爽，也有一段溫暖、可辨識的在地記憶。",
    role: "把堅果香、烘烤感與一點微甜放進酒體中，做出活動招牌的記憶點。",
    notes: "堅果香、圓潤口感、適合與威士忌氣泡感形成反差。",
    route: ["元長農產辨識", "風味萃取與調整甜度", "氣泡酒體完成招牌 Highball"],
    drinkIds: ["peanut-highball"]
  },
  orange: {
    kicker: "Citrus Lift",
    name: "古坑柳丁",
    origin: "雲林古坑",
    lead: "柳丁先用香氣和酸甜感拉近距離，再分流成有酒精與 0% 的兩種酒吧表現。",
    role: "提供高辨識度的柑橘香與清爽酸甜，讓初次試飲更容易入口。",
    notes: "明亮柑橘、果汁酸度、氣泡後段依然乾淨。",
    route: ["古坑果香採樣", "酸甜比例與氣泡測試", "Gin Fizz 與 Spritz 雙版本"],
    drinkIds: ["orange-gin-fizz", "orange-spritz-zero"]
  },
  coffee: {
    kicker: "Roast Depth",
    name: "古坑咖啡",
    origin: "雲林古坑",
    lead: "咖啡替酒單帶入成熟尾韻，也讓 0% 飲品跳脫果汁想像。",
    role: "用烘焙香、微苦與長尾韻支撐酒吧感，適合做風味層次較深的品項。",
    notes: "咖啡香、微苦、冷萃清爽度、與通寧氣泡的成熟感。",
    route: ["古坑咖啡香氣選型", "冷萃與酒感版本測試", "調酒與 Coffee Tonic 上線"],
    drinkIds: ["gukeng-coffee-cocktail", "coffee-tonic-zero"]
  },
  pomelo: {
    kicker: "Bitter Citrus",
    name: "斗六文旦",
    origin: "雲林斗六",
    lead: "文旦的微苦不是缺點，而是讓不喝酒者也能感到酒吧尾韻的關鍵。",
    role: "用果皮香與微苦感建立 adult taste，補上 0% 系列的餐酒感。",
    notes: "酸香、微苦、果皮香氣、尾段乾爽。",
    route: ["文旦酸香與果皮感辨識", "通寧尾韻比例調整", "完成 Pomelo Tonic 0%"],
    drinkIds: ["pomelo-tonic-zero"]
  }
};

const menuGrid = document.querySelector("#menu-grid");
const filterButtons = document.querySelectorAll("[data-filter]");
const drinkSelect = document.querySelector("#drink-select");
const feedbackForm = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const drinkDialog = document.querySelector("#drink-dialog");
const dialogClose = document.querySelector("#dialog-close");
const produceSwitches = document.querySelector("#produce-switches");
const originStory = document.querySelector("#origin-story");

const dialogFields = {
  type: document.querySelector("#dialog-type"),
  title: document.querySelector("#dialog-title"),
  intro: document.querySelector("#dialog-intro"),
  produce: document.querySelector("#dialog-produce"),
  flavor: document.querySelector("#dialog-flavor"),
  abv: document.querySelector("#dialog-abv"),
  allergy: document.querySelector("#dialog-allergy"),
  image: document.querySelector("#dialog-image")
};

const originFields = {
  kicker: document.querySelector("#origin-kicker"),
  name: document.querySelector("#origin-name"),
  origin: document.querySelector("#origin-origin"),
  lead: document.querySelector("#origin-lead"),
  role: document.querySelector("#origin-role"),
  notes: document.querySelector("#origin-notes"),
  route: document.querySelector("#origin-route"),
  drinks: document.querySelector("#origin-drinks")
};

function renderFlavorChips(flavors) {
  return flavors.map((flavor) => `<span class="flavor-chip">${flavor}</span>`).join("");
}

function renderMenu(filter = "all") {
  const visibleDrinks = drinks.filter((drink) => filter === "all" || drink.category === filter);

  menuGrid.innerHTML = visibleDrinks
    .map(
      (drink) => `
        <article class="drink-card">
          <figure class="drink-photo">
            <img src="${drink.image}" alt="${drink.name} 示意圖" />
            <figcaption>
              <span>${drink.origin}</span>
              <strong>${drink.produce}</strong>
            </figcaption>
          </figure>
          <div class="drink-card-body">
            <div class="drink-card-header">
              <p class="card-note">${drink.type}</p>
              <h3>${drink.name}</h3>
              <p class="drink-abv">${drink.abv}</p>
            </div>
            <p class="drink-preview">${drink.intro}</p>
            <dl class="drink-meta">
              <div>
                <dt>風味關鍵字</dt>
                <dd class="flavor-row">${renderFlavorChips(drink.flavors)}</dd>
              </div>
              <div>
                <dt>過敏提醒</dt>
                <dd>${drink.allergy}</dd>
              </div>
            </dl>
            <div class="card-actions">
              <button class="button button-primary" type="button" data-drink-id="${drink.id}">
                詳細介紹
              </button>
              <button class="button button-trace" type="button" data-produce-id="${drink.produceId}">
                看農產足跡
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function populateDrinkSelect() {
  drinkSelect.innerHTML = `
    <option value="" selected disabled>請選擇一杯飲品</option>
    ${drinks.map((drink) => `<option value="${drink.id}">${drink.name}</option>`).join("")}
  `;
}

function renderScoreGroups() {
  document.querySelectorAll("[data-score-group]").forEach((group) => {
    const groupName = group.dataset.scoreGroup;

    group.innerHTML = Array.from({ length: 5 }, (_, index) => {
      const score = index + 1;

      return `
        <label>
          <input type="radio" name="${groupName}" value="${score}" required />
          <span>${score}</span>
        </label>
      `;
    }).join("");
  });
}

function renderProduceSwitches() {
  produceSwitches.innerHTML = Object.entries(produceStories)
    .map(
      ([id, story], index) => `
        <button
          class="produce-button ${index === 0 ? "is-active" : ""}"
          type="button"
          role="tab"
          data-origin-id="${id}"
          aria-selected="${index === 0}"
        >
          <span>${story.origin}</span>
          <strong>${story.name}</strong>
        </button>
      `
    )
    .join("");
}

function renderRelatedDrinks(drinkIds) {
  return drinkIds
    .map((drinkId) => {
      const drink = drinks.find((item) => item.id === drinkId);

      return drink
        ? `<button type="button" data-drink-id="${drink.id}">${drink.name}<span>${drink.abv}</span></button>`
        : "";
    })
    .join("");
}

function setProduceStory(produceId, shouldScroll = false) {
  const story = produceStories[produceId];

  if (!story) {
    return;
  }

  document.querySelectorAll("[data-origin-id]").forEach((button) => {
    const isActive = button.dataset.originId === produceId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  originStory.classList.add("is-switching");

  window.setTimeout(() => {
    originFields.kicker.textContent = story.kicker;
    originFields.name.textContent = story.name;
    originFields.origin.textContent = story.origin;
    originFields.lead.textContent = story.lead;
    originFields.role.textContent = story.role;
    originFields.notes.textContent = story.notes;
    originFields.route.innerHTML = story.route.map((step) => `<li>${step}</li>`).join("");
    originFields.drinks.innerHTML = renderRelatedDrinks(story.drinkIds);
    originStory.classList.remove("is-switching");
  }, 120);

  if (shouldScroll) {
    document.querySelector("#origin").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function openDrinkDialog(drinkId) {
  const drink = drinks.find((item) => item.id === drinkId);

  if (!drink) {
    return;
  }

  dialogFields.type.textContent = drink.type;
  dialogFields.title.textContent = drink.name;
  dialogFields.intro.textContent = drink.intro;
  dialogFields.produce.textContent = `${drink.produce} / ${drink.origin}`;
  dialogFields.flavor.textContent = drink.flavors.join("、");
  dialogFields.abv.textContent = drink.abv;
  dialogFields.allergy.textContent = drink.allergy;
  dialogFields.image.src = drink.image;
  dialogFields.image.alt = `${drink.name} 示意圖`;
  drinkDialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      const isCurrent = item === button;
      item.classList.toggle("is-active", isCurrent);
      item.setAttribute("aria-pressed", String(isCurrent));
    });

    renderMenu(button.dataset.filter);
  });
});

menuGrid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-drink-id]");
  const produceButton = event.target.closest("[data-produce-id]");

  if (detailButton) {
    openDrinkDialog(detailButton.dataset.drinkId);
  }

  if (produceButton) {
    setProduceStory(produceButton.dataset.produceId, true);
  }
});

produceSwitches.addEventListener("click", (event) => {
  const button = event.target.closest("[data-origin-id]");

  if (button) {
    setProduceStory(button.dataset.originId);
  }
});

originFields.drinks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-drink-id]");

  if (button) {
    openDrinkDialog(button.dataset.drinkId);
  }
});

dialogClose.addEventListener("click", () => {
  drinkDialog.close();
});

drinkDialog.addEventListener("click", (event) => {
  const dialogBounds = drinkDialog.getBoundingClientRect();
  const isOutsideDialog =
    event.clientX < dialogBounds.left ||
    event.clientX > dialogBounds.right ||
    event.clientY < dialogBounds.top ||
    event.clientY > dialogBounds.bottom;

  if (isOutsideDialog) {
    drinkDialog.close();
  }
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "感謝回饋！此資料將作為下一輪菜單調整與農產採購參考。";
  feedbackForm.reset();
});

renderMenu();
populateDrinkSelect();
renderScoreGroups();
renderProduceSwitches();
setProduceStory("peanut");
