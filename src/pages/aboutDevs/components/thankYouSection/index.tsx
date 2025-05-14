import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles';

export const ThankYouSection = () => (
  <View style={styles.content}>
    <Text style={styles.thankYouText}>
      Com gratidão e entusiasmo, nós, um grupo de jovens programadores, dedicamos este projeto à comunidade educacional.
      Cada linha de código representa nosso compromisso com a excelência técnica e nosso desejo de contribuir para um futuro
      onde a tecnologia e a educação caminham lado a lado.
    </Text>
    <Text style={styles.subText}>
      Unidos pelo propósito de aprender, crescer e inovar, apresentamos com orgulho o fruto de nossa colaboração e
      esforço coletivo.
    </Text>
  </View>
);