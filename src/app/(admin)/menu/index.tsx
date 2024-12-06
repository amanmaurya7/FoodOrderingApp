import { FlatList,View } from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';
import { Stack } from 'expo-router';

export default function MenuScreen() {
  return(
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
      />
      <Stack.Screen options={{title:'Menu'}}/>
    </View>
  )
}