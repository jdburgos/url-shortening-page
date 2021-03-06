/** Styles **/
import styles from './SocialLinks.module.scss';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    img: 'facebook.svg',
    url: 'https://www.facebook.com',
  },
  {
    name: 'Twitter',
    img: 'twitter.svg',
    url: 'https://www.twitter.com',
  },
  {
    name: 'Pinterest',
    img: 'pinterest.svg',
    url: 'https://www.pinterest.com',
  },
  {
    name: 'Instagram',
    img: 'instagram.svg',
    url: 'https://www.instagram.com',
  },
];

const links = SOCIAL_LINKS.map((link, index) => (
  <a key={index} href={link.url} target="_blank" rel="noreferrer" className={styles['social-link']}>
    <img src={`${process.env.PUBLIC_URL}/images/${link.img}`} alt={link.name} title={link.name} />
  </a>
));

export const SocialLinks = () => <div className={styles['social-links']}>{links}</div>;
