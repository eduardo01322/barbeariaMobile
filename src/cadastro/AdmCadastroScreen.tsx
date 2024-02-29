import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function AdmCadastroScreen(): JSX.Element {

const[nome,setNome]=useState("");
const[email,setEmail]=useState("");
const[cpf,setCpf]=useState("");
const[passsord,setPassword]=useState("");

function login(){
    const dados={
        nome:nome,
        email:email,
        cpf:cpf,
        passsord:passsord,
    }

console.log(dados);

}

return (

    <View style={styles.container}>
<Image style={styles.logo} resizeMode='contain' 
source={require('../assets/imagens/logo.png')} />
        

        <View style={styles.card}>
        <Image style={styles.logoAdm} resizeMode='contain' source={require('../assets/imagens/ADM.png')} />
            <Text style={styles.title}>Cadastro Adiministrador</Text>
            
            <TextInput style={styles.input} placeholder="Nome"
             placeholderTextColor={"#151413"}  
            onChangeText={(textNome)=>setNome(textNome)}   ></TextInput>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor={"#151413"}  
            onChangeText={(textEmail)=>setEmail(textEmail)}   ></TextInput>
            <TextInput style={styles.input} placeholder="Cpf" placeholderTextColor={"#151413"}  
            onChangeText={(textCpf)=>setCpf(textCpf)}   ></TextInput>
           <TextInput style={styles.input} placeholder="Senha" placeholderTextColor={"#151413"}  
           onChangeText={(textPassword)=>setPassword(textPassword)} secureTextEntry  ></TextInput>

            <TouchableOpacity style={styles.button}  onPress={()=>{login() }}>
                <Text style={styles.buttonText} > Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text  style={styles.forgotJoin}>Já possui conta? Entre!</Text>
            </TouchableOpacity>

        </View>
    </View>
);
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a03de'
    },
    logo: {
        width: 110,
        height: 110,
        marginBottom: 20,
        marginTop: -80
    },
    logoAdm: {
        width: 80,
        height: 80,
        left:90
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#151413',
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        backgroundColor: '#D7D4D1',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black'
    },
    button: {
        backgroundColor: '#6a03de',
        height: 40,
        borderRadius: 8
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    forgotJoin: {
        color: '#6a03de',
        textAlign: 'center',
        marginTop: 10
    }
});

export default AdmCadastroScreen;