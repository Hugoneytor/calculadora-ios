import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  width?: boolean;
  action: ( numeroTexto:string )=> void;
}

const BotonCalc = ( {texto, color = "#2D2D2D", width = false, action}: Props) => {
  return (
    <TouchableOpacity 
      onPress={()=>action(texto)}
    >
      <View 
        style= {[
          styles.boton, {
          backgroundColor: color,
          width: (width) ? 180 : 80,
        }]}
      >
        <Text style={{
          ...styles.botonTexto,
          color: (color === "#9B9B9B") ? 'black' : 'white'
          }
        }>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BotonCalc