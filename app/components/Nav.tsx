'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import logo from '../assets/LogoImg.png';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BookBtn from '../common/BookBtn';

function Nav() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const textLinkClasses =
    'text-gray-500 hover:text-gray-900 active:text-gray-400';
  const textLinkClassesMob = 'block hover:text-white hover:bg-[#24330c] my-8 ';
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#whatWedo', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#team', label: 'Our Team' },
    { href: '#contactus', label: 'Contact us' },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-8 pt-3 xl:m-auto">
            <div className="flex">
              <ButtonLink href="#">
                <Image
                  src={logo}
                  alt="Logo"
                  priority={false}
                  placeholder="empty"
                  className="w-[9rem]"
                />
              </ButtonLink>
              <div className="ml-4 hidden items-center space-x-4 pl-8 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    className={textLinkClasses}>
                    {link.label}
                  </ButtonLink>
                ))}
              </div>
            </div>

            <BookBtn className="px-10 py-3.5 w-auto max-sm:w-1/3 max-sm:text-xs max-sm:px-4" />
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-[#24330c] hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="px-8 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                as="a"
                key={index}
                href={link.href}
                className={textLinkClassesMob}>
                {link.label}
              </Disclosure.Button>
            ))}
            <BookBtn />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
