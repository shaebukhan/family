import React, { useEffect, useState } from 'react';
import MuchMore1 from "../assets/images/muchmore1.webp";
import MuchMore2 from "../assets/images/muchmore2.webp";
import MuchMore3 from "../assets/images/muchmore3.webp";
import { FaChevronDown } from 'react-icons/fa6';

const MuchMore = () => {
    const [visibleSection, setVisibleSection] = useState(1); // Initially show the first section

    useEffect(() => {
        let currentSection = 1; // Start with the first section
        const timer = setInterval(() => {
            currentSection = currentSection < 3 ? currentSection + 1 : 1; // Cycle through sections
            setVisibleSection(currentSection);
        }, 10000); // 10-second interval

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const handleButtonClick = (section) => {
        setVisibleSection(section); // Immediately show the clicked section
    };

    const getActiveClass = (section) => (visibleSection === section ? "active-much-more" : "");

    return (
        <div className="much-more">
            <div className="want-order-sub">
                <h1 className="banner-title text-center">Bien plus qu’un service de commande</h1>
                <h5 className="banner-sm-title text-center">
                    Un back office simple et tout-en-un
                </h5>
            </div>
            <div className="much-more-sub">
                <div className="much-more-left">
                    {visibleSection === 1 && <img src={MuchMore1} alt="Much More 1" />}
                    {visibleSection === 2 && <img src={MuchMore2} alt="Much More 2" />}
                    {visibleSection === 3 && <img src={MuchMore3} alt="Much More 3" />}
                </div>
                <div className="much-more-right">
                    <div
                        className={`much-more-right-box`}
                        id="MuchMore1"
                    >
                        <button
                            className={`much-more-right-title ${getActiveClass(1)}`}
                            onClick={() => handleButtonClick(1)}
                        >
                            Contenu & Design
                            <FaChevronDown />
                        </button>
                        {visibleSection === 1 && (
                            <p className={`c-clr`}>
                                Le back office est l’espace dans lequel vous gérez bien sûr votre carte, mais aussi tout
                                le contenu additionnel que vous souhaiteriez ajouter à votre app: photos, vidéos,
                                articles, informations sur votre restaurant… Vous y créez et y modifiez votre contenu
                                instantanément.
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
                            Fichier clients
                            <FaChevronDown />
                        </button>
                        {visibleSection === 2 && (
                            <p className={`c-clr `}>
                                Toutes les informations concernant vos clients et prospects se trouvent dans votre back
                                office. Contact, adresses, nombre de commandes, fréquence d’achat, panier moyen,
                                historique des commandes, tout est répertorié dans un menu dédié de votre back office et
                                vous pouvez même annoter les fiches de vos clients. Ces informations sont précieuses et
                                vous permettent de connaître votre base client et de vous y adapter.
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
                            Outils Marketing
                            <FaChevronDown />
                        </button>
                        {visibleSection === 3 && (
                            <p className={`c-clr`}>
                                Réductions, notifications push, QR code, découvrez de nombreux outils présents dans
                                votre back office qui vous permettront de rendre votre app plus accessible, d’interagir
                                avec vos clients ou futurs clients, de les attirer et surtout de les fidéliser.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MuchMore;
