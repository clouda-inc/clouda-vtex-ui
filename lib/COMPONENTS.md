## Component Library Reference

This document lists all available components in the `lib` folder and their prop structures.

---

### Button

**Import**

```ts
import { Button } from "@clouda-inc/clouda-vtex-ui";
// or
import { Button as DefaultButton } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ButtonProps`)**

- **children?**: `React.ReactNode`  
- **variant?**: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)  
- **size?**: `'sm' | 'md' | 'lg'` (default: `'md'`)  
- **disabled?**: `boolean` (default: `false`)  
- **className?**: `string`  
- **showIcon?**: `boolean` (default: `false`)  
- **icon?**: `React.ReactNode`  
- **customColor?**: `string` (used as background color for `primary` variant)  
- **rounded?**: `boolean` (default: `false`)  
- **...button props**: Inherits all `React.ButtonHTMLAttributes<HTMLButtonElement>` (e.g. `onClick`, `type`, etc.)

---

### HeroBanner

**Import**

```ts
import { HeroBanner } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`HeroBannerProps`)**

- **heading**: `string`  
- **description**: `string`  
- **buttonLabel?**: `string` (if provided, primary CTA button is rendered)  
- **buttonOnClick?**: `() => void`  
- **imageSrc?**: `string` (background/hero image URL)  
- **imageAlt?**: `string` (default: `'Hero banner image'`)  
- **className?**: `string` (extra classes for the root container)

---

### ProductDetailsSection

**Import**

```ts
import { ProductDetailsSection } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductDetailsSectionProps`)**

- **overviewHtml**: `string` (HTML string rendered with `dangerouslySetInnerHTML`)  
- **specifications**: `{ name: string; value: string }[]`  
- **partNumber**: `string`  
- **downloads**: `{ name: string; image: string; url: string }[]`  
- **primaryColor?**: `string` (default: `'#4e46b4'`, used for active tab and borders)

---

### QuantitySelector

**Import**

```ts
import { QuantitySelector } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`QuantitySelectorProps`)**

- **value?**: `number` (controlled value)  
- **initialValue?**: `number` (default value for uncontrolled mode, default: `0`)  
- **onChange?**: `(value: number) => void`  
- **min?**: `number` (default: `0`)  
- **max?**: `number` (optional upper bound)  
- **label?**: `string` (label shown to the left, default: `"Lorem ipsum"`)  
- **blockClass?**: `string` (extra classes for root container)  
- **disabled?**: `boolean`  
- **size?**: `'default' | 'small'` (default: `'default'`)  
- **buttonBackgroundColor?**: `string` (background color override for +/− buttons)

---

### ImageGallery

**Import**

```ts
import { ImageGallery } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ImageGalleryProps`)**

- **images**: `{ url: string; alternateName: string }[]` (image URL + alt text)  
- **blockClass?**: `string` (extra classes for the root container)

---

### ProductCard

**Import**

```ts
import { ProductCard } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductCardProps`)**

- **title?**: `string` (default: `"Lorem ipsum tincidunt in"`)  
- **description?**: `string` (supporting text below title)  
- **image?**: `string` (product image URL)  
- **imageAlt?**: `string` (default: `"Product image"`)  
- **onQuoteClick?**: `() => void` (called when the "Get a Quote" button is clicked)  
- **onQuantityChange?**: `(value: number) => void` (called when quantity changes)  
- **initialQuantity?**: `number` (default: `1`)  
- **blockClass?**: `string` (extra classes for the card root)  
- **quantitySelectorColor?**: `string` (background color for quantity selector buttons, default: `'#FACC15'`)  
- **actionButtonColor?**: `string` (background color for the "Get a Quote" button, default: `'#4e46b4'`)

---

### ProductConfiguration

**Import**

```ts
import { ProductConfiguration } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **SpecOption**  
  - **label**: `string`  
  - **value**: `string`  
  - **color?**: `string`

- **SpecViewMode**  
  - `'pills' | 'dropdown' | 'color-dropdown'`

- **SpecSection**  
  - **id**: `string`  
  - **title**: `string`  
  - **mode?**: `SpecViewMode` (default: `'pills'`)  
  - **options**: `SpecOption[]`

**Props (`ProductConfigurationProps`)**

- **specifications?**: `SpecSection[]` (array of spec sections to render)  
- **partNumber?**: `string` (part number displayed below specs)  
- **quantityProps?**: `QuantitySelectorProps` (props forwarded to the footer `QuantitySelector`)  
- **specsHeight?**: `string | number` (fixed height for the scrollable specs area)  
- **blockClass?**: `string` (extra classes for the root container)  
- **selectedItemColor?**: `string` (color used for selected pills and quantity buttons, default: `'#4e46b4'`)

---

### RelatedProducts

**Import**

```ts
import { RelatedProducts } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`RelatedProductsProps`)**

`RelatedProductsProps` **extends** `ProductCardProps` and adds:

- **attributes?**: `string[]` (list of attribute rows displayed below the card)  
- **attributesBlockClass?**: `string` (extra classes for the attributes container)  
- **attributeRowBlockClass?**: `string` (extra classes for each attribute row)

