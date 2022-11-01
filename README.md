# EditorJS + Vue 테스트 코드

`EditorJs.vue` 파일을 통해 editorjs를 불러올 수 있게 했습니다.
NanumGothic, Roboto, sans-serif 순으로 폰트를 적용했습니다.

## 사용되는 툴

### @editorjs/header

https://github.com/editor-js/header
H1~H6 까지 쓸 수 있게 했고 기본은 H2가 되도록 했습니다.
placeholder로 "제목을 입력해주세요" 라고 출력합니다.

### @editorjs/nested-list

https://github.com/editor-js/nested-list

중첩된 리스트를 생성할 수 있습니다 (unorder,order)

### editorjs/undo

https://github.com/kommitters/editorjs-undo

ctrl+z로 실행을 취소할 수 있습니다.

2.0.11 버전 사용

### editorjs-toggle-block

https://github.com/kommitters/editorjs-toggle-block

토글을 만들 수 있습니다.

### LaTeX

_https://github.com/mdgaziur/EditorJS-LaTeX_

_latex를 입력할 수 있습니다._

원래는 위 모듈을 사용하려고 했지만, import에 문제가 있어(모듈자체에 export default가 없음, 잘못된 모듈인듯)
모듈을 직접 만들어 사용함. 이는 나중에 별도의 레포를 파서 추가할 예정

### @editorjs/simple-image

https://github.com/editor-js/simple-image

이미지 URL과 base64 이미지에 대해서만 동작합니다. 서버 업로드가 필요 없는 경우 사용할 수 있습니다.
