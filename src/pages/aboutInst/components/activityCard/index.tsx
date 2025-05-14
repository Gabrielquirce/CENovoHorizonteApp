import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../../styles';

export const ActivityCard = ({ image, title, text }: { 
  image: any;
  title: string;
  text: string;
}) => (
  <View style={styles.activityCard}>
    <Image source={image} style={styles.activityImage} />
    <View style={styles.activityTextContainer}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityText}>{text}</Text>
    </View>
  </View>
);