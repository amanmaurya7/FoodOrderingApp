import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams,Stack, useRouter } from 'expo-router'
import products from '@assets/data/products'
import { useState } from 'react'
import Button from '@/components/Button'
import { useCart } from '@/providers/CartProvider'
import { PizzaSize } from '@/types'

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();

  const router = useRouter()

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('XL');

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if(!product) return;
    addItem(product, selectedSize);
    router.push('/cart');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product?.name}}/>

      <Image style={styles.image} 
        source={{uri:product?.image}} 
      />

      <Text style={styles.title}>${product?.name} </Text>
      <Text style={styles.price}>${product?.price} </Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles=StyleSheet.create(
  {
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10,
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  }
})