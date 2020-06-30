//import { doctor } from "../../../backend/Controllers/DoctorController";

const intialState = {
   search:[],
   selecteddoctor : {},
<<<<<<< HEAD
   docSlot: {},
   getDoctor:""
=======
   booking : {},
   docSlot: {slot_1 : {status: "false"},slot_2 : {status: "false"},slot_3 : {status: "false"},slot_4 : {status: "false"},slot_5 : {status: "false"},slot_6 : {status: "false"}}
>>>>>>> 0764a5fdcd4ff36895cb125f7debb458e20c5099
}

export default function (state = intialState, action) {
      let stateCopy = JSON.parse(JSON.stringify(state)) 
      switch (action.type) {
            case "Search_Speciality":
             stateCopy.search= action.payload
             return stateCopy
             case "select_doctor":
                  stateCopy.selecteddoctor= action.payload
                  return stateCopy
                  case "slots":
                        stateCopy.docSlot = action.payload
            return stateCopy
<<<<<<< HEAD
            case "GET_DOCTOR_BY_ID":
                  stateCopy.getDoctor= action.payload
                  return stateCopy
=======
            case "doc_booking":
                  stateCopy.booking= action.payload
            return stateCopy
            case "slots":
                  stateCopy.docSlot = action.payload
            return stateCopy
>>>>>>> 0764a5fdcd4ff36895cb125f7debb458e20c5099
            default:
                  return state;
      }
}