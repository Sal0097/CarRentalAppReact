import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 text-center relative">
      <p className="text-sm font-medium" aria-label="Copyright"> 
      {/* for accessibilty screen reader label(used in html for screen reader)  */}
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
