import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.headerFontFamily = [ 'Merriweather' ];
Wordpress2016.bodyFontFamily = [ 'Merriweather' ];

Wordpress2016.overrideThemeStyles = () => {
    return {
        'a': {
            boxShadow: `none`,
            color: '#6200EA',
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
