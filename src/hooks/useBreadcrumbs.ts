import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into an array
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate breadcrumbs starting from the second segment
  const breadcrumbs = pathnames.map((value, index) => {
    // Format the label for display
    const formattedLabel = decodeURIComponent(value)
      .replace(/-/g, " ") // Replace "-" with space
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

    // Construct clean path
    const path = `/${pathnames.slice(0, index + 1).join("/")}`;

    return { label: formattedLabel, path };
  });

  return breadcrumbs;
};

export default useBreadcrumbs;
