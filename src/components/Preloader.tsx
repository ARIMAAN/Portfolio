import Logo from '../media/Portfolio-logo-white.svg';

export function Preloader() {
  return (
    // Add classes for full screen, centering, and background
    <div className="fixed inset-0 z-50 flex items-center justify-center github-bg-primary">
      <div className="preloader-logo">
        {/* Render the SVG as an image */}
        {/* Add a class to target for animation */}
        <img src={Logo} className="preloader-svg" alt="Preloader Logo" />
      </div>
    </div>
  );
}
