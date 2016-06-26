# vue-smart-table

[![Join the chat at https://gitter.im/gurghet/vue-smart-table](https://badges.gitter.im/gurghet/vue-smart-table.svg)](https://gitter.im/gurghet/vue-smart-table?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/dt/vue-smart-table.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-smart-table)

> A vue table with dynamic components

## Usage

Basically you write this

```html
<smart-table
    :auto-load="true"
    body-field="results"
    id-col="id.value"
    endpoint="http://api.randomuser.me/?page=1&results=20"
    :header="{'name.first': 'name', 'name.last': 'surname', gender: 'gender', 'phone+cell': 'contacts', 'picture.thumbnail': 'avatar', nat: 'nationality'}"
    :order-by="['name.first', 'name.last']"
    >
   <src2img slot="picture.thumbnail"></src2img><!-- renders pictures -->
   <contacts slot="phone+cell"></contacts><!-- custom formatting -->
   <nationality slot="nat"></nationality><!-- queries a remote server for country code to country name conversion -->
   <fontawesome slot="gender"></fontawesome><!-- font awesome! -->
  </smart-table>
```

and you get this

![vue smart table](https://s32.postimg.org/55yu3qcb9/Schermata_2016_06_26_alle_02_56_51.png)

[Demo](http://codepen.io/gurghet/pen/qNZprz)

## Installation

#### Webpack/Browserify

``` bash
npm install vue-smart-table --save
```

In your app then you write:

``` javascript
import SmartTable from "vue-smart-table"
Vue.component('smart-table', SmartTable)
```

#### &lt;script&gt; tag inside your page

``` html
<!-- optional in your head -->
<link rel="stylesheet" href="https://npmcdn.com/vue-smart-table@2.4.0/dist/static/vue-smart-table-default.css">
<!-- at the end of your body -->
<script src="https://npmcdn.com/vue-smart-table@2.4.0/dist/static/vue-smart-table.js"></script>
```

That’s it! The component will register itself!

 ---

After that you can freely use it in your templates:

``` html
<smart-table :body="[{hello:'world'}]"></smart-table>
```

## Documentation

For the moment being I'll collect some documentation at the following link:

http://forum.vuejs.org/topic/4140/vue-smart-table

I'm also writing the wiki

[Documentation](https://github.com/gurghet/vue-smart-table/wiki)

The format of the `body` prop is like the following:

```
[ { _id: 3 , name: 'John'  , surname: 'Smith' },
  { _id: 92, name: 'Fulano', surname: 'Perro' } ]
```

## Contribute

``` bash
# install dependencies
npm install

# serve demo app with hot reload at localhost:8080
npm run dev

# build standalone with minification
npm run build

# run unit tests
# always run unit tests! D:<
npm run ~unit
```

## Roadmap

* [x] Bootsrap/Semantic compatibility
* [x] Derived columns
* [ ] Sorting
  * [x] Client side
  * [ ] Server side
* [ ] Pagination
  * [ ] Client side
  * [ ] Server side
* [x] Inline editing
  * [ ] Inline adding
  * [ ] Inline validation
* [ ] Drag row to reorder
* [ ] Filtering
  * [ ] Client side
  * [ ] Server side

## Similar Components

Here is a list of similar components that also display a table:

- [vue-table](https://github.com/ratiw/vue-table)

##Changelog

###2.4.0

- [Feature] Inline edit capabilities with more advanced components
- Breaking change: format of the `header` prop is changed (`:header="[{key: 'key1', label: 'label'}, {key: 'keyEqualsToLabel'}]"`
- Breaking change: `body-field` => `body-path`
- Bootstrap/Semantic compatibility

###2.3.1

- [Fix] Shows `_id` column if explicitly set in the header

###2.3.0

- click column headers to order by that column

###2.2.1

- again forgot about the dist files -.-

###2.2.0

- can set body-field to empty string if data is already in an array

###2.1.1

- forgot to rebuild the dist files -.-

###2.1.0

- derived columns (`:header="{'home+office+mobile':'contacts'}"`)

###2.0.0

- completely new body format (see docs)
- auto loading data on startup using the "auto-load" prop
- header can read from nested attributes with dot notation (eg. "name.last")
- ids can now include letters, some signs (._-) and can be null
- body and id fields can be changed through "body-field" and "id-col" props

###1.0.5

- stains the global scope with SmartTable constructor

###1.0.4

Working on break dependencies on other modules
- build now yields only two files
- external dependencies now needs to be available in global namespace
    - Ramda
    - jQuery
    - Vue
    - VueResource
