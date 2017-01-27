## Dropdown menu

A dropdown menu component for Ruby on Rails. This component should sit inside a parent element with the class
`js-dropdown-menu-toggle` and the attribute `data-dropdown-menu-id` with the respective dropdown menu’s id as value.

### Installation

Requires SCSS and jQuery.

Just copy the files into your rails application :)

#### Dropdown parameters

| Parameter |	Type	  | Description	                                                       | Required |
|-----------|---------|--------------------------------------------------------------------|----------|
| id      	| string  | The identifier of the dropdown menu.                               | yes      |
| items	    | array   | An array of hashes with properties of the dropdown menu item. See items parameters. | yes      |

#### `items` parameters

| Parameter  |	Type	  | Description	                                                     | Required |
|------------|----------|------------------------------------------------------------------|----------|
| html       | string   | HTML of the item, recommended to render a partial. When this is present all the other parameters will become redundant. | no       |
| separator  | boolean  | A separator to separate items. When this is true all the other parameters will become redundant. | no       |
| value      | string   | The value of the item element.                                   | no       |
| class_name | string   | The class of the button element.                                 | no       |
| class_list | array    | The class of the button element.                                 | no       |
| href       | string   | The href of the item element.                                    | no       |
| attributes | hash     | The attributes of the item element.                              | no       |

### Example

```
<div class="js-dropdown-menu-toggle" data-dropdown-menu-id="merchant-menu">
  Dropdown menu
  <%= render 'application/dropdown_menu', {
    id: 'merchant-menu',
    items: [
      {
        value: 'Item',
        href: '/item'
      },
      {
        value: 'Item',
        href: '/item'
      },
      {
        value: 'Item',
        href: '/item'
      },
      {
        separator: true
      },
      {
        value: 'Item',
        href: '/item'
      },
      {
        value: 'Item',
        href: '/item'
      }
    ]
  } %>
</div>
```
