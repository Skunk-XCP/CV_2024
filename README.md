# mon-cv

Portfolio React construit avec Create React App.

## Scripts

- `npm start` : lance l'app en mode developpement.
- `npm run build` : genere le build de production minifie avec assets hashes.
- `npm test` : lance les tests.

## Deploiement performance

Le dossier `public` inclut les optimisations reseau/perf suivantes :

- Fonts self-host (`public/assets/fonts/*.woff2`) avec `@font-face` + `font-display: swap`.
- Prechargement des fonts et de l'image LCP dans `public/index.html`.
- Image hero responsive (`AVIF`/`WebP`, `srcset`, `sizes`, `fetchpriority="high"`).
- Cache long terme et compression Apache via `public/.htaccess`.

## Audit Lighthouse fiable

Pour un audit representatif, lancer Lighthouse :

1. en fenetre privee / navigation incognito,
2. avec toutes les extensions desactivees,
3. sur l'URL reellement deployee.

Des extensions comme Wanteeed ou Wappalyzer peuvent fausser la section "Reduce JS execution time".