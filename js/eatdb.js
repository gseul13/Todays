// 결과 DB
var ko = [
  '김치찌개', '김치찜', '된장찌개', '아구찜', '동태찌개', '갈비찜', '갈비탕', '미역국', '콩나물국밥', '돼지국밥', '소고기국밥',
  '순대국밥', '라면/김밥', '삼계탕', '설렁탕', '전복죽', '순두부찌개', '코다리조림', '생선조림', '해장국', '삼겹살', '소고기', '쌈밥', 
  '비빔밥', '돼지갈비', '닭갈비', '불고기', '제육볶음', '백반', '닭볶음탕', '찜닭', '해물탕', '해물찜', '생선구이', '해물파전', '회',
  '만둣국', '떡국', '냉면', '갈매기살', '항정살', '간장게장/양념게장', '낚지볶음', '감자탕', '등뼈찜', '대구뽈찜', '닭한마리', '훈제오리',
  '쭈꾸미볶음', '오삼불고기', '콩나물불고기', '칼국수', '쫄면', '청국장', '육개장',
];
var ch = ['짜장면', '짬뽕', '탕수육', '마라탕', '마라샹궈', '꿔바로우', '양갈비', '유린기', '칠리새우', '크림새우', '깐풍기', '탄탄면', '볶음밥', '딤섬', '양꼬치'];
var jp = ['초밥', '우동', '오니기리', '카레', '라멘', '덮밥', '돈까스', '소바', '오꼬노미야끼', '텐동', '야키토리', '샤브샤브', '규동', '나베'];
var wf = ['스테이크', '파스타', '리조또', '감바스', '오믈렛', '필라프', '찹스테이크', '맥앤치즈', '폭립', '피자', '수제버거', '라자냐'];
var as = ['쌀국수', '팟타이', '타코', '부리또', '케사디야', '월남쌈', '케밥', '인도커리', '미고랭', '나시고랭', '분짜'];
var ff = ['치킨', '햄버거', '샐러드', '팬케이크', '와플', '크로플', '샌드위치', '붕어빵', '타코야키', '만두', '떡/튀/순', '빙수', '닭강정', '핫도그', '호두과자', '토스트'];
var mm = ['족발/보쌈', '닭발', '돼지곱창', '소곱창', '곱도리탕', '오돌뼈', '대창', '골뱅이무침', '닭똥집', '조개탕', '조개찜'];
var meat = [
  '갈비찜', '갈비탕', '돼지국밥', '소고기국밥', '순대국밥', '삼계탕', '설렁탕', '삼겹살', '소고기', '쌈밥', '돼지갈비', '닭갈비', '불고기',
  '제육볶음', '닭볶음탕', '찜닭', '갈매기살', '항정살', '감자탕', '등뼈찜', '닭한마리', '훈제오리', '오삼불고기', '콩나물불고기', '탕수육',
  '꿔바로우', '양갈비', '유린기', '깐풍기', '딤섬', '양꼬치', '양갈비', '돈까스', '텐동', '야키토리', '샤브샤브', '규동', '나베', '스테이크',
  '찹스테이크', '폭립', '치킨', '햄버거', '족발/보쌈', '닭발', '돼지곱창', '소곱창', '곱도리탕', '오돌뼈', '대창', '닭똥집',
];
var sea = [
  '아구찜', '동태찌개', '전복죽', '코다리조림', '생선조림', '해물탕', '해물찜', '생선구이', '해물파전', '회', '간장게장/양념게장', '낚지볶음',
  '대구뽈찜', '쭈꾸미볶음', '오삼불고기', '칠리새우', '크림새우', '딤섬', '초밥', '감바스', '골뱅이무침', '조개탕', '조개찜',
];


const category = document.querySelectorAll(".category");
const ingredient = document.querySelectorAll(".ingredient");
const resultFood = document.querySelector(".result_food");
const form = document.querySelector("#form");
let randomCategoryArr = [];
let randomIngredientArr = "";

const handleSubmit = (e) => {
  let foodArr = [];
  e.preventDefault();
  // 카테고리 체크
  category.forEach((x) => {
    if (x.checked) randomCategoryArr.push(x.id);
  });
  console.log(randomCategoryArr);

  // 제외 체크
  ingredient.forEach((x) => {
    if (x.checked) randomIngredientArr = x.id;
  });

  randomCategoryArr.forEach((x) => {
    switch (x) {
      case "ko":
        foodArr.push(...ko);
        break;
      case "ch":
        foodArr.push(...ch);
        break;
      case "jp":
        foodArr.push(...jp);
        break;
      case "wf":
        foodArr.push(...wf);
        break;
      case "as":
        foodArr.push(...as);
        break;
      case "ff":
        foodArr.push(...ff);
        break;
      case "mm":
        foodArr.push(...mm);
        break;
    }
  });

  if (randomIngredientArr === "meat") {
    foodArr = foodArr.filter((x) => !meat.includes(x));
  }

  if (randomIngredientArr === "sea") {
    foodArr = foodArr.filter((x) => !sea.includes(x));
  }

  console.log(foodArr);

  if (foodArr.length === 0) {
    alert("먹고 싶은 메뉴를 선택하세욥!");
  } else {
    resultFood.innerText = foodArr[Math.floor(Math.random() * foodArr.length)];
  }

  randomCategoryArr = [];
  randomIngredientArr = "";

};

form.addEventListener("submit", handleSubmit);