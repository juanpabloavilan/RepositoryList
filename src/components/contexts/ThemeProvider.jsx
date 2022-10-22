import React, { useState } from "react"
import { colors } from "../../styles/colors"
import { typography } from "../../styles/typography"

export const ThemeContext = React.createContext(null)

const ThemeProvider = ({children}) =>{
     //Indicando el theme si es dark o light
    //const [isLightTheme, setIsLightTheme] = useState(true)

    const isLightTheme = true
    const theme = {
        colors: isLightTheme ? colors.light_palette : colors.dark_palette,
        typography
    }

    return (
        <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider