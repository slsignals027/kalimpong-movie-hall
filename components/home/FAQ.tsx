import SectionTitle from "@/components/ui/SectionTitle";

const faqs = [
  {
    question: "Who can book movie tickets?",
    answer: "Only registered society residents can reserve seats.",
  },
  {
    question: "Do I need to pay for tickets?",
    answer: "No. Movie charges are already included in the society maintenance.",
  },
  {
    question: "Can I book for my family?",
    answer: "Yes, simply enter the number of people while booking.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#F8F5EF] py-20">
      <div className="mx-auto max-w-5xl px-8">
        <SectionTitle
            title="Frequently Asked Questions"
            center
            />

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl bg-white p-6 shadow"
            >
              <h3 className="text-xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}