import styles from "./secret.module.css";

function Secret() {
  return (
    <div className="page">
      <div className={styles.textSection}>
        <p className="main-heading">Main Heading</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <p className="sub-heading">Sub Heading</p>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <br />
        <p className="heading-description">
          Example: Heading Description Text is Here
        </p>
        <p className="article-text">Example: Article text is here</p>
        <p>Example: Main paragraph text is here</p>
        <p className="muted-text">Example: Muted paragraph text here</p>
        <p className="muted-text font-sm">
          Example: Muted (font-small) paragraph text here
        </p>
        <p className="muted-text font-xs">
          Example: Muted (font-extra-small) paragraph text here
        </p>
        <br />
        <p className="italic-text">Italic text here</p>
        <p className="strong-text">Strong text here</p>
        <p className="weak-text">Weak text here</p>
        <p className="brand-text">Brand text here</p>
        <p className="brand-text upper-text">Upper Brand text here</p>
      </div>
    </div>
  );
}

export default Secret;
