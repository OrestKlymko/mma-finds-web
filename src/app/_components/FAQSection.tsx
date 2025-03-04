import { FAQ } from '../../mock/FAQs';
import FAQBox from '../../components/ui/FAQItem';

function FAQSection() {
  const faqs = FAQ;
  return (
    <section id="FAQ" className=" py-28 px-4 mb:py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-7 ">
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
      </div>
    </section>
  );
}

export default FAQSection;
