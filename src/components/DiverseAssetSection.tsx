"use client"
import { ALTERN8_ASSET_TYPES } from '../config/config'
import React, { useState } from 'react'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'

function DiverseAssets() {
    const [selectedAsset, setSelectedAsset] = useState<{ name: string; image: string } | null>(null);

    const openModal = (asset: { name: string; image: string }) => {
        setSelectedAsset(asset);
        document.body.classList.add('overflow-hidden'); 

    };

    const closeModal = () => {
        setSelectedAsset(null);
        document.body.classList.remove('overflow-hidden');

    };

    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                {ALTERN8_ASSET_TYPES.map((asset, index) => (
                    <div key={index} className="w-full h-full">
                        <Badge
                            onClick={() => openModal(asset)}
                            variant="outline"
                            className="h-[45px] w-[185px] flex items-center justify-center border-2 border-black hover:bg-slate-50 cursor-pointer"
                        >
                            <span className="font-semibold text-sm">{asset.name}</span>
                        </Badge>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedAsset && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="bg-white p-5 rounded-lg shadow-lg relative"
                            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-1 right-1 text-gray-500 hover:text-black"
                            >
                                ✖
                            </button>
                            <img
                                src={selectedAsset.image}
                                alt={selectedAsset.name}
                                className="w-[50vw] h-[50vh]"
                            />
                            <p className="text-center mt-3 font-semibold">{selectedAsset.name}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export const DiverseAssetSection = () => {
    return (
        <div className="bg-[#EEFAFF] w-full px-10 py-10">
            <div className="flex mt-5 flex-col gap-3">
                <h1 className="text-31xl font-semibold leading-tight mt-0 mb-3">Diverse Asset Classes In Real-Estate</h1>
                <p>Explore a multitude of asset classes in the real-estate sector, each meticulously curated for optimal investment opportunity.</p>

                <div className="mt-6 p-1">
                    <DiverseAssets />
                </div>
            </div>
        </div>
    );
};
