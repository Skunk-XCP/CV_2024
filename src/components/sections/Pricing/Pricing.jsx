import React, { useMemo, useState } from "react";
import { Section, Card, Button } from "../../ui";
import { pricing } from "../../../data";
import { businessTypes, siteTypes } from "../../../pricing/catalog";
import { estimatePricing } from "../../../pricing/estimate";
import styles from "./Pricing.module.css";

const currency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

const Pricing = () => {
  const [businessType, setBusinessType] = useState("");
  const [siteType, setSiteType] = useState("");

  const estimate = useMemo(
    () => estimatePricing({ businessType, siteType }),
    [businessType, siteType]
  );

  const businessLabel =
    businessTypes.find((item) => item.id === businessType)?.label ?? "";
  const siteLabel = siteTypes.find((item) => item.id === siteType)?.label ?? "";

  const hasRange = estimate.rangeMin && estimate.rangeMax;
  const priceLine = hasRange
    ? `Budget estimatif : ${currency.format(estimate.rangeMin)} – ${currency.format(
        estimate.rangeMax
      )}`
    : "Budget estimatif : Sur devis";

  const isNeutral = !businessType || !siteType;

  return (
    <Section
      id="pricing"
      eyebrow={pricing.eyebrow}
      title={pricing.title}
      subtitle={pricing.subtitle}
      actions={
        <Button href="#contact" variant="outline">
          Demander un devis
        </Button>
      }
    >
      <div className={styles.layout}>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="businessType">
            {pricing.labels.businessType}
          </label>
          <select
            id="businessType"
            className={styles.select}
            value={businessType}
            onChange={(event) => setBusinessType(event.target.value)}
          >
            <option value="" disabled>
              Sélectionner un type de commerce
            </option>
            {businessTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>

          <label className={styles.label} htmlFor="siteType">
            {pricing.labels.siteType}
          </label>
          <select
            id="siteType"
            className={styles.select}
            value={siteType}
            onChange={(event) => setSiteType(event.target.value)}
          >
            <option value="" disabled>
              Sélectionner un type de site
            </option>
            {siteTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <Card className={styles.card}>
          {isNeutral ? (
            <div className={styles.neutral}>
              <p className={styles.cardTitle}>Estimation instantanée</p>
              <p className={styles.cardTimeline}>
                Sélectionnez un type de commerce et un type de site. Vous verrez une fourchette indicative, le délai typique et ce qui est inclus.
              </p>
              <p className={styles.cardDisclaimer}>
                Le devis final est confirmé après un premier contact.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.cardHeader}>
                <p className={styles.cardTitle}>{`${businessLabel} — ${siteLabel}`}</p>
                <p className={styles.cardPrice} aria-live="polite">{priceLine}</p>
                <p className={styles.cardDisclaimer}>{pricing.disclaimer}</p>
              </div>
              <p className={styles.cardTimeline}>{`Délai typique : ${estimate.timeline}`}</p>
              <ul className={styles.cardList}>
                {estimate.includedBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.cardNote}>{estimate.notes}</p>
            </>
          )}
        </Card>
      </div>
    </Section>
  );
};

export default Pricing;


