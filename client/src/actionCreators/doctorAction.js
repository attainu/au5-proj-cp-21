import axios from 'axios'
export function searchSpeciality(search) {
      // console.log(search)
      return function (dispatch) {
            return axios
                  .get(`http://localhost:3010/doctor/${search}`,
                   {
                        headers: {
                              "x-auth-token": window.localStorage.getItem("patientAuth"),
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