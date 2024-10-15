setTimeout(() => {
  // usdt or sol to shibadino calculator
  const usdtBtn = document.querySelector(".header-sale-btn.usdt-btn");
  const solBtn = document.querySelector(".header-sale-btn.solana-btn");
  const payInput = document.querySelector(".header-sale-input.pay-input");
  const saleImg = document.querySelector(".header-sale-input-img.sale-img");

  const changeCurrency = (targetCurrency, activeCurrency, iconPath) => {
    targetCurrency.classList.add("active");
    activeCurrency.classList.remove("active");
    payInput.value = "";
    saleImg.src = iconPath;
  };

  usdtBtn.addEventListener("click", () => {
    changeCurrency(usdtBtn, solBtn, "images/usdt.png");
  });

  solBtn.addEventListener("click", () => {
    changeCurrency(solBtn, usdtBtn, "images/sol.png");
  });

  // Menu on click on mobile
  const MOBILE_BREAKPOINT = 1024;
  const menuIcon = document.querySelector(".header-logo");
  const headerNavList = document.querySelector(".header-nav-list");

  const debounce = (func, delay) => {
    let timeoutId = null;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    };
  };
  const onMenyClick = () => {
    headerNavList.classList.toggle("show-nav");
  };

  const munuIconClickHandler = () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      menuIcon.addEventListener("click", onMenyClick);
    } else {
      menuIcon.removeEventListener("click", onMenyClick);
      headerNavList.classList.remove("show-nav");
    }
  };

  munuIconClickHandler();
  window.addEventListener("resize", debounce(munuIconClickHandler, 500));

  // String carousel
  const headerCarouselBreakpoints = {
    1800: {
      perPage: 10,
    },
    1600: {
      perPage: 8,
    },
    1200: {
      perPage: 7,
    },
    900: {
      perPage: 6,
    },
    600: {
      perPage: 4,
    },
  };

  const ourPartnersCarouselBreakpoints = {
    1800: {
      perPage: 4,
    },
    1500: {
      perPage: 3,
    },
    1100: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
    850: {
      perPage: 2,
    },
    550: {
      perPage: 1,
    },
  };

  const createCarousel = (selector, speed, perPage, breakpoints) => {
    const splide = new Splide(selector, {
      type: "loop",
      drag: "free",
      focus: "center",
      perPage,
      arrows: false,
      pagination: false,
      drag: false,
      autoScroll: {
        speed: speed,
      },
      breakpoints,
    });
    splide.mount(window.splide.Extensions);
  };

  createCarousel(".promo-string-carousel", 1, 12, headerCarouselBreakpoints);
  createCarousel(
    ".promo-string-carousel-two",
    1,
    5,
    ourPartnersCarouselBreakpoints
  );

  // Copy code to clipboard
  const copyBtn = document.querySelector(".contract-rocket-copy-btn");
  const contractCode = document.querySelector(".contract-code");

  copyBtn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(contractCode.textContent.trim());
  });

  // Accordion init
  new Accordion(".accordion-container");

  // Animations
  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.className += " " + entry.target.dataset.animClass;
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, {
    rootMargin: "100px",
    threshold: 0,
  });

  const elementsToObserve = document.querySelectorAll(".anim-el");

  elementsToObserve.forEach((element) => observer.observe(element));
}, 2000);
