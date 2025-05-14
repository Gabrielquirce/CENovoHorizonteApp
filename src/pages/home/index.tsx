import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Header } from './components/header';
import { Card } from './components/card';
import { LogoutButton } from './components/logoutButton';
import { useExitConfirmation } from '../../../src/hooks/useExitConfirmation';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { confirmExit } = useExitConfirmation();

  return (
    <View style={styles.container}>
      <Header 
        title="C. E. Novo Horizonte" 
        logo={require('../../../assets/logo.png')} 
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Card
          title="Pré Matrícula"
          subtitle="Cadastre os dados do aluno"
          onPress={() => navigation.navigate('Form')}
        />

        <Card
          title="Matrículas"
          subtitle="Acompanhe os alunos pré matriculados"
          onPress={() => navigation.navigate('Students')}
        />

        <Card
          title="Sobre a Instituição"
          subtitle="Informações sobre a escola e contatos"
          onPress={() => navigation.navigate('AboutInstitution')}
        />

        <Card
          title="Sobre Nós"
          subtitle="Informações sobre os desenvolvedores"
          onPress={() => navigation.navigate('AboutDevelopers')}
        />

        <LogoutButton onPress={confirmExit} />
      </ScrollView>
    </View>
  );
}