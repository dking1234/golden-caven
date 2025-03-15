import React from 'react';
import './RatesAndCurrencies.css';

function RatesAndCurrencies() {
  // Sample data for 30 countries
  const countries = [
    { code: 'us', name: 'United States', currency: 'USD', rate: 1.0 },
    { code: 'gb', name: 'United Kingdom', currency: 'GBP', rate: 0.73 },
    { code: 'eu', name: 'European Union', currency: 'EUR', rate: 0.85 },
    { code: 'jp', name: 'Japan', currency: 'JPY', rate: 110.5 },
    { code: 'ca', name: 'Canada', currency: 'CAD', rate: 1.25 },
    { code: 'au', name: 'Australia', currency: 'AUD', rate: 1.3 },
    { code: 'cn', name: 'China', currency: 'CNY', rate: 6.45 },
    { code: 'in', name: 'India', currency: 'INR', rate: 74.5 },
    { code: 'br', name: 'Brazil', currency: 'BRL', rate: 5.2 },
    { code: 'za', name: 'South Africa', currency: 'ZAR', rate: 14.7 },
    { code: 'mx', name: 'Mexico', currency: 'MXN', rate: 20.1 },
    { code: 'ru', name: 'Russia', currency: 'RUB', rate: 74.8 },
    { code: 'kr', name: 'South Korea', currency: 'KRW', rate: 1180.0 },
    { code: 'sg', name: 'Singapore', currency: 'SGD', rate: 1.35 },
    { code: 'ch', name: 'Switzerland', currency: 'CHF', rate: 0.92 },
    { code: 'nz', name: 'New Zealand', currency: 'NZD', rate: 1.4 },
    { code: 'se', name: 'Sweden', currency: 'SEK', rate: 8.6 },
    { code: 'no', name: 'Norway', currency: 'NOK', rate: 8.8 },
    { code: 'dk', name: 'Denmark', currency: 'DKK', rate: 6.3 },
    { code: 'pl', name: 'Poland', currency: 'PLN', rate: 3.9 },
    { code: 'tr', name: 'Turkey', currency: 'TRY', rate: 8.5 },
    { code: 'sa', name: 'Saudi Arabia', currency: 'SAR', rate: 3.75 },
    { code: 'ae', name: 'United Arab Emirates', currency: 'AED', rate: 3.67 },
    { code: 'th', name: 'Thailand', currency: 'THB', rate: 33.0 },
    { code: 'my', name: 'Malaysia', currency: 'MYR', rate: 4.2 },
    { code: 'id', name: 'Indonesia', currency: 'IDR', rate: 14250.0 },
    { code: 'ph', name: 'Philippines', currency: 'PHP', rate: 50.5 },
    { code: 'vn', name: 'Vietnam', currency: 'VND', rate: 23000.0 },
    { code: 'eg', name: 'Egypt', currency: 'EGP', rate: 15.7 },
    { code: 'ng', name: 'Nigeria', currency: 'NGN', rate: 410.0 },
  ];

  return (
    <div className="rates-and-currencies">
    <div className="hero-section">
      <h1>Rates and Currencies</h1>
      <p>Manage your global finances effortlessly with multi-currency accounts.</p>
      <button>Get Started</button>
    </div>
    <div className='rate-currencies-container'>
      <h2>Rates and Currencies</h2>
      <div className="currency-grid">
        {countries.map((country) => (
          <div key={country.code} className="currency-item">
            <img
              src={`https://flagcdn.com/${country.code}.svg`}
              alt={`${country.name} flag`}
              className="flag"
            />
            <div className="currency-details">
              <span className="country-name">{country.name}</span>
              <span className="currency-name">{country.currency}</span>
            </div>
            <span className="currency-rate">{country.rate.toFixed(2)}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default RatesAndCurrencies;