import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const News = () => {
  const newsData = [
    {
      id: 1,
      title: 'Nueva noticia 1',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquam lobortis. Duis ullamcorper consectetur odio, at maximus arcu semper non. Donec condimentum metus at est malesuada sollicitudin',
      image: 'https://estaticos-cdn.sport.es/clip/03762b72-7a62-4f34-99bc-daa11b7e338d_alta-libre-aspect-ratio_default_0.jpg',
    },
    {
      id: 2,
      title: 'Nueva noticia 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquam lobortis. Duis ullamcorper consectetur odio, at maximus arcu semper non. Donec condimentum metus at est malesuada sollicitudin',
      image: 'https://i0.wp.com/www.exploorperu.com/wp-content/uploads/2022/12/8-Machu-Picchu-Facts-You-Didnt-Know-blog-exploor-peru.png?fit=775%2C480&ssl=1',
    },
    {
      id: 3,
      title: 'Nueva noticia 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquam lobortis. Duis ullamcorper consectetur odio, at maximus arcu semper non. Donec condimentum metus at est malesuada sollicitudin',
      image: 'https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-12/obelisco.jpg?itok=lUOICvYa',
    },
    {
      id: 4,
      title: 'Nueva noticia 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare aliquam lobortis. Duis ullamcorper consectetur odio, at maximus arcu semper non. Donec condimentum metus at est malesuada sollicitudin',
      image: 'https://super-static-assets.s3.amazonaws.com/262b8847-b4d7-4c05-8a11-dfdf578b7f50/uploads/logo/2526ca10-a0d8-437d-970e-19dd54132058.png',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Noticias de hoy</Text>
      </View>
      {newsData.map((news) => (
        <View key={news.id} style={styles.newsContainer}>
          <Image style={styles.newsImage} source={{ uri: news.image }} />
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsBody}>{news.body}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom:60,
  },
  newsContainer: {
    marginBottom: 20,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  newsContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: -30,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsBody: {
    fontSize: 16,
    lineHeight: 22,
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default News;
