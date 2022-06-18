import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';

const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('100');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = ()=>{
    setNumero('0');
  }

  const armarNumero = ( numeroTexto:string )=>{
    // Verificar si ya hay un punto decimal
    if(numero.includes('.') && numeroTexto === '.'){
      return 
    }

    if(numero.startsWith('0') || numero.startsWith('-0')){
      //Ver si es el primer punto decima
      if(numeroTexto === '.'){
        setNumero(numero + numeroTexto)
      }else if( numeroTexto === '0' && numero.includes('.')){
        //Evaluar si es otro 0 y hay un punto
        setNumero(numero + numeroTexto)
      }else if(numeroTexto !== '0' && !numero.includes('.')){
        //Evaluar si es diferente de 0 y no tiene un punto
        setNumero( numeroTexto )
      }else if(numeroTexto === '0' && numero.includes('.')){
        //Evitar 000.0
        setNumero( numero )
      }else{
        setNumero(numero + numeroTexto)
      }

    }else{
      setNumero(numero + numeroTexto)
    }
  }

  const positivoNegativo = ()=>{
    if(numero.includes('-')){
      setNumero( numero.replace('-', ''))
    }else{
      setNumero( '-' + numero)
    }
  }

  const btnDel = () => {
    if(numero.length === 1 || (numero.length === 2 && numero.includes('-'))){
      setNumero('0')
    }else{
      setNumero(numero.slice(0 , -1))
    }
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text 
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='C' color="#9B9B9B" action={limpiar}/>
        <BotonCalc texto='+/-' color="#9B9B9B" action={positivoNegativo}/>
        <BotonCalc texto='del' color="#9B9B9B" action={btnDel}/>
        <BotonCalc texto='/' color="#FF9426" action={limpiar}/>
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='7' action={armarNumero}/>
        <BotonCalc texto='8' action={armarNumero}/>
        <BotonCalc texto='9' action={armarNumero}/>
        <BotonCalc texto='x' color="#FF9426" action={limpiar}/>
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='4' action={armarNumero}/>
        <BotonCalc texto='5' action={armarNumero}/>
        <BotonCalc texto='6' action={armarNumero}/>
        <BotonCalc texto='-' color="#FF9426" action={limpiar}/>
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='1' action={armarNumero}/>
        <BotonCalc texto='2' action={armarNumero}/>
        <BotonCalc texto='3' action={armarNumero}/>
        <BotonCalc texto='+' color="#FF9426" action={limpiar}/>
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto='0' width action={armarNumero}/>
        <BotonCalc texto='.' action={armarNumero}/>
        <BotonCalc texto='=' color="#FF9426" action={armarNumero}/>
      </View>
    </View>
  )
}

export default CalculadoraScreen