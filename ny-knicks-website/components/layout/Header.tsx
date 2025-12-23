/**
 * Header component - Main navigation
 * TODO: Implement full navigation structure
 */
export function Header() {
  return (
    <header className="bg-knicks-blue text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">NY KNICKS</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-knicks-orange transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-knicks-orange transition-colors">
              Team
            </a>
            <a href="#" className="hover:text-knicks-orange transition-colors">
              Schedule
            </a>
            <a href="#" className="hover:text-knicks-orange transition-colors">
              News
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
