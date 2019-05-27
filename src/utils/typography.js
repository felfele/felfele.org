import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.headerFontFamily = [ 'Young Serif' ];
Wordpress2016.bodyFontFamily = [ 'Nunito Sans' ];

Wordpress2016.overrideThemeStyles = () => {
    return {
        'a,h1,h2,h3,p,div': {
            boxShadow: `none`,
            color: '#6200EA',
        },
        'a': {
            fontWeight: 'bold',
        },
        'h1,h2,h3': {
            fontFamily: 'YoungSerif',
        },
        'h2,h3,p,div': {
            fontWeight: 300,
        },
        'div': {
            lineHeight: 1.35,
        },
    };
};

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
