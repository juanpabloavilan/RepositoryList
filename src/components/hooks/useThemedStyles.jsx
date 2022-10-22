import React from "react"
import useTheme from "./useTheme"

const useThemedStyles = (stylesCallback)=>{
    const {theme} = useTheme()
    return stylesCallback(theme)
}

export default useThemedStyles