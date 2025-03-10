import type { Theme } from "@planningcenter/tapestry-react"
import * as logomark from "@planningcenter/icons/paths/logomark"
import { token } from "@planningcenter/tapestry"

const fontWeight = 400
const radius = "4px"
const letterSpacing = "-0.006em"
const focusVisible = {
  outline: `1px solid ${token("--t-fill-color-status-info-solid")}`,
  outlineOffset: "1px",
}

export const breakpoints: Record<string, number | string> = {
  xs: 480,
  sm: 600,
  md: 720,
  lg: 960,
  xl: 1200,
  xxl: 1600,
}

for (const name in breakpoints) {
  const breakpointValue = breakpoints[name] as number
  breakpoints[`below-${name}`] = `@media screen and (max-width: ${
    breakpointValue - 1
  }px)`
}

export const tableVariant = {
  header: {
    background: token("--t-fill-color-neutral-080"),
  },
  headerCell: {
    paddingHorizontal: "36px",
  },
  bodyCell: {
    whiteSpace: "initial",
    padding: "20px 36px",
    fontSize: 4,
    height: "0.75em",
  },
  bodyRow: {
    minHeight: 0,
  },
}

const theme: Theme = {
  id: "home",
  text: { color: token("--t-text-color-default-primary") },
  heading: { color: token("--t-text-color-default-headline"), fontWeight: 500 },
  breakpoints,
  colors: {
    grey: [
      token("--t-fill-color-neutral-090"),
      token("--t-fill-color-neutral-080"),
      token("--t-fill-color-neutral-070"),
      token("--t-fill-color-neutral-060"),
      token("--t-fill-color-neutral-050"),
      token("--t-fill-color-neutral-040"),
      token("--t-fill-color-neutral-030"),
      token("--t-fill-color-neutral-020"),
      token("--t-fill-color-neutral-010"),
      token("--t-fill-color-neutral-000"),
    ],
    primary: token("--t-fill-color-product-home-base"),
  },
  fontSizes: [25, 21, 18, 16, 14, 12, 10],
  // fontSizes: [30, 21, 18, 16, 14, 12, 10], KEEP THESE AROUND FOR NOW
  // the only way to adjust the xs size is to define all size values.
  // Otherwise, defining one resets all of them 😭
  boxSizes: {
    xs: {
      boxSize: 2.5,
      fontSize: 5,
      lineHeight: 2.5,
      paddingHorizontalDense: 0.5,
      paddingHorizontal: "6px",
      paddingVertical: 0,
      radius: 2.5,
    },
    sm: {
      boxSize: 3,
      fontSize: 4,
      lineHeight: 3,
      paddingHorizontalDense: 0.5,
      paddingHorizontal: 1,
      paddingVertical: 0,
      radius: 3,
    },
    md: {
      boxSize: 4,
      fontSize: 3,
      lineHeight: 4,
      paddingHorizontalDense: 1,
      paddingHorizontal: "12px",
      paddingVertical: 0,
      radius: 4,
    },
    lg: {
      boxSize: 5,
      fontSize: 3,
      lineHeight: 5,
      paddingHorizontalDense: 1,
      paddingHorizontal: "14px",
      paddingVertical: 0,
      radius: 5,
    },
    xl: {
      boxSize: 6,
      fontSize: 3,
      lineHeight: 6,
      paddingHorizontalDense: 2,
      paddingHorizontal: "18px",
      paddingVertical: 0,
      radius: 6,
    },
  },

  icons: {
    logomark,
  },
  button: {
    themes: {
      default: {
        fill: {
          fontWeight,
          letterSpacing,
          radius,
        },
        outline: {
          fontWeight,
          letterSpacing,
          radius,
        },
        naked: {
          fontWeight,
          letterSpacing,
          radius,
        },
      },
      primary: {
        fill: {
          backgroundColor: token(
            "--t-fill-color-button-interaction-solid-default"
          ),
          color: token("--t-text-color-default-inverted"),
          hover: {
            backgroundColor: token(
              "--t-fill-color-button-interaction-solid-hover"
            ),
            color: token("--t-text-color-default-inverted"),
          },
          active: {
            backgroundColor: token(
              "--t-fill-color-button-interaction-solid-active"
            ),
            color: token("--t-text-color-default-inverted"),
          },
          focusVisible: { ...focusVisible },
          fontWeight,
          letterSpacing,
          radius,
        },
        outline: {
          color: token("--t-fill-color-button-interaction-solid-default"),
          stroke: token("--t-fill-color-button-interaction-solid-default"),
          backgroundColor: "transparent",
          hover: {
            backgroundColor: token("--t-fill-color-neutral-100"),
            color: token("--t-fill-color-button-interaction-solid-default"),
          },
          active: {
            color: token("--t-fill-color-button-interaction-solid-hover"),
            backgroundColor: token("--t-fill-color-neutral-010"),
          },
          focusVisible: { ...focusVisible },
          fontWeight,
          letterSpacing,
          radius,
        },
        naked: {
          color: token("--t-text-color-interaction-primary"),
          hover: {
            backgroundColor: token("--t-fill-color-product-home-lightest"),
          },
          fontWeight,
          letterSpacing,
          radius,
        },
      },
      delete: {
        fill: {
          backgroundColor: token("--t-fill-color-button-delete-solid-default"),
          color: token("--t-text-color-default-inverted"),
          hover: {
            backgroundColor: token("--t-fill-color-button-delete-solid-hover"),
          },
          active: {
            backgroundColor: token("--t-fill-color-button-delete-solid-active"),
          },
          focusVisible: { ...focusVisible },
          fontWeight,
          letterSpacing,
          radius,
        },
        outline: {
          color: token("--t-fill-color-button-delete-solid-default"),
          stroke: token("--t-fill-color-button-delete-solid-default"),
          backgroundColor: "transparent",
          hover: {
            backgroundColor: token("--t-fill-color-button-delete-ghost-hover"),
            color: token("--t-fill-color-button-delete-solid-hover"),
          },
          active: {
            backgroundColor: token("--t-fill-color-button-delete-ghost-hover"),
            color: token("--t-fill-color-button-delete-solid-hover"),
          },
          focusVisible: { ...focusVisible },
          fontWeight,
          letterSpacing,
          radius,
        },
        naked: {
          color: token("--t-fill-color-button-delete-solid-default"),
          hover: {
            backgroundColor: token("--t-fill-color-button-delete-ghost-hover"),
          },
          fontWeight,
          letterSpacing,
          radius,
        },
      },
      link: {
        fill: {
          backgroundColor: "transparent",
          color: token("--t-text-color-interaction-primary"),
          display: "inline-block",
          hover: { backgroundColor: "transparent" },
          paddingLeft: 0,
          paddingRight: 0,
          fontWeight,
          letterSpacing,
        },
        outline: {},
        naked: {},
      },
      pageHeader: {
        fill: {
          backgroundColor: token("--t-fill-color-neutral-090"),
          borderColor: token("--t-fill-color-neutral-090"),
          color: token("--t-fill-color-product-home-dark"),
          fontWeight: 400,
          hover: {
            backgroundColor: token("--t-fill-color-neutral-090"),
            borderColor: token("--t-fill-color-neutral-090"),
          },
          focusVisible: { ...focusVisible },
        },
        primary: {
          backgroundColor: token("--t-fill-color-neutral-100"),
          borderColor: token("--t-fill-color-neutral-100"),
          color: token("--t-fill-color-product-home-dark"),
          hover: {
            backgroundColor: token("--t-fill-color-transparency-light-090"),
          },
          focusVisible: { ...focusVisible },
        },
        outline: {},
        naked: {},
      },
      ghost: {
        fill: {
          backgroundColor: "transparent",
          color: token("--t-fill-color-neutral-100"),
          display: "inline-block",
          hover: { backgroundColor: token("--t-fill-color-neutral-070") },
          active: { backgroundColor: token("--t-fill-color-neutral-060") },
          focusVisible: { ...focusVisible },
          fontWeight,
          letterSpacing,
        },
        outline: {},
        naked: {},
      },
      "staff-only": {
        fill: {
          backgroundColor: "rgb(255, 105, 180)",
          color: "#fff",
          hover: { backgroundColor: "rgba(244, 90, 167, 1)" },
          fontWeight: 500,
        },
        outline: {
          backgroundColor: "transparent",
          color: "rgb(255, 105, 180)",
          boxShadow: "0 0 0 1px rgb(255, 105, 180)",
          fontWeight: 500,
        },
        naked: {},
      },
      badge: {
        fill: {
          backgroundColor: token("--t-fill-color-neutral-060"),
          color: token("--t-fill-color-neutral-010"),
          hover: {
            backgroundColor: token("--t-fill-color-neutral-040"),
            color: token("--t-fill-color-neutral-010"),
          },
          active: {
            backgroundColor: token("--t-fill-color-neutral-040"),
            color: token("--t-fill-color-neutral-010"),
          },
          disabled: {
            backgroundColor: token("--t-fill-color-neutral-080"),
            color: token("--t-fill-color-neutral-020"),
          },
          letterSpacing,
          radius: "24px",
          fontWeight: "400",
        },
        outline: {},
        naked: {},
      },
    },
  },
  badge: {
    color: {
      foreground: token("--t-fill-color-neutral-010"),
      background: token("--t-fill-color-neutral-060"),
    },
  },
  pageBody: {
    backgroundColor: "inherit",
    paddingTop: "14px",
    flex: 1,
    overflow: "hidden",
  },
  pageButton: {
    theme: "pageHeader",
    variant: "fill",
    borderRadius: "4px",
    borderWidth: "1px",
    fontWeight: 400,
    lineHeight: "24px",
    paddingVertical: "3px",
    paddingHorizontal: 2,
  },
  pageHeader: {
    backgroundColor: token("--t-fill-color-product-home-light"),
  },
  pageTitle: {
    color: token("--t-text-color-default-inverted"),
    fontSize: "25px",
  },
  checkbox: {
    fill: token("--t-fill-color-neutral-100"),
    stroke: token("--t-border-color-control-neutral"),
    focusStroke: token("--t-border-color-control-info"),
    checkedFill: token("--t-fill-color-control-primary"),
    checkedStroke: token("--t-border-color-control-info"),
    disabled: {
      fill: token("--t-fill-color-neutral-070"),
      stroke: token("--t-fill-color-neutral-050"),
      opacity: 1,
    },
  },
  popover: {
    zIndex: 100, //this keeps popovers under the topbar, but on top of toolbar 😭
  },
  modal: {
    padding: 0,
    radius: "16px",
  },
  spinner: {
    thickness: {
      xl: 3,
    },
  },
  tabNav: {
    width: "auto",
    maxWidth: "100%",
    paddingHorizontal: 0,
    borderBottom: "none",
    flex: "1 1 auto",
    mediaQueries: {
      sm: { flex: "none" },
    },
    tab: {
      fontWeight: 600,
      fontSize: 4,
      maxWidth: "200px",
      mediaQueries: {
        sm: {
          fontWeight: 400,
          maxWidth: "300px",
        },
      },
    },
  },
}

export default theme
