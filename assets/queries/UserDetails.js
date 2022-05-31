// a query to get the user name, bio, and link to the image

import {
    gql
  } from "@apollo/client";


const USER_DETAILS = gql`
  query ($USER_ID: Int) {
    getUserDetails(id: $USER_ID) {
        userName
        userBio
        link
    }
  }
`;

export default USER_DETAILS;