import { videoStore } from './videoStore';

const store = () => {
    return { videoStore };
};

export default store;

/*
Store 폴더에 생성될 모든 스토어들을 한 곳에 모을 수 있도록 Custom Hook작성

*Custom Hook: 
개발자가 직접 만든 hook으로 반복되는 메서드를 하나로 묶어 사용한다. 커스텀 훅의 이름은 use로 시작해야 한다.
*/