/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "eo",
      locales: [
      "eo",
      "en",
      "it",
      "fr",
      "zh",
      "zh-TW",
      "uk",
      "pt-BR",
      "ja",
      "es",
      "de",
      "nl",
      "tr",
    ],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
