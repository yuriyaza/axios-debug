import { BookAPI } from "./api";
const api = new BookAPI();

// function fn1() {
//   api.getCategoryList().then(result => console.log(result));
// }

// fn1();

api.getBookById().then(result => console.log('Я получил данные', result));

console.log('test');
