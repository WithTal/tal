
import Spline from '@splinetool/react-spline';

export default function SplineBlock() {
    return (
        <div className='md:block hidden w-1/ mb-[-400px] mt-[-600px]  min-h-[900px]'>
            <Spline className='pointer-events-none' scene="https://prod.spline.design/31EJQtFw3kiHS75z/scene.splinecode" />
        </div>
    )
}