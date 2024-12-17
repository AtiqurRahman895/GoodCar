// import PropTypes from 'prop-types';
import { Link, useRouteError } from 'react-router-dom';
import notFound from '../../assets/notFound.svg'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const {error,status,statusText}= useRouteError();
    
    return (
        <>
            <Helmet>
                <title>{statusText} | Gadget Heaven</title>
            </Helmet>

            <div className='h-lvh place-items-center grid gap-3 content-center bg-white'>
                {status==404?
                    <img src={notFound} alt={`${status}, ${statusText}`} className='w-[200px]' />:
                    <>
                        <h1 className='font-extrabold text-9xl text-custom-primary'>!</h1>
                        <h1 className='text-custom-primary'>{error.message||`${status}, ${statusText}`}</h1>
                    </>

                }
                <Link to={-1} className="btn bg-custom-primary hover:bg-custom-half-primary border-none font-bold text-white hover:text-custom-primary">Go Back</Link>
            </div>
        </>

    );
};

// ErrorPage.propTypes = {
    
// };

export default ErrorPage;