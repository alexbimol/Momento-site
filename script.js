/* script.js */

// Объект с переводами для всех языков
const translations = {
  en: {
    pageTitle: "Momento Cafe Bar – Home",
    headerTitle: "Momento Cafe Bar",
    homeLink: "Home",
    menuLink: "Menu",
    contactLink: "Contact",
    aboutLink: "About Us",
    socialMessage: "Your smiles are our inspiration!",
    welcomeMessage: "Welcome to Momento Cafe Bar!",
    workingHours: "We are open every day.",
    liveMusicInfo: "Every Friday, enjoy live Greek music.",
    deliveryInfo: "Delivery available daily from 13:00 to 21:00.",
    footerText: "© 2025 Momento Cafe Bar. All rights reserved."
  },
  ru: {
    pageTitle: "Momento Cafe Bar – Главная",
    headerTitle: "Momento Cafe Bar",
    homeLink: "Главная",
    menuLink: "Меню",
    contactLink: "Контакты",
    aboutLink: "О нас",
    socialMessage: "Ваши улыбки — наше вдохновение!",
    welcomeMessage: "Добро пожаловать в Momento Cafe Bar!",
    workingHours: "Мы работаем каждый день.",
    liveMusicInfo: "Каждую пятницу вас ждет живая греческая музыка.",
    deliveryInfo: "Доставка доступна ежедневно с 13:00 до 21:00.",
    footerText: "© 2025 Momento Cafe Bar. Все права защищены."
  },
  el: {
    pageTitle: "Momento Cafe Bar – Αρχική",
    headerTitle: "Momento Cafe Bar",
    homeLink: "Αρχική",
    menuLink: "Μενού",
    contactLink: "Επικοινωνία",
    aboutLink: "Σχετικά με εμάς",
    socialMessage: "Τα χαμόγελά σας είναι η έμπνευσή μας!",
    welcomeMessage: "Καλώς ήρθατε στο Momento Cafe Bar!",
    workingHours: "Είμαστε ανοιχτά κάθε μέρα.",
    liveMusicInfo: "Κάθε Παρασκευή σας περιμένει ζωντανή ελληνική μουσική.",
    deliveryInfo: "Η παράδοση είναι διαθέσιμη καθημερινά από τις 13:00 έως τις 21:00.",
    footerText: "© 2025 Momento Cafe Bar. Όλα τα δικαιώματα διατηρούνται."
  }
};

// Функция для смены языка
function changeLanguage(lang) {
  const translation = translations[lang];
  if (!translation) return;

  document.getElementById('page-title').innerText = translation.pageTitle;
  document.getElementById('header-title').innerText = translation.headerTitle;
  document.getElementById('home-link').innerText = translation.homeLink;
  document.getElementById('menu-link').innerText = translation.menuLink;
  document.getElementById('contact-link').innerText = translation.contactLink;
  document.getElementById('about-link').innerText = translation.aboutLink;
  document.getElementById('social-message').innerText = translation.socialMessage;
  document.getElementById('welcome-message').innerText = translation.welcomeMessage;
  document.getElementById('working-hours').innerText = translation.workingHours;
  document.getElementById('live-music-info').innerText = translation.liveMusicInfo;
  document.get