import axios from 'axios';

export class BookAPI {
  // #BASE_URL = 'https://books-backend.p.goit.global/books/';

  async getCategoryList() {
    // try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list',
      {
        params: {},
      }
    );
    console.log('cat-list api');
    console.log(response);
    return response.data;
    // } catch (error) {
    console.log(error);
    // }
  }
}
