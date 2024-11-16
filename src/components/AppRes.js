import React from 'react';
import { IoFlagOutline } from "react-icons/io5";
import AppLeft from "../assets/images/app-left.webp";
import ApprightRest from "../assets/images/app-rest-right.webp";
import { TbSpeakerphone } from "react-icons/tb";
import { PiMoneyWavy } from "react-icons/pi";
const AppRes = () => {
    return (
        <>
            <div className="app-rest">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Créez une application pour votre restaurant</h1>
                    <h5 className="banner-sm-title text-center">
                        Ne vous contentez plus d'être présents sur les grosses plateformes de livraison
                    </h5>
                </div>
                <div className="app-rest-main">
                    <div className="app-rest-left">
                        <IoFlagOutline className='app-rest-left-icon' />
                        <h4 className="want-order-sm-title">
                            Votre identité
                        </h4>
                        <h6 className='banner-sm-title'>
                            Avoir votre propre app vous permet de l’assortir à l’identité de votre restaurant. Type de cuisine, style de décoration, concept particulier… Vous avez mis tout votre coeur dans votre restaurant. Offrez lui une app à son image : vos clients s’y retrouveront, et vous aurez en main un outil efficace pour vous démarquer de la concurrence.</h6>
                        <div className="text-center">
                            <img src={AppLeft} alt="" />
                        </div>
                    </div>
                    <div className="app-rest-right">
                        <div className="app-rest-right-top">
                            <TbSpeakerphone className='app-rest-right-icon' />
                            <h4 className="want-order-sm-title text-white">
                                Votre communication
                            </h4>
                            <h6 className='banner-sm-title text-white'>
                                Avoir votre propre app vous permet de l’assortir à l’identité de votre restaurant. Type de cuisine, style de décoration, concept particulier… Vous avez mis tout votre coeur dans votre restaurant. Offrez lui une app à son image : vos clients s’y retrouveront, et vous aurez en main un outil efficace pour vous démarquer de la concurrence.</h6>
                            <img src={ApprightRest} className='img-fluid' alt="" />
                        </div>
                        <div className="app-rest-right-bottom">
                            <PiMoneyWavy className='app-rest-left-icon' />
                            <h4 className="want-order-sm-title">
                                Vos revenus
                            </h4>
                            <h6 className='banner-sm-title'>
                                Contrairement aux plateformes de livraison externes auxquelles vous pourriez adhérer, GoodBarber ne prend aucune commission sur les ventes réalisées dans l’application de votre restaurant. L’intégralité des paiements perçus dans l’app vous revient.</h6>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AppRes;