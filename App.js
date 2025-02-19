import React,{useState} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App(){

    const[numero,setNumero]= useState(0)
    const[botao,setBotao]=useState('Iniciar')
    const[ultimo,setUltimo]=useState(null)
    
    function iniciar(){
        if(timer !== null){
            clearInterval(timer);
            timer = null;
            setBotao('Iniciar')
        }else{
            timer = setInterval(() =>{
                ss++;

                if( ss == 60){
                    ss = 0;
                    mm++
                }
                if (mm == 60){
                    mm = 0;
                    hh++
                }
                let format = 
                (hh<10 ? '0' + hh:hh) + ':' +
                (mm<10 ? '0' + mm:mm) + ':' +
                (ss<10 ? '0' + ss:ss)

                setNumero(format)


            },1000);
            
            setBotao('Parar')
        }
    }

    function reiniciar(){
        if(timer !== null){
            clearInterval(timer)
            timer = null;
        }
        setUltimo(numero)
        setNumero(0)
        ss = 0;
        mm = 0;
        hh = 0
        
        setBotao('Iniciar')
    }

    return(
        <View style = {styles.container}>
            <Image source = {require('./assets/cronometro.png')}/>
            
            <Text style = {styles.taimer}>{numero}</Text>
           
           <View style = {styles.btnArea}>
           
           <TouchableOpacity style = {styles.btn}  onPress={iniciar}>           
               <Text style = {styles.btnTexto}> {botao}</Text>                
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.btn} onPress={reiniciar}>           
               <Text  style = {styles.btnTexto}> Reiniciar </Text>                
            </TouchableOpacity>

           </View>

           <View style = {styles.areaUltima}>
               <Text style = {styles.textoCorrida}> {ultimo ? 'ultimo tempo: ' + ultimo: ' '} </Text>
           </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#008b8b'
    },
    taimer:{
        marginTop:-160,
        fontSize:45,
        fontWeight:'bold',
        color:'#fff'
    },
    btnArea:{
        flexDirection:'row',
        marginTop:130,
        height:40,
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        height:50,
        margin:17,
        borderRadius:9
    },
    btnTexto:{
        fontSize:20,
        fontWeight:'bold',
        color:'#008b8b'
    },
    areaUltima:{
        marginTop:40,
    },
    textoCorrida:{
        fontSize:20,
        color: '#fff',
        fontStyle:'italic'
    }


   
})