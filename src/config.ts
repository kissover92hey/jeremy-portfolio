export const SITE = {
  website: "https://jeremy-portfolio-9xr.pages.dev/", // 這是你剛才部署成功的網址
  author: "Jeremy",
  profile: "https://jeremy-portfolio-9xr.pages.dev/", // 指向你自己的主頁
  desc: "Full-stack System Architect | 專注於 AI 應用、伺服器架構與 1AeroWIN 開發心得。",
  title: "Jeremy's DevLog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/kissover92hey/jeremy-portfolio/edit/main/", // 指向你自己的倉庫
  },
  dynamicOgImage: true,
  dir: "ltr", // "ltr" | "auto"
  lang: "zh-TW", // 改成繁體中文，這樣對搜尋引擎更友好
  timezone: "Asia/Kuala_Lumpur", // 既然你在古來（Kulai），時區改成馬來西亞
} as const;
