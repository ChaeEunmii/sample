import React, { useState } from 'react';
import 'components/LNBMenu.css';

const LNBMenu = () => {
  const [showFirstLevel, setShowFirstLevel] = useState(false); // 1뎁스를 보이거나 숨기기 위한 상태 추가
  const [active1, setActive1] = useState(null);
  const [active2, setActive2] = useState(null);
  const [expanded4, setExpanded4] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    {
      title: '1뎁스 메뉴 1',
      subMenu: [
        { title: '2뎁스 메뉴 1', subMenu: [{ title: '3뎁스 메뉴 1', subMenu: [{ title: '4뎁스 메뉴 1', url: '/page1' }, { title: '4뎁스 메뉴 2', url: '/page2' }] }, { title: '3뎁스 메뉴 2', url: '/page3' }] },
        { title: '2뎁스 메뉴 2', subMenu: [{ title: '3뎁스 메뉴 3', url: '/page4' }, { title: '3뎁스 메뉴 4', subMenu: [{ title: '4뎁스 메뉴 1', url: '/page5' }, { title: '4뎁스 메뉴 2', url: '/page6' }] }] }
      ]
    },
    {
      title: '1뎁스 메뉴 2',
      url: '/main-page' // 1뎁스에 하위 메뉴 없음 → 바로 URL 이동
    },
    {
      title: '1뎁스 메뉴 3',
      subMenu: [
        { title: '2뎁스 메뉴 3', subMenu: [{ title: '3뎁스 메뉴 1', subMenu: [{ title: '4뎁스 메뉴 1', url: '/page1' }, { title: '4뎁스 메뉴 2', url: '/page2' }] }, { title: '3뎁스 메뉴 2', url: '/page3' }] },
        { title: '2뎁스 메뉴 4', subMenu: [{ title: '3뎁스 메뉴 3', url: '/page4' }, { title: '3뎁스 메뉴 4', subMenu: [{ title: '4뎁스 메뉴 1', url: '/page5' }, { title: '4뎁스 메뉴 2', url: '/page6' }] }] }
      ]
    },
  ];

  const handleClick = (item, level, index) => {
    if (item.url) {
      window.location.href = item.url;
      return;
    }

    if (level === 1) {
      setActive1(index);
      setActive2(null);
      setCollapsed(true);
    } else if (level === 2) {
      setActive2(index);
    } else if (level === 4) {
      setExpanded4(expanded4 === index ? null : index);
    }
  };

  const onBack = () => {
    if (active2 !== null) {
      setActive2(null);
    } else if (active1 !== null) {
      setActive1(null);
      setCollapsed(false);
    }
  };

  const handleToggleMenu = () => {
    setShowFirstLevel(!showFirstLevel); // "시작하기" 버튼 클릭 시 1뎁스를 보이거나 숨기기
  };

  return (
    <>
      <div>
        <button onClick={handleToggleMenu}>시작하기</button> {/* "시작하기" 버튼 클릭 시 메뉴를 토글 */}
      </div>
      <div className="lnb-layout">
        <div className="lnb-head">
          {collapsed ? (
            <button onClick={onBack} className="back-btn">뒤로가기</button>
          ) : (
            <div>SPC+ESWA</div>
          )}
        </div>

        <div className="lnb-container">
          {/* 1뎁스 */}
          {showFirstLevel && (
            <div className={`menu-level first-level ${collapsed ? 'collapsed' : 'expanded'}`}>
              {menu.map((item, index) => (
                <div key={index} onClick={() => handleClick(item, 1, index)} className="menu-item">
                  <i className="icon-firstletter">한</i>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          )}

          {/* 2뎁스 */}
          {collapsed && active1 !== null && menu[active1].subMenu && (
            <div className={`menu-level second-level ${active2 !== null ? 'collapsed' : ''}`}>
              {menu[active1].subMenu.map((item, index) => (
                <div key={index} onClick={() => handleClick(item, 2, index)} className="menu-item">
                  {item.title}
                </div>
              ))}
            </div>
          )}

          {/* 3뎁스 + 4뎁스 */}
          {active2 !== null && menu[active1].subMenu[active2].subMenu && (
            <div className="menu-level third-level">
              {menu[active1].subMenu[active2].subMenu.map((item, index) => (
                <div key={index} className="menu-item">
                  <div onClick={() => handleClick(item, 4, index)}>
                    {item.title}
                  </div>
                  {expanded4 === index && item.subMenu && (
                    <div className="sub-menu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <div key={subIndex} onClick={() => handleClick(subItem, 4, subIndex)} className="menu-item">
                          {subItem.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LNBMenu;
