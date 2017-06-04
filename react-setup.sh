#! /bin/sh

mkdir src src/components ui ui/img ui/sass dist
touch src/index.jsx ui/sass/main.scss
yarn add babel-core babel-loader babel-preset-env babel-preset-react css-loader file-loader node-sass react react-dom react-redux react-router react-router-dom react-router-redux redux sass-loader style-loader url-loader webpack webpack-dev-server
wget https://cdn.rawgit.com/austinbillings/4fe808081786641d0be464ac1429fd2f/raw/a1c0d7e1b15f900fe4f03900d9ea207626aee055/webpack.config.js -O webpack.config.js
echo '.DS_Store' >> .gitignore
echo 'node_modules' >> .gitignore
echo 'bower_components' >> .gitignore