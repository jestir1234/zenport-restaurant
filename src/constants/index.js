export const MEDIA_BREAKPOINTS = {
  down: size => {
    return BREAK_POINTS[size];
  }
};

const BREAK_POINTS = {
  md: "@media only screen and (max-width: 768px)",
  xs: "@media only screen and (max-width: 475px)"
};

export const COLORS = {
  lightGrey: "#f4f2f2",
  dark: "#2f2e2e",
  lightAqua: "#b4fffd",
  aqua: "#57dee1",
  darkAqua: "#00b6b2",
  grey: "#f0f0f0",
  white: "#fff",
  red: "#f00"
};
