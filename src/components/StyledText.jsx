import React from "react"
import { Text, StyleSheet } from "react-native"
import { useEffect, useRef } from "react"
import useThemedStyles from "./hooks/useThemedStyles" 

const StyledText = ({style:propStyle, children, ...props}) =>{
    const styles = useThemedStyles(stylesCallback)

    const loadStyles = ()=>{
        return Object.keys(props).map(prop =>{
            if(styles[prop]){
                return styles[prop]
            }
        })
    }

    return(
        <Text style={loadStyles()}>{children}</Text>
    )
}

const stylesCallback = theme => StyleSheet.create({
    bold:{
        fontWeight: "bold"
    },
    S:{
        fontSize: theme.typography.size.S
    },
    M:{
        fontSize: theme.typography.size.M
    },
    L:{
        fontSize: theme.typography.size.L
    },
    headline:{
        color: theme.colors.headline
    },
    paragraph:{
        color: theme.colors.paragraph
    },
    buttonText:{
        color: theme.colors.buttonText
    }
})

export default StyledText