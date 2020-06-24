import axios from 'axios'
export function searchSpeciality(search) {
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

export function selectDoctor (id){
      console.log("myid", id)
      return function (dispatch){
            return axios
                  .post(`http://localhost:3010/doctor`,
                   {
                        headers: {
                              "x-auth-token": window.localStorage.getItem("patientAuth"),
                        },
                        id
                  }
                  )
                  .then(({ data }) => {
                        console.log("data by ID",data);
                        dispatch({ type: "select_doctor", payload: data });
                  })
                  .catch(({ err }) => {
                        console.log(err);
                  });
      }
}