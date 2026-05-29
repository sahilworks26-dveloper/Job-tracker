import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import FinanceAuthIllustration from './FinanceAuthIllustration';

const AuthPageLayout = ({ title, subtitle, children, footer }) => (
  <div className="flex min-h-screen bg-white">
    {/* Left — finance inspiration */}
    <div className="hidden lg:block lg:w-1/2">
      <FinanceAuthIllustration />
    </div>

    {/* Right — login / register form */}
    <div className="flex w-full flex-col px-6 py-8 sm:px-12 lg:w-1/2 lg:px-16 xl:px-24">
      <Link to="/" className="mb-8 lg:mb-12">
        <BrandLogo variant="violet" />
      </Link>

      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center pb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        <div className="mt-8">{children}</div>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </div>
  </div>
);

export default AuthPageLayout;
