import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Faqs = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Comment créer une app de restaurant facilement ?",
            answer: `L'App Builder GoodBarber pour les restaurants vous permet de créer une application mobile pour votre restaurant de manière très simple.

            Pour créer une App de Restaurant, suivez ces étapes:
            Rassemblez tout le matériel dont vous avez besoin pour faire votre app
            Commencez votre app de Restaurant sur GoodBarber
            Ajoutez les produits et les plats dans le catalogue de l'app
            Définissez le design de votre app de Restaurant
            Ajoutez les informations générales de votre restaurant dans l'app
            Personnalisez vos emails transactionnels et les messages de push
            Ajoutez les extensions d'app nécessaires pour une meilleure expérience d'achat sur mobile
            Testez et publiez votre app de Restaurant
            
            Il peut s'agir d'une application pour partager vos meilleures photos et vos meilleures vidéos sur les réseaux sociaux, afin de promouvoir votre restaurant, ou d'une application de commerce électronique pour la vente en ligne et la livraison de plats.`,
        },
        {
            question: "Combien coûte la création d'une application pour restaurant ?",
            answer: `Vous pouvez commencer à utiliser l'application pour votre restaurant gratuitement avec notre essai gratuit de 30 jours. Ensuite, c'est à vous de souscrire au plan qui correspond le mieux à vos besoins : le plan de base pour créer une application pour restaurant commence à 40€/mois. Notez que des coûts supplémentaires s'appliquent pour publier des applications iOS sur l'App Store.`,
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="many-other">
            <h1 className="many-title text-center">Questions fréquemment posées</h1>
            <div className="faqs-sub">
                {faqs.map((faq, index) => (
                    <div className="faq" key={index}>
                        <div
                            className="faq-question"
                            onClick={() => toggleFaq(index)}
                        >
                            <h3 className="many-other-card-title">
                                {faq.question}
                            </h3>
                            <FaChevronDown
                                className={`faq-icon ${activeFaq === index ? 'rotated' : ''}`}
                            />
                        </div>
                        <div
                            className={`many-other-card-text faq-answer ${activeFaq === index ? 'visible' : 'hidden'}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
