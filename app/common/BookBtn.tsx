'use client';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

interface BookBtnProps {
  className?: string;
}

function BookBtn({ className = '' }: BookBtnProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={`cursor-pointer hover:bg-[#24330c] bg-[#daa51b] text-white text-center rounded-md shadow-md ${className}`}>
      {isClient && (
        <PopupButton
          url="https://calendly.com/pacifiquetwagirayesu"
          rootElement={document.getElementById('root') || document.body}
          text="Book a call now"
        />
      )}
    </div>
  );
}

export default BookBtn;
