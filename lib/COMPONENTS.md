## Component Library Reference

This document lists all available components in the `lib` folder and their prop structures.

---

### Button

**Import**

```ts
import { Button } from "@clouda-inc/clouda-vtex-ui";
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

### Checkout

**Import**

```ts
import { Checkout } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **ProductItem**
  - **id**: `string`
  - **description**: `string`
  - **productName**: `string`
  - **price**: `number`
  - **image**: `string`

- **UserInfo**
  - **name**: `string`
  - **email**: `string`
  - **company**: `string`
  - **address**: `string`

**Props (`CheckoutProps`)**

- **blockClass?**: `string` (extra classes for the root container)
- **soldTo?**: `UserInfo` (billing user info)
- **shipTo?**: `UserInfo` (shipping user info)
- **products?**: `ProductItem[]` (array of products in checkout)
- **onSoldToClick?**: `() => void` (callback when "Sold To" is clicked)
- **onShipToClick?**: `() => void` (callback when "Ship To" is clicked)

---

### FilterNavigator

**Import**

```ts
import { FilterNavigator } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **FilterType**: `'checkbox' | 'range' | 'toggle'`

- **FilterOption**
  - **label**: `string`
  - **value**: `string`
  - **count?**: `number`
  - **checked?**: `boolean`

- **FilterSection**
  - **id**: `string`
  - **title**: `string`
  - **type**: `FilterType`
  - **options?**: `FilterOption[]`
  - **min?**: `number`
  - **max?**: `number`
  - **rangeValue?**: `[number, number]`

**Props (`FilterNavigatorProps`)**

- **title?**: `string` (default: `'Filters'`)
- **sections**: `FilterSection[]` (array of filter sections)
- **onFilterChange**: `(sectionId: string, value: any) => void`
- **onClearAll**: `() => void`
- **className?**: `string`
- **accentColor?**: `string` (default: `'#4F36F1'`)
- **backgroundColor?**: `string` (default: `'white'`)

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

### HomeHeroBanner

**Import**

```ts
import { HomeHeroBanner } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`HomeHeroBannerProps`)**

- **title?**: `string` (default: `'Lorem ipsum ut mi mi'`)
- **description?**: `string`
- **ctaText?**: `string` (default: `'Button text'`)
- **onCtaClick?**: `() => void`
- **secondaryCtaText?**: `string` (optional secondary button text)
- **onSecondaryCtaClick?**: `() => void`
- **blockClass?**: `string` (extra classes for styling overrides)
- **backgroundImage?**: `string` (background image URL)

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

### InfoCard

**Import**

```ts
import { InfoCard } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`InfoCardProps`)**

- **title**: `string` (main title text)
- **description**: `string` (description text)
- **imageSrc?**: `string` (image URL)
- **primaryButtonLabel?**: `string`
- **onPrimaryClick?**: `() => void`
- **secondaryButtonLabel?**: `string`
- **onSecondaryClick?**: `() => void`
- **className?**: `string`

---

### OrderDetails

**Import**

```ts
import { OrderDetails } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **OrderItemData** (imported from subcomponent)
  - **id**: `string`
  - Additional item properties

- **OrderData**
  - **id**: `string`
  - **details**: `string`
  - **billingAddress**: `string`
  - **shippingAddress**: `string`
  - **items**: `OrderItemData[]`

**Props (`OrderDetailsProps`)**

- **order**: `OrderData`
- **onBack?**: `() => void`
- **onReorderAll?**: `() => void`
- **onExport?**: `() => void`
- **primaryColor?**: `string` (default: `'#564FCC'`)

---

### OrderHistory

**Import**

```ts
import { OrderHistory } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **Order** (imported from subcomponent)
  - Order data structure for table display

- **OrderData** (re-exported from OrderDetails for detail view)

**Props (`OrderHistoryProps`)**

- **primaryColor?**: `string` (default: `'#4E46B4'`)
- **orders?**: `Order[]` (array of orders to display)
- **getOrderDetails?**: `(id: string) => OrderData` (callback to get details for an order)

---

### ProductCard

**Import**

```ts
import { ProductCard } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductCardProps`)**

- **variant**: `'summary' | 'compact' | 'detailed'` (required)
- **title**: `string` (product title)
- **image**: `string` (product image URL)
- **productLink?**: `string` (link to product page)
- **buttonColor?**: `string` (color for action buttons)
- **quantitySelectorColor?**: `string` (color for quantity selector, compact/detailed)
- **buttonText?**: `string` (defaults to "Get a Quote" or "Add to Cart")
- **className?**: `string`
- **imageClassName?**: `string`
- **buttonClassName?**: `string`
- **description?**: `string` (HTML content, summary/detailed variant)
- **features?**: `string[]` (bullet points, summary variant only)
- **onReadMore?**: `() => void` (summary variant only)
- **onQuantityChange?**: `(quantity: number) => void` (compact/detailed)
- **onGetQuote?**: `() => void` (compact: main button, detailed: icon button)
- **onAddToWishlist?**: `() => void` (detailed variant only)
- **onAddToCart?**: `() => void` (detailed variant only)
- **onCompare?**: `() => void` (detailed variant only)

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
- **onSelectionChange?**: `(selections: Record<string, string>) => void` (callback fired when a specification is selected)
- **selectedSelections?**: `Record<string, string>` (control state from parent)
- **onQuantityChange?**: `(quantity: number) => void` (callback fired when quantity changes)

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

### ProductResult

**Import**

```ts
import { ProductResult } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductResultProps`)**

- **products**: `ProductCardProps[]` (array of product objects)
- **onLoadMore?**: `() => void` (callback for "Load More" button)
- **className?**: `string`
- **loadMoreButtonColor?**: `string`
- **loadMoreButtonTextColor?**: `string`
- **loadMoreText?**: `string` (default: `'Load More'`)
- **emptyMessage?**: `string` (default: `'Search result not found'`)
- **addToCartButtonColor?**: `string`
- **quantitySelectorColor?**: `string`
- **cardVariant?**: `'summary' | 'compact' | 'detailed'` (default: `'detailed'`)

---

### ProfileSidebar

**Import**

```ts
import { ProfileSidebar } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProfileSidebarProps`)**

- **user**: `{ firstName?: string; lastName?: string; initials?: string }`
- **items**: `{ label: string; href?: string; onClick?: () => void; active?: boolean }[]`
- **onLogout?**: `() => void`
- **width?**: `string` (default: `'340px'`)
- **backgroundColor?**: `string` (default: `'#EAEAEA'`)
- **itemBackgroundColor?**: `string`
- **itemActiveBackgroundColor?**: `string`
- **itemTextColor?**: `string`
- **itemActiveTextColor?**: `string`
- **itemHoverBackgroundColor?**: `string`

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

### Quotes

**Import**

```ts
import { Quotes } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`QuotesProps`)**

- **primaryColor?**: `string` (default: `'#4E46B4'`)
- **secondaryColor?**: `string` (default: `'#D92D20'`)

---

### RelatedProducts

**Import**

```ts
import { RelatedProducts } from "@clouda-inc/clouda-vtex-ui";
```

**Supporting Types**

- **RelatedProductItem** (extends `ProductCardProps`)
  - **attributes?**: `string[]` (list of product attributes/specifications to display below the card)

**Props (`RelatedProductsProps`)**

- **title?**: `string` (title of the section)
- **products**: `RelatedProductItem[]` (list of products to display)
- **blockClass?**: `string` (custom class for the root container)
- **sliderSettings?**: `Settings` (custom settings for the slider, from `react-slick`)

---

### SortToolbar

**Import**

```ts
import { SortToolbar } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`SortToolbarProps`)**

- **sortByOptions?**: `string[]` (default: `['Best Match', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A']`)
- **onSortChange?**: `(option: string) => void`
- **currentSort?**: `string`
- **view?**: `'grid' | 'list'` (default: `'grid'`)
- **onViewChange?**: `(view: 'grid' | 'list') => void`
- **className?**: `string`

---

### Title

**Import**

```ts
import { Title } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`TitleProps`)**

- **title**: `string` (main title text)
- **subtitle?**: `string`
- **actionLabel?**: `string` (label for action button)
- **onActionClick?**: `() => void`
- **actionVariant?**: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- **alignment?**: `'left' | 'center' | 'right'` (default: `'left'`)
- **titleColor?**: `string` (CSS class for title color, default: `'text-black'`)
- **subtitleColor?**: `string` (CSS class for subtitle color, default: `'text-gray-600'`)
- **buttonColor?**: `string` (hex color for button background)
- **className?**: `string`
