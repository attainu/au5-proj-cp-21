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

export function selectDoctor(id) {
      return function (dispatch) {
            return axios
                  .post(`http://localhost:3010/selectdoctor`, { myId: id },
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

export function docSlot(data, id) {
      return function (dispatch) {
            return axios.post("http://localhost:3010/docslot", { date: data.toLocaleDateString(), docId: id },
                  {
                        headers: {
                              "x-auth-token": window.localStorage.getItem("patientAuth"),
                        }
                  }).then(({ data }) => {
                        
                        if(data[0]){ dispatch({ type: "slots", payload: data[0] })}
                        else {dispatch({ type: "slots", payload: {slot_1: "false",slot_2: "false",slot_3: "false",slot_4: "false",slot_5: "false",slot_6: "false"} })}
                        
                  }).catch(({ err }) => {
                        console.log(err)
                  })
      }
}

export function bookSlot(data, id, slot) {
      switch (slot) {
            case "slot_1":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_1: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log("data at response", data)
                              return data
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;
            case "slot_2":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_2: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log("data at response", data)
                              return data
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;

            case "slot_3":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_3: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log("data at response", data)
                              return data
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;
            case "slot_4":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_4: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log("data at response", data)
                              return data
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;
            case "slot_5":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_5: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log("data at response", data)
                              return data
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;
            case "slot_6":
                  axios.post("http://localhost:3010/bookslot", { date: data.toLocaleDateString(), docId: id, slot_6: "id" },
                        {
                              headers: {
                                    "x-auth-token": window.localStorage.getItem("patientAuth"),
                              }
                        }).then(({ data }) => {
                              console.log(data)
                        }).catch(({ err }) => {
                              console.log(err)
                        })
                  break;

      }
}