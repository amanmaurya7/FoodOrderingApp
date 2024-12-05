import Colors from '@/constants/Colors';
import { StyleSheet,Text, View, Image } from 'react-native';
import { Product } from '../types';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps )=>{
  return (
    <View style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image} />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 10,
    borderRadius: 20,
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
