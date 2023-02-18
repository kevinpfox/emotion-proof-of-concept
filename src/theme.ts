import { createTheme } from "@mui/material/styles";

const imgPrefix = "/public"; //getImgPrefix();

const colorDefs = {
  textPrimary: "#000000",
  textSecondary: "#56584B",
  grey50: "#F7F7F6",
  grey100: "#ECEDEB",
  grey200: "#E0E1DD",
  grey300: "#C2C2BC",
  grey400: "#D1CCCC",
  grey500: "#999A8F",
  grey700: "#797A6E",
  grey800: "#686B5E",
  grey900: "#595b4E",
  grey1000: "#56584B",
  grey1100: "#424438",
  grey1200: "#CCCCCC",
  error: "#AD1F23",
  errorBg: "#FBE9E9",
  bgSecondary: "#E4ECED",
  bgFooterLight: "#36a5b6",
  orange: "#DC8007",
  bcBlue50: "#EBF7FA",
  bcBlue100: "#D8F0F5",
  bcBlue200: "#b1e2eb",
  bcBlue300: "#8AD3E2",
  bcBlue400: "#63C5D8",
  bcBlue500: "#3CB6CE",
  bcBlue700: "#1E93AA",
  bcBlue800: "#0F8299",
  bcBlue900: "#017187",
  bcBlue1000: "#016174",
  bcBlueLink: "#016174",
  bcBlue1100: "#F0F9F6",
  bcBlue1200: "#D1ECE4",
  bcBlue1300: "#0a5b6b",
  bcNavy50: "#F2F6F6", // e.g. light blue bg for show post (comment on comment, reply comment)
  bcNavy100: "#E5ECED",
  bcNavy200: "#CCDBDD",
  bcNavy300: "#8AD3E2",
  bcNavy500: "#669298",
  bcNavy900: "#004953",
  bcNavy1000: "#002F36",
  secondaryBtnBorderColor: "#0F7186",
  btnHoverGrey: "#F5F5F5",
  coral: "#FF8B7C",
  bcCoral50: "#fff3f1",
  bcCoral400: "#ffa296",
  bcCoral900: "#b94334",
  bcMint400: "#a3d9c9",
  bcMint700: "#43A189",
  bcMint900: "#297D68",
  bcGreen50: "#F3F8EB",
  bcGreen100: "#E7F2D9",
  bcGreen200: "#CFE5B3",
  bcGreen300: "#B7D78C",
  bcGreen500: "#87bd40",
  bcGreen700: "#619221",
  bcGreen800: "#4E7C12",
  bcGreen900: "#3c6704",
  bcGreen1000: "#3C5916",
  bcGreen1100: "#87BD40",
  bcGreen1200: "#287462",
  coral50: "#FFF3F1",
  coral300: "#FFB9B0",
  coral600: "#ED786A",
  coral700: "#DC6757",
  coral1000: "#9A3427",
  bcWhite: "#FFFFFF",
  brown: "#AC6313",
  brownLight: "#F5E8B7",
  tumeric500: "#E8C934",
  chipBackgroundColor: "#EBF7F9", // Doesn't exist in style guild PDF
};

const zIndexDefs = {
  topLevelZIndex: "2000",
  mobileMuiDrawerZIndex: "1999",
  mainMenuBackdropZIndex: "1998",
  nProgressBarZIndex: "1997",
  meSliceDrawerZIndex: "1902",
  meSliceBackdropZIndex: "1901",
  headerZIndex: "1900",
  guidedPathwayZIndex: "1601",
  mobLeaderboardZIndex: "1600",
  // MUI tooltip: 1500
  // MUI snackbar: 1400
  // MUI modal: 1300
  // MUI drawer: 1200
  // MUI appBar: 1100
  // MUI speedDial: 1050
  // MUI mobileStepper: 1000
  deskLeaderboardZIndex: "900",
  floatingActionButtonZIndex: "800",
};

const focusValues = {
  focusWidth: "1px",
  focusStyle: "solid",
  focusColor: colorDefs.bcBlue900,
};

const upperTheme = {
  bodyFontFamily: `'Montserrat', 'Arial', sans-serif`,
  headerFontFamily: `'Domine', 'Georgia', serif`,
  imgPrefix,
  maxWidth: 1300,
  contentMaxWidth: 828,
  smallViewportInt: 728,
  standardVertMarginInt: 18,
  marginAboveMainContentInt: 20,
  mobileMarginInt: 15,
  smallDown: "max-width: 727px",
  mediumDown: "max-width: 1049px",
  mediumUp: "min-width: 728px",
  mediumOnly: "max-width: 1049px) and (min-width: 728px",
  largeUp: "min-width: 1050px",
  notAPhone: "min-width: 416px",
  largerThanPhoneSmallerThanIPad: "min-width: 428px) and (max-width: 728px",
  ...colorDefs,
  ...zIndexDefs,
  ...focusValues,
};

// Create a theme instance.
const theme = createTheme(
  /* adaptV4Theme(*/ {
    breakpoints: {
      values: {
        xs: 0,
        sm: upperTheme.smallViewportInt,
        md: 1050, // Value from BcSite
        lg: 1280, // MUI default value
        xl: 1920, // MUI default value
      },
    },
    palette: {
      primary: { main: upperTheme.bcBlue800 },
      secondary: { main: upperTheme.bcBlue900 },
      error: {
        main: upperTheme.error,
        light: upperTheme.errorBg,
      },
      text: {
        primary: upperTheme.textPrimary,
        secondary: upperTheme.textSecondary,
      },
      action: {
        active: upperTheme.bcBlue100,
        hover: upperTheme.bcBlue100,
        selected: upperTheme.bcBlue100,
      },
    },
    shape: { borderRadius: 0 },
    typography: {
      fontFamily: upperTheme.bodyFontFamily,
      body2: {
        fontSize: "1rem",
        fontWeight: 500,
        padding: 0,
        margin: 0,
        lineHeight: "normal",
        position: "relative",
      },
    },

    // MUI5 WAY TO DO GLOBAL OVERRIDES
    // https://mui.com/material-ui/customization/theme-components/#global-style-overrides

    // Legacy node "overrides" (will not work anymore)
    // overrides: {
    //   MuiCssBaseline: {
    //     '@global': {
    //       body: {
    //         backgroundColor: '#fff',
    //       },
    //     },
    //   },
    //   MuiTabs: {
    //     indicator: {
    //       backgroundColor: theme.bcGreen500,
    //     },
    //   },
    //   MuiTab: {
    //     root: {
    //       textTransform: 'none',
    //       padding: '0 10px',
    //       width: 'auto',
    //       // Below didn't work, moved to useGlobalTheme under .MuiTab-root
    //       // minWidth: 'auto',
    //       // 'min-width': 'auto',
    //       '&:hover': {
    //         backgroundColor: theme.grey50,
    //         color: theme.textPrimary,
    //       },
    //       '&.selected': {
    //         fontWeight: 'bold',
    //         color: theme.bcGreen900,
    //       },
    //       '&:focus': {
    //         outline: 'none',
    //       },
    //     },
    //   },
    // },
  } /* ) */
);

export default theme;
