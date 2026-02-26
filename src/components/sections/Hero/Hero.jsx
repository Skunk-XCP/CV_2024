import { hero } from "../../../data";
import { Badge, Button, Container } from "../../ui";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Badge>{hero.eyebrow}</Badge>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <div className={styles.actions}>
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <div className={styles.highlights}>
            {hero.highlights.map((item) => (
              <div key={item} className={styles.highlight}>
                <span className={styles.dot} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.media}>
          <img
            src="/assets/images/cafe-cosy.png"
            alt="Ambiance café cozy"
            className={styles.heroImage}
            loading="eager"
            decoding="async"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
