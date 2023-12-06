# Lyn - Librairie Vue.js

Lyn est une librairie de composants Vue.js développée par Lynch CAI et designée par Elynna THAI pour le projet Lycha.<br><br>
Storybook : https://coover-lyn.netlify.app/ <br>
Github : https://github.com/coover-fr/lyn<br>
Package : https://github.com/orgs/coover-fr/packages/npm/package/lyn

## Comment installer la librairie

-   Vérifier que vous avez accès au [package](https://github.com/orgs/coover-fr/packages/npm/package/lyn).

-   Créer un token Github "classic" qui autorise la lecture des packages [ici](https://github.com/settings/tokens).

-   Créer un fichier `.npmrc` à la racine du projet vue-js et collez-y votre token Github :

    ```
    @coover-fr:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=VOTRE_TOKEN_GITHUB_EN_DUR
    ```

-   Installer la librairie :

    ```bash
    npm i @coover-fr/lyn@latest
    ```

-   Importer les polices de la librairie (patch temporaire, si jamais vous avez une meilleure solution, n'hésitez pas à contribuer):

    1/ Installer le plugin rollup-plugin-copy :

    ```bash
    npm i -D rollup-plugin-copy
    ```

    2/ Modifier le fichier `vite.config.js` pour ajouter copy dans les plugins:

    ```
    ...
    import copy from "rollup-plugin-copy";

    export default defineConfig({
        plugins: [
            copy({
                targets: [{ src: "./node_modules/@coover-fr/lyn/dist/assets/lyn-fonts/*", dest: "public/assets/lyn-fonts" }],
                hook: "buildStart",
            }),
        ],
    }
    ...
    ```

    Si vous n'utilisez pas Vite, il faut trouver un moyen de copier les polices de la librairie dans le dossier `public/assets/lyn-fonts`.

## Comment mettre en ligne sur Netlify

-   Créer un fichier `.npmrc-netlify` à la racine du projet :

    ```
    @coover-fr:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=${GITHUB_PACKAGE_TOKEN}
    ```

-   Créer un fichier netlify.toml à la racine du projet :

    ```json
    [build.environment]
    NPM_CONFIG_USERCONFIG = ".npmrc-netlify"
    ```

-   Se rendre sur Netlify et ajouter une variable d'environnement avec comme nom : 'GITHUB_PACKAGE_TOKEN' et comme valeur le token Github créé précédemment.

## Comment utiliser la librairie

Après avoir installé la librairie, il faut l'importer dans un fichier vue, par exemple `App.vue` :

```vue
...
<script>
import { LynButton } from "@coover-fr/lyn";

export default {
    components: {
        LynButton,
    },
};
</script>

<template>
    <LynButton>Mon bouton</LynButton>
</template>
```
