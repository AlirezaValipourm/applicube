import { Footer } from '@/jobApp/components/Common/Footer';
import { NavBar } from '@/jobApp/components/Common/NavBar';
import { NextPage } from 'next';

export const useMainLayout = (Children: NextPage) => {
    return function wrapped() {

        return (
            <div className='bg-slate-100 dark:bg-slate-800'>
                <NavBar />
                <main>
                    <Children />
                </main>
                <Footer />
            </div>
        );
    }
};

