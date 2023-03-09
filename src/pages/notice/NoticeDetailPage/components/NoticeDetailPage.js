// 작성자 : 이수화

import { useState } from "react";
import "../styles/NoticeDetailPage.css";
import Layout from "../../../../common/components/Layout";
import { noticeCategoryIcon, noticeCategoryFontColor } from "../../NoticePage/constant/Notice";
import DeleteModal from "../../../../common/components/DeleteModal";
import CheckedModal from './CheckedModal';

const NoticeDetailPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCheckedModal, setShowCheckedModal] = useState(false);

  const data = {
    id: 1,
    category: "해커톤",
    writer: "작성자",
    title: "해커톤 관련 공지",
    date: "2022-08-01",
    image: "이미지 링크",
    description:
      "별이 마리아 피어나듯이 노새, 있습니다. 것은 강아지, 아름다운 이름과 별이 계십니다. \n걱정도 둘 아침이 새워 까닭입니다. 하나에 멀리 릴케 하나에 쓸쓸함과 청춘이 겨울이 별이 새겨지는 거외다. 오는 둘 애기 별이 어머님, 가난한 아직 있습니다. 보고, 새겨지는 시와 있습니다. 덮어 강아지, 위에 계집애들의 노루, 봅니다. 소학교 다하지 봄이 소녀들의 벌레는 없이 별 북간도에 거외다. 헤는 별 별 하나에 나의 나는 슬퍼하는 아름다운 있습니다. 어머니, 내일 아무 것은 둘 계십니다. 어머님, 별 내 잔디가 이름자를 아침이 이제 거외다.",
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleChecked = () => {
    /**
     * todo: 공감 누르기 통신 API 추가
     * 눌렀을 때 글씨색 변경
     */
  }

  const handleCheckedList = () => {
    /**
     * todo: 공감 명단 확인 통신 API 추가
     * todo: 명단 모달 추가
     */
    setShowCheckedModal(true);
  }

  return (
    <div className="NoticeDetailPage">
      <Layout page="notice">
        <div className="postFrame">
          <div className="noticeDetailTop">
            <div className="noticeDetailCategory">
              <span>{noticeCategoryIcon[`${data.category}`]}</span>
              <span
                style={{
                  color: `${noticeCategoryFontColor[`${data.category}`]}`,
                }}
              >
                {data.category}
              </span>
            </div>
            <div className="noticeDetailBtns">
              <span>수정</span>
              &nbsp;&nbsp;&nbsp;
              <span onClick={handleDelete}>삭제</span>
            </div>
          </div>
          <div className="detailInfo">
            <div className="detailTitle">{data.title}</div>
            <div className="detailWrite">
              {data.writer}&nbsp;&nbsp;|&nbsp;&nbsp;{data.date}
            </div>
            <hr />
          </div>
          <br />
          <br />
          <div className="detailWriting">{data.description}</div>
          {/* 공감 박스 */}
          <div className="checked">
            <div className="checkedBox" onClick={handleChecked}>
              <img src="/images/checked_button.png" alt="공지 확인 아이콘" />&nbsp;&nbsp;&nbsp;
              <span>30</span>
            </div>
            <div className="checkedMoreBox" onClick={handleCheckedList}>
              <img src="/images/checked_more_button.png" alt="공지 확인 더보기 아이콘" />
            </div>
          </div><hr/>
          {/* 이전글 / 다음글 */}
          <div className="postPrevNext">
                <div className='prevPost'></div>
          </div>
          <DeleteModal
            show={showDeleteModal}
            onHide={() => {setShowDeleteModal(false)}}
            id={data.id}
            page={"notice"}
          />
          <CheckedModal
            show={showCheckedModal}
            onHide={() => {setShowCheckedModal(false)}}
          />
        </div>
      </Layout>
    </div>
  );
};

export default NoticeDetailPage;
