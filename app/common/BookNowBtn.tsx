'use client';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

function BookNowBtn() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="active:bg max-sm:hidden rounded-xl px-5 py-3 text-black bg-[#ffff] hover:text-white hover:bg-[#24330c]">
      {isClient && (
        <PopupButton
          url="https://calendly.com/stevenmukama1"
          rootElement={document.getElementById('root') || document.body}
          text="Book a call now"
        />
      )}
    </div>
  );
}

export default BookNowBtn;
