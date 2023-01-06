//버튼 클릭시 백그라운드
const selbtn = document.querySelectorAll(".selbtn");
const sel2btn = document.querySelectorAll(".sel2btn");

selbtn.forEach( function(e) {
  e.addEventListener("click", function(e) {
    e.target.classList.toggle("click");
  });
});

sel2btn.forEach( function(e) {
  e.addEventListener("click", function(e) {
    if (e.target.classList.contains("click")) {
      e.target.classList.remove("click");
      return;
    }
    sel2btn.forEach((e) => {
      e.classList.remove("click");
    });
    e.target.classList.add("click");
  });
});

//결과 DB
var ko = ['김치찌개', '김치찜', '된장찌개', '아구찜', '동태찌개', '갈비찜', '갈비탕', '미역국', '콩나물국밥', 
          '돼지국밥', '소고기국밥', '순대국밥', '라면/김밥', '삼계탕', '설렁탕', '전복죽', 
          '순두부찌개', '코다리조림', '생선조림', '해장국', '삼겹살', '소고기', '쌈밥', 
          '비빔밥', '돼지갈비', '닭갈비', '불고기', '제육볶음', '백반', '닭볶음탕', 
          '찜닭', '해물탕', '해물찜', '생선구이', '해물파전', '회', '만둣국', 
          '떡국', '냉면', '갈매기살', '항정살', '간장게장/양념게장', '낚지볶음', '감자탕', 
          '등뼈찜', '대구뽈찜', '닭한마리', '훈제오리', '쭈꾸미볶음', '오삼불고기', '콩나물불고기', 
          '칼국수', '쫄면', '청국장', '육개장'];
var ch = ['짜장면', '짬뽕', '탕수육', '마라탕', '마라샹궈', '꿔바로우', '양갈비', '유린기', '칠리새우', 
            '크림새우', '깐풍기', '탄탄면', '볶음밥', '딤섬', '양꼬치', '양갈비'];
var jp = ['초밥', '우동', '오니기리', '카레', '라멘', '덮밥', '돈까스', '소바', '오꼬노미야끼', 
            '텐동', '야키토리', '샤브샤브', '규동', '나베'];
var wf = ['스테이크', '파스타', '리조또', '감바스', '오믈렛', '필라프', '찹스테이크', '맥엔치즈', '폭립', 
            '피자', '수제버거', '라자냐'];
var as = ['쌀국수', '팟타이', '타코', '부리또', '케사디야', '월남쌈', '케밥', '인도커리', '미고랭', 
            '나시고랭', '분짜'];
var ff = ['치킨', '햄버거', '샐러드', '팬케이크', '와플', '크로플', '샌드위치', '붕어빵', '타코야키', 
            '만두', '떡/튀/순', '빙수', '닭강정', '핫도그', '호두과자', '토스트'];
var mm = ['족발/보쌈', '닭발', '돼지곱창', '소곱창', '곱도리탕', '오돌뼈', '대창', '골뱅이무침', '닭똥집', 
            '조개탕', '조개찜'];

var meat = ['갈비찜', '갈비탕', '돼지국밥', '소고기국밥', '순대국밥', '삼계탕', '설렁탕', '삼겹살', '소고기', 
            '쌈밥', '돼지갈비', '닭갈비', '불고기', '제육볶음', '닭볶음탕', '찜닭', 
            '갈매기살', '항정살', '감자탕', '등뼈찜', '닭한마리', '훈제오리', '오삼불고기', 
            '콩나물불고기', '탕수육', '꿔바로우', '양갈비', '유린기', '깐풍기', '딤섬', 
            '양꼬치', '양갈비', '돈까스', '텐동', '야키토리', '샤브샤브', '규동', 
            '나베', '스테이크', '찹스테이크', '폭립', '치킨', '햄버거', '족발/보쌈', 
            '닭발', '돼지곱창', '소곱창', '곱도리탕', '오돌뼈', '대창', '닭똥집'];
var sea = ['아구찜', '동태찌개', '전복죽', '코다리조림', '생선조림', '해물탕', '해물찜', '생선구이', '해물파전', 
            '회', '간장게장/양념게장', '낚지볶음', '대구뽈찜', '쭈꾸미볶음', '오삼불고기', '칠리새우', 
            '크림새우', '딤섬', '초밥', '감바스', '골뱅이무침', '조개탕', '조개찜'];

const korad = ko[Math.floor(Math.random() * ko.length)];
const chrad = ch[Math.floor(Math.random() * ch.length)];
const jprad = jp[Math.floor(Math.random() * jp.length)];
const wfrad = wf[Math.floor(Math.random() * wf.length)];
const asrad = as[Math.floor(Math.random() * as.length)];
const ffrad = ff[Math.floor(Math.random() * ff.length)];
const mmrad = ff[Math.floor(Math.random() * ff.length)];
const meatrad = meat[Math.floor(Math.random() * meat.length)];
const searad = sea[Math.floor(Math.random() * sea.length)];

console.log(korad);



// var ingrVar = $('input:radio[name=ingredient]').is(':checked');
// console.log(ingrVar);
// var catgVar = $('input:checkbox[name=category]').is(':checked');
// console.log(catgVar);

console.log(document.querySelector('input[name="ingredient"]').checked);
document.querySelectorAll('input[name="category"]:checked').value(ffrad);
console.log(document.querySelectorAll('input[name="category"]:checked').value);
console.log(document.querySelector('input[name="radio"]:checked').value);


// const selcatg = document.getElementsByName('category');
// const selingr = document.getElementsByName('ingredient');


// function submit() {

//   //category목록가져오기
//   const selcatg = document.querySelectorAll('input[name="category"]').checked;

//   //선택된 목록에서 value 찾기
//   let rescatg = '';
//   selcatg.forEach((el) => {

//   });

//   if ( )

// }

//연습

// const selCatg = document.querySelectorAll('input[name="category"]').checked;
// // document.querySelectorAll('input[name="category"]:checked').value = ;
// const valCatg = document.querySelectorAll('input[name="category"]:checked').value;

// const selIngr = document.querySelectorAll('input[name="ingredient"]').checked;

// const valIngr = document.querySelectorAll('input[name="ingredient"]:checked').value;

