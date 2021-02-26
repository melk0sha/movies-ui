const mediaSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${mediaSize.mobileS})`,
  mobileM: `(min-width: ${mediaSize.mobileM})`,
  mobileL: `(min-width: ${mediaSize.mobileL})`,
  tablet: `(min-width: ${mediaSize.tablet})`,
  laptop: `(min-width: ${mediaSize.laptop})`,
  laptopL: `(min-width: ${mediaSize.laptopL})`,
  desktop: `(min-width: ${mediaSize.desktop})`
};
