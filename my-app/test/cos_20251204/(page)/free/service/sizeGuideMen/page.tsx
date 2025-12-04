import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '사이즈 가이드 - Men',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-row free-full-width q-vertical-padding-global">
        <div className="free-contain">
          <div className="free-layout--narrow free-center-col">
            {/* free-breadcrumb */}
            <div className="free-breadcrumb">
              <a href="/main" className="a-link">
                <h3 className="breadcrumb-heading">HOME</h3>
              </a>
              <a href="/free/service" className="a-link">
                <h3 className="breadcrumb-heading">CUSTOMER SERVICE</h3>
              </a>
              <a href="/free/service/sizeGuideWomen" className="a-link">
                <h3 className="breadcrumb-heading">사이즈 가이드 - Men</h3>
              </a>
            </div>
            {/* accordion */}
            <div className="accordion-group">
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>사이즈표</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '36%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="left-align">
                            <p>사이즈</p>
                          </th>
                          <th>
                            <p>XS</p>
                          </th>
                          <th>
                            <p>S</p>
                          </th>
                          <th>
                            <p>M</p>
                          </th>
                          <th>
                            <p>L</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>한국</p>
                          </td>
                          <td>
                            <p>44</p>
                          </td>
                          <td>
                            <p>55-66</p>
                          </td>
                          <td>
                            <p>77-88</p>
                          </td>
                          <td>
                            <p>99</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>유럽</p>
                          </td>
                          <td>
                            <p>34</p>
                          </td>
                          <td>
                            <p>36-38</p>
                          </td>
                          <td>
                            <p>40-42</p>
                          </td>
                          <td>
                            <p>44</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>영국</p>
                          </td>
                          <td>
                            <p>8</p>
                          </td>
                          <td>
                            <p>10-12</p>
                          </td>
                          <td>
                            <p>14-16</p>
                          </td>
                          <td>
                            <p>18</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>프랑스/스페인</p>
                          </td>
                          <td>
                            <p>36</p>
                          </td>
                          <td>
                            <p>38-40</p>
                          </td>
                          <td>
                            <p>42-44</p>
                          </td>
                          <td>
                            <p>46</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>이탈리아</p>
                          </td>
                          <td>
                            <p>40</p>
                          </td>
                          <td>
                            <p>42-44</p>
                          </td>
                          <td>
                            <p>46-48</p>
                          </td>
                          <td>
                            <p>50</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>상세 치수(CM)</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '36%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="left-align">
                            <p>사이즈</p>
                          </th>
                          <th>
                            <p>XS</p>
                          </th>
                          <th>
                            <p>S</p>
                          </th>
                          <th>
                            <p>M</p>
                          </th>
                          <th>
                            <p>L</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>가슴</p>
                          </td>
                          <td>
                            <p>80</p>
                          </td>
                          <td>
                            <p>84-88</p>
                          </td>
                          <td>
                            <p>92-96</p>
                          </td>
                          <td>
                            <p>100</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>어깨</p>
                          </td>
                          <td>
                            <p>37</p>
                          </td>
                          <td>
                            <p>37.5-38</p>
                          </td>
                          <td>
                            <p>38.5-39</p>
                          </td>
                          <td>
                            <p>39.5</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>허리</p>
                          </td>
                          <td>
                            <p>64</p>
                          </td>
                          <td>
                            <p>68-72</p>
                          </td>
                          <td>
                            <p>76-80</p>
                          </td>
                          <td>
                            <p>84</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>엉덩이</p>
                          </td>
                          <td>
                            <p>88</p>
                          </td>
                          <td>
                            <p>92-96</p>
                          </td>
                          <td>
                            <p>100-104</p>
                          </td>
                          <td>
                            <p>108</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>다리 안쪽</p>
                          </td>
                          <td>
                            <p>77</p>
                          </td>
                          <td>
                            <p>78-79</p>
                          </td>
                          <td>
                            <p>80-81</p>
                          </td>
                          <td>
                            <p>82</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>데님 사이즈 및 상품 치수(CM)</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '25%' }} />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="left-align">
                            <p>사이즈(인치)</p>
                          </th>
                          <th>
                            <p>25</p>
                          </th>
                          <th>
                            <p>26</p>
                          </th>
                          <th>
                            <p>27</p>
                          </th>
                          <th>
                            <p>28</p>
                          </th>
                          <th>
                            <p>29</p>
                          </th>
                          <th>
                            <p>30</p>
                          </th>
                          <th>
                            <p>31</p>
                          </th>
                          <th>
                            <p>32</p>
                          </th>
                          <th>
                            <p>&nbsp;</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>허리</p>
                          </td>
                          <td>
                            <p>64.5</p>
                          </td>
                          <td>
                            <p>67</p>
                          </td>
                          <td>
                            <p>69.5</p>
                          </td>
                          <td>
                            <p>72</p>
                          </td>
                          <td>
                            <p>74.5</p>
                          </td>
                          <td>
                            <p>77</p>
                          </td>
                          <td>
                            <p>79.5</p>
                          </td>
                          <td>
                            <p>82</p>
                          </td>
                          <td>
                            <p>&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>엉덩이</p>
                          </td>
                          <td>
                            <p>88.5</p>
                          </td>
                          <td>
                            <p>91</p>
                          </td>
                          <td>
                            <p>93.5</p>
                          </td>
                          <td>
                            <p>96</p>
                          </td>
                          <td>
                            <p>98.5</p>
                          </td>
                          <td>
                            <p>101</p>
                          </td>
                          <td>
                            <p>103.5</p>
                          </td>
                          <td>
                            <p>106</p>
                          </td>
                          <td>
                            <p>&nbsp;</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>신체 치수 측정 방법</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <h4>가슴둘레:</h4>
                    <p>가슴에서 가장 두드러진 부분을 측정하세요.</p>
                    <h4>어깨너비:</h4>
                    <p>양어깨의 끝점 사이를 측정하세요.</p>
                    <h4>허리둘레:</h4>
                    <p>허리둘레에서 가장 얇은 부분을 측정하세요.</p>
                    <h4>엉덩이둘레:</h4>
                    <p>엉덩이의 가장 넓은 부분을 측정하세요.</p>
                    <h4>다리 안쪽 길이:</h4>
                    <p>다리 안쪽의 가장 윗부분부터 바닥까지 측정하세요.</p>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>COS 여성 액세사리 사이즈 가이드</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <h3>벨트</h3>
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '36%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                        <col style={{ width: '16%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="left-align">
                            <p>사이즈</p>
                          </th>
                          <th>
                            <p>XS</p>
                          </th>
                          <th>
                            <p>S</p>
                          </th>
                          <th>
                            <p>M</p>
                          </th>
                          <th>
                            <p>L</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>허리(CM)</p>
                          </td>
                          <td>
                            <p>64</p>
                          </td>
                          <td>
                            <p>68-72</p>
                          </td>
                          <td>
                            <p>76-80</p>
                          </td>
                          <td>
                            <p>84</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>유럽</p>
                          </td>
                          <td>
                            <p>34</p>
                          </td>
                          <td>
                            <p>36-38</p>
                          </td>
                          <td>
                            <p>40-42</p>
                          </td>
                          <td>
                            <p>44</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>영국</p>
                          </td>
                          <td>
                            <p>8</p>
                          </td>
                          <td>
                            <p>10-12</p>
                          </td>
                          <td>
                            <p>14-16</p>
                          </td>
                          <td>
                            <p>18</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>프랑스/스페인</p>
                          </td>
                          <td>
                            <p>36</p>
                          </td>
                          <td>
                            <p>38-40</p>
                          </td>
                          <td>
                            <p>42-44</p>
                          </td>
                          <td>
                            <p>46</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>이탈리아</p>
                          </td>
                          <td>
                            <p>40</p>
                          </td>
                          <td>
                            <p>42-44</p>
                          </td>
                          <td>
                            <p>46-48</p>
                          </td>
                          <td>
                            <p>50</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3>슈즈/양말</h3>
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '22%' }} />
                        <col style={{ width: '13%' }} />
                        <col style={{ width: '13%' }} />
                        <col style={{ width: '13%' }} />
                        <col style={{ width: '13%' }} />
                        <col style={{ width: '13%' }} />
                        <col style={{ width: '13%' }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>한국</p>
                          </td>
                          <td>
                            <p>230</p>
                          </td>
                          <td>
                            <p>235</p>
                          </td>
                          <td>
                            <p>240</p>
                          </td>
                          <td>
                            <p>250</p>
                          </td>
                          <td>
                            <p>255</p>
                          </td>
                          <td>
                            <p>265</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>유럽</p>
                          </td>
                          <td>
                            <p>36</p>
                          </td>
                          <td>
                            <p>37</p>
                          </td>
                          <td>
                            <p>38</p>
                          </td>
                          <td>
                            <p>39</p>
                          </td>
                          <td>
                            <p>40</p>
                          </td>
                          <td>
                            <p>41</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>영국</p>
                          </td>
                          <td>
                            <p>3.5</p>
                          </td>
                          <td>
                            <p>4</p>
                          </td>
                          <td>
                            <p>5</p>
                          </td>
                          <td>
                            <p>6</p>
                          </td>
                          <td>
                            <p>6.5</p>
                          </td>
                          <td>
                            <p>7.5</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="accordion">
                <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                  <span>COS 언더웨어/스윔웨어 사이즈 가이드</span>
                  <i className="icon"></i>
                </button>
                <div className="contArea" id="accordionContent" aria-hidden="true">
                  <div className="free-table-content">
                    <h3>상품 치수 상세정보</h3>
                    <p className="a-paragraph">
                      브래지어 사이즈의 숫자는 밑 가슴 측정값을 나타냅니다. 줄자를 가슴 바로 아랫부분을 따라 단단히
                      잡아당겨 측정한 후 가장 가까운 수치로 반올림하세요. 예) 실제 측정 77cm는 크기 75cm와 같습니다.
                      브래지어 사이즈의 영문은 컵 사이즈를 의미합니다.
                    </p>
                    <div className="bra-size">
                      <div className="size-container">
                        <h4>한국/유럽 브라 사이즈</h4>
                        <div className="size color-white normal-background">75A</div>
                        <div className="clear"></div>
                        <div className="size light-background">75B</div>
                        <div className="size medium-background">80B</div>
                        <div className="clear"></div>
                        <div className="size medium-background">75C</div>
                        <div className="size color-white dark-background">80C</div>
                      </div>
                      <div className="size-container">
                        <h4>영국 브라 사이즈</h4>
                        <div className="size color-white normal-background">34A</div>
                        <div className="clear"></div>
                        <div className="size light-background">34B</div>
                        <div className="size medium-background">36B</div>
                        <div className="clear"></div>
                        <div className="size medium-background">34C</div>
                        <div className="size color-white dark-background">36C</div>
                      </div>
                      <div className="size-container">
                        <h4>이탈리아 브라 사이즈</h4>
                        <div className="size color-white normal-background">2A</div>
                        <div className="clear"></div>
                        <div className="size light-background">2B</div>
                        <div className="size medium-background">3B</div>
                        <div className="clear"></div>
                        <div className="size medium-background">2C</div>
                        <div className="size color-white dark-background">3C</div>
                      </div>
                    </div>
                    <div className="clear"></div>
                    <p>같은 색상으로 음영 처리된 치수가 동일한 컵 사이즈입니다.</p>
                    <br />
                    <br />
                    <table width="100%">
                      <colgroup>
                        <col style={{ width: '25%' }} />
                        <col style={{ width: '18.75%' }} />
                        <col style={{ width: '18.75%' }} />
                        <col style={{ width: '18.75%' }} />
                        <col style={{ width: '18.75%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th className="left-align">
                            <p>사이즈</p>
                          </th>
                          <th>
                            <p>XS</p>
                          </th>
                          <th>
                            <p>S</p>
                          </th>
                          <th>
                            <p>M</p>
                          </th>
                          <th>
                            <p>L</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="left-align">
                            <p>스니커즈</p>
                          </td>
                          <td>
                            <p>32/34</p>
                          </td>
                          <td>
                            <p>36/38</p>
                          </td>
                          <td>
                            <p>40</p>
                          </td>
                          <td>
                            <p>42</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="left-align">
                            <p>스윔웨어</p>
                          </td>
                          <td>
                            <p>32/34</p>
                          </td>
                          <td>
                            <p>36/38</p>
                          </td>
                          <td>
                            <p>40</p>
                          </td>
                          <td>
                            <p>42</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
