import { Link } from 'react-router-dom';
import useBreadcrumbs from '../hooks/useBreadcrumbs'; // Adjust path if needed

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="breadcrumb px-0 align-items-center">
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.path} className="d-flex gap-1 align-items-baseline">
          {/* Check if it's the first breadcrumb */}

          <>
            <span>
              {index !== 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.93994 13.28L10.2866 8.93333C10.7999 8.42 10.7999 7.58 10.2866 7.06667L5.93994 2.72"
                    stroke="#606060"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {/* For other breadcrumbs, render Link */}
            {index === breadcrumbs.length - 1 ? (
              <span className="active-breadcrumb">{crumb.label}</span>
            ) : (
              <Link className="parent-breadcrumb" to={crumb.path}>
                {crumb.label}
              </Link>
            )}
          </>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
