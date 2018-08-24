import Typography from 'typography';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.78,
  scaleRatio: 4,
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '700',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    }
  ],
  headerFontFamily: [
    "Lato",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerWeight: 700,
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
    'h1,h2,h3': {
      color: '#312336'
    }
  })
});

export default typography;
