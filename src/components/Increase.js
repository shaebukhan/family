import React from 'react';
import { FaArrowsRotate, FaBell, FaPercent } from 'react-icons/fa6';
import { GiShoppingBag } from "react-icons/gi";
import { TfiGift } from "react-icons/tfi";
const Increase = () => {
    return (
        <>

            <div className="want-order">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center"> Augmentez les revenus de votre restaurant</h1>
                    <h5 className="banner-sm-title text-center">
                        Des outils pour booster vos ventes. Réellement
                    </h5>
                </div>
                <div className="increase-sub">
                    <div className="increase-card">
                        <div className="increase-icon">
                            <FaPercent />
                        </div>
                        <h4 className="want-order-sm-title c-clr">
                            Promotions
                        </h4>
                        <h6 className='banner-sm-title'>Créez des promotions pour vos clients afin de les attirer ou d’augmenter leur ticket moyen. Montant fixe ou pourcentage, vous pouvez définir si la réduction s’applique à la totalité de l’addition ou à des produits en particulier. Vous pouvez également créer des réductions pour des clients spécifiques et ajouter des conditions d’utilisation. Les promotions vous permettent aussi bien de récompenser vos clients fidèles que de booster les ventes d’un plat en particulier.</h6>
                    </div>
                    <div className="increase-card">
                        <div className="increase-icon">
                            <GiShoppingBag />
                        </div>
                        <h4 className="want-order-sm-title c-clr">
                            Rappel de commandes abandonnées
                        </h4>
                        <h6 className='banner-sm-title'>
                            Et si vous pouviez discuter avec ceux qui composent leur menu à partir de vos plats mais ne valident finalement par leur commande ? C’est possible avec votre app. Vous accédez à toutes les commandes abandonnées de votre restaurant et à la fiche client correspondante. Bien entendu, vous pouvez envoyer une relance pour inciter vos clients à finaliser leur commande.</h6>
                    </div>
                    <div className="increase-card">
                        <div className="increase-icon">
                            <FaBell />
                        </div>
                        <h4 className="want-order-sm-title c-clr">
                            Notification Push
                        </h4>
                        <h6 className='banner-sm-title'>
                            N’attendez plus que vos clients pensent à votre restaurant, mais suscitez plutôt leur intérêt en leur envoyant une notification de temps en temps. Vos clients sont des salariés qui commandent leur déjeuner chez vous mais vos commandes ne sont pas aussi nombreuses le mardi? Pensez à leur envoyer une notification mardi prochain à 11h45 pour leur parler de votre alléchant plat du jour, résultats garantis.
                        </h6>
                    </div>
                    <div className="increase-card">
                        <div className="increase-icon">
                            <FaArrowsRotate />
                        </div>
                        <h4 className="want-order-sm-title c-clr">
                            Achats récurrents
                        </h4>
                        <h6 className='banner-sm-title'>
                            Facilitez la vie de vos clients habitués. Ils connaissent vos plats et ont leurs petites préférences. Faites leur gagner du temps en leur permettant de renouveler en un clic une commande déjà effectuée. Une option qui peut s’avérer très utile lorsqu’on est pressé ou affamé.
                        </h6>
                    </div>

                    <div className="increase-card">
                        <div className="increase-icon">
                            <TfiGift />
                        </div>
                        <h4 className="want-order-sm-title c-clr">
                            Programme de fidélité
                        </h4>
                        <h6 className='banner-sm-title'>
                            Proposez une carte de fidélité à vos clients leur permettant de faire des économies. Vous augmenterez la satisfaction client et encouragerez les achats récurrents. A chaque commande dans votre restaurant ils cumulent des points qui leur offriront un avantage à l’accumuler. C’est le meilleur moyen de fidéliser votre clientèle.
                        </h6>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Increase;