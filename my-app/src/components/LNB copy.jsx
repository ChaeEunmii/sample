import React, { useState, useEffect } from 'react';
import './LNB.css';

const LNB = () => {
  const [activeLevel, setActiveLevel] = useState(0);  // 0: 초기 상태, 1: 1뎁스, 2: 2뎁스
  const handleActiveLevel = (itemIndex, event) => {
    event.stopPropagation(); // 이벤트 전파 방지
    setActiveLevel(itemIndex);
    console.log('클릭됨')
  };

  useEffect(() => {
    console.log('activeLevel: ', activeLevel)
  }, [activeLevel]);

  return (
    <>
      <p onClick={(event) => handleActiveLevel(1, event)}>뎁스시작하기</p><br/>
      <div className="lnb-wrap">
        <div className="lnb-head">
          {activeLevel < 2 ? <div>SPC+ESWA</div> : <div>Back</div>}
        </div>
        <nav className="lnb-body">
          <ul className={`depth01 ${activeLevel > 0 ? 'on' : ''}`}>
            <li onClick={(event) => handleActiveLevel(2, event)} className={`${activeLevel > 0 ? 'on' : ''}`}>
              <p>
                <i className={`icon-firstletter ${activeLevel > 1 && 'on'}`}>처</i>
                <span>처리할 업무</span>
              </p>
              <ul className={`depth02 ${activeLevel > 1 ? 'on' : ''}`}>
                <li onClick={(event) => handleActiveLevel(3, event)}>
                  <p>2뎁스</p>
                </li>
              </ul>
              <ul className={`depth03 ${activeLevel > 2 ? 'on' : ''}`}>
                <li onClick={(event) => handleActiveLevel(4, event)}>
                  <p>3뎁스</p>
                  <ul className={`depth04 ${activeLevel === 4 ? 'on' : ''}`}>
                    <li>
                      <p>4뎁스</p>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>
          </ul>
            
        
        </nav>
      </div>
      
    </>
    
  );
};

export default LNB;
