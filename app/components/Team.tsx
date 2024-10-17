// import Image from 'next/image';
// import worker1 from '../assets/image1.jpg';
// import worker2 from '../assets/image2.jpg';
// import worker3 from '../assets/image3.jpg';
// import worker4 from '../assets/image4.jpg';
// import worker5 from '../assets/image5.jpg';

// export default () => {
//   const team = [
//     {
//       avatar: worker1,
//       name: 'Martiana dialan',
//       title: 'Software engineer',
//     },
//     {
//       avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
//       name: 'Micheal colorand',
//       title: 'Software engineer',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
//       name: 'Brown Luis',
//       title: 'Full stack engineer',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
//       name: 'Lysa sandiago',
//       title: 'Head of designers',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
//       name: 'Daniel martin',
//       title: 'Product designer',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
//       name: 'Vicky tanson',
//       title: 'Product manager',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
//       name: 'Nilson kalin',
//       title: 'DevOp engineer',
//     },
//     {
//       avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//       name: 'Tina watersone',
//       title: 'Brand designer',
//     },
//   ];

//   return (
//     <section className="py-14">
//       <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
//         <div className="max-w-xl mx-auto">
//           <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
//             Meet our team
//           </h3>
//           <p className="text-gray-600 mt-3">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.Lorem Ipsum has been the industry's standard dummy.
//           </p>
//         </div>
//         <div className="mt-12">
//           <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//             {team.map((item, idx) => (
//               <li key={idx}>
//                 <div className="w-20 h-20 mx-auto">
//                   <img
//                     src={item.avatar}
//                     className="w-full h-full rounded-full"
//                     alt=""
//                   />
//                 </div>
//                 <div className="mt-2">
//                   <h4 className="text-gray-700 font-semibold sm:text-lg">
//                     {item.name}
//                   </h4>
//                   <p className="text-indigo-600">{item.title}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

import Image from 'next/image';
import worker1 from '../assets/image1.jpg';
import worker2 from '../assets/image2.jpg';
import worker3 from '../assets/image3.jpg';
import worker4 from '../assets/image4.jpg';
import worker5 from '../assets/image5.jpg';

export default () => {
  const team = [
    {
      avatar: worker1,
      name: 'Elie Hirwa',
      title: 'Lead Software Engineer',
    },
    {
      avatar: worker2,
      name: 'Enock Ligotte',
      title: 'Full Stack Engineer',
    },
    {
      avatar: worker3,
      name: 'Paccy',
      title: 'Full Stack Engineer',
    },
    {
      avatar: worker4,
      name: 'Rene Kwizera',
      title: 'Frontend developer',
    },
    {
      avatar: worker5,
      name: 'Mukama Steven',
      title: 'Full Stack Engineer',
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
          <p className="text-gray-600 mt-3">
            Our team is dedicated to delivering high-quality solutions tailored
            to your needs. Get to know the people who make it happen!
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-40 h-40 mx-auto object-cover ">
                  <Image
                    src={item.avatar}
                    className="w-full h-full rounded-full"
                    alt={`${item.name}'s avatar`}
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
