import React, { useState } from 'react';
import Annual from './Annual';
import Monthly from './Monthly';
import OneTime from './OneTime';

const Rates = () => {
    // State to manage active rate type
    const [activeRate, setActiveRate] = useState('annual');

    const handleRateChange = (rate) => {
        setActiveRate(rate);
    };

    return (
        <>
            <div className="many-other">
                <h1 className="many-title text-center">Tarifs</h1>
                <div className="rate-main">
                    <div className="text-center">
                        <div className="rates-btn">
                            <button
                                className={`rate-btn ${activeRate === 'monthly' ? 'rate-active-btn' : ''}`}
                                onClick={() => handleRateChange('monthly')}
                            >
                                Mensuel
                            </button>
                            <button
                                className={`rate-btn ${activeRate === 'annual' ? 'rate-active-btn' : ''}`}
                                onClick={() => handleRateChange('annual')}
                            >
                                Annuel
                            </button>
                            <button
                                className={`rate-btn ${activeRate === 'onetime' ? 'rate-active-btn' : ''}`}
                                onClick={() => handleRateChange('onetime')}
                            >
                                One time
                            </button>
                        </div>
                    </div>

                    {/* Show content based on active rate */}
                    {activeRate === 'annual' && <Annual />}
                    {activeRate === 'monthly' && <Monthly />}
                    {activeRate === 'onetime' && <OneTime />}
                </div>
            </div>
        </>
    );
};

export default Rates;
