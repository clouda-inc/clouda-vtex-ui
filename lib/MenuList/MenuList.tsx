import React from 'react';

export interface MenuListItem {
  /**
   * Label for the link. Optional if image is provided.
   */
  label?: string;
  /**
   * URL for the link.
   */
  href: string;
  /**
   * Optional image source for image-based links (e.g., logos).
   */
  imageSrc?: string;
  /**
   * Alt text for the image.
   */
  imageAlt?: string;
  /**
   * Additional class names for the specific item.
   */
  className?: string;
}

export interface MenuListProps {
  /**
   * Optional title for the menu section.
   */
  title?: string;
  /**
   * List of items to render.
   */
  items: MenuListItem[];
  /**
   * Orientation of the list. Defaults to 'vertical'.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Custom class for the title.
   */
  titleClassName?: string;
  /**
   * Custom class for the list container (ul).
   */
  listClassName?: string;
  /**
   * Custom class for the items (li/a).
   */
  itemClassName?: string;
}

export const MenuList: React.FC<MenuListProps> = ({
  title,
  items,
  orientation = 'vertical',
  titleClassName = '',
  listClassName = '',
  itemClassName = '',
}) => {
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <h3 className={`font-bold text-lg ${titleClassName}`}>
          {title}
        </h3>
      )}
      <ul className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'} gap-3 ${listClassName}`}>
        {items.map((item, idx) => (
          <li key={idx}>
            <a 
              href={item.href} 
              className={`block transition-colors ${itemClassName} ${item.label ? 'hover:text-[#FFDB0A]' : ''}`}
            >
              {item.imageSrc && (
                <img 
                  src={item.imageSrc} 
                  alt={item.imageAlt || item.label || 'Menu Item'} 
                  className={`h-5 w-auto object-contain object-left ${item.className || ''}`}
                />
              )}
              {item.label && (
                <span className={`text-sm ${item.imageSrc ? 'mt-2 block' : ''}`}>
                  {item.label}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
