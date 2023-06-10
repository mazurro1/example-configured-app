const routes = {
  homePage: "/",
  loginPage: "/login",
};

module.exports = {
  locales: ["en"],
  defaultLocale: "en",
  defaultLocaleWithMultirouting: false,
  sitesForLoggedUser: [routes.homePage],
  sitedForLoggedAndNotLoggedUser: [],
  redirectForLoggedUser: routes.homePage,
  redirectForNotLoggedUser: routes.loginPage,
  outputFolderTranslations: "/public/locales",
  constNamespaces: ["common"],
  componentNameToReplaced: "TComponent",
  routes,
};
