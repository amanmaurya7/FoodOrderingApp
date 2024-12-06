import Colors from '@/constants/Colors';
import { StyleSheet,Text, View, Image,Pressable } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';
import ProductDetailsScreen from '@/app/(tabs)/menu/[id]';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps )=>{
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image} 
      resizeMode='contain'
      />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 10,
    borderRadius: 20,
    flex:1,
    maxWidth:'50%',
    margin:10,
   },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  price:{
    fontSize: 12,
    color: Colors.light.tint,
  }
});
