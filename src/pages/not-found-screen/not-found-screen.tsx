import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found" style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>
        Go back to the main page
      </Link>
    </section>
  );
}

