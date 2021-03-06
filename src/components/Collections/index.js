import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
    View,
    Text
} from '../../styled';

import p1 from '../../assets/images/col1.jpg';
import p2 from '../../assets/images/col2.jpg';
import p3 from '../../assets/images/col3.jpg';
import p4 from '../../assets/images/col4.jpg';
import p5 from '../../assets/images/col5.jpg';
import p6 from '../../assets/images/col6.jpg';
import p7 from '../../assets/images/col7.jpg';
import p8 from '../../assets/images/col8.jpg';
import p9 from '../../assets/images/col9.jpg';
import p10 from '../../assets/images/col10.jpg';

const CollectionItem = styled(View)`
    &:hover {
        box-shadow: -1px -2px 25px 7px rgba(255, 112, 106, 0.4);
        transform: scale(1.03)
    }
`;
const Link = styled(NavLink) `
   text-decoration: none
`

class Collections extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: [
                {
                    id: 2,
                    src: p2,
                    title: "blouses",
                },
                {
                    id: 1,
                    src: p1,
                    title: "sweaters",
                },
                {
                    id: 5,
                    src: p5,
                    title: "tunicas",
                },
                {
                    id: 9,
                    src: p9,
                    title: "dresses",
                },
                {
                    id: 7,
                    src: p7,
                    title: "sets",
                },
                {
                    id: 3,
                    src: p3,
                    title: "cardigans",
                },
                {
                    id: 10,
                    src: p10,
                    title: "gilets",
                },
                {
                    id: 4,
                    src: p4,
                    title: "coats",
                },
                {
                    id: 8,
                    src: p8,
                    title: "scarfs-shawls",
                },
                {
                    id: 6,
                    src: p6,
                    title: "panchos",
                }
            ],
        }
    };

    renderItem = () => (
        this.state.item.map( (item) => (
            <Link key={item.id} to={`/CollectionIntro/${item.id}`}>
                <CollectionItem bgImg={item.src}
                    flex
                    tr='0.4s'
                    w='245px'
                    h='410px'
                    bRad='5px'
                    w_m='215px'
                    h_m='380px'
                    w_s='175px'
                    h_s='340px'
                    justC='center'
                    bgSize='cover'
                    bgPos='center'
                    alignI='flex-end'
                    bgRep='no-repeat'
                    m='20px 10px 0px 0px'
                    m_m='20px 5px 0px 0px'
                    m_s='20px 5px 0px 0px'
                >
                    <View flex justC='center' bgColor='rgba(0,0,0,0.4)' w='100%'>
                        <Text fontW='700' 
                            c='white' 
                            p='10px 0'
                            tTf='uppercase' 
                            fontSize='27px' 
                            fontSize_m='23px' 
                            fontSize_s='19px' 
                        >
                            {item.title}
                        </Text>
                    </View>
                </CollectionItem>
            </Link>
        ) )
    );

    render(){
        return(
            <View id='collections' flex justC='center' p='100px 0px 50px 0px' bT='solid 1px rgba(170,170,170,0.5)'>
                <View w='80%' >
                    <View tAlign='center' fontSize='32px' op='0.5'>COLLECTIONS</View>
                    <View flex fW='wrap' justC='space-around'>
                        {this.renderItem()}
                    </View>
                </View>
            </View>
        )
    }
}

export default Collections;