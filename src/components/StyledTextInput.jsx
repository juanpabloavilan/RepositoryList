import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import useThemedStyles from './hooks/useThemedStyles'

const StyledTextInput = ({style:propStyles = {}, ...props})=>{
    const styles= useThemedStyles(stylesCallback)
    const inputStyle ={
        ...styles.txtInput,
        ...propStyles
    }
    return(
        <>
            <TextInput style={inputStyle} {...props}/>
            {console.log(inputStyle)}   
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
    }
})

export default StyledTextInput