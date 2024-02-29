import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function ClientesCadastroScreen(): JSX.Element {

    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const dados = {
            nome: nome,
            celular:celular,
            email: email,
            cpf: cpf,
            dataDeNascimento: dataDeNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            password: password,
        }

        console.log(dados);
    }
    
    return (
        <ScrollView style={{width: "auto"}}>
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
            source={require('../assets/imagens/logo.png')} />
            
            <View style={styles.card}>
            <Image style={styles.logoProfissional} resizeMode="contain"
            source={require('../assets/imagens/pngtree-scissor-and-comb.png')} />
                <Text style={styles.title}>Cadastro cliente</Text>

                <TextInput style={styles.input} placeholder="Nome"
                placeholderTextColor="#151413"
                onChangeText={(textNome) => setNome(textNome)}
                />
                <TextInput style={styles.input} placeholder="Celular"
                placeholderTextColor="#151413"
                onChangeText={(textCelular) => setCelular(textCelular)}
                />
                <TextInput style={styles.input} placeholder="E-mail"
                placeholderTextColor="#151413"
                onChangeText={(textEmail) => setEmail(textEmail)}
                />
                <TextInput style={styles.input} placeholder="CPF"
                placeholderTextColor="#151413"
                onChangeText={(textCpf) => setCpf(textCpf)}
                />
                <TextInput style={styles.input} placeholder="Data de nascimento"
                placeholderTextColor="#151413"
                onChangeText={(textDataDeNascimento) => setDataDeNascimento(textDataDeNascimento)}
                />
                <TextInput style={styles.input} placeholder="Cidade"
                placeholderTextColor="#151413"
                onChangeText={(textCidade) => setCidade(textCidade)}
                />
                <TextInput style={styles.input} placeholder="Estado"
                placeholderTextColor="#151413"
                onChangeText={(textEstado) => setEstado(textEstado)}
                />
                <TextInput style={styles.input} placeholder="Pais"
                placeholderTextColor="#151413"
                onChangeText={(textPais) => setPais(textPais)}
                />
                <TextInput style={styles.input} placeholder="Rua"
                placeholderTextColor="#151413"
                onChangeText={(textRua) => setRua(textRua)}
                />
                <TextInput style={styles.input} placeholder="Numero"
                placeholderTextColor="#151413"
                onChangeText={(textNumero) => setNumero(textNumero)}
                />
                <TextInput style={styles.input} placeholder="Bairro"
                placeholderTextColor="#151413"
                onChangeText={(textBairro) => setBairro(textBairro)}
                />
                <TextInput style={styles.input} placeholder="Cep"
                placeholderTextColor="#151413"
                onChangeText={(textCep) => setCep(textCep)}
                />
                <TextInput style={styles.input} placeholder="Complemento"
                placeholderTextColor="#151413"
                onChangeText={(textComplemento) => setComplemento(textComplemento)}
                />
                <TextInput style={styles.input} placeholder="Senha"
                placeholderTextColor="#151413"
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />
                <TouchableOpacity style={styles.button}  onPress={()=>{login() }}>
                <Text style={styles.buttonText} > Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text  style={styles.forgotJoin}>Já possui conta? Entre!</Text>
            </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
            
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a03de'
    },
    logo: {
        width: 150,
        height: 110,
        marginBottom: 20,
        marginTop: 40
    },
    logoProfissional: {
        width: 80,
        height: 80,
        left:90
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 300,
        borderRadius: 20,
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
})

export default ClientesCadastroScreen;