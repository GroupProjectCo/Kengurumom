import './ReviewItem.css';

export default function ReviewItem({
  instaTitle, instaSrc, instaLink, reviewShort,
}) {
  return (
    <figure className="review__item">
      <img src={instaSrc} alt={instaTitle} className="review__item-img"/>
      <figcaption className="review__item-title"><a href={instaLink} className="review__item-insta">@{instaTitle}</a></figcaption>
      <p className="review__item-text">{reviewShort}</p>
      <a href="https://www.instagram.com/kenguru.stories/" className="review__item-text-full">Читать полностью</a>
    </figure>
  );
}
