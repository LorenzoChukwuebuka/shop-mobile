import React from 'react'
import{View, StyleSheet , Text , TouchableOpacity} from 'react-native'

export default function AppButton({title,onPress,color="blue" }){
    return(
       
        <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onPress}>

            
            <Text style={styles.text}>{title}</Text> 
      

        </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        borderRadius:50,
        alignItems:'center',
        padding:15,
        width:"100%",
        marginVertical:10
    },
    text:{
       color:'white',
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
    }
})