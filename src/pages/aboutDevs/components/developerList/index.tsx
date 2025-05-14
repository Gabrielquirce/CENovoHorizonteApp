import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from '../../styles';

type Developer = {
  name: string;
  github: string;
  linkedin: string;
};

type Props = {
  developers: Developer[];
};

export const DeveloperList = ({ developers }: Props) => (
  <View style={styles.developersSection}>
    <Text style={styles.sectionTitle}>Nossa Equipe</Text>
    {developers.map((dev, index) => (
      <View key={index} style={styles.devContainer}>
        <Text style={styles.devName}>{dev.name}</Text>
        <View style={styles.linksContainer}>
          <Text style={styles.devLink} onPress={() => Linking.openURL(dev.github)}>
            GitHub
          </Text>
          <Text style={[styles.devLink, styles.linkedin]} onPress={() => Linking.openURL(dev.linkedin)}>
            LinkedIn
          </Text>
        </View>
      </View>
    ))}
  </View>
);