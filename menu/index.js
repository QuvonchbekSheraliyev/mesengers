let InputData = document.getElementById('search')
let BtnData = document.getElementById('input-btn')
let TextData = document.getElementById('textData')

BtnData.addEventListener('click',() => {
    // // console.log(InputData.value);
    // InputData.value = ""

    TextData.innerHTML += `<h1 class="text-[25px] text-white pl-[30px] pt-[30px] ">${InputData.value}</h1>`
    InputData.value = ""
})