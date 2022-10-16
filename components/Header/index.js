import React from 'react'
import { Image, View } from 'react-native'
import { Texto } from './styles'

function Header() {
    return (
        <View>
            <Texto></Texto>
            <Image source={{ uri: 'https://www.iconpacks.net/icons/2/free-coin-dollar-icon-2686-thumb.png' }} style={{ width: 100, height: 100, borderRadius: 70 }} />
            <Texto>
                UniCash
            </Texto>
        </View>
    )
}

export default Header