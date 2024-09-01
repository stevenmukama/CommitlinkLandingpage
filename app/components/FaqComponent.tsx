"use client"

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    isOpen: true, 
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
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
            Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
    </div>
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group [&_summary::-webkit-details-marker]:hidden"
          open={faq.isOpen}
        >
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">{faq.question}</h2>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
