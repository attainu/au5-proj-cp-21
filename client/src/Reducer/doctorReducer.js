//import { doctor } from "../../../backend/Controllers/DoctorController";

const intialState = {
   search:[],
   selecteddoctor : {},
   docSlot: {},
   getDoctor:""
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
            case "GET_DOCTOR_BY_ID":
                  stateCopy.getDoctor= action.payload
                  return stateCopy
            default:
                  return state;
      }
}