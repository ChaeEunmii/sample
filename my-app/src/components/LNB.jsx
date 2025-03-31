import React, { useState, useEffect } from 'react';
import './LNB.css';

const LNB = () => {
  const [activeLevel, setActiveLevel] = useState(0);  // 0: 초기 상태, 1: 1뎁스, 2: 2뎁스, 3: 3뎁스, 4: 4뎁스
  const [activeDepth2, setActiveDepth2] = useState(null); // 활성화된 depth2의 항목
  const [activeDepth3, setActiveDepth3] = useState(null); // 활성화된 depth3의 항목

  // mockData 형태로 메뉴 구조 정의
  const mockData = [
    {
      label: "처리할 업무",
      children: [
        {
          label: "2뎁스 1",
          children: [
            {
              label: "3뎁스 1",
              children: [
                {
                  label: "4뎁스 1",
                  children: []
                },
                {
                  label: "4뎁스 2",
                  children: []
                }
              ]
            },
            {
              label: "3뎁스 2",
              children: [
                {
                  label: "4뎁스 1",
                  children: []
                },
                {
                  label: "4뎁스 2",
                  children: []
                }
              ]
            }
          ]
        },
        {
          label: "2뎁스 2",
          children: [
            {
              label: "3뎁스 3",
              children: [
                {
                  label: "4뎁스 1",
                  children: []
                },
                {
                  label: "4뎁스 2",
                  children: []
                }
              ]
            },
            {
              label: "3뎁스 4",
              children: [
                {
                  label: "4뎁스 1",
                  children: []
                },
                {
                  label: "4뎁스 2",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  // 레벨 변경 처리
  const handleActiveLevel = (level, event) => {
    event.stopPropagation(); // 이벤트 전파 방지
    if (level === 0) {
      setActiveLevel(0);
      setActiveDepth2(null);
      setActiveDepth3(null);
    } else if(level === 1){
      setActiveLevel(1);
      setActiveDepth2(null);
      setActiveDepth3(null);
    }else {
      setActiveLevel(level);
    }
  };

  // 2뎁스 항목 활성화 처리
  const handleActiveDepth2 = (index) => {
    if (activeDepth2 === index) {
      setActiveDepth2(null); // 클릭된 depth2가 이미 열려 있으면 닫기
    } else {
      setActiveDepth2(index); // 클릭된 depth2 열기
    }
  };

  // 3뎁스 항목 활성화 처리
  const handleActiveDepth3 = (index) => {
    if (activeDepth3 === index) {
      setActiveDepth3(null); // 클릭된 depth3가 이미 열려 있으면 닫기
    } else {
      setActiveDepth3(index); // 클릭된 depth3 열기
    }
  };

  // "Back" 버튼 클릭 시 이전 레벨로 돌아가기
  const handleBack = () => {
    // 현재 상태의 activeLevel에 따라서 돌아갈 레벨을 설정
    if (activeLevel === 3) {
      setActiveLevel(2); // 3뎁스에서 2뎁스로 이동
      setActiveDepth3(null); // 3뎁스 항목 닫기
    } else if (activeLevel === 2) {
      setActiveLevel(1); // 2뎁스에서 1뎁스로 이동
      setActiveDepth2(null); // 2뎁스 항목 닫기
    } else if (activeLevel === 1) {
      setActiveLevel(0); // 1뎁스에서 0뎁스로 초기화
      setActiveDepth2(null); // 2뎁스 항목 닫기
      setActiveDepth3(null); // 3뎁스 항목 닫기
    }
  };

  useEffect(() => {
  console.log('Active Level changed to:', activeLevel);
}, [activeLevel]); // activeLevel 상태가 변경될 때마다 실행
  
  
  

  useEffect(() => {
    console.log('activeLevel: ', activeLevel);
    console.log('activeDepth2: ', activeDepth2);
    console.log('activeDepth3: ', activeDepth3);
  }, [activeLevel, activeDepth2, activeDepth3]);

  return (
    <>
      <p onClick={(event) => handleActiveLevel(0, event)}>초기화</p>
      <p onClick={(event) => handleActiveLevel(1, event)}>뎁스 시작하기</p><br />
      <div className="lnb-wrap">
      <div className="lnb-head">
          {activeLevel >= 2 ? (
            <div onClick={handleBack}>Back</div>
          ) : (
            <div>SPC+ESWA</div>
          )}
        </div>
        <nav className="lnb-body">
          {mockData.map((item, index) => (
            <ul key={index} className={`depth01 ${activeLevel > 0 ? 'on' : ''}`}>
              <li
                onClick={(event) => handleActiveLevel(2, event)} // 1뎁스 항목 클릭 시 2뎁스 열기
                className={`${activeLevel > 0 ? 'on' : ''}`}
              >
                <p>
                  <i className={`icon-firstletter ${activeLevel > 1 && 'on'}`}>처</i>
                  <span>{item.label}</span>
                </p>
                {/* 2뎁스 항목만 렌더링 */}
                <div className="depth-container">
                  <ul className={`depth02 ${activeLevel >= 2 ? 'on' : ''} ${activeDepth2 !== null ? 'collapsed' : ''}`}>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <p
                          onClick={() => handleActiveDepth2(childIndex)}
                          className={activeDepth2 === childIndex ? 'on' : ''}
                        >
                          {child.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {/* depth03을 자식 항목으로 나란히 표시 */}
                  <ul className={`depth03 ${activeDepth2 !== null ? 'on' : ''}`}>
                    {item.children.map((child, childIndex) => (
                      activeDepth2 === childIndex && (
                        child.children.map((subChild, subIndex) => (
                          <li
                            key={subIndex}
                            onClick={() => handleActiveDepth3(subIndex)}
                            className={activeDepth3 === subIndex ? 'on' : ''}
                          >
                            <p>{subChild.label}</p>
                            {activeDepth3 === subIndex && subChild.children.length > 0 && (
                              <ul className="depth04">
                                {subChild.children.map((finalChild, finalIndex) => (
                                  <li key={finalIndex}>
                                    <p>{finalChild.label}</p>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))
                      )
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </>
  );
};

export default LNB;
