import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../../styles';

export const SectionWithImage = ({ text, image }: { text: string; image: any }) => (
  <View style={styles.missionContainer}>
    <Text style={styles.text}>{text}</Text>
    <Image source={image} style={styles.missionImage} />
  </View>
);