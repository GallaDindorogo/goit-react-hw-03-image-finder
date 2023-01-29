import { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
import styles from './postsSearch.module.scss';

class Posts extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://pixabay.com/api/?q=cat&page=1&key=31994022-24f6d7612a194f8b404d57867&image_type=photo&orientation=horizontal&per_page=12'
      )
      .then(({ data }) => {
        this.setState({ items: data.hits });
      });
  }

  render() {
    // const { items } = this.state;
    // const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => {
    //   return (
    //     <li className={styles.item}>
    //       <img
    //         key={id}
    //         className={styles.image}
    //         src={webformatURL}
    //         alt={tags}
    //       />
    //     </li>
    //   );
    // });
    return (
      <>
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Posts;

Posts.defaultProps = {
  items: [],
};
