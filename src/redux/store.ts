import { createStore } from 'redux';

// 상태 타입 정의
interface CounterState {
  count: number;
}

// 액션 타입 정의
interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

// 모든 액션 타입 통합
type CounterAction = IncrementAction | DecrementAction;

// 초기 상태 정의
const initialState: CounterState = {
  count: 0,
};

// 리듀서 함수 정의
const counterReducer = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(counterReducer);

export default store;
