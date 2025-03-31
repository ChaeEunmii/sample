import React, { useState } from 'react';
import './LNBMenu.css';

const LNBMenu = () => {
  const [activeLevel, setActiveLevel] = useState(0);  // 0: 초기 상태, 1: 1뎁스, 2: 2뎁스
  const [activeFirstLevel, setActiveFirstLevel] = useState(null); // 1뎁스 클릭된 항목
  const [activeSecondLevel, setActiveSecondLevel] = useState(null); // 2뎁스 클릭된 항목
  const [expandedFourthLevel, setExpandedFourthLevel] = useState(null); // 4뎁스 펼쳐짐 상태
  const [isCollapsed, setIsCollapsed] = useState(false); // 1뎁스가 접혔는지 여부

  const menu = [
    {
      title: '1뎁스 메뉴 1',
      subMenu: [
        { title: '2뎁스 메뉴 1', subMenu: [{ title: '3뎁스 메뉴 1', subMenu: [{ title: '4뎁스 메뉴 1' }, { title: '4뎁스 메뉴 2' }] }, { title: '3뎁스 메뉴 2' }] },
        { title: '2뎁스 메뉴 2', subMenu: [{ title: '3뎁스 메뉴 3', subMenu: [{ title: '4뎁스 메뉴 1' }, { title: '4뎁스 메뉴 2' }] }, { title: '3뎁스 메뉴 4', subMenu: [{ title: '4뎁스 메뉴 1' }, { title: '4뎁스 메뉴 2' }]  }] }
      ]
    },
    {
      title: '1뎁스 메뉴 2',
      subMenu: [
        { title: '2뎁스 메뉴 3', subMenu: [{ title: '3뎁스 메뉴 5' }] }
      ]
    }
  ];

  const handleFirstLevelClick = (itemIndex) => {
    setActiveLevel(1);
    setActiveFirstLevel(itemIndex);
    setIsCollapsed(true); // 1뎁스가 접히도록 설정
  };

  const handleSecondLevelClick = (subMenuIndex) => {
    setActiveLevel(2);
    setActiveSecondLevel(subMenuIndex);
  };

  const handleFourthLevelClick = (subMenuIndex) => {
    // 4뎁스 아코디언 형태로 펼쳐짐
    setExpandedFourthLevel(expandedFourthLevel === subMenuIndex ? null : subMenuIndex);
  };

  const handleBackClick = () => {
    if (activeLevel === 2) {
      // 2뎁스에서 뒤로가기 -> 1뎁스로
      setActiveLevel(1);
      setActiveSecondLevel(null);
    } else if (activeLevel === 1) {
      // 1뎁스에서 뒤로가기 -> 초기 상태로
      setIsCollapsed(false);
      setActiveLevel(0);
      setActiveFirstLevel(null);
    }
  };

  return (
    <>
      <div className="lnb-layout">
        <div className="lnb-head">
          {!isCollapsed ? <div>SPC+ESWA</div> : <button onClick={handleBackClick} className="back-btn">뒤로가기</button>}
        </div>
        <div className="lnb-container">
          {/* 1뎁스 메뉴 */}
          <div className={`menu-level first-level ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            {menu.map((item, index) => (
              <div key={index} onClick={() => handleFirstLevelClick(index)} className="menu-item">
                {item.title}
              </div>
            ))}
          </div>
          <div className="menu-levels">
            {/* 2뎁스 메뉴 + 3뎁스 + 4뎁스 (아코디언 형태로 펼쳐짐) */}
            {activeLevel === 1 && isCollapsed && (
              <div className="menu-level second-level">
                {/* <button onClick={handleBackClick} className="back-btn">뒤로가기</button> */}
                {menu[activeFirstLevel].subMenu.map((item, index) => (
                  <div key={index} onClick={() => handleSecondLevelClick(index)} className="menu-item">
                    {item.title}
                  </div>
                ))}
              </div>
            )}

            {/* 3뎁스 + 4뎁스 메뉴 (2뎁스가 클릭되면 바로 펼쳐지도록) */}
            {activeLevel === 2 && (
              <div className="menu-level third-level">
                {/* <button onClick={handleBackClick} className="back-btn">뒤로가기</button> */}
                {menu[activeFirstLevel].subMenu[activeSecondLevel].subMenu.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div onClick={() => handleFourthLevelClick(index)}>
                      {item.title}
                    </div>
                    {/* 4뎁스 항목이 펼쳐질 때 추가 항목을 표시 */}
                    {expandedFourthLevel === index && item.subMenu && (
                      <div className="sub-menu">
                        {item.subMenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="menu-item">{subItem.title}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>  
        </div>
      </div>
      
    </>
    
  );
};

export default LNBMenu;
