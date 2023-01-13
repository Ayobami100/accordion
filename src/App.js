import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [faqs,setFaq] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3> Questions and Answers About Login</h3>
      

      <section className='info'>
        {faqs.map((faq) => 
        {
         return <SingleQuestion key={faq.id} {...faq}/>
        })}
      
      </section>
       </div>
    </main>
   
  )
}

export default App;
