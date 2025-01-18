import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ShareMessageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRedirectToInstagram: () => void;
}

const ShareMessageDialog: React.FC<ShareMessageDialogProps> = ({ isOpen, onClose, onRedirectToInstagram }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const message = `Hey, check this out! Altern8 lets you grow your wealth by investing in premium assets through fractional ownership or by advancing loans. It's a smart way to diversify and boost your returns. Have a look! ${window.location.href}`;
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose(); // Close the dialog after copy
        onRedirectToInstagram(); // Call the function to redirect to Instagram
      }, 2000); // Redirect after 2 seconds to give the user time to see the checkmark
    });
  };

  if (!isOpen) return null; // Only render if the dialog is open

  const dialogVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={dialogVariants}
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black bg-opacity-40"
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg w-96 relative backdrop-blur-md border border-gray-600">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-base text-gray-800 font-semibold text-center mb-4">Copy this message and you will be taken to Instagram automatically</h3>
        <textarea
          value={`Hey, check this out! Altern8 lets you grow your wealth by investing in premium assets through fractional ownership or by advancing loans. It's a smart way to diversify and boost your returns. Have a look! ${window.location.href}`}
          readOnly
          className="w-full p-2 border rounded-md border-gray-700 text-sm mb-4 text-gray-700 bg-transparent"
          rows={6}
        />
        <button
          onClick={handleCopy}
          className="w-full py-2 bg-black mt-2 text-white hover:bg-gray-900 rounded-md flex items-center justify-center"
        >
          {copied ? (
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-2">Copied! Redirecting...</span>
            </span>
          ) : (
            'Copy Message'
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ShareMessageDialog;