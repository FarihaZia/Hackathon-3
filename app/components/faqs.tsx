import React, { useState } from 'react';


const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most of our products. For more details, please visit our Returns & Exchanges page."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has been shipped, you will receive an email with tracking information."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping charges will be calculated at checkout based on your location."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can contact us through the 'Contact Us' page on our website or email us at support@yourstore.com."
    }
  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <i className="fa fa-question-circle"></i>
              <span>{faq.question}</span>
              <i className={`fa fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
