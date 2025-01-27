import { FAQ } from "../../../mock/FAQs";
import FAQBox from "../../../ui/FAQItem";

function FAQSection() {
  const faqs = FAQ;
  return (
    <section className="flex flex-col gap-7 px-32 py-28">
      <h2 className="text-center">FAQs</h2>
      <p className="text-sm text-center font-light">
        Find answers tailored to your most pressing interests.
      </p>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="flex flex-col gap-4">
            <FAQBox answer={faq.answer} question={faq.question} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQSection;
