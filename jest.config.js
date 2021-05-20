module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "^actions": "<rootDir>/src/actions",
    "^api(.*)$": "<rootDir>/src/api/$1",
    "^assets(.*)$": "<rootDir>/src/assets/$1",
    "^components(.*)$": "<rootDir>/src/components/$1",
    "^consts(.*)$": "<rootDir>/src/constants/$1",
    "^hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^reducers(.*)$": "<rootDir>/src/reducers/$1",
    "^routes(.*)$": "<rootDir>/src/routes/$1",
    "^store(.*)$": "<rootDir>/src/store/$1",
    "^types(.*)$": "<rootDir>/src/types/$1",
    "^tests(.*)$": "<rootDir>/src/tests/$1",
    "^utils(.*)$": "<rootDir>/src/utils/$1"
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.(js|jsx)?$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
