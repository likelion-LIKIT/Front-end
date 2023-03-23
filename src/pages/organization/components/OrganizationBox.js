// 작성자: 구현우

import "../styles/OrganizationBox.css";

const OrganizationBox = ({ organizationInfo }) => {
  const showMembers = (members) => {
    const answer = [];

    members.forEach((info, index) => {
      answer.push(
        <div key={index} id="organization_member">
          <div>
            <img src={info.img === "" ? "images/basic_profile.png" : info.img} alt="" />
          </div>
          <div>
            {info.studentID}' {info.name}
          </div>
          <div>
            {info.position && <div>{info.position}</div>}
            <div>{info.position ? info.track.join(", ") : info.track}</div>
          </div>
        </div>
      );
    });

    return answer;
  };

  return (
    <div id="OrganizationBox">
      <div id="OrganizationBox_header">
        <div>{organizationInfo.season}기</div>
        <div>{organizationInfo.years}</div>
      </div>
      <div id="OrganizationBox_body">
        <div>
          <div>🌿 운영진</div>
          <div>{showMembers(organizationInfo.managements)}</div>
        </div>
        <div>
          <div>🌱 아기사자</div>
          <div>{showMembers(organizationInfo.generals)}</div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationBox;
