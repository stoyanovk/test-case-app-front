type Config = {
  ENV: string;
  API_URL: string;
};

const SETTINGS_PROD: Config = {
  ENV: "production",
  API_URL: "",
};

const SETTINGS_DEV: Config = {
  ENV: "development",
  API_URL: "http://localhost:3001/api/",
};

const CONFIG: Config =
  process.env.NODE_ENV === "production" ? SETTINGS_PROD : SETTINGS_DEV;

export default CONFIG;
