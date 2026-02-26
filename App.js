import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TelaLogin({ navigation }) {

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (

    <View style={styles.container}>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png',
        }}
      />
      <View style={styles.container_inputs}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />

      </View>
      <View style={styles.container_btn}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ListaDeContatos')}>
          <Text style={styles.texto}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.texto}>Cadastre-se</Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('EsqueciSenha')}>Esqueceu a senha</Text>
      </View>
    </View>
  );
}


function TelaCadastro() {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <View style={styles.container}>

      <View style={styles.container_inputs}>

        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />
      </View>

      <View style={styles.container_btn}>

        <TouchableOpacity style={styles.botao} onPress={() => alert('Botão de cadastro clicado!')}>
          <Text style={styles.texto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function TelaEsqueciSenha() {
  const [email, setEmail] = React.useState('');
  return (
    <View style={styles.container}>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.container_btn}>

        <TouchableOpacity style={styles.botao} onPress={() => alert('Botão de recuperação de senha clicado!')}>
          <Text style={styles.texto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ListadeContatos({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CadastroDeContato')}>
          <Text style={{ fontSize: 25, marginRight: 15}}>+</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const contatos = [
    { id: '1', nome: 'Laura', telefone: '81 98542-2323', email: 'lauragarota100porcentohetero@gmail.com' },
    { id: '2', nome: 'Mely', telefone: '92 97789-9876',  email: 'morangodonordeste@gmail.com' },
    { id: '3', nome: 'Duarda', telefone: '11 94002-8922', email: 'xaolinmatadordeporco@gmail.com' },
    { id: '4', nome: 'Ju', telefone: '21 98845-9090', email: 'acachorramaisburradessecalcadao@gmail.com' },
    { id: '5', nome: 'Mia', telefone: '69 93334-0102', email: 'akamechan121212@gmail.com' },
 
  ]; 
  return (
    <View style={{ flex: 1, backgroundColor: '#FAEBD7' }}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemLista}
            onPress={() =>
              navigation.navigate('AlteracaoDeContatos', {
                nome: item.nome,
                telefone: item.telefone,
                email: item.email,
              })
            }
          >
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.telefone}>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function AlteracaodeContatos({ route }) {

  const { nome, telefone, email } = route.params;

  const [novoNome, setNovoNome] = React.useState(nome);
  const [novoTelefone, setNovoTelefone] = React.useState(telefone);
  const [novoEmail, setNovoEmail] = React.useState(email);

  return (
    <View style={styles.container}>

      <View style={styles.container_inputs}>

        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoNome}
          value={novoNome}
        />

        <Text>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoTelefone}
          value={novoTelefone}
          keyboardType="phone-pad"
        />

         <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoEmail}
          value={novoEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />


        <TouchableOpacity
          style={styles.botao}
          onPress={() => alert('Contato atualizado!')}
        >
          <Text style={styles.texto}>Salvar Alterações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: 'red' }]}
          onPress={() => alert('Contato excluído!')}
        >
          <Text style={styles.texto}>Excluir</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

function CadastrodeContato({ navigation }){

  const [novoNome, setNovoNome] = React.useState('');
  const [novoTelefone, setNovoTelefone] = React.useState('');
  const [novoEmail, setNovoEmail] = React.useState('');

  return (
    <View style={styles.container}>

      <View style={styles.container_inputs}>

        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoNome}
          value={novoNome}
        />

        <Text>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoTelefone}
          value={novoTelefone}
          keyboardType="phone-pad"
        />

         <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNovoEmail}
          value={novoEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />


      <TouchableOpacity
          style={styles.botao}
          onPress={() => alert('Conato salvo na lista de contatos!')}
        >
          <Text style={styles.texto}>Salvar Contato</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="EsqueciSenha" component={TelaEsqueciSenha} />
        <Stack.Screen name="ListaDeContatos" component={ListadeContatos} />
        <Stack.Screen name="AlteracaoDeContatos" component={AlteracaodeContatos} />
        <Stack.Screen name="CadastroDeContato" component={CadastrodeContato} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 66,
    height: 58,
  },

  input: {
    backgroundColor: '#fff',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  botao: {
    backgroundColor: '#149e02ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },

  container_btn: {
    gap: 10,
    marginTop: 10,
    width: 200,
  },

  container_inputs: {
    width: 200,
    marginTop: 20,
  },

  itemLista: {
  padding: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  backgroundColor: '#fff',
},

nome: {
  fontSize: 18,
  fontWeight: 'bold',
},

telefone: {
  fontSize: 16,
  color: 'gray',
},

});