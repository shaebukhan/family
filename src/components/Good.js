import React from 'react';
import Barbar1 from "../assets/images/barbar1.webp";
import Barbar2 from "../assets/images/barbar2.webp";
import Barbar3 from "../assets/images/barbar3.webp";
import Barbar4 from "../assets/images/barbar4.webp";
import Barbar5 from "../assets/images/barbar5.webp";
import Barbar6 from "../assets/images/barbar6.webp";
import GoodRight from "../assets/images/good-right.webp";
import { BsCollection } from "react-icons/bs";
import { RiMotorbikeLine } from "react-icons/ri";
const Good = () => {
    return (
        <>
            <div className="good-barbar">
                <h4 className="good-title text-center">Ils font confiance à GoodBarber</h4>
                <marquee direction="left" >
                    <img src={Barbar1} alt="" />
                    <img src={Barbar2} alt="" />
                    <img src={Barbar3} alt="" />
                    <img src={Barbar4} alt="" />
                    <img src={Barbar5} alt="" />
                    <img src={Barbar6} alt="" />
                </marquee>
            </div>
            <div className="want-order">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Vos clients veulent commander vos plats sur une app</h1>
                    <h5 className="banner-sm-title text-center">
                        Même s'ils apprécient toujours l'ambiance des restaurants, les consommateurs ont changé leurs habitudes ces dernières années et aspirent désormais à déguster vos plats aussi chez eux.
                    </h5>
                </div>
                <div className="want-order-sub2">
                    <div className="want-order-sub2-left">
                        <div className="want-order-sub2-left1 mb-5">
                            <BsCollection className='pink-clr' />
                            <h4 className="want-order-sm-title pink-clr">
                                Click & Collect
                            </h4>
                            <h6 className='banner-sm-title'>Proposez à vos clients de commander leurs plats et de venir les récupérer directement au restaurant. Ils pourront régler leur addition sur l'application ou sur place au moment de récupérer leur commande. Une solution ultra-flexible pour tous vos clients des alentours qui préfèrent commander leurs plats à l’avance. C'est aussi une solution idéale pour vous, qui vous permet de vous ouvrir à une plus large clientèle sans avoir à investir dans un service de livraison.</h6>
                        </div>
                        <div className="want-order-sub2-left1">
                            <RiMotorbikeLine className='orange-clr' />

                            <h4 className="want-order-sm-title orange-clr">
                                Livraison à domicile
                            </h4>
                            <h6 className='banner-sm-title'>Vous voulez livrer vos client sur le pas de leur porte ? Nous vous permettons d’organiser vous-même votre propre service de livraison. Pas de perte d’argent ni de temps dans la logistique, tout est géré pour vous permettre de vous concentrer sur l’essentiel: cuisiner et livrer vos plats à votre clientèle locale. Zones et tarifs de livraison: vous décidez de tout pour créer la formule qui conviendra le mieux à votre organisation et au confort de vos clients.</h6>
                        </div>
                    </div>
                    <div className="want-order-sub2-right">
                        <div className="want-order-sub2-right-sub">
                            <img src={GoodRight} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Good;