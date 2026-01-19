import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroBanner from './HeroBanner';

describe('HeroBanner', () => {
  const defaultProps = {
    heading: 'Test Heading',
    description: 'Test description text',
  };

  describe('Rendering', () => {
    it('should render heading and description', () => {
      render(<HeroBanner {...defaultProps} />);
      
      expect(screen.getByText('Test Heading')).toBeInTheDocument();
      expect(screen.getByText('Test description text')).toBeInTheDocument();
    });

    it('should render button when buttonLabel is provided', () => {
      render(
        <HeroBanner 
          {...defaultProps} 
          buttonLabel="Click Me" 
        />
      );
      
      expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });

    it('should not render button when buttonLabel is not provided', () => {
      render(<HeroBanner {...defaultProps} />);
      
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should render image when imageSrc is provided', () => {
      render(
        <HeroBanner 
          {...defaultProps} 
          imageSrc="https://example.com/image.jpg"
          imageAlt="Test image"
        />
      );
      
      // Check for mobile/tablet image
      const img = screen.getByAltText('Test image');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
      
      // Check for desktop background image
      const backgroundDiv = screen.getByRole('img', { name: 'Test image' });
      expect(backgroundDiv).toBeInTheDocument();
    });

    it('should not render image sections when imageSrc is not provided', () => {
      render(<HeroBanner {...defaultProps} />);
      
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('should use default imageAlt when not provided', () => {
      render(
        <HeroBanner 
          {...defaultProps} 
          imageSrc="https://example.com/image.jpg"
        />
      );
      
      expect(screen.getByAltText('Hero banner image')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const { container } = render(
        <HeroBanner 
          {...defaultProps} 
          className="custom-class"
        />
      );
      
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Interactions', () => {
    it('should call buttonOnClick when button is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      
      render(
        <HeroBanner 
          {...defaultProps} 
          buttonLabel="Click Me"
          buttonOnClick={handleClick}
        />
      );
      
      const button = screen.getByRole('button', { name: 'Click Me' });
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should handle button hover states', async () => {
      const user = userEvent.setup();
      
      render(
        <HeroBanner 
          {...defaultProps} 
          buttonLabel="Hover Me"
        />
      );
      
      const button = screen.getByRole('button', { name: 'Hover Me' });
      // const initialBgColor = button.style.backgroundColor;
      
      await user.hover(button);
      expect(button.style.backgroundColor).toBe('rgb(61, 69, 82)'); // #3d4552
      
      await user.unhover(button);
      expect(button.style.backgroundColor).toBe('rgb(84, 95, 113)'); // #545F71
    });
  });

  describe('Styling', () => {
    it('should have correct background and border colors', () => {
      const { container } = render(<HeroBanner {...defaultProps} />);
      const wrapper = container.firstChild as HTMLElement;
      
      expect(wrapper).toHaveStyle({
        backgroundColor: '#EEF1F4',
        borderColor: '#545F71'
      });
    });

    it('should have correct text colors', () => {
      render(<HeroBanner {...defaultProps} />);
      
      const heading = screen.getByText('Test Heading');
      const description = screen.getByText('Test description text');
      
      expect(heading).toHaveStyle({ color: '#000000' });
      expect(description).toHaveStyle({ color: '#000000' });
    });

    it('should have correct button styles', () => {
      render(
        <HeroBanner 
          {...defaultProps} 
          buttonLabel="Test Button"
        />
      );
      
      const button = screen.getByRole('button');
      
      expect(button).toHaveStyle({
        backgroundColor: '#545F71',
        color: '#FFFFFF'
      });
    });
  });

  describe('Responsive Layout', () => {
    it('should apply responsive grid classes', () => {
      const { container } = render(
        <HeroBanner 
          {...defaultProps}
          imageSrc="https://example.com/image.jpg"
        />
      );
      
      const gridContainer = container.querySelector('.flex.flex-col.lg\\:grid.lg\\:grid-cols-2');
      expect(gridContainer).toBeInTheDocument();
    });

    it('should apply responsive padding classes to content', () => {
      const { container } = render(<HeroBanner {...defaultProps} />);
      
      const contentSection = container.querySelector('.px-6.py-12.md\\:px-12.md\\:py-16.lg\\:px-16.lg\\:py-20');
      expect(contentSection).toBeInTheDocument();
    });

    it('should apply responsive text sizes', () => {
      render(<HeroBanner {...defaultProps} />);
      
      const heading = screen.getByText('Test Heading');
      expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'lg:text-5xl');
      
      const description = screen.getByText('Test description text');
      expect(description).toHaveClass('text-sm', 'md:text-base');
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic HTML structure', () => {
      render(
        <HeroBanner 
          {...defaultProps}
          buttonLabel="Click Me"
          imageSrc="https://example.com/image.jpg"
          imageAlt="Hero image"
        />
      );
      
      // Check for heading
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      
      // Check for button
      expect(screen.getByRole('button')).toBeInTheDocument();
      
      // Check for image
      expect(screen.getByRole('img', { name: 'Hero image' })).toBeInTheDocument();
    });

    it('should have correct ARIA attributes on background image', () => {
      render(
        <HeroBanner 
          {...defaultProps}
          imageSrc="https://example.com/image.jpg"
          imageAlt="Background image"
        />
      );
      
      const backgroundDiv = screen.getByRole('img', { name: 'Background image' });
      expect(backgroundDiv).toHaveAttribute('aria-label', 'Background image');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty strings gracefully', () => {
      render(
        <HeroBanner 
          heading=""
          description=""
        />
      );
      
      // Should still render the structure
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('should handle very long content', () => {
      const longHeading = 'This is a very long heading '.repeat(10);
      const longDescription = 'This is a very long description '.repeat(20);
      
      render(
        <HeroBanner 
          heading={longHeading}
          description={longDescription}
        />
      );
      
      expect(screen.getByText(longHeading)).toBeInTheDocument();
      expect(screen.getByText(longDescription)).toBeInTheDocument();
    });

    it('should handle special characters in content', () => {
      render(
        <HeroBanner 
          heading="Test & <Special> 'Characters'"
          description="Description with"
        />
      );
      
      expect(screen.getByText("Test & <Special> 'Characters'")).toBeInTheDocument();
      expect(screen.getByText('Description with')).toBeInTheDocument();
    });
  });
});
