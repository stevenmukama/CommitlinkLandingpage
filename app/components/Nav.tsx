// 'use client';
// import { Disclosure } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
// import logo from '../assets/LogoImg.png';
// import ButtonLink from '../common/ButtonLink';
// import Image from 'next/image';

// function Nav() {
//   const textLinkClasses =
//     'text-gray-500 hover:text-gray-900 active:text-gray-400';

//   const navLinks = [
//     { href: '#about', children: 'About Us' },
//     { href: '#whatWedo', children: 'Services' },
//     { href: '#reviews', children: 'Reviews' },
//     { href: '#team', children: 'Our Team' },
//     { href: '#contactus', children: 'Contact us' },
//   ];

//   return (
//     <Disclosure as="nav">
//       {({ open }) => (
//         <>
//           <div className="flex items-center justify-between px-8 pt-3 xl:m-auto">
//             <div className="flex">
//               <ButtonLink
//                 href="#"
//                 children={
//                   <Image
//                     src={logo}
//                     alt="Logo"
//                     priority={false}
//                     placeholder="empty"
//                     className="w-[9rem]"
//                   />
//                 }
//               />
//               <div className="ml-4 hidden items-center space-x-4 pl-8 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
//                 {navLinks.map((link, index) => (
//                   <ButtonLink
//                     key={index}
//                     href={link.href}
//                     children={link.children}
//                     className={textLinkClasses}
//                   />
//                 ))}
//               </div>
//             </div>
//             <ButtonLink
//               href="#contactus"
//               children={'Book a call now'}
//               className="active:bg hidden rounded-xl px-5 py-3 text-white bg-[#daa51b] hover:bg-[#24330c] sm:flex"
//             />
//             <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-[#24330c] hover:text-white sm:hidden">
//               {open ? (
//                 <XMarkIcon className="block h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" />
//               )}
//             </Disclosure.Button>
//           </div>
//           <Disclosure.Panel className="space-y-1 px-4 sm:hidden">
//             {navLinks.map((link, index) => (
//               <Disclosure.Button
//                 className="block"
//                 as="a"
//                 key={index}
//                 href={link.href}
//                 children={link.children}
//               />
//             ))}
//             <ButtonLink
//               href="#contactus"
//               children={'Book a call now'}
//               className="active:bg block rounded-xl px-5 py-3 text-white bg-[#daa51b] hover:bg-[#24330c] sm:flex"
//             />
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

// export default Nav;

'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import logo from '../assets/LogoImg.png';
import ButtonLink from '../common/ButtonLink';
import Image from 'next/image';

function Nav() {
  const textLinkClasses =
    'text-gray-500 hover:text-gray-900 active:text-gray-400';

  const textLinkClassesMob = 'block hover:text-white hover:bg-[#24330c] my-8 ';
  const navLinks = [
    { href: '#about', children: 'About Us' },
    { href: '#whatWedo', children: 'Services' },
    { href: '#reviews', children: 'Reviews' },
    { href: '#team', children: 'Our Team' },
    { href: '#contactus', children: 'Contact us' },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-8 pt-3 xl:m-auto">
            <div className="flex">
              <ButtonLink
                href="#"
                children={
                  <Image
                    src={logo}
                    alt="Logo"
                    priority={false}
                    placeholder="empty"
                    className="w-[9rem]"
                  />
                }
              />
              <div className="ml-4 hidden items-center space-x-4 pl-8 sm:ml-6 sm:flex lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>
            <ButtonLink
              href="#contactus"
              children={'Book a call now'}
              className="active:bg max-sm:hidden rounded-xl px-5 py-3 text-white bg-[#daa51b] hover:bg-[#24330c]"
            />
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-[#24330c] hover:text-white sm:hidden">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className=" px-8 sm:hidden">
            {navLinks.map((link, index) => (
              <Disclosure.Button
                as="a"
                key={index}
                href={link.href}
                children={link.children}
                className={textLinkClassesMob}
              />
            ))}
            <ButtonLink
              href="#contactus"
              children={'Book a call now'}
              className="active:bg block rounded-xl px-5 py-3 text-white bg-[#daa51b] hover:bg-[#24330c]"
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
