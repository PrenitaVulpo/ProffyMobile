import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import zapIcon from '../../assets/images/icons/whatsapp.png'

import style from './style'
 
export interface Prof{
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: string;
};

interface ProfItemProps{
    prof: Prof;
    favorited: boolean;
}

const ProfItem:React.FC<ProfItemProps> = ({prof, favorited}) => {
    const [isFavorited, setIsFavorited] = useState(favorited);
    async function toggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorite');
        let favoritesArray = [];
        if (favorites){
            favoritesArray = JSON.parse(favorites);
        }
        if (isFavorited){
            const favoriteIndex = favoritesArray.findIndex((profItem: Prof) => {
                return profItem.id === prof.id;
            });
            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);
        } else{
            
            favoritesArray.push(prof);
            setIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

    }
    function linktoZap(){
        Linking.openURL(`whatsapp://send?text=Olá, te encontrei no Proofy!&phone=+55${prof.whatsapp}`)
    }
    return(
        <View style={style.container}>
            <View style={style.profile}>
                <Image 
                source={{uri:prof.avatar}}
                style={style.avatar}/>

                <View style={style.profileInfo}>
                    <Text style={style.name}>{prof.name}</Text>
                    <Text style={style.subject}>{prof.subject}</Text>
                </View>
            </View>
            <Text style={style.bio}>
                {prof.bio}
            </Text>

            <View style={style.footer}>
                <Text style={style.price}>
                    Proço/hora {'   '}
                    <Text style={style.priceValue}>R$ {prof.cost}</Text>
                </Text>
                <View style={style.buttonsContainer}>
                    <RectButton 
                        onPress={toggleFavorite}
                        style={[style.favoriteButton, 
                        isFavorited ? style.favorited : {}]}>
                        {isFavorited ? <Image source={heartIcon}/> : <Image source={unfavoriteIcon}/>}
                    </RectButton>
                    <RectButton style={style.contact} onPress={linktoZap}>
                        <Image source={zapIcon}/>
                        <Text style={style.contactText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default ProfItem;