const textInputs = document.querySelectorAll('.input');
const genderRadios = document.querySelectorAll('input[name="gender"]');
const nextBtn = document.getElementById('nextBtn');

// 2. 유효성 검사 함수
function validateForm() {
    // 모든 텍스트 input이 비어있지 않은지 체크
    const allTextFilled = Array.from(textInputs).every(input =>
    input.value.trim() !== ''
    );
    // 라디오 버튼이 하나라도 선택되었는지 체크
    const genderSelected = Array.from(genderRadios).some(radio =>
    radio.checked
    );

    // 둘 다 true여야 버튼 활성화
    if (allTextFilled && genderSelected) {
    nextBtn.disabled = false;
    nextBtn.classList.add('enabled');
    } else {
    nextBtn.disabled = true;
    nextBtn.classList.remove('enabled');
    }
}

// 3. 이벤트 리스너 등록: 텍스트 입력, 라디오 선택 시마다 검사
textInputs.forEach(input =>
    input.addEventListener('input', validateForm)
);
genderRadios.forEach(radio =>
    radio.addEventListener('change', validateForm)
);

// (선택) 4. 활성화된 상태에서 버튼 클릭 동작
nextBtn.addEventListener('click', () => {
    if (!nextBtn.disabled) {
    // 여기에 폼 제출 또는 다음 페이지 이동 로직 작성
    alert('완료되었습니다.');
    }
});