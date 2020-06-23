const intialState = {
   search:[]
}

export default function (state = intialState, action) {
      let stateCopy = JSON.parse(JSON.stringify(state)) 
      switch (action.type) {
            case "Search_Speciality":
             stateCopy.search= action.payload
             return stateCopy
            default:
                  return state;
      }
}