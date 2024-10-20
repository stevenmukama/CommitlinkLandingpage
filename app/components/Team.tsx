import Image from 'next/image';
import worker1 from '../assets/image1.jpg';
import worker2 from '../assets/image2.jpg';
import worker3 from '../assets/image3.jpg';
import worker4 from '../assets/image4.jpg';
import worker5 from '../assets/image5.png';

function Team() {
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
      title: 'System Administrator',
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
    <section id="team" className="py-14">
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
                <div className="w-40 h-40 mx-auto">
                  <Image
                    src={item.avatar}
                    className="w-40 h-40 rounded-full object-cover"
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
}

export default Team;
