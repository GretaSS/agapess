import React from 'react';
import styled from 'styled-components';
import logoWhite from '../../assets/images/logoWhite.png';
import logoGray from '../../assets/images/logoGray.png';
import { NavLink } from 'react-router-dom';
import {TiSocialFacebookCircular as Fb, TiSocialInstagramCircular as Insta} from "react-icons/ti";
import Flip from 'react-reveal/Flip';

import {
    View,
} from '../../styled';

const SocialLink = styled.a`
    font-size: 29px;
    ${ (props) => props.headerType === 2 ? `color: white` : `color: gray` }
`;
const Link = styled.a`
    margin: 15px;
    padding: 5px 8px;
    color: gray;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
    ${ (props) => props.headerType === 2 && `color: white` }
    transition: .2s;
    &:hover{
        text-shadow: 2px 2px 4px rgba(0,0,0,.4);
        // border-radius: 27px;
        // box-shadow: -1px -3px 10px 3px #f8f8f866;
        // background: linear-gradient(341deg,rgba(255,13,13,0.42) 8%,rgba(235,0,0,0.78) 44%,rgba(255,104,104,0.09) 86%);
    }
`;

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgcolor: 'rgba(255,255,255,0.2)',
            headerType: 1,
        }
    }
    static defaultProps = {
        showMenu: true
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if ( window.scrollY >= 50 ){
                this.setState(() => ({
                    bgcolor: "#ff706a",
                    headerType: 2,
                })
                )
            }
            else {
                this.setState(() => ({
                    bgcolor: "rgba(255,255,255,0.2)",
                    headerType: 1
                })
                )
            }
        });
    }
    scrollHome = () => {
        window.scrollTo(0,0)
    }
    render(){
        const { headerType } = this.state
        return(
            <View flex 
                z='99'
                w='100%'
                m="0 auto"
                p="15px 0"
                p_m="10px 0 0 0"
                p_s="5px 0 0 0"
                pos='fixed'
                justC='center'
                alignI='center'
                boxS='border-box'
                bgColor={this.state.bgcolor}
                boxSh='0px 11px 32px -9px rgba(0, 0, 0, 0.4)'
            >
                <View w='80%' flex justC='space-between' alignI="center" fW_m="wrap" fW_s='wrap'>
                    <Flip left>
                        <View>
                            <NavLink to='/'>
                                <View onClick={this.scrollHome}
                                    h='40px'
                                    w='105px'
                                    bgPos='center'
                                    bgSize='contain'
                                    bgRep='no-repeat'
                                    bgImg={ headerType === 2 ? logoWhite : logoGray }
                                />
                            </NavLink>
                        </View>
                    </Flip>
                    { this.props.showMenu && (
                        <View flex 
                            order_m='1' 
                            order_s='1'
                            justC='center'
                            alignI='center' 
                            fontSize='14.5px' 
                            fontSize_m='13px' 
                            fontSize_s='10px' 
                            m_m="10px 0px 10px 0px" 
                            m_s="10px 0px 10px 0px" 
                        >
                            <Flip left cascade>
                                <View><Link headerType={headerType} href='#about'>About</Link></View>
                                <View><Link headerType={headerType} href='#collections'>Collections</Link></View>
                                <View><Link headerType={headerType} href='#contact'>Contact</Link></View>
                            </Flip>
                        </View>
                    ) }
                    <View flex justC="space-between" alignI='center'>
                        <View m='10px' m_m="5px 5px 0px 0px" m_s="2px 2px 0px 0px">
                            <SocialLink headerType={headerType} href='#'>
                                <Fb/>
                            </SocialLink>
                        </View>
                        <View m='10px' m_m="5px 5px 0px 0px" m_s="2px 2px 0px 0px">
                            <SocialLink headerType={headerType} href='#'>
                                <Insta/>
                            </SocialLink>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;