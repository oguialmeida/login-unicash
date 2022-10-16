import styled from "styled-components/native"

export const Container = styled.KeyboardAvoidingView`
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: #fff
`

export const Title = styled.Text`
     color: black;
     font-size: 26px;
     margin-bottom: 30px;
     font-weight: bold;
`

export const StyleForm = styled.View`
     flex: 1;
     justify-content: center;
     align-items: center;
     padding-bottom: 30px;
     width: 90%;
`
export const Input = styled.TextInput`
    border: 2px solid #000
    margin-bottom: 30px;
    padding: 15px 20px;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`
export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #000;
    border-radius: 9px;
    width: 90%;
    padding: 15px 20px;
`
export const TextButton = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`