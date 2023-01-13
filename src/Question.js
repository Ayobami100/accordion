import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id,title,info}) => {
  const [question,setQuestion] = useState(false)

  return (
    
        <article className='question'>
          <header><h4>{title}</h4>
          <button className='btn' onClick={() => setQuestion(!question)}>
            {question ? <AiOutlineMinus/>:<AiOutlinePlus/>}</button></header>
          {question && <p>{info}</p>}
        </article>
        

  )
};

export default Question;
