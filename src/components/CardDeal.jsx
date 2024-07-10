import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "In the arc, 'tortor, pure in mattresses at but integer faucets. Concession to concession for mauris tortor. Concession ultrices ac, ametau.'"
      </p>

      <Button styles={`my-10`} />
    </div>

    <div className={layout.sectionImg} id="card">
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
