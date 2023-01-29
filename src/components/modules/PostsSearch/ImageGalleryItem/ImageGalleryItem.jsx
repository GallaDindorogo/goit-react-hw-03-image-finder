import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={webformatURL} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;
