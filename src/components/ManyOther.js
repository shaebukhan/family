import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { BiCommentEdit } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaGg } from "react-icons/fa6";
const ManyOther = () => {
    return (
        <>
            <div className="many-other">
                <h1 className="many-title">Et bien d’autres choses…</h1>
                <div className="many-other-sub">
                    <div className="many-other-card">
                        <CiLocationOn />
                        <h3 className="many-other-card-title">Points de vente</h3>
                        <p className='many-other-card-text'>Afficher votre ou vos restaurant(s) sur une carte et aidez vos clients à vous trouver instantanément. Les points sont détaillés avec du texte, des photos, des vidéos ou du son pour vous permettre de décrire au mieux votre établissement. Un bouton permet à vos clients de générer un itinéraire automatiquement depuis leur position.</p>
                    </div>
                    <div className="many-other-card">
                        <BiCommentEdit />
                        <h3 className="many-other-card-title">Formulaire de contact</h3>
                        <p className='many-other-card-text'> Intégrez un formulaire de contact à votre app qui vous permettra de répondre aux questions ou aux préoccupations de vos clients. Vous pouvez personnaliser les champs de formulaire en fonction de vos besoins.</p>
                    </div>
                    <div className="many-other-card">
                        <RiContactsBookLine />
                        <h3 className="many-other-card-title">Login automatique</h3>
                        <p className='many-other-card-text'> Avec l'identification intégrée, votre client s'identifie une seule fois. Ensuite, il est immédiatement reconnu à chaque lancement de l'application. Rien de tel pour rester au plus près de ses attentes.</p>
                    </div>
                    <div className="many-other-card">
                        <LiaShoppingBasketSolid />
                        <h3 className="many-other-card-title">Instruction à la commande</h3>
                        <p className='many-other-card-text'> Vos clients ont la possibilité d’ajouter des précisions à leur commande grâce à un champs libre dans l'écran de checkout. Une bonne façon de vous prévenir d’une allergie, du nombre de couverts qu’ils souhaitent avoir, d’une cuisson particulière…</p>
                    </div>
                    <div className="many-other-card">
                        <RiLogoutCircleRLine />
                        <h3 className="many-other-card-title">Rappel du panier</h3>
                        <p className='many-other-card-text'>Si un client a quitté votre app avec des plats dans son panier, une pop-up sera affichée à sa prochaine visite pour lui permettre de finaliser directement cette commande.</p>
                    </div>
                    <div className="many-other-card">
                        <IoCartOutline />
                        <h3 className="many-other-card-title">Bouton d’achat rapide</h3>
                        <p className='many-other-card-text'>Il permet à vos clients ajouter facilement des plats à leur panier depuis la Home de votre app ou en parcourant la liste de vos plats. Ils n’auront jamais besoin de quitter la page qu’ils sont en train de consulter pour mettre un plat au panier.</p>
                    </div>
                    <div className="many-other-card">
                        <FaGg />
                        <h3 className="many-other-card-title">ChatGPT</h3>
                        <p className='many-other-card-text'> Optimisez votre application pour restaurant avec un assistant virtuel IA ! Répondez instantanément aux questions sur le menu, les réservations et les informations pratiques. Offrez une expérience culinaire exceptionnelle et un service client de qualité grâce à notre extension intégrée.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManyOther;