/**
 * Footer component - Site footer
 * TODO: Implement full footer structure
 */
export function Footer() {
  return (
    <footer className="bg-knicks-black text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NY KNICKS</h3>
            <p className="text-knicks-silver">
              The official website of the New York Knicks
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-knicks-silver">
              <li>
                <a href="#" className="hover:text-knicks-orange transition-colors">
                  Team Roster
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-knicks-orange transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-knicks-orange transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-knicks-silver">
              <a href="#" className="hover:text-knicks-orange transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-knicks-orange transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-knicks-orange transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-knicks-silver/20 text-center text-knicks-silver">
          <p>&copy; 2024 New York Knicks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
