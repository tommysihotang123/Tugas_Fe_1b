import "./NewRelease.css";
import data from "../data/new-release.js";
import Caraousel from "./atomic/Carousel.jsx";
import CardLabel from "./atomic/CardLabel.jsx";

function NewRelease() {
  const cardItems = data.map((item) => {
    return (
      <div className="card top-rating" key={item.id}>
        <div className="relative">
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
      </div>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Rilis Baru</h2>
      <Caraousel cardItems={cardItems} />
    </section>
  );
}
export default NewRelease;
