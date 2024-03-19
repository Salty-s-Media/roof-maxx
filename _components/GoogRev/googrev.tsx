import styles from "./goog.module.css";

export const GoogleReviews = () => {
  return (
    <div className={styles.bg}>
      <h1>Read Our Reviews</h1>
      <div className={styles.cont}>
        <iframe
          src="https://embedsocial.com/api/pro_hashtag/71ad8ac958dd5cb8c7d917b00752e576ad28e510/?origin=https%3A%2F%2Fwww.roofamp.com%2F"
          title="EmbedSocial Universal Widget"
        ></iframe>
      </div>
    </div>
  );
};
