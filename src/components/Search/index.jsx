import { TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

export function Search() {
    return (
        <View className='w-full flex-row border h-14 rounded-full items-center gap-2 px-4 bg-transparent'>
            <Feather name="search" size={24} color="#64747b" />
            <TextInput
                placeholder='Procure seu produto...'
                className='w-full h-14 flex-1 bg-transparent'
            />
        </View>
    )
}