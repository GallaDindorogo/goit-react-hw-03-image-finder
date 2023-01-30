import { Component } from 'react';

import styles from './postsSearch.module.scss';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { searchImg } from '../../../shared/services/api';

class PostSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImg();
    }
  }

  async fetchImg() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImg(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImg = ({ search }) => {
    this.setState = { search, items: [], page: 1 };
    console.log(this.state);
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  // componentDidMount() {
  //   const { search, page } = this.state;
  //   axios
  //     .get(
  //       `https://pixabay.com/api/?q=cat&page=1&key=31994022-24f6d7612a194f8b404d57867&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //     .then(({ data }) => {
  //       this.setState({ items: data.hits });
  //     });
  // }

  render() {
    const { items, loading, error } = this.state;
    const { searchImg, loadMore } = this;
    return (
      <>
        <Searchbar onSubmit={searchImg} />
        <ImageGallery items={items} />
        {error && <p>{error}</p>}
        {loading && <p>...load posts</p>}
        {Boolean(items.length && <button onClick={loadMore}>Load more</button>)}
      </>
    );
  }
}

export default PostSearch;

PostSearch.defaultProps = {
  items: [],
};
