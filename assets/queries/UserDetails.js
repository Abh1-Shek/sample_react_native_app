import {
    gql
  } from "@apollo/client";


const USER_DETAILS = gql`
  query {
    getUserDetails(id: 1) {
        userName
        userBio
        link
    }
  }
`;

export default USER_DETAILS;