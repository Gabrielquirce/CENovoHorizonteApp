import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DevsHeader } from './components/devsHeader';
import { ThankYouSection } from './components/thankYouSection';
import { DeveloperList } from './components/developerList';
import { BackButton } from './components/backButton';
import { styles } from './styles';

const developers = [
        {
      name: 'Beatriz Hyath Carvalho',
      github: 'https://github.com/beatrizhyath',
      linkedin: 'https://www.linkedin.com/in/beatriz-hyath-3205aa295/'
    },
    {
      name: 'Gabriel Nogueira Pereira',
      github: 'https://github.com/Gabrielquirce',
      linkedin: 'https://www.linkedin.com/in/gabrielnogueira20041218/'
    },
    {
      name: 'Hugo Figueiredo Ottati Silva',
      github: 'https://github.com/Hugo-Ottati',
      linkedin: 'https://www.linkedin.com/in/hugo-ottati/'
    },
    {
      name: 'João Pedro Daumas Correa',
      github: 'https://github.com/JPeeeedrs',
      linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-pedro-daumas-correa-b3196b25b/'
    },
    {
      name: 'João Pedro Sciammarella Pereira Paes',
      github: 'https://github.com/jppaesdev',
      linkedin: 'http://www.linkedin.com/in/jo%C3%A3o-pedro-sciammarella-pereira-paes-34157b294'
    },
    {
      name: 'Kauan da Costa Moraes',
      github: 'https://github.com/KauanCosta',
      linkedin: 'https://www.linkedin.com/in/KauanCosta01/'
    },
    {
      name: 'Lívia Cardoso Caldeira',
      github: 'https://github.com/liviacaldeira',
      linkedin: 'https://www.linkedin.com/in/l%C3%ADvia-cardoso-caldeira-ab4154258/'
    },
    {
      name: 'Matheus de Oliveira Paim',
      github: 'https://github.com/MatheusPaimX',
      linkedin: 'https://www.linkedin.com/in/matheus-de-oliveira-paim-936561269/'
    },
    {
      name: 'Rebeca Vianna Francklin',
      github: 'https://github.com/becafrancklin',
      linkedin: 'https://www.linkedin.com/in/rebecafrancklin/'
    },
    {
      name: 'Vitor Mendes Moreira Gallo',
      github: 'https://github.com/VitorMendesGallo',
      linkedin: 'https://www.linkedin.com/in/vitor-mendes-gallo/'
    }
];

export default function AboutDevs() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <DevsHeader />
      <ThankYouSection />
      <DeveloperList developers={developers} />
      <BackButton onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}