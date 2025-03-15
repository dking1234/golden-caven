import React, { useState } from 'react';
import './FaqsComponent.css'; // Import the CSS file for styling
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'; // Icons for expand/collapse
import FaqImage from '../../Assets/FaqImage.png';

function FaqsComponent() {
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: 'How do I use GCA Pay?',
      answer: 'Our return policy allows you to return products within 30 days of purchase for a full refund.',
    },
    {
      id: 2,
      question: 'How secure is GCA Pay?',
      answer: 'You can track your order by logging into your account and visiting the "Order History" section.',
    },
    {
      id: 3,
      question: 'How do I set up GCA Pay?',
      answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary.',
    },
    {
      id: 4,
      question: 'Which banks support GCA Pay?',
      answer: 'You can contact our customer support team via email at support@example.com or by calling +1-800-123-4567.',
    },
    {
        id: 5,
        question: 'Can I check my card balance?',
        answer: 'You can contact our customer support team via email at support@example.com or by calling +1-800-123-4567.',
      },
      {
        id: 6,
        question: 'How can my business accept GCA Pay?',
        answer: 'You can contact our customer support team via email at support@example.com or by calling +1-800-123-4567.',
      },
  ];

  // State to track which FAQ item is expanded
  const [expandedId, setExpandedId] = useState(null);

  // Function to handle expanding/collapsing FAQ items
  const toggleFAQ = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='faq-container'>
    <img src={FaqImage} alt="gca" className='faq-img'/> 
    <div className='faq-info'>
      <h2 className='faq-title'>Frequently Asked Questions (FAQs)</h2>
      <p className='trust-paragraphy'>Collection of common inquiries and their answers, designed to help users quickly find information about a product, service, or topic.</p>
      <div className='faq-list'>
        {faqData.map((faq) => (
          <div key={faq.id} className='faq-item'>
            <div className='faq-question' onClick={() => toggleFAQ(faq.id)}>
              <span>{faq.question}</span>
              <span className='faq-icon'>
                {expandedId === faq.id ? <MinusOutlined /> : <PlusOutlined />}
              </span>
            </div>
            {expandedId === faq.id && (
              <div className='faq-answer'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
      </div>
  );
}

export default FaqsComponent;