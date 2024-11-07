'use client';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

function BookBtn() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="px-10 py-3.5 w-full max-sm:w-2/3 max-sm:px-4 cursor-pointer hover:bg-[#24330c] bg-[#daa51b] text-white text-center rounded-md shadow-md block ">
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
