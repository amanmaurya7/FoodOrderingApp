import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useLocalSearchParams,Stack } from 'expo-router'
import products from '@assets/data/products'
import { useState } from 'react'
import Button from '@/components/Button'

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('XL');

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn('Added to cart');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product?.name}}/>

      <Image style={styles.image} 
        source={{uri:product?.image}} 
      />

      <Text>Select size</Text>
      <View style={styles.sizes}>
      {sizes.map((size)=>(
        <Pressable 
        onPress={()=>{
          setSelectedSize(size)
        }}
        
        style={[
          styles.size, 
          {
            backgroundColor:selectedSize==size ? 'gainsboro' : 'white',},
        ]} 
          key={size}>
        <Text style={[styles.sizeText,
          {
            color:selectedSize==size ? 'black' : 'gray',},
        ]}
        >{size}</Text>
        </Pressable>
      ))}
      </View>

      <Text style={styles.price}>${product?.price} </Text>
      <Button onPress={addToCart} text='Add to cart'/>
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
    marginTop:'auto'
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10,
  },
  size:{
    width:50,
    aspectRatio:1,
    backgroundColor:'#e3e3e3',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  sizeText:{
    fontSize:20,
    fontWeight:'bold',
  }
})