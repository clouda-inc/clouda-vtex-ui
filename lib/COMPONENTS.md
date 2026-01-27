# Component Library Reference

This document lists all available components in the `lib` folder, their props, usage, and variations.

---

## 1. Button

A versatile button component supporting various variants, sizes, and icon integrations.

**Import:**
```ts
import { Button } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ButtonProps`):**
- **variant?**: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- **size?**: `'sm' | 'md' | 'lg'` (default: `'md'`)
- **disabled?**: `boolean` (default: `false`)
- **className?**: `string`
- **showIcon?**: `boolean` (default: `false`)
- **icon?**: `React.ReactNode`
- **customColor?**: `string` (Overrrides background color for primary variant)
- **rounded?**: `boolean` (default: `false`, renders full rounded/pill shape)
- **children?**: `React.ReactNode`
- **...props**: Inherits `React.ButtonHTMLAttributes<HTMLButtonElement>`

---

## 2. HeroBanner

A banner component typically used at the top of pages, featuring a heading, description, background image, and call-to-action button.

**Import:**
```ts
import { HeroBanner } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`HeroBannerProps`):**
- **heading**: `string`
- **description**: `string`
- **buttonLabel?**: `string`
- **buttonOnClick?**: `() => void`
- **imageSrc?**: `string` (URL for background image)
- **imageAlt?**: `string` (default: 'Hero banner image')
- **className?**: `string`

---

## 3. ProductDetailsSection

A detailed section for product pages, organizing content into tabs: Overview, Specifications, and Downloads.

**Import:**
```ts
import { HomeHeroBanner } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductDetailsSectionProps`):**
- **overviewHtml**: `string` (HTML content for the Overview tab)
- **specifications**: `{ name: string; value: string }[]`
- **partNumber**: `string`
- **downloads**: `{ name: string; image: string; url: string }[]`
- **primaryColor?**: `string` (default: `'#4e46b4'`)

---

## 4. QuantitySelector

A controlled or uncontrolled input for selecting numeric quantities, with increment/decrement buttons.

**Import:**
```ts
import { QuantitySelector } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`QuantitySelectorProps`):**
- **value?**: `number` (Controlled value)
- **initialValue?**: `number` (Default: `0`)
- **onChange?**: `(value: number) => void`
- **min?**: `number` (Default: `0`)
- **max?**: `number`
- **label?**: `string` (Default: "Lorem ipsum")
- **blockClass?**: `string`
- **disabled?**: `boolean`
- **size?**: `'default' | 'small'` (Default: `'default'`)
- **buttonBackgroundColor?**: `string`
- **customColor?**: `string` (Alternative prop for button background)
- **fullWidth?**: `boolean`

---

## 5. ImageGallery

A responsive image gallery with thumbnails (desktop) and slider (mobile).

**Import:**
```ts
import { ImageGallery } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ImageGalleryProps`):**
- **images**: `{ url: string; alternateName: string }[]`
- **blockClass?**: `string`

---

## 6. ProductConfiguration

A complex component for product customization, allowing selection of specifications (pills, dropdowns, colors) and quantity.

**Import:**
```ts
import { ProductConfiguration } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductConfigurationProps`):**
- **specifications?**: `SpecSection[]`
    - `SpecSection`: `{ id: string; title: string; mode?: 'pills'|'dropdown'|'dropdown-color'; options: SpecOption[] }`
    - `SpecOption`: `{ label: string; value: string; color?: string; }`
- **partNumber?**: `string`
- **quantityProps?**: `QuantitySelectorProps`
- **specsHeight?**: `string | number` (Height of scrollable area)
- **blockClass?**: `string`
- **selectedItemColor?**: `string` (Default: `'#4e46b4'`)

---

## 7. InfoCard

A two-column card with an image on one side and text/buttons on the other. Responsive design.

**Import:**
```ts
import { InfoCard } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`InfoCardProps`):**
- **title**: `string`
- **description**: `string`
- **imageSrc?**: `string`
- **primaryButtonLabel?**: `string`
- **onPrimaryClick?**: `() => void`
- **secondaryButtonLabel?**: `string`
- **onSecondaryClick?**: `() => void`
- **className?**: `string`

---

## 8. ProductResult

Displays a grid of `ProductCard` components with a "Load More" button.

**Import:**
```ts
import { ProductResult } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductResultProps`):**
- **products**: `ProductCardProps[]`
- **onLoadMore?**: `() => void`
- **className?**: `string`
- **loadMoreButtonColor?**: `string`
- **loadMoreButtonTextColor?**: `string`
- **loadMoreText?**: `string` (Default: "Load More")
- **emptyMessage?**: `string` (Default: "Search result not found")
- **addToCartButtonColor?**: `string`
- **quantitySelectorColor?**: `string`
- **cardVariant?**: `'summary' | 'compact' | 'detailed'` (Default: 'detailed')

---

## 9. ProfileSidebar

A sidebar navigation component for user profiles, featuring user info and navigation links.

**Import:**
```ts
import { ProfileSidebar } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProfileSidebarProps`):**
- **user**: `{ firstName?: string; lastName?: string; initials?: string; }`
- **items**: `{ label: string; href?: string; onClick?: () => void; active?: boolean; }[]`
- **onLogout?**: `() => void`
- **width?**: `string` (Default: "340px")
- **backgroundColor?**: `string` (Default: '#EAEAEA')
- **itemBackgroundColor?**: `string`
- **itemActiveBackgroundColor?**: `string`
- **itemTextColor?**: `string`
- **itemActiveTextColor?**: `string`
- **itemHoverBackgroundColor?**: `string`

---

## 10. Quotes

A full-featured Quotes management interface with filtering, sorting, bulk actions, and table view.

**Import:**
```ts
import { Quotes } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`QuotesProps`):**
- **primaryColor?**: `string` (Default: `'#4E46B4'`)
- **secondaryColor?**: `string` (Default: `'#D92D20'`)

---

## 11. UpdateBom

A modal component for uploading Bill of Materials (BOM) files.

**Import:**
```ts
import { UpdateBom } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`UpdateBomProps`):**
- **onClose**: `() => void`
- **onUpload**: `(file: File) => void`
- **primaryColor?**: `string`
- **isOpen?**: `boolean`

---

## 12. OrderHistory

A comprehensive order history view with filtering, search, and a table of orders.

**Import:**
```ts
import { OrderHistory } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`OrderHistoryProps`):**
- **primaryColor?**: `string`
- **orders?**: `Order[]`
- **getOrderDetails?**: `(id: string) => OrderData`

---

## 13. OrderDetails

A detailed view of a specific order, including billing/shipping info, items list, and actions.

**Import:**
```ts
import { OrderDetails } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`OrderDetailsProps`):**
- **order**: `OrderData`
    - `id`, `details`, `billingAddress`, `shippingAddress`, `items: OrderItemData[]`
- **onBack?**: `() => void`
- **onReorderAll?**: `() => void`
- **onExport?**: `() => void`
- **primaryColor?**: `string`

---

## 14. HomeHeroBanner

A specialized hero banner for the homepage with distinct mobile/desktop layouts.

**Import:**
```ts
import { HomeHeroBanner } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`HomeHeroBannerProps`):**
- **title?**: `string`
- **description?**: `string`
- **ctaText?**: `string`
- **onCtaClick?**: `() => void`
- **secondaryCtaText?**: `string`
- **onSecondaryCtaClick?**: `() => void`
- **blockClass?**: `string`
- **backgroundImage?**: `string`

---

## 15. Checkout

A checkout page component featuring address selection (Sold To/Ship To), shipping/payment methods, and product summary.

**Import:**
```ts
import { Checkout } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`CheckoutProps`):**
- **blockClass?**: `string`
- **soldTo?**: `UserInfo`
- **shipTo?**: `UserInfo`
- **products?**: `ProductItem[]`
- **onSoldToClick?**: `() => void`
- **onShipToClick?**: `() => void`

---

## 16. SortToolbar

A toolbar containing a "Sort by" dropdown and Grid/List view switcher.

**Import:**
```ts
import { SortToolbar } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`SortToolbarProps`):**
- **sortByOptions?**: `string[]`
- **onSortChange?**: `(option: string) => void`
- **currentSort?**: `string`
- **view?**: `'grid' | 'list'`
- **onViewChange?**: `(view: 'grid' | 'list') => void`
- **className?**: `string`

---

## 17. ProductCard

A flexible product card component with multiple variants.

**Import:**
```ts
import { ProductCard } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`ProductCardProps`):**
- **variant**: `'summary' | 'compact' | 'detailed'`
- **title**: `string`
- **image**: `string`
- **productLink?**: `string`
- **buttonColor?**: `string`
- **quantitySelectorColor?**: `string`
- **buttonText?**: `string`
- **className?**, **imageClassName?**, **buttonClassName?**: `string`
- **description?**: `string` (HTML supported)
- **features?**: `string[]` (Bullet points for Summary variant)
- **onReadMore?**: `() => void`
- **onQuantityChange?**: `(quantity: number) => void`
- **onGetQuote?**: `() => void`
- **onAddToWishlist?**: `() => void`
- **onAddToCart?**: `() => void`
- **onCompare?**: `() => void`

---

## 18. RelatedProducts

Displays a carousel of product cards with additional attributes below each card.

**Import:**
```ts
import { RelatedProducts } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`RelatedProductsProps`):**
- **title?**: `string`
- **products**: `RelatedProductItem[]` (Extends `ProductCardProps` with `attributes?: string[]`)
- **blockClass?**: `string`
- **sliderSettings?**: `Settings` (React Slick settings)

---

## 19. Title

A flexible title component with optional subtitle and action button.

**Import:**
```ts
import { Title } from "@clouda-inc/clouda-vtex-ui";
```

**Props (`TitleProps`):**
- **title**: `string`
- **subtitle?**: `string`
- **actionLabel?**: `string`
- **onActionClick?**: `() => void`
- **actionVariant?**: `'primary' | 'secondary' | 'outline' | 'ghost'`
- **alignment?**: `'left' | 'center' | 'right'` (Default: 'left')
- **titleColor?**, **subtitleColor?**: `string`
- **buttonColor?**: `string`
- **className?**: `string`
