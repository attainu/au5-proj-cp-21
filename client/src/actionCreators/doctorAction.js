
import axios from 'axios'
export function searchSpeciality(search) {
      return function (dispatch) {
            return axios
                  .get(`http://localhost:3010/${search}`,
                   {
                        headers: {
                              "x-auth-token": window.localStorage.getItem("myAuth"),
                        },
                  }
                  )
                  .then(({ data }) => {
                        console.log(data);
                        dispatch({ type: "Search_Speciality", payload: data });
                  })
                  .catch(({ err }) => {
                        console.log(err);
                  });
      };
}
