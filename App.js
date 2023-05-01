import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import Video from 'react-native-video';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <Video
        source={{ uri: 'http://cdn25.live247stream.com/*********/tv/playlist.m3u8' }}
        style={styles.video}
        resizeMode="contain"
        onLoad={handleLoad}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // set the zIndex to make sure the loader appears on top of the video
  },
});