# WordPress Gutenberg Easy Starter Block
This project is based on [@wordpress/create-block-tutorial-template](https://www.npmjs.com/package/@wordpress/create-block-tutorial-template) project.

My Article: https://www.bilaltas.net/wordpress/snippets/easy-native-gutenberg-block-development-with-a-single-component-file/

## The Problem
Gutenberg [block development best practices](https://developer.wordpress.org/block-editor/) requires two different functions(edit & save) or files(edit.js & save.js) for both editor and frontend side of a block. That mostly makes us repeating ourselves on HTML part of block to make it similar on both sides.

## The Solution
Using only one component.js file instead of having both edit.js and save.js for basic HTML based editable components like Next, Nuxt, Astro, Svelte, etc components. You are only adding a small condition to editable part of a block. And, it will still be a Gutenberg-Native live edited block with ease.

## Testing
```sh
$ wp-env start
```

## Development
Just like other Gutenberg block development:
```sh
$ npm install
$ npm start
```
