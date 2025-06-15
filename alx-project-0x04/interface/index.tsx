// For pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// For components/common/Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}
