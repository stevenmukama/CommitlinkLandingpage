'use client';

const faqs = [
  {
    question: 'What services does your web development agency offer?',
    answer:
      'We offer a wide range of services including website design and development, e-commerce solutions, web application development, mobile app development, make.com intergration, and SEO optimization. Our team is equipped to handle projects of any size and complexity.',
    isOpen: true,
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'The timeline for website development depends on the complexity and scope of the project. A standard website may take 4-6 weeks, while more complex projects, such as e-commerce or custom applications, can take longer. We work closely with clients to set realistic deadlines and ensure timely delivery.',
    isOpen: false,
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes, all the websites we develop are fully responsive, ensuring that they look great and function properly on all devices, including mobile phones, tablets, and desktops.',
    isOpen: false,
  },
  {
    question: 'Do you offer website maintenance services?',
    answer:
      'Yes, we offer ongoing maintenance services to keep your website updated, secure, and functioning smoothly. This includes regular updates, security checks, and performance optimizations.',
    isOpen: false,
  },
  {
    question: 'Can you help with SEO for my website?',
    answer:
      'Absolutely. We offer SEO optimization as part of our web development process to ensure your website ranks well on search engines and reaches your target audience.',
    isOpen: false,
  },
  {
    question: 'How much does it cost to build a website?',
    answer:
      'The cost of website development depends on the complexity of the project, the features required, and the timeline. We offer custom pricing based on your specific needs and provide a detailed proposal outlining the costs involved.',
    isOpen: false,
  },
  {
    question: 'Will I be able to update my website on my own?',
    answer:
      'Yes, we build websites with user-friendly content management systems (CMS) like WordPress or custom solutions, enabling you to make updates to your site without needing technical expertise.',
    isOpen: false,
  },
];

const FaqComponent = () => {
  return (
    <section className="leading-relaxed py-8 max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="space-y-4  w-4/5 sm:w-[70%] block mx-auto mt-12">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
            open={faq.isOpen}>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">{faq.question}</h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqComponent;
