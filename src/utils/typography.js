import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

const colors = {
  coolPink: '#cc3150',
  ghostWhite: '#efdee4',
  nightBlack: '#1f292f',
  leafyGreen: '#00d1b2',
};

fairyGatesTheme.headerColor = colors.coolPink;
fairyGatesTheme.bodyColor = colors.ghostWhite;
fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  blockquote: {
    color: colors.ghostWhite
  },
  a: {
    backgroundImage: 'none',
    textShadow: 'none'
  }
});
const typography = new Typography(fairyGatesTheme);
export default typography;
