// 작성자: 구현우

import Layout from "../../common/components/Layout";
import Title from "../../common/components/Title";

import "./IntroducePage.css";

import { useState, useEffect } from "react";

const IntroducePage = () => {
  const [frameState, setFrameState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);
    }, 200);
  }, []);

  return (
    <div className="IntroducePage">
      <Layout page="introduce">
        <div id="Introduce_Layout">
          <div>
            <Title page="introduce" />
            <div id="introduce_body">
              <div className={["introduce_init", frameState && "introduce_show"].join(" ")}>
                <span>🦁 멋쟁이 사자처럼이란? </span>
                <span>
                  ‘멋쟁이사자처럼’은 현재 국내에서 가장 많은 학생들이 활동하고 있는
                  <span> 프로그래밍 교육 프로그램 </span>입니다.
                  <br />
                  전국의 대학이 함께하는
                  <span> 연합 코딩 동아리</span>
                  로, 평소 기술의 장벽으로 실현하지 못한 여러 아이디어를
                  <br />
                  각종 스터디를 통해
                  <span> 배우며 도전해볼 수 있는 동아리 </span>
                  입니다.
                </span>
              </div>
              <div className={["introduce_init", frameState && "introduce_show"].join(" ")}>
                <span>👀 어떤 활동을 하나요?</span>
                <span>
                  ‘멋쟁이사자처럼’은
                  <span> 창업과 서비스 개발에 대한 교육 </span>
                  을 제공합니다.
                  <br />
                  또한 팀 빌딩과 해커톤을 통해 아이디어를 내 손으로 실현시킬 수 있는 기회를
                  제공합니다.
                  <br />
                  코딩을 모르는 분이라도 누구나 참여할 수 있으며,
                  <br />
                  그 무엇보다 나의 아이디어를 실현시키겠다는 열정이 중요합니다.
                  <br />
                  <br />
                  올해(2022)는 정규 교육 커리큘럼 후 기업연계로 전체 학생을 대상으로
                  <span> 대규모 해커톤 </span>
                  을 진행합니다.
                  <br />
                  우수 수료팀에 채용 특전을 물론 다양한 혜택까지 준비되어 있는 풍성한 행사를
                  진행합니다.
                </span>
              </div>
              <div className={["introduce_init", frameState && "introduce_show"].join(" ")}>
                <span>🐥 멋쟁이 사자처럼의 시작은?</span>
                <span>
                  멋쟁이사자처럼의 시작으로 2013년 서울대학교 30명의 학생들에게
                  <br />
                  Ruby on rails 기반의 교육 프로그램을 진행하는 것으로 시작되었습니다.
                  <br />
                  “내 아이디어를 내 손으로 실현한다”라는 가치 아래
                  <br />
                  현재 국내에서 가장 많은 학생들이 활동하고 있는 프로그래밍 교육 프로그램입니다.
                  <br />
                  <br />
                  전국 대학을 포함한 세계 130여 개 대학에서 선발된
                  <span> 8,400여 명의 학생들이 활동 </span>
                  하였으며
                  <br />
                  교육 프로그램을 통해
                  <span> 1,000여 개의 서비스가 제작 </span>
                  되었습니다. (2021년 1월 누적)
                </span>
              </div>
              <div className={["introduce_init", frameState && "introduce_show"].join(" ")}>
                <span>🛤️️ 무슨 트랙이 있나요?</span>
                <span>
                  올해(2022)는 전 기수와 다르게,
                  <span> 기획/디자인 트랙 </span>
                  이 추가되었고,
                  <br />
                  개발 트랙 역시
                  <span> 백엔드(장고) </span>
                  뿐만 아니라
                  <span> 프론트엔드(리액트) </span>
                  트랙도 신설되어 운영됩니다.
                  <br />
                  시대의 트렌드에 맞춰 조금 더 고도화된 콘텐츠로 차원이 다른 서비스 빌딩을 진행 할
                  예정입니다.
                </span>
              </div>
              <div className={["introduce_init", frameState && "introduce_show"].join(" ")}>
                <span>🏫 참가 대학은?</span>
                <span>
                  올해(2022) ‘멋쟁이사자처럼 대학’에는
                  <span> 전국 42개 대학 </span>이 참여합니다.
                </span>
                <div id="univ_box">
                  <div>
                    강원대, 경북대, 경상국립대, 계명대, 고려대(세종), 고려대(안암), 광운대, 국민대,
                    <span> 금오공과대 </span>, 덕성여대, 동국대(서울), 동덕여대, 명지대(서울),
                    삼육대, 상명대, 서강대, 서울대, 서울여대, 성공회대, 성신여대, 숙명여대, 순천대,
                    숭실대, 연세대, 영남대, 을지대, 이화여대, 인천대, 인하대, 전남대(광주), 중앙대,
                    충북대, 한국외대(서울), 한국외대(글로벌), 한국항공대, 한밭대, 한서대(서산),
                    한성대, 한양대(서울), 한양대(에리카), 홍익대
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IntroducePage;
