import React, { useCallback, useEffect, useState } from 'react';

function EmiCalulator() {
  let initialvalues = {
    totalCost: '',
    interestRate: '',
    processingFee: '',
    downPayment: '',
    loanPerMonth: '',
    duration: '0.5',
    emi: '',
  };
  const [formvalues, setFormValues] = useState(initialvalues);
  const handleElements = (e, type) => {
    const text = e.target.value;
    if (text) {
      setFormValues((prev) => ({
        ...prev,
        [type]: text,
      }));
    }
    if (
      formvalues.totalCost &&
      formvalues.interestRate &&
      formvalues.duration
    ) {
      EmiCali(e, type);
    }
  };
 const EmiCali = useCallback(() => {
   const principal = formvalues.totalCost - formvalues.downPayment; // Loan amount after down payment
   const monthlyInterestRate = formvalues.interestRate / 12 / 100; // Monthly interest rate as decimal
   const totalMonths = formvalues.duration * 12; // Duration in months

   const emi =
     (principal *
       monthlyInterestRate *
       Math.pow(1 + monthlyInterestRate, totalMonths)) /
     (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

   setFormValues((prev) => ({
     ...prev,
     emi: emi.toFixed(2), // Rounds to 2 decimal places
   }));
 }, [
   formvalues.totalCost,
   formvalues.downPayment,
   formvalues.interestRate,
   formvalues.duration,
 ]);


  console.log(formvalues);
  return (
    <div style={{ width: '500px' }}>
      <h1 style={{ fontSize: '24px', color: '#475674' }}>EMI Calculator</h1>
      <form>
        <p style={{ fontSize: '20px' }}>Total Cost of the Assest</p>
        <input
          type='number'
          value={formvalues.totalCost}
          onChange={(e) => handleElements(e, 'totalCost')}
        />
        <p style={{ fontSize: '24px' }}>Intrest Rate</p>
        <input
          type='number'
          value={formvalues.interestRate}
          onChange={(e) => handleElements(e, 'interestRate')}
        />
        <p style={{ fontSize: '24px' }}>Processing Fee</p>
        <input
          type='number'
          value={formvalues.processingFee}
          onChange={(e) => handleElements(e, 'processingFee')}
        />
        <p style={{ fontSize: '24px' }}>Down Payment</p>
        <input
          type='range'
          className='slider1'
          value={formvalues.downPayment}
          onChange={(e) => handleElements(e, 'downPayment')}
        />
        <p style={{ fontSize: '24px' }}>
          Loan Per Month : {formvalues.emi ? formvalues.emi : ''}
        </p>
        <p style={{ fontSize: '24px' }}>Total loan amount per month</p>
        <input
          type='range'
          className='slider2'
          value={formvalues.loanPerMonth}
          onChange={(e) => handleElements(e, 'loanPerMonth')}
        />
        <p style={{ fontSize: '24px' }}>Years</p>
        <select
          value={formvalues.duration}
          onChange={(e) => handleElements(e, 'duration')}
        >
          <option style={{ fontSize: '24px' }} value='0.5'>
            6 months
          </option>
          <option style={{ fontSize: '24px' }} value='0.9'>
            9 months
          </option>
          <option style={{ fontSize: '24px' }} value='1'>
            1 year
          </option>
          <option style={{ fontSize: '24px' }} value='2'>
            2 years
          </option>
          <option style={{ fontSize: '24px' }} value='4'>
            4 years
          </option>
        </select>
      </form>
      <p style={{ fontSize: '40px', color: '#008000' }}>Your EMI per Month{}</p>
    </div>
  );
}

export default EmiCalulator;
