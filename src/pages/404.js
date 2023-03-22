import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function Error() {
  const router = useRouter();
  return (
    <section className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="title-3 bold text-blue-500">404</p>
        <h1 className="title-1 bold ital">Page not found</h1>
        <p className="body-2 text-default-secondary mt-4">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={() => router.back()}>return</Button>
          <a className="link" href="#">
            Report this <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Error;

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};
