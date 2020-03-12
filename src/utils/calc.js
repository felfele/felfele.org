import { PADDING_CSS_EXPRESSION } from '../data/style'

export const calcVerticalSize = (unit) => `calc((${PADDING_CSS_EXPRESSION}) / 80 * ${unit})`

