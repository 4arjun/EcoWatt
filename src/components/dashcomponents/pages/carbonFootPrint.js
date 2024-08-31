// CarbonFootPrint.js
import CircularMeter from '../CircularMeter';
import React from 'react';

const CarbonFootPrint = () => {
    
    const value = 55;

    return (
        <div className="h-full flex justify-center items-center w-full">
            <div className="flex justify-center items-center relative mx-auto p-10 w-[700px] h-[600px] bg-slate-600/30 border border-white/20 rounded-xl shadow-xl">
                <div className="flex flex-col  items-center justify-centertext-center">
                    <CircularMeter value={value} size={500} />
                </div>
            </div>
        </div>
    );
};

export default CarbonFootPrint;
