import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Products = () => {
  const [products, setProducts] = useState([]);

  /* Como estuve utilizando un simulador para correrlo en mi iphone, se tiene que poer el IP de mi PC, si no, iría localhost*/
  useEffect(() => {
    fetch('http://192.168.1.56:8000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
      <Text style={styles.title}>Products</Text>
      {products.map(product => (
        <View key={product.id} style={styles.product}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;
