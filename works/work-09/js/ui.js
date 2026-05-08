// fadeIn / fadeOut helper
const fadeIn = (el, duration) => {
  el.style.opacity = '0';
  el.style.display = 'block';
  el.style.transition = `opacity ${duration}ms`;
  el.offsetHeight; // force reflow
  el.style.opacity = '1';
};

const fadeOut = (el, duration) => {
  el.style.transition = `opacity ${duration}ms`;
  el.style.opacity = '0';
  setTimeout(() => {
    el.style.display = 'none';
    el.style.opacity = '';
    el.style.transition = '';
  }, duration);
};

// 내용 확인 팝업
document.addEventListener('DOMContentLoaded', () => {
  const popBack = document.querySelector('.pop_back');

  const openPopup = (popupSelector) => {
    const popup = document.querySelector(popupSelector);
    if (!popup) return;
    fadeIn(popBack, 100);
    fadeIn(popup, 100);
    popup.removeAttribute('aria-hidden');
    popBack.setAttribute('aria-hidden', 'true');
  };

  const closeAllPopups = () => {
    document.querySelectorAll('.popup').forEach((popup) => fadeOut(popup, 100));
    fadeOut(popBack, 100);
  };

  document.querySelector('.form_box .check_btn_1')?.addEventListener('click', () => openPopup('.popup_1'));
  document.querySelector('.form_box .check_btn_2')?.addEventListener('click', () => openPopup('.popup_2'));
  document.querySelector('.form_box .check_btn_3')?.addEventListener('click', () => openPopup('.popup_3'));
  document.querySelector('.event_btn')?.addEventListener('click', () => openPopup('.event_pop'));

  popBack?.addEventListener('click', closeAllPopups);
  document.querySelectorAll('.popup .close_btn').forEach((btn) => btn.addEventListener('click', closeAllPopups));


  // GSAP ScrollTrigger 등록
  gsap.registerPlugin(ScrollTrigger);

  // 비주얼 배경 / 슬로건 진입 애니메이션
  window.addEventListener('load', () => {
    document.querySelector('.back_area')?.classList.add('on');
    document.querySelector('.slogan')?.classList.add('on');
  });

  // 스크롤 애니메이션
  gsap.from('.deco01', {
    scrollTrigger: {
      trigger: '.deco01',
      toggleActions: 'play none none none',
      start: 'top 70%',
    },
    scale: 0,
    duration: 0.3,
  });

  gsap.from('.deco02', {
    opacity: 0,
    x: -40,
    duration: 0.4,
    scrollTrigger: {
      trigger: '.deco03',
      toggleActions: 'play none none none',
      start: 'top 60%',
    },
  });

  gsap.from('.deco03', {
    opacity: 0,
    x: 40,
    duration: 0.4,
    scrollTrigger: {
      trigger: '.deco03',
      toggleActions: 'play none none none',
      start: 'top 60%',
    },
  });

  gsap.from('.deco04', {
    opacity: 0,
    x: -40,
    duration: 0.4,
    scrollTrigger: {
      trigger: '.deco04',
      toggleActions: 'play none none none',
      start: 'top 50%',
    },
  });
});
