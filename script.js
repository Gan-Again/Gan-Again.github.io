const translations = {
  zh: {
    "profile.kicker": "你好，我是",
    "profile.role": "中国科学技术大学 · 硕士研究生",
    "profile.focus": "多模态智能体 · 具身智能 · 无人机",
    "profile.location": "中国 · 合肥",
    "nav.about": "关于我",
    "nav.interests": "研究方向",
    "nav.education": "教育经历",
    "nav.experience": "科研经历",
    "nav.news": "最新动态",
    "nav.publications": "论文发表",
    "nav.awards": "荣誉奖励",
    "about.label": "关于我",
    "about.heading": "探索能够感知、推理与行动的智能。",
    "about.p1": "我现为<a href=\"https://www.ustc.edu.cn/\" target=\"_blank\" rel=\"noreferrer\">中国科学技术大学</a>控制科学与工程专业硕士研究生，师从<a href=\"https://jiaweiliu92.github.io/\" target=\"_blank\" rel=\"noreferrer\">刘嘉威老师</a>，在信息科学与技术学院类脑实验室开展研究。",
    "about.p2": "我的研究兴趣集中于多模态智能体、具身智能与自主无人机的交叉领域。本科毕业于<a href=\"https://www.csu.edu.cn/\" target=\"_blank\" rel=\"noreferrer\">中南大学</a>轨道交通信号与控制专业。",
    "about.contact": "联系我",
    "about.explore": "了解研究方向",
    "interests.label": "研究兴趣",
    "interests.heading": "研究方向",
    "interests.agent.title": "多模态智能体",
    "interests.agent.body": "研究能够融合视觉、语言及其他模态信息，并进行理解与推理的智能体。",
    "interests.embodied.title": "具身智能",
    "interests.embodied.body": "探索交互环境中感知、推理、规划与行动之间的协同机制。",
    "interests.uav.title": "自主无人机",
    "interests.uav.body": "面向自主无人机系统，研究智能感知、决策与控制方法。",
    "education.label": "教育经历",
    "education.heading": "求学之路",
    "education.ustc.date": "2026 — 至今",
    "education.ustc.degree": "控制科学与工程 · 硕士",
    "education.ustc.school": "中国科学技术大学",
    "education.ustc.detail": "导师：<a href=\"https://jiaweiliu92.github.io/\" target=\"_blank\" rel=\"noreferrer\">刘嘉威老师</a>",
    "education.csu.degree": "轨道交通信号与控制 · 工学学士",
    "education.csu.school": "中南大学",
    "experience.label": "科研经历",
    "experience.heading": "研究经历",
    "experience.group": "ZL老师课题组 · 中南大学",
    "experience.title": "基于纯数据驱动的交通车辆轨迹路线预测系统",
    "experience.body": "在中南大学交通运输工程学院开展研究，重点探索面向车辆轨迹与路线预测的数据驱动建模方法。",
    "news.label": "最新动态",
    "news.heading": "近期动态",
    "news.empty.title": "旅程刚刚开始。",
    "news.empty.body": "新的进展会在这里持续更新，敬请期待！",
    "publications.label": "论文发表",
    "publications.heading": "研究成果",
    "publications.empty.title": "正在努力中。",
    "publications.empty.body": "研究需要沉淀，未来的成果将在这里与大家见面。",
    "awards.label": "荣誉与奖励",
    "awards.heading": "所获荣誉",
    "awards.ustc.title": "校奖学金二等奖",
    "awards.ustc.school": "中国科学技术大学",
    "awards.csu.title": "校奖学金二等奖",
    "awards.csu.school": "中南大学",
    "footer.note": "以好奇心设计，为未来的旅程而建。"
  },
  en: {}
};

const root = document.documentElement;
const languageToggle = document.querySelector("#language-toggle");
const languageLabel = document.querySelector("#language-label");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const navLinks = [...document.querySelectorAll(".site-nav a")];

const englishText = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  englishText[element.dataset.i18n] = element.textContent;
});
document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  englishText[element.dataset.i18nHtml] = element.innerHTML;
});

function setLanguage(language) {
  const isChinese = language === "zh";
  root.lang = isChinese ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = isChinese ? translations.zh[key] : englishText[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = isChinese ? translations.zh[key] : englishText[key];
  });

  languageLabel.textContent = isChinese ? "English" : "中文";
  languageToggle.setAttribute("aria-label", isChinese ? "Switch to English" : "切换至中文");
  localStorage.setItem("language", language);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeLabel.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  localStorage.setItem("theme", theme);
}

languageToggle.addEventListener("click", () => {
  setLanguage(root.lang.startsWith("zh") ? "en" : "zh");
});

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  sidebar.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    sidebar.classList.remove("open");
    document.body.style.overflow = "";
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -60%", threshold: [0.05, 0.25, 0.5] }
);

sections.forEach((section) => observer.observe(section));

const savedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(savedTheme || preferredTheme);
setLanguage(localStorage.getItem("language") || "en");
document.querySelector("#current-year").textContent = new Date().getFullYear();
