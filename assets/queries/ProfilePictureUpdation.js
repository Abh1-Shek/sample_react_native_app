// a query to update the profile picture


import {
    gql
  } from "@apollo/client";


const UPDATE_PROFILE_PICTURE = gql`
  mutation ($id: Int, $link: String) {
    addProfilePicture(id: $id, link: $link) {
        userName
    }
  }
`;

export default UPDATE_PROFILE_PICTURE;