import React, { useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import authDuck from '../../../state/ducks/auth';
import { AppDispatch } from '../../../state/store/store';
import { HeartIcon, PlayIcon } from '../../../styles/icons';

export const HomeScreen = () => {
  const { getAuthTokenThunk } = authDuck;
  const dispatch = useDispatch<AppDispatch>();
  const client_id = '1b5ad988bb2b49f69299a914945cb362';
  const client_secret = 'fbcbe099c26e4ef2bb142fd787ddf6b2';
  const value = useState(new Animated.ValueXY({ x: 0, y: 690 }))[0];

  const moveUp = () => {
    Animated.timing(value, {
      toValue: { x: 0, y: -60 },
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const moveDown = () => {
    Animated.timing(value, {
      toValue: { x: 0, y: 690 },
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    dispatch(getAuthTokenThunk({ secret: client_secret, id: client_id }));
  });

  return (
    <SafeAreaView>
      <Animated.View style={value.getLayout()}>
        <Pressable onPress={moveUp} style={styles.musicBar}>
          <View>
            <HeartIcon />
          </View>
          <View>
            <Text style={styles.text}>Kesaria</Text>
            <Text style={styles.text}>.</Text>
            <Text style={styles.text}>Arijit Singh</Text>
          </View>
          <View>
            <PlayIcon />
          </View>
        </Pressable>
        <View style={styles.musicCard}>
          <Pressable onPress={moveDown}>
            <Text>Move down</Text>
          </Pressable>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  musicBar: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#000000',
  },
  musicCard: {
    width: '100%',
    height: 750,
    borderWidth: 1,
    borderColor: 'blue',
  },
  musicInfo: {
    color: '#000000',
  },
  text: {
    color: '#000000',
  },
});
