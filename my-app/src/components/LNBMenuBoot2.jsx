import { useState, useContext } from "react";
import 'components/LNBMenuBoot2.css';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));
  const isActive = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={`menu-item ${isActive ? 'is-active' : ''}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const LNBMenuBoot = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const FirstOnClick = (eventKey) => setActiveKey(eventKey || null);
  const onBack = () => setActiveKey(null);
  const handleItemClick = (item) => setSelectedItem(item);

  const menuData = [
    {
      label: "메뉴1",
      subMenus: [
        { label: "메뉴1-1", items: ["메뉴1-1-1", "메뉴1-1-2", "메뉴1-1-3"] },
        { label: "메뉴1-2", items: ["메뉴1-2-1", "메뉴1-2-2", "메뉴1-2-3"] }
      ]
    },
    {
      label: "메뉴2",
      subMenus: [
        { label: "메뉴2-1", items: ["메뉴2-1-1", "메뉴2-1-2", "메뉴2-1-3"] },
        { label: "메뉴2-2", items: [] }
      ]
    }
  ];

  return (
    <div className="lnb-layout-wrap">
      <div className="lnb-head">
        {activeKey ? (
          <div className="back-btn" onClick={onBack}>Back</div>
        ) : (
          <div className="head-name">SPC+ESWA</div>
        )}
      </div>

      <div className="lnb-body">
        <Accordion
          className={`depth01 ${activeKey ? 'is-collapsed' : ''}`}
          activeKey={activeKey}
          onSelect={FirstOnClick}
          flush
        >
          {menuData.map((menu, menuIndex) => (
            <Card key={menuIndex}>
              <Card.Header>
                <CustomToggle eventKey={String(menuIndex)} callback={FirstOnClick}>
                  <i className="first-letter">{menuIndex}</i>
                  <div className="first-menu">{menu.label}</div>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={String(menuIndex)} className="depth02">
                <Accordion flush>
                  {menu.subMenus.map((sub, subIndex) => {
                    const subKey = `${menuIndex}-${subIndex}`;
                    return (
                      <Accordion.Item eventKey={subKey} key={subKey}>
                        <Accordion.Header className={sub.items.length === 0 ? 'no-child' : ''}>
                          {sub.label}
                        </Accordion.Header>
                        {sub.items.length > 0 && (
                          <Accordion.Body>
                            <ul className="depth03">
                              {sub.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className={selectedItem === item ? 'current' : ''}
                                  onClick={() => handleItemClick(item)}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        )}
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LNBMenuBoot;
