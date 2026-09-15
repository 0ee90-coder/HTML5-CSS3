window.onload = function () {
  // p 태그를 동적으로 생성.
  // const newParagraph = window.document.createElement("p");
  // console.log(newParagraph);

  // p 태그의 Content 영역에 "From $399.99 작성"
  // newParagraph.innerText = "From $399.99";
  // console.log(newParagraph);

  // p 태그에게 package-ticket-price 클래스를 할당.
  //console.dir(newParagraph.classList);
  // newParagraph.classList.add("package-ticket-price");
  // console.log(newParagraph);

  // 1. package-button-area의 내부 아래쪽에 p태그를 추가.
  // .package-button-area DOM(Element)를 가져온다.
  // const area = document.querySelector(".package-button-area");

  // .package-button-area DOM아래에 p 태그를 추가한다.
  // area.append(newParagraph);

  // 2. package-green-button 아래에 p태그를 추가.
  // const button = document.querySelector(".package-green-button");
  // button.after(newParagraph);

  // package-green-button 태그 제거.
  // button.remove();

  // 버튼을 클릭하면 p를 만들고 내용을 채우고 클래스도 채워서 추가하고 버튼을 지운다.

  const button = document.querySelector(".package-green-button");

  button.onclick = function (event) {
    const newP = window.document.createElement("p");
    newP.innerText = "From $399.99";
    newP.classList.add("package-ticket-price");

    // event.target.after(newP);
    // or
    this.after(newP);

    // event.target.remove();
    // or
    this.remove();
  };
};
