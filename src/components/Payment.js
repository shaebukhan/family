import React from 'react';
import PaymentImage from "../assets/images/payment.webp";
import { AiOutlineLike } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
const Payment = () => {
    return (
        <>

            <div className="want-order">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Proposez plusieurs solutions de paiement et adaptez-vous à un maximum de clients</h1>
                    <h5 className="banner-sm-title text-center">
                        Paiement en 1 clic ou en main propre, proposez une expérience d’achat aussi fluide qu’au restaurant
                    </h5>
                </div>
                <div className="want-order-sub2">
                    <div className="want-order-sub2-right" style={{ background: "#15a0da" }}>
                        <div className="want-order-sub2-right-sub">
                            <img src={PaymentImage} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="want-order-sub2-left">
                        <div className="want-order-sub2-left1 mb-5">
                            <CiCreditCard1 className='b-clr' />
                            <h4 className="want-order-sm-title b-clr">
                                Acceptez tous les types de paiements
                            </h4>
                            <h6 className='banner-sm-title'>Lorsque vos clients passent commande via l’app, ils peuvent régler leur commande directement en ligne. Cartes bancaires, Paypal, Cartes Tickets Restaurant… Tout est possible ! Proposez également le mode de règlement le plus rapide du web: le paiement en 1 clic avec Apple Pay (Digital Wallets).</h6>
                        </div>
                        <div className="want-order-sub2-left1">
                            <AiOutlineLike className='b-clr' />

                            <h4 className="want-order-sm-title b-clr">
                                Encaissez en mains propres
                            </h4>
                            <h6 className='banner-sm-title'> Pour vos clients qui le souhaitent, proposez le paiement hors de l’application, à la livraison ou au restaurant en cas de click and collect. Pas besoin d’entrer leur carte bancaire dans l’app, vos clients peuvent valider leur commande et la payer ensuite, en toute transparence.</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Payment;