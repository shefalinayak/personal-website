import Typography from 'typography';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.78,
  scaleRatio: 4,
  googleFonts: [
    {
      name: 'Ramaraja',
      styles: [
        '400',
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
    "Ramaraja",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerWeight: 400,
});

export default typography;
