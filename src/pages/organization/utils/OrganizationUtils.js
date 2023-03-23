// 작성자: 구현우

import OrganizationAPI from "../api/OrganizationAPI";

const OrganizationUtils = {
  setCurrentOrganization() {
    return OrganizationAPI.getCurrentOrganization();
  },

  setPreviousOrganization() {
    return OrganizationAPI.getPreviousOrganization();
  },
};

export default OrganizationUtils;
