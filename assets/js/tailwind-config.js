tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "primary": "#b0127b",
                "on-primary": "#ffffff",
                "primary-container": "#ffffd8",
                "on-primary-container": "#690047",
                "secondary": "#ffffff",
                "on-secondary": "#1d171d",
                "secondary-container": "#ffd8ea",
                "on-secondary-container": "#330e22",
                "tertiary": "#815254",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#ffdad9",
                "on-tertiary-container": "#331114",
                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "on-error-container": "#410002",
                "background": "#e040a0",
                "on-background": "#ffffff",
                "surface": "#fff8f8",
                "on-surface": "#201a1c",
                "surface-variant": "#f1dee3",
                "on-surface-variant": "#504348",
                "outline": "#827378",
                "outline-variant": "#d4c2c7",
                "shadow": "#000000",
                "scrim": "#000000",
                "inverse-surface": "#352f31",
                "inverse-on-surface": "#faeeef",
                "inverse-primary": "#ffaee0",
                "surface-dim": "#e3d7d9",
                "surface-bright": "#fff8f8",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#fdf1f2",
                "surface-container": "#f7ebed",
                "surface-container-high": "#f1e5e7",
                "surface-container-highest": "#ebe0e2"
            },
            "borderRadius": {
                "DEFAULT": "9999px",
                "lg": "9999px",
                "xl": "9999px",
                "full": "9999px"
            },
            "spacing": {
                "margin-desktop": "64px",
                "margin-mobile": "20px",
                "gutter": "24px",
                "unit": "8px",
                "window-padding": "32px"
            },
            "fontFamily": {
                "headline-md": ["DM Sans"],
                "label-md": ["DM Sans"],
                "body-md": ["DM Sans"],
                "headline-lg": ["DM Sans"],
                "body-lg": ["DM Sans"],
                "display-lg": ["DM Sans"],
                "label-xl": ["DM Sans"],
                "display-lg-mobile": ["DM Sans"],
                "headline": ["DM Sans"],
                "display": ["DM Sans"],
                "body": ["DM Sans"],
                "label": ["DM Sans"]
            },
            "fontSize": {
                "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
                "label-md": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "headline-lg": ["48px", { "lineHeight": "56px", "fontWeight": "700" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "display-lg": ["84px", { "lineHeight": "90px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
                "label-xl": ["20px", { "lineHeight": "24px", "fontWeight": "600" }],
                "display-lg-mobile": ["48px", { "lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "800" }]
            }
        }
    }
};
