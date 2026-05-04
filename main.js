document.addEventListener("DOMContentLoaded", () => {
  initHeaderObserver();
  initIntroAnimation();
  initAboutAnimation();
  initSectionTitleAnimation();
  initSkillsAnimation();
  initThanksAnimation();
  initEmailCopy();
});

// 헤더 스크롤 애니메이션
function initHeaderObserver() {
  const header = document.querySelector("#header");
  const introSection = document.querySelector("#intro");
  const greeting = document.querySelector(".intro__greeting");

  // IntersectionObserver: 특정 요소가 화면에 보이는지 감지하는 API
  const observer = new IntersectionObserver(
    // 상태가 바뀌면 callback 실행, entry 안에 정보가 들어옴
    ([entry]) => {
      // intro 섹션이 화면에서 보이는지 여부에 따라 스타일 적용
      header.style.top = entry.isIntersecting ? "-7rem" : "1rem";
    },
    {
      threshold: 0, // 조금이라도 보이면 true, 완전히 사라지는 순간 false
      rootMargin: "-260px 0px 0px 0px", // 뷰포트의 top 영역을 줄여 header 애니메이션을 미리 동작시킴
    }
  );

  // intro 섹션 추적
  observer.observe(introSection);
}

// 섹션 타이틀 애니메이션
function initSectionTitleAnimation() {
  const sectionTitles = document.querySelectorAll(".section-title");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.4,
    }
  );

  sectionTitles.forEach((title) => {
    observer.observe(title);
  });
}

// 인트로 섹션 애니메이션
function initIntroAnimation() {
  const introSection = document.querySelector("#intro");
  const greetingEmoji = document.querySelector(".intro__greeting");
  const introScroll = document.querySelector(".intro__scroll");

  // DOM Load시 타이틀 애니메이션 실행
  introSection.classList.add("is-active");

  setTimeout(() => {
    // DOM Load시 이모지 애니메이션 실행
    greetingEmoji.classList.add("is-initial");

    // 애니메이션 끝나면 클래스 제거 (hover 재실행 가능하게)
    greetingEmoji.addEventListener("animationend", () => {
      greetingEmoji.classList.remove("is-initial");
    });

    introScroll.classList.add("is-initial", "is-active");

    introScroll.addEventListener("transitionend", () => {
      introScroll.classList.remove("is-initial");
    }, { once: true });
  }, 1000);

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      // intro가 화면에 충분히 보이지 않으면 숨김
      if (entry.intersectionRatio < 0.9) {
        introScroll.classList.add("is-hidden");
      } else {
        introScroll.classList.remove("is-hidden");
      }
    },
    {
      threshold: [0, 0.9, 1],
    }
  );

  observer.observe(introSection);
}

// 어바웃 섹션 애니메이션
function initAboutAnimation() {
  const aboutItems = document.querySelectorAll(".about__item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -25% 0px",
    }
  );

  aboutItems.forEach((item) => {
    observer.observe(item);
  });
}

// 스킬 섹션 애니메이션
function initSkillsAnimation() {
  const targets = document.querySelectorAll(".skills__category, .skills__note");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -30% 0px",
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
}

// 프로젝트 섹션 애니메이션
function initProjectsAnimation() {
  const projectItems = document.querySelectorAll(".projects__item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -30% 0px",
    }
  );

  projectItems.forEach((item) => {
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectsAnimation();
});

// 마지막 섹션 애니메이션
function initThanksAnimation() {
  const thanksItems = document.querySelectorAll(
    ".thanks__title, .thanks__message, .contact__links"
  );

  const thanksSection = document.querySelector("#thanks");

  if (!thanksSection) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        thanksItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("is-visible");
          }, index * 200);
        });

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -30% 0px",
    }
  );

  observer.observe(thanksSection);
}

// 이메이 복사
function initEmailCopy() {
  const button = document.querySelector(".contact__email-button");
  const toast = document.querySelector(".toast");

  button.addEventListener("click", () => {
    const email = button.dataset.email;

    navigator.clipboard.writeText(email);

    toast.classList.add("is-visible");

    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1500);
  });
}