import React, { useState, useEffect, useRef } from 'react';
import './FaqsComponent.css';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import FaqImage from '../../Assets/FaqImage.png';

function FaqsComponent() {
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

  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const faqItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the image
            if (imageRef.current) {
              imageRef.current.style.animation = 'fadeInLeft 0.8s ease-out forwards';
            }
            
            // Animate the content
            if (contentRef.current) {
              contentRef.current.style.animation = 'fadeInRight 0.8s ease-out forwards';
            }
            
            // Animate FAQ items with staggered delays
            faqItemsRef.current.forEach((ref, index) => {
              if (ref) {
                ref.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const toggleFAQ = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const addToFaqItemsRefs = (el, index) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current[index] = el;
    }
  };

  return (
    <div className='faq-container' ref={containerRef}>
      <img 
        src={FaqImage} 
        alt="gca" 
        className='faq-img'
        ref={imageRef}
      /> 
      <div className='faq-info' ref={contentRef}>
        <h2 className='faq-title'>Frequently Asked Questions (FAQs)</h2>
        <p className='trust-paragraphy'>Collection of common inquiries and their answers, designed to help users quickly find information about a product, service, or topic.</p>
        <div className='faq-list'>
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className='faq-item'
              ref={(el) => addToFaqItemsRefs(el, index)}
            >
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