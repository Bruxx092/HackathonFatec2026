const appJson = require("./app.json");

module.exports = () => {
  const baseUrl = process.env.EXPO_BASE_URL;
  return {
    ...appJson.expo,
    ...(baseUrl
      ? {
          experiments: {
            ...appJson.expo.experiments,
            baseUrl,
          },
        }
      : {}),
  };
};
