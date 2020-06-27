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
                       
                         dispatch({ type: "Search_Speciality", payload: data });
                  })
                  .catch(({ err }) => {
                        console.log(err);
                  });
      };
}

export function selectDoctor (id){
      return function (dispatch) {
            return axios
                  .post(`http://localhost:3010/selectdoctor`, {myId : id},
                   {
                        headers: {
                              "x-auth-token": window.localStorage.getItem("patientAuth"),
                        }
                  }
                  )
                  .then(({ data }) => {
                         dispatch({ type: "select_doctor", payload: data });
                  })
                  .catch(({ err }) => {
                        console.log(err);
                  });
      };
} 

export function docSlot(data,id){
      return function(dispatch){
            return axios.post('http://localhost:3010/docslot',{date : data.toLocaleDateString(),docId : id},
            {
                  headers: {
                        "x-auth-token": window.localStorage.getItem("patientAuth"),
                  }
            }).then(({ data }) => {
                  console.log(data)
            }).catch(({ err }) => {
                  console.log(err)
            })
      }
}