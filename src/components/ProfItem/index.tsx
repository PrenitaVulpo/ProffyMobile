import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import zapIcon from '../../assets/images/icons/whatsapp.png'

import style from './style'
 

function ProfItem(){
    return(
        <View style={style.container}>
            <View style={style.profile}>
                <Image 
                source={{uri:'https://vignette.wikia.nocookie.net/deptheaven/images/3/3c/Milanor_2.jpg/revision/latest?cb=20120615235105'}}
                style={style.avatar}/>

                <View style={style.profileInfo}>
                    <Text style={style.name}>Milanor</Text>
                    <Text style={style.subject}>Geografia</Text>
                </View>
            </View>
            <Text style={style.bio}>
                I was Woried for a sec
            </Text>

            <View style={style.footer}>
                <Text style={style.price}>
                    Proço/hora {'   '}
                    <Text style={style.priceValue}>R$20,00</Text>
                </Text>
                <View style={style.buttonsContainer}>
                    <RectButton style={[style.favoriteButton, style.favorited]}>
                        {/*<Image source={heartIcon}*/}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={style.contact}>
                        <Image source={zapIcon}/>
                        <Text style={style.contactText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default ProfItem;