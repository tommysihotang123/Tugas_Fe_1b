import "./Trending.css";
import data from "../data/trending.js";
import Caraousel from "./atomic/Carousel.jsx";
import CardLabel from "./atomic/CardLabel.jsx";

function Trending() {
  const cardItems = data.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        {item.isNewEpisode && (
          <CardLabel className={"new--episode"}>Episode Baru</CardLabel>
        )}
        {item.isTopTen && (
          <CardLabel className={"top-ten"}>
            <span>Top</span> <span>10</span>
          </CardLabel>
        )}
        <img src={item.src} alt={item.alt} className="card__top-rating-img" />
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Film Trending</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default Trending;
