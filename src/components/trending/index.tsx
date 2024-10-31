import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from "./foods";

export interface FoodsProps {
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
};

export function Trending() {
    const [foods, setFoods] = useState<FoodsProps[]>([]);

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.1.150:3000/foods");
            const data = await response.json();
            setFoods(data);
        }

        getFoods();
    }, [])
    return (
        <FlatList
            data={foods}
            renderItem={({ item }) => <CardHorizontalFood food={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}