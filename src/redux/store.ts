import { configureStore, createSlice } from "@reduxjs/toolkit";

const gardenSlice = createSlice({
  name: "garden", //액션 타입. setGardenData 액션의 타입은 "garden/setGardenData"로 자동생성
  initialState: {
    //스토어 초기값
    gardenData: [],
    searchQuery: "", // 검색어 상태
  },
  reducers: {
    //상태 변경하는 리듀서 함수 정의
    setGardenData(state, action) { //현재상태, 액션
      state.gardenData = action.payload; //action.payload = 새로운 gardenData
    },
    // setGardenData 액션 생성자:
    // setGardenData(payload)
    // { type: "garden/setGardenData", payload }


    setSearchQuery(state, action) {
      state.searchQuery = action.payload; //새로운 검색어
    },
  },
});

export const { setGardenData, setSearchQuery } = gardenSlice.actions;

const store = configureStore({
  reducer: {
    garden: gardenSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;



// import { createStore, combineReducers } from "redux";

// //초기상태
// const initialState = {
//   gardenData: [],
//   searchQuery: "",
// };

// // 액션 타입
// const SET_GARDEN_DATA = "SET_GARDEN_DATA";
// const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

// // 액션 생성
// export const setGardenData = (payload: string) => ({
//   type: SET_GARDEN_DATA,
//   payload,
// });

// export const setSearchQuery = (payload: string) => ({
//   type: SET_SEARCH_QUERY,
//   payload,
// });


// //리듀서 정의
// const gardenReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SET_GARDEN_DATA:
//       return {
//         ...state, // 기존 상태를 복사한 후
//         gardenData: action.payload, // gardenData 상태 업데이트
//       };
//     case SET_SEARCH_QUERY:
//       return {
//         ...state,
//         searchQuery: action.payload, // searchQuery 상태 업데이트
//       };
//     default:
//       return state;
//   }
// };



// // 여러 리듀서를 관리할 수 있도록 combineReducers 사용
// const rootReducer = combineReducers({
//   garden: gardenReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// // RootState 타입 정의
// export type RootState = ReturnType<typeof store.getState>;
