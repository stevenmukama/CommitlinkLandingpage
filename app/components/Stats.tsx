export default () => {
  const stats = [
    {
      data: '35K',
      title: 'Customers',
    },
    {
      data: '10K+',
      title: 'Downloads',
    },
    {
      data: '40+',
      title: 'Countries',
    },
    {
      data: '30M+',
      title: 'Total revenue',
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="max-w-2xl">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Dedicated to Customer Satisfaction
          </h3>
          <p className="mt-3 max-w-xl">
            We strive to exceed expectations, ensuring every client experiences
            personalized service and unparalleled support.
          </p>
        </div>
        <div className="flex-none mt-6 md:mt-0 lg:mt-6">
          <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
            {stats.map((item, idx) => (
              <li key={idx} className="">
                <h4 className="text-4xl text-[#daa51b] font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
