import React from 'react';
import BannerImg from "../assets/images/banner.webp";
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className="mt-top"></div>
            <div className="banner-main">
                <div className="banner-left">
                    <h4 className="banner-sm-title">
                        GoodBarber pour les <span className="b-clr">Restaurants</span>
                    </h4>
                    <h1 className="banner-title">Un outil de commande en ligne pour votre restaurant</h1>
                    <h4 className="banner-sm-title">
                        Donnez une nouvelle dimension à votre restaurant en proposant une application avec un service de commande en ligne
                    </h4>
                    <div className="tick-main">
                        <div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Click & Collect
                            </h6>
                        </div>
                        <div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Livraison à domicile
                            </h6>
                        </div><div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Gestion des commandes
                            </h6>
                        </div><div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Organisation des créneaux horaires
                            </h6>
                        </div><div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Achats récurrents
                            </h6>
                        </div><div className="tick-sub">
                            <div className="tick-circle">
                                <IoMdCheckmark />
                            </div>
                            <h6 className="tick-text">
                                Aucune commission sur les ventes
                            </h6>
                        </div>

                    </div>
                    <div className="my-3 d-flex">
                        <Link className='reg-btn'>Démarrer</Link>
                    </div>
                    <div className="c-clr pt-3">
                        Dès 40€/mois <br />
                        30 jours d'essai gratuit. Accès direct sans CB
                    </div>
                </div>
                <div className="banner-right">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;