//Light colors
const WHITE = '#fffffe'
const NAVAL_BLUE = '#094067'
const DARK_GREY= '#5f6c7b'
const LIGHT_BLUE = '#3da9fc'
const BLUE_GREY = '#90b4ce'
const RED ='#ef4565' 
const WHITE_GREY = '#eff0f3'

//Dark colors
const BLACK = '#010101'
const GRAY = '#94a1b2'
const PURPLE = '#7f5af0'
const GREEN = '#2cb67d'
const GREY_SHADE = '#72757e'
const BLACK_GREY = '#16161a'

const common ={
    error: RED,
    success: GREEN
}

const light_palette = {
    ...common,
    background: WHITE,
    headline: NAVAL_BLUE,
    paragraph: DARK_GREY,
    button: LIGHT_BLUE,
    buttonText: WHITE,
    backgroundSecondary: BLUE_GREY,
    main: WHITE_GREY

}

const dark_palette = {
    common,
    background: BLACK,
    headline: WHITE,
    paragraph: GRAY,
    button: PURPLE,
    buttonText: WHITE,
    backgroundSecondary: GREY_SHADE,
    main:BLACK_GREY
}

export const colors = {light_palette, dark_palette}