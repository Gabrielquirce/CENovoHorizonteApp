import React from 'react';
import { ScrollView, View, Text, Image, } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Header } from '../home/components/header';
import { SectionTitle } from './components/sectionTitle';
import { SectionWithImage } from './components/sectionWithImage';
import { DirectorQuote } from './components/directorQuote';
import { ActivityCard } from './components/activityCard';
import { FooterAbout } from './components/footerAbout';
import { styles } from './styles';


const images = {
  logo: require('../../../assets/logo.png'),
  profGenerica: require('../../../assets/profGenerica.jpg'),
  diretora: require('../../../assets/diretora.png'),
  ensinoInfantil: require('../../../assets/ensinoInfantil.jpg'),
  fundamental1: require('../../../assets/fundamental.jpg'),
  fundamental2: require('../../../assets/fundamental2.jpg'),
  ballet: require('../../../assets/ballet.png'),
  computadores: require('../../../assets/computadores.png'),
  capoeira: require('../../../assets/capoeira.png'),
  jiujitsu: require('../../../assets/jiujitsu.png'),
  EF: require('../../../assets/EF.png')
};

const segments = [
  {
    image: images.ensinoInfantil,
    title: 'Educação Infantil',
    text: 'Desenvolvimento inicial com foco em brincadeiras e aprendizado, estimulando criatividade e socialização.'
  },
  {
    image: images.fundamental1,
    title: 'Ensino Fundamental I',
    text: 'Exploração do universo das letras e números, com aventuras nas operações matemáticas básicas.'
  },
  {
    image: images.fundamental2,
    title: 'Ensino Fundamental II',
    text: 'Estímulo ao crescimento intelectual com abordagem interdisciplinar e multidisciplinar.'
  }
];

const activities = [
  {
    image: images.ballet,
    title: 'Ballet',
    text: 'Trabalho de postura, equilíbrio e coordenação em um ambiente acolhedor e divertido.'
  },
  {
    image: images.computadores,
    title: 'Informática',
    text: 'Desenvolvimento do pensamento lógico e uso responsável da tecnologia.'
  },
  {
    image: images.capoeira,
    title: 'Capoeira',
    text: 'Aula dinâmica que une arte marcial, música e cultura brasileira, promovendo disciplina e coordenação motora.'
  },
  {
    image: images.jiujitsu,
    title: 'Jiu-Jítsu',
    text: 'Desenvolve autoconfiança, respeito e técnicas de defesa pessoal em ambiente seguro e supervisionado.'
  },
  {
    image: images.EF,
    title: 'Educação Física',
    text: 'Promoção de hábitos saudáveis através de esportes e atividades físicas diversificadas.'
  }
];

export default function AboutInst() {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView style={styles.container}>
      <Header
        title="Centro Educacional Novo Horizonte" 
        logo={images.logo}
      />

      {/* Seção Missão */}
      <View style={styles.section}>
        <SectionTitle>Nossa Missão</SectionTitle>
        <SectionWithImage
          text="Proporcionar um ambiente motivador para que as potencialidades de cada indivíduo sejam expressadas, adquirindo conhecimentos únicos e novas vivências de acordo com o dia a dia nas salas de aula."
          image={images.profGenerica}
        />
      </View>

      {/* Citação da Diretora */}
      <DirectorQuote
        quote="A instituição planeja estrategicamente para o ano letivo projetos inovadores e multidisciplinares para estimular o ensino-aprendizado e promover relações interpessoais."
        image={images.diretora}
        name="Vanessa Lima"
        title="Diretora"
      />

      {/* Seção Segmentos */}
      <View style={styles.section}>
        <SectionTitle>Nossos Segmentos</SectionTitle>
        
        {segments.map((segment, index) => (
          <View key={index} style={styles.segmentCard}>
            <Image 
              source={segment.image} 
              style={styles.segmentImage} 
              resizeMode="cover"
            />
            <Text style={styles.segmentTitle}>{segment.title}</Text>
            <Text style={styles.segmentText}>{segment.text}</Text>
          </View>
        ))}
      </View>

      {/* Seção Atividades Extras */}
      <View style={styles.section}>
        <SectionTitle>Atividades Extras</SectionTitle>
        
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            image={activity.image}
            title={activity.title}
            text={activity.text}
          />
        ))}
      </View>

      <FooterAbout onPressBack={() => navigation.navigate('HomePage')} />
    </ScrollView>
  );
}
