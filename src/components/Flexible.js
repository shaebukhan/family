import React, { useEffect, useState } from 'react';
import MuchMore1 from "../assets/images/orders.webp";
import MuchMore2 from "../assets/images/orders_2.webp";
import MuchMore3 from "../assets/images/orders_3.webp";
import { FaChevronDown } from 'react-icons/fa6';

const Flexible = () => {

    const [visibleSection, setVisibleSection] = useState(1);

    useEffect(() => {
        let currentSection = 1;
        const timer = setInterval(() => {
            currentSection = currentSection < 3 ? currentSection + 1 : 1;
            setVisibleSection(currentSection);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const handleButtonClick = (section) => {
        setVisibleSection(section);
    };

    const getActiveClass = (section) => (visibleSection === section ? "active-much-more" : "");


    return (
        <>
            <div className="much-more">
                <div className="want-order-sub">
                    <h1 className="banner-title text-center">Un système de commande souple et léger, pour vous et vos clients</h1>
                    <h5 className="banner-sm-title text-center">
                        Soyez tranquilles: c’est votre app qui s’adapte à votre façon de travailler et non l’inverse
                    </h5>
                </div>
                <div className="much-more-sub">

                    <div className="much-more-right">
                        <div
                            className={`much-more-right-box`}
                            id="MuchMore1"
                        >
                            <button
                                className={`much-more-right-title ${getActiveClass(1)}`}
                                onClick={() => handleButtonClick(1)}
                            >
                                Gestion des commandes
                                <FaChevronDown />
                            </button>
                            {visibleSection === 1 && (
                                <p className={`c-clr`}>

                                    Votre application prend les commandes à votre place: une fois que vos clients ont choisi leurs plats et validé leur panier, une commande est créée de votre côté. Vous êtes averti instantanément et n’avez plus qu'à vous préoccuper de ce qu’il se passe en cuisine. Vous pouvez modifier en un clic l'état de chaque commande: en attente, traitée, livrée ou même annulée. Vos clients sont eux aussi avertis du changement de statut de leur commande. Pas de pression pour vous, pas de frustration pour vos clients !
                                </p>
                            )}
                        </div>

                        <div
                            className={`much-more-right-box`}
                            id="MuchMore2"
                        >
                            <button
                                className={`much-more-right-title ${getActiveClass(2)}`}
                                onClick={() => handleButtonClick(2)}
                            >
                                Organisation des créneaux horaires
                                <FaChevronDown />
                            </button>
                            {visibleSection === 2 && (
                                <p className={`c-clr `}>

                                    Pour que vous puissiez vous organiser au mieux et offrir encore plus de confort à vos clients, vous pouvez définir les créneaux horaires durant lesquels vos clients pourront récupérer leur commande ou être livrés. Ils choisissent leur horaire dans la plage que vous aurez définie et peuvent ainsi être certains de ne pas trop attendre leurs plats. De votre côté, vous définissez la durée des créneaux horaires, et le nombre de commandes maximum par créneau. Vous choisissez également la durée minimale qui séparera une prise de commande de sa livraison ou de son retrait. Bref tout est fait pour vous permettre de maîtriser la gestion de vos commandes sans affecter l’organisation de votre cuisine.
                                </p>
                            )}
                        </div>

                        <div
                            className={`much-more-right-box mb-0`}
                            id="MuchMore3"
                        >
                            <button
                                className={`much-more-right-title ${getActiveClass(3)}`}
                                onClick={() => handleButtonClick(3)}
                            >
                                My Shop Companion
                                <FaChevronDown />
                            </button>
                            {visibleSection === 3 && (
                                <p className={`c-clr`}>

                                    Parce qu’en tant que restaurateur vous n'êtes pas souvent assis à un bureau, la gestion des commandes peut se faire directement sur votre smartphone grâce à l’app My Shop Companion. Elle vous permet de visualiser toute vos commandes en cours, classées en fonction de leurs heures de livraison ou de retrait. Vous pouvez y changer directement le statut de vos commandes pour informer vos équipes et vous organiser, et prévenir vos clients qui attendent leurs plats avec impatience. Si vous proposez un service de livraison, l’app My Companion peut également être très utile pour gérer la communication entre vous et vos livreurs: ils pourront vous prévenir dès qu’une commande aura été livrée en modifiant son statut sur leur smartphone.


                                </p>
                            )}
                        </div>
                    </div>
                    <div className="much-more-left" style={{ background: "linear-gradient(45deg, #a86dce, #ed648b)" }}>
                        {visibleSection === 1 && <img src={MuchMore1} alt="Much More 1" />}
                        {visibleSection === 2 && <img src={MuchMore2} alt="Much More 2" />}
                        {visibleSection === 3 && <img src={MuchMore3} alt="Much More 3" />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Flexible;