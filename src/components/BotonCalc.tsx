import { View, Text } from 'react-native'
import React from 'react'
import styles from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
}

const BotonCalc = ( {texto, color = "#2D2D2D"}: Props) => {
  return (
    <View 
      style= {[
        styles.boton, {
        backgroundColor: color
      }]}
    >
      <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  )
}

export default BotonCalc