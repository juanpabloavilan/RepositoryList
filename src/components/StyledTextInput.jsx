import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import useThemedStyles from './hooks/useThemedStyles'
import StyledText from './StyledText'

const StyledTextInput = ({style:propStyles = {}, showError, errorInfo, ...props})=>{
    const styles= useThemedStyles(stylesCallback)
    const inputStyle =[
        styles.txtInput,
        showError && styles.error,
        propStyles
    ]
    return(
        <>
            <TextInput style={inputStyle} {...props}/> 
            {showError && <StyledText error style={styles.errorMessage}>{errorInfo}</StyledText>}  
        </>
    )
}

const stylesCallback = theme => StyleSheet.create({
    txtInput:{
        paddingVertical: 5,
        paddingHorizontal:5,
        marginVertical: 10,
        color: theme.colors.paragraph,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: theme.colors.button
    },
    error:{
        borderColor: theme.colors.error
    },
    errorMessage:{
        marginTop: -10,
        marginLeft: 5
    }
})

export default StyledTextInput