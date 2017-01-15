/*
  숙제결과
  1-1.아래의 로직 생성 완료
   -add 기능 및 예외처리
   -remove 기능 및 예외처리
  1-2.구현 못한 기능
   -문자열 길이순으로 정렬(현재는 내림차순 정렬)
  1-3.프로그램 완성된 반성
   -코드가 읽기 힘들다.
   -비슷한 기능이 있음에도 리팩토링을 할 수 있도록 만들지 못했다.
   ==> 최초의 설계시 기능 나열만을 하고서 재구성을 재도로 하지 않고 진행을 하여 아래와 같은 문제가 발생
   ==> 시간이 촉박하다고 느껴서 코드의 재사용성 및 가독성을 고려하지 않은 혼자 만드는 코드 생성
   ==> 프로젝트 도입시 예상하는 목표와 소요시간을 고려하여 진행을 해야 한다고 반성이 됨. 

  2. CSS 꾸미기
   - CSS를 꾸민결과 기능 동작시 화면이 깨지는 현상 발생
   - CSS구성시 전체의 구성을 고려하지 않은 작은 기능단위 구현으로 발생된 현상
   - 바깥의 큰 틀부터 작은것을 고쳐 나가야 한다.

  3. 이벤트 핸들러 사전공부
   - 아래의 내용 참조

 */



/* 
 * Crong이 작성한 내용
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORnumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * 
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */

/* 해야할 것
 * (진행중)event관련 코드 학습 및 설명자료 작성
 * (완료)JS 코드의 기능을 확인 한다.
 * (완료)html 코드를 확인한다.
 * (완료)css 코드를 확인한다.
 * (완료)버튼 클릭시 html코드에 append 하도록 한다.
 * (완료)버튼 클릭시 html코드에 remove 하도록 한다.
 * (완료)엘리먼트 create 펑션 만들기
 * (완료)엘리먼트 셀렉트 펑션 만들기
 * (완료)"input"값을 조작하는 방법 조회
 * (완료)버튼을 누른다.
 * (완료)새로운 Element 생성
 * (완료)newElement.innerText = input.value
 * (완료)node.appendChild(newElement)
 * (완료)append 펑션을 넣어서 값을 넣기
 * 
 * 다시 문제를 디자인 한다.
 * add는 문자로 받는다. 
 * remove는 숫자로 받는다.
 * 문자열 길이 내림차순 정열(실시간)
 * (예외처리) 삭제시 해당 번호가 없으면 "'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다."
    -- setTimeout을 이용하여서 3초 동안 표시하도록 한다.
 * (예외처리) 추가시 해당 메세지가 있다면 "message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다."
    -- setTimeout을 이용하여서 3초 동안 표시하도록 한다.
 * setTimeout 적용
 * string 조작
 * regularexpression 확인
 * 화면을 꾸미도록 한다. (목표 Trello의 화면)
   -- 포지션을 이용해서 처리를 하도록 한다.
 */
countTime = 2;

function newElement(){
	var temp = document.createElement("LI");
	return temp;
}

function appendAddList(newNode){
	var temp = document.querySelector("ol");
	temp.appendChild(newNode);
	return true;
}

function chkRemoveValue(todoORnumber){
	var temp = document.querySelector("ol");
	if(todoORnumber <= temp.children.length){
		return true;
	}
	else{
		return false;
	}
}

function deleteRemoveList(todoORnumber){
	var temp = document.querySelector("ol");
	for(i=0; i <= temp.children.length; i++){
		if(todoORnumber === String(i))
			temp.removeChild(temp.children[i-1]);
	}
	return true;
}

function sortOfList(){
	var temp = document.querySelector("ol");
	var tempItem = temp.children;
	var tempArr = [];
	var tempReplace = [];
	//배열에 저장을 해서
	for(i in tempItem){
		if(tempItem[i].nodeType === 1){
			tempArr.push(tempItem[i]);
		}
	}
	//배열을 소팅하고
	tempArr.sort(function(a,b){
		var nameA = a.innerText;
		var nameB = b.innerText;
		if(nameA > nameB){
			return 1;
		}
		if(nameA < nameB){
			return -1;
		}
		return 0;
	})
	for(i in tempArr){
		tempReplace.push(tempArr[i].innerText)
	}
	//소팅한 결과값을 다시 화면에 저장한다.
	for(i in tempReplace){
		tempItem[i].innerText = tempReplace[i];
	}
}

function chkInputList(todoORnumber){
	var temp = document.querySelector("ol");
	var temp_list = temp.children;
	var tempArr = []
	for(i in temp_list){
		if(temp_list[i].nodeType === 1){
			tempArr.push(temp_list[i].innerText);
		}
	}
	return tempArr.indexOf(todoORnumber);
}

function timeUp(){
	var temp = document.querySelector("input:nth-child(1)");
	temp.setAttribute("style","");

}

function timeAddInterval(){
	
	var temp = document.querySelector("input:nth-child(1)");
	if(countTime%2 === 0)
		temp.setAttribute("style","color:red");
	else
		temp.setAttribute("style","");
	countTime++
}

function timeRemoveInterval(){
	var temp = document.querySelector(".removeWrap input");
	if(countTime%2 === 0)
		temp.setAttribute("style","color:red");
	else
		temp.setAttribute("style","");
	countTime++
}

function changeAddbox(){
	var temp = document.querySelector("input:nth-child(1)");
	var chkInterval = setInterval(timeInterval,500)
	var chkTime = setTimeout(function(){
		clearInterval(chkInterval);}
		,5000);
}

function changeRemovebox(){
	var temp = document.querySelector(".removeWrap input");
	var chkInterval = setInterval(timeRemoveInterval,500)
	var chkTime = setTimeout(function(){
		clearInterval(chkInterval);}
		,5000);
}

function doSomething(actionType, todoORnumber)  {
/*
 * actionType: add, remove, 나머지는 예외처리
 * todoO Rnumber: add의 경우 string, remove의 경우 number. 나머지 예외처리
 * 중복 및 값이 없는 경우의 이벤트 처리(3초, 빨간색 글씨 처리)

 IF(ADD의 경우 처리)
	todoORnumber === string
	*같은 값이 있을시 예외처리
	newElement 생성
	newElement text값 입력
	newElement AppendChild
	문자열 길이 기준 소팅


 ELSE IF(REMOVE의 경우 처리)
 	todoORnumber === number
	todoORnumber < document.childElementcount 이면 삭제 진행
	*같은 값이 있을시 예외처리

	삭제 함수 호출(todoORnumber, children) / foreach 사용가능
	정상 종료시 return true;
	문자열 길이 기준 소팅

 */
 var code = todoORnumber.charCodeAt();

 //문자값 범위 확인 필요
 if(actionType === "add" && typeof todoORnumber === "string"){
 	//같은 문자값이 있는지 확인
 	var chkValue = chkInputList(todoORnumber);
 	
 	if(chkValue !== -1){
 		changeAddbox();
 	}
 	else{
	 	var newNode = newElement();
	 	newNode.innerText = todoORnumber;
	 	appendAddList(newNode);
	}
 }
 else if(actionType === "remove" && code >= 48 && code <= 57){
 	if(chkRemoveValue(todoORnumber)){
 		deleteRemoveList(todoORnumber);
 	}
 	else{
 		changeRemovebox()
 	}
 }
 else{
 	return false;
 }
 sortOfList();
 return true;
}


/* 
 * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
 */

//querySelector를 통하여 화면의 2번째section을 전달
var controller = document.querySelector(".controller");
//DOM Evevnt중 마우스의 클릭이 발생을 하면 함수 진입
controller.addEventListener("click", function(evt) {
//section태그 내에서 클릭되 곳이 button 태그이면
//input태그의 값과 button태그의 클래스 네임을저장하여
//doSomething 함수 호출
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  doSomething(actionType, inputValue);
});


