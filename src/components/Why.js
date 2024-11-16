import React from 'react';
import { CiMobile1 } from 'react-icons/ci';
import { RiMotorbikeLine } from 'react-icons/ri';
import { GiQueenCrown } from "react-icons/gi";
const Why = () => {
    return (
        <>
            <div className="why-main">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Pourquoi les restaurants ont-ils besoin d’une app?</h1>
                </div>
                <div className="why-sub">
                    <div className="why-card">
                        <RiMotorbikeLine className='c-clr' />

                        <h4 className="want-order-sm-title c-clr">
                            Proposer la vente à emporte et la livraison
                        </h4>
                        <h6 className='why-card-text'>La pandémie a considérablement modifier les habitudes des consommateurs. Aux Etats unis, 68% des consommateurs déclarent qu’ils sont plus susceptibles de commander des plats à emporter aujourd’hui qu’ils ne l'étaient avant la pandémie. Et cette tendance continue de se confirmer. Au delà de la crise sanitaire, les canaux numériques sont de plus en plus prisés par une clientèle en demande de confort et de flexibilité. Une app est le meilleur moyen d’offrir un service de commande à vos clients.</h6>
                    </div>
                    <div className="why-card">
                        <CiMobile1 className='c-clr' />
                        <h4 className="want-order-sm-title c-clr">
                            Etre indépendant des plateformes de livraison
                        </h4>
                        <h6 className='why-card-text'> Même si il existe de nombreux avantages à être présents sur des plateformes de livraison comme Uber Eats, Doordash ou Deliveroo notamment au niveau de la visibilité qu’ils apporteront à votre restaurant, rien ne remplacera votre propre app. Une présence sur ces plateformes n’est d’ailleurs pas incompatible avec le fait d’avoir votre propre app pour votre restaurant. Cette dernière vous permettra de fidéliser vos clients et de maintenir un lien avec eux. Souvenez-vous qu’en 2020, une étude menée par Square montraient que 2/3 des clients américains préféraient commander leurs plats directement auprès de leurs restaurants préférés que via un tiers.</h6>
                    </div>

                    <div className="why-card">
                        <GiQueenCrown className='c-clr' />
                        <h4 className="want-order-sm-title c-clr">
                            Aucune commission sur les ventes
                        </h4>
                        <h6 className='why-card-text'>Avec votre app, vous décidez de tout pour votre restaurant. Vous gérez vous même votre carte, vos commandes, vos créneaux horaires, vos encaissements. Vous bénéficiez des meilleures technologies pour faciliter vos ventes et encaisser rapidement (Apple Pay, PayPal, Carte bancaires, etc.). Et bien sûr, aucune commission n’est prélevée sur vos revenus. Tout ce que vous encaissez dans votre application vous revient intégralement.</h6>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Why;