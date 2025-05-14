import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../../styles';

export const DirectorQuote = ({ quote, image, name, title }: { 
  quote: string;
  image: any;
  name: string;
  title: string;
}) => (
  <View style={[styles.section, styles.directorSection]}>
    <Text style={styles.quote}>{quote}</Text>
    <Image source={image} style={styles.directorImage} />
    <Text style={styles.directorName}>{name}</Text>
    <Text style={styles.directorTitle}>{title}</Text>
  </View>
);