import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';
import { NONAME } from 'dns';

const colors = {
  bungalowTaupe: '#cbbd9f',
  curiousBlue: '#3f85b5',
  darkJungleGreen: '#1a251c',
  kokoda: '#7d7758',
  blueSurf: '#8fa9a8',
  greenShadeWash: '#43543b',
  brightNautilus: '#255a6c',
  farrago: '#43716a',
  harpyBrown: '#4b3927',
  garfield: '#a6532d'
};

fairyGatesTheme.headerColor = colors.bungalowTaupe;
fairyGatesTheme.bodyColor = colors.bungalowTaupe;
fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    backgroundImage: 'none',
    textShadow: 'none'
  }
});
const typography = new Typography(fairyGatesTheme);
export default typography;
