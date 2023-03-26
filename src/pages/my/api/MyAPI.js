// 작성자: 구현우

const MyAPI = {
  getUserInfo(pageId) {
    // 유저 정보 조회 로직 필요

    return {
      name: "구현우",
      track: "Front-End",
      class: "10",
      position: "운영진",
      student_id: "20170049",
      major: "컴퓨터공학과",
      likelion_email: "ghw9174@gmail.com",
      profile_image: "",
      description: "안녕하세요 10기 운영진 구현우입니다.",
      tech_stack: [
        "HTML",
        "CSS",
        "REACT",
        "JAVASCRIPT",
        "PYTHON",
        "DJANGO",
        "JAVA",
        "TYPESCRIPT",
        "SPRING",
        "C",
        "CPP",
        "SQL",
        "MYSQL",
        "DOCKER",
        "AWS",
        "CSHARP",
        "SPRINGBOOT",
        "VUE",
        "GO",
        "FLASK",
        "SVELTE",
        "NEXTJS",
        "FIGMA",
        "GIT",
        "SWIFT",
        "KOTLIN",
        "KUBERNETES",
      ],
      projects: [
        { project_id: "1", project_logo: "" },
        { project_id: "2", project_logo: "" },
      ],
    };
  },

  updateUserInfo(key, value) {
    // 유저 정보 수정 로직 필요
  },
};

export default MyAPI;
