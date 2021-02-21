import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { CarouselItem } from '../types/types';
import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';

export const carouselData: Array<CarouselItem> = [
  {
    render: () => (
      <Text weight="bold" style={styles.title}>
        {t('Lierferung in 30 Minuten.')}
      </Text>
    ),
    image:
      'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    image:
      'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
];

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    color: COLORS.white,
    fontSize: FONT_SIZE.extraLarge,
  },
});
