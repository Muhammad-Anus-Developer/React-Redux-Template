const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {...state,
            
            data: action.data,  
          } 
      default: 
        return state
    }
  }
  export default todos

 