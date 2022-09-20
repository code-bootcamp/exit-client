// import { useEffect, useState } from "react";

// const FAVORITE_CATEGORIES = [
//     "여행",
//     "SNS",
//     "뷰티 / 패션",
//     "엔터테인먼트",
//     "게임",
//     "건강 / 스포츠",
//     "뉴스 / 정보",
//     "인테리어",
//     "부동산",
//     "유틸",
//     "금융",
//     "종교",
//     "교육",
//     "의료 / 병원",
//     "교통",
//     "육아 / 출산",
//     "우주 / 외계인",
//     "공유 서비스",
//     "이커머스",
//     "날씨",
//     "자연",
//     "동물 / 식물",
//     "음식 / 요리",
//   ];

// export default function CateroriCheck(){
//     const [items, setItems] = useState([]);

//     const onChangeCategori = (event: any) => {
//       if (items.includes(event.target.value)) {
//         const filter = items.filter((el) => el !== event.target.value);
//         setItems(filter);
//       } else {
//         setItems([...items, event.target.value]);
//       }
//     };

//     useEffect(() => {
//       if (items.length > 5) {
//         const filter = items;
//         filter.shift();
//         setItems(filter);
//         console.log(items);
//       }
//     }, [items]);

//     return (
//         <S.CategoriTable>
//         {FAVORITE_CATEGORIES.map((el: any) => (
//           <S.Category key={uuidv4()}>
//             <S.CategoryBox>
//               <S.SelectInput
//                 type="checkbox"
//                 value={el}
//                 checked={items.includes(el) ? true : false}
//                 onChange={onChangeCategori}
//               />
//               <div></div>
//               {el}
//             </S.CategoryBox>
//           </S.Category>
//         ))}
//       </S.CategoriTable>

//     )
// }
