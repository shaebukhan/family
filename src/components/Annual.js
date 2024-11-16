import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';
const Annual = () => {
    return (
        <>
            <div className="annual-text">
                <table className='pricingdt'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='pricingdt-plan'>
                                <div class="pricingdt-plantitle">Standard</div>
                                <div class="pricingdt-planprice" data-fqcy="y"><span class="pricingdt-price">40€</span><span class="pricingdt-fqcy">/mois</span><span class="pricingdt-pricebreak"></span><span class="pricingdt-yearlynote">facturé annuellement</span><span class="pricingdt-saving">Économisez 120€ annuellement</span></div>
                            </th>
                            <th className='pricingdt-plan'>
                                <div class="pricingdt-plantitle">Premium</div>
                                <div class="pricingdt-planprice" data-fqcy="y"><span class="pricingdt-price">70€</span><span class="pricingdt-fqcy">/mois</span><span class="pricingdt-pricebreak"></span><span class="pricingdt-yearlynote">facturé annuellement</span><span class="pricingdt-saving">Économisez 240€ annuellement</span></div>
                            </th><th className='pricingdt-plan'>
                                <div class="pricingdt-plantitle">Pro</div>
                                <div class="pricingdt-planprice" data-fqcy="y"><span class="pricingdt-price">140€</span><span class="pricingdt-fqcy">/mois</span><span class="pricingdt-pricebreak"></span><span class="pricingdt-yearlynote">facturé annuellement</span><span class="pricingdt-saving">Économisez 480€ annuellement</span></div>
                            </th><th className='pricingdt-plan'>
                                <div class="pricingdt-plantitle">Agence</div>
                                <div class="pricingdt-planprice" data-fqcy="y"><span class="pricingdt-price">290€</span><span class="pricingdt-fqcy">/mois</span><span class="pricingdt-pricebreak"></span><span class="pricingdt-yearlynote">facturé annuellement</span><span class="pricingdt-saving">Économisez 1080€ annuellement</span></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pricingdt-cell pricingdt-cell--bloc" colspan="7"><div class="pricingdt-celltitle pricingdt-celltitle--bloc">Technologie</div></td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">PWA</div>
                            </td>
                            <td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">Apps Natives</div>
                            </td>
                            <td className='pricingdt-cell text-center'>

                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                Android + iOS
                                (iPhone & iPad)
                            </td><td className='pricingdt-cell text-center text-white'>
                                Android + iOS
                                (iPhone & iPad)
                            </td><td className='pricingdt-cell text-center text-white'>
                                Android + iOS
                                (iPhone & iPad)
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">Disponible dans le Google Play Store</div>
                            </td>
                            <td className='pricingdt-cell text-center'>

                            </td>
                            <td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr border-0'>
                            <td>
                                <div className="pricingdt-celltitle text-white"> Disponible dans l'App Store</div>
                            </td>
                            <td className='pricingdt-cell text-center'>

                            </td>
                            <td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr>
                            <td class="pricingdt-cell pricingdt-cell--bloc" colspan="7"><div class="pricingdt-celltitle pricingdt-celltitle--bloc">Capacités</div></td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">Stockage
                                    info</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                2 Go
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                10 Go
                            </td><td className='pricingdt-cell text-center text-white'>
                                50 Go
                            </td><td className='pricingdt-cell text-center text-white'>
                                100 Go
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Notifications push
                                    info
                                    (par mois)
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                10k
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                30k
                            </td><td className='pricingdt-cell text-center text-white'>
                                250k
                            </td><td className='pricingdt-cell text-center text-white'>
                                500k
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Accès collaborateur
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                1
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                3
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Nombre de projets
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                1
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                1
                            </td><td className='pricingdt-cell text-center text-white'>
                                1
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Pages vues (bande passante et trafic)
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Variantes par produits
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                100
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                100
                            </td><td className='pricingdt-cell text-center text-white'>
                                100
                            </td><td className='pricingdt-cell text-center text-white'>
                                100
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Téléchargements de l'app
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>

                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                        </tr>
                        <tr className='brdr border-0'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Gestionnaire de compte
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>

                            </td>
                            <td className='pricingdt-cell text-center text-white'>

                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td>
                        </tr>

                        <tr>
                            <td class="pricingdt-cell pricingdt-cell--bloc" colspan="7"><div class="pricingdt-celltitle pricingdt-celltitle--bloc">Extensions store
                                <span className='sm-text'> Vaste bibliothèque de plus de 190
                                    extensions
                                    . De nouvelles extensions ajoutées tous les mois</span>
                            </div></td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white"> Extensions gratuites</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                Jusqu'à 5
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                Jusqu'à 20
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td><td className='pricingdt-cell text-center text-white'>
                                illimité
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Commandes abandonnées
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                10€/mois
                                (facturé 100€/an. Vous économisez 2 mois)
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                10€/mois
                                (facturé 100€/an. Vous économisez 2 mois)
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Créneaux de livraison
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                15€/mois
                                (facturé 150€/an. Vous économisez 2 mois)
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td>
                        </tr>
                        <tr className='brdr border-0'>
                            <td>
                                <div className="pricingdt-celltitle text-white">
                                    Imports de produits
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                25€/mois
                                (facturé 250€/an. Vous économisez 2 mois)
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                25€/mois
                                (facturé 250€/an. Vous économisez 2 mois)
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />

                            </td>
                        </tr>
                        <tr>
                            <td class="pricingdt-cell pricingdt-cell--bloc" colspan="7"><div class="pricingdt-celltitle pricingdt-celltitle--bloc">Paiements</div></td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white"> Frais de transaction additonnels (aucun frais !)</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                0%
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                0%
                            </td><td className='pricingdt-cell text-center text-white'>
                                0%
                            </td><td className='pricingdt-cell text-center text-white'>
                                0%
                            </td>
                        </tr>
                        <tr className='brdr border-0'>
                            <td>
                                <div className="pricingdt-celltitle text-white">  Stripe, Apple Pay, PayPal, Mercado Pago, paiements en 1 clic, paiement en espèce ou en chèque</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr>




                        <tr>
                            <td class="pricingdt-cell pricingdt-cell--bloc" colspan="7"><div class="pricingdt-celltitle pricingdt-celltitle--bloc">Fonctionnalités incontournables</div></td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">  App builder NO CODE - Glisser/déposer</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">   Design 100% personnalisable</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">   Design 100% personnalisable</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr><tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">    Sytème de Gestion de Contenu
                                    (article, video, podcast, évènement, carte, photo, direct)</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr><tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">    Optimisé pour le référencement dans Google et dans les Store (SEO, ASO) et AMP</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr'>
                            <td>
                                <div className="pricingdt-celltitle text-white">    Assistance technique (par les concepteurs de GoodBarber)</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td><td className='pricingdt-cell text-center text-white'>
                                <IoMdCheckmark />
                            </td>
                        </tr>
                        <tr className='brdr border-0'>
                            <td>
                                <div className="pricingdt-celltitle text-white">  Prix de l'abonnement annuel</div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>

                                <div class="pricingdt-plantitle">Standard</div>
                                <div class="pricingdt-planprice flex-row  align-items-center justify-content-center" data-fqcy="y">
                                    <span class="pricingdt-price">480€</span><span class="pricingdt-fqcy mt-2">/an</span>
                                </div>

                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <div class="pricingdt-plantitle">Premium
                                </div>
                                <div class="pricingdt-planprice flex-row  align-items-center justify-content-center" data-fqcy="y">
                                    <span class="pricingdt-price">840€</span><span class="pricingdt-fqcy mt-2">/an</span>
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <div class="pricingdt-plantitle">Pro
                                </div>
                                <div class="pricingdt-planprice flex-row  align-items-center justify-content-center" data-fqcy="y">
                                    <span class="pricingdt-price">1680€</span><span class="pricingdt-fqcy mt-2">/an</span>
                                </div>
                            </td>
                            <td className='pricingdt-cell text-center text-white'>
                                <div class="pricingdt-plantitle"> Agence
                                </div>
                                <div class="pricingdt-planprice flex-row  align-items-center justify-content-center" data-fqcy="y">
                                    <span class="pricingdt-price">3480€</span><span class="pricingdt-fqcy mt-2">/an</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className="create-app">
                    <h3 className="create-app-title">Créez votre app maintenant</h3>
                    <Link className='create-app-btn'>
                        Démarrer gratuitement </Link>
                </div>

            </div>

        </>
    );
};

export default Annual;