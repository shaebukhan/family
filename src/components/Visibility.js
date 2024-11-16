import React from 'react';
import VisibilityImg from "../assets/images/visibility.webp";
import { CiMobile1 } from "react-icons/ci";
import { FaLaptop } from 'react-icons/fa6';
const Visibility = () => {
    return (
        <>

            <div className="want-order">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Augmentez votre visibilité et fidélisez vos clients avec la même app</h1>
                    <h5 className="banner-sm-title text-center">
                        Publiez votre app sur le Web et sur les stores Apple et Google
                    </h5>
                </div>
                <div className="want-order-sub2">
                    <div className="want-order-sub2-left">
                        <div className="want-order-sub2-left1 mb-5">
                            <CiMobile1 className='c-clr' />
                            <h4 className="want-order-sm-title c-clr">
                                App Store et Google Play
                            </h4>
                            <h6 className='banner-sm-title'> Les apps GoodBarber sont spécialement conçues pour iOS et Android. Elles bénéficient de l'expertise de GoodBarber dans les Apps Natives. Votre App est disponible sur l'App Store d'Apple et le Play Store de Google. Votre App bénéficie d'un référencement sur les Stores (ASO) et les avis clients lui donnent de la visibilité. Les fonctionnalités natives et l’expérience utilisateur incomparable qu’elles apportent vous permettront de fidéliser vos clients et de maintenir le contact avec eux.</h6>
                        </div>
                        <div className="want-order-sub2-left1">
                            <FaLaptop className='c-clr' />

                            <h4 className="want-order-sm-title c-clr">
                                PWA: Sur le Web
                            </h4>
                            <h6 className='banner-sm-title'>La Progressive Web App est la version Web de votre app, c’est-à-dire qu’elle fonctionne comme un site Web: référencée par Google, elle vous permet de gagner en visibilité et de toucher une nouvelle clientèle pour votre restaurant. Grâce à elle vous optimisez votre présence digitale et pourrez profiter des avantages Google My Business pour faire connaître votre restaurant. Multiplateforme, la PWA pourra être consultée par vos clients sur n’importe quel appareil et assure le référencement traditionnel de votre contenu (SEO).

                            </h6>
                        </div>
                    </div>
                    <div className="want-order-sub2-right">
                        <div className="want-order-sub2-right-sub">
                            <img src={VisibilityImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Visibility;