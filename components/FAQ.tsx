
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does Otpnesia's pay-as-you-go model work?",
      answer: "Unlike traditional providers that charge a flat monthly fee, Otpnesia allows you to purchase a bundle of messages. You only pay for the messages successfully sent. There are no expiration dates on your quota."
    },
    {
      question: "Is Bisakode suitable for beginners?",
      answer: "Absolutely! Bisakode features challenges ranging from 'Junior' to 'Architect' level. It's a great place to start learning by solving practical, real-world problems while earning reputation in the community."
    },
    {
      question: "What technology stacks do you support for integration?",
      answer: "We provide official SDKs for Node.js, Python, and Go. However, since all our services use standard RESTful APIs, you can integrate KlyroByte products into any tech stack that can make HTTP requests."
    },
    {
      question: "How do you handle data security?",
      answer: "We use AES-256 encryption at rest and TLS 1.3 for all data in transit. We regularly undergo third-party security audits to ensure your and your customers' data remains private and protected."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-slate-200">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
