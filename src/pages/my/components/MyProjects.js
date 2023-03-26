// 작성자: 구현우

import "../styles/MyProjects.css";

const MyProjects = ({ projects }) => {
  const showProjectModal = () => {
    // 프로젝트 모달 띄우는 로직 구현
  };

  const showProjects = () => {
    if (!projects.length) return '"멋진 프로젝트에 참가해 보세요."';

    const answer = [];

    projects.forEach((project, index) => {
      answer.push(
        <div key={index} onClick={() => showProjectModal()}>
          <img
            src={project.project_logo === "" ? "/images/default_image.png" : project.project_logo}
            alt=""
          />
        </div>
      );
    });

    return answer;
  };

  return (
    <div id="MyProjects">
      <div>
        <div>Projects</div>
      </div>
      <div>{showProjects()}</div>
    </div>
  );
};

export default MyProjects;
