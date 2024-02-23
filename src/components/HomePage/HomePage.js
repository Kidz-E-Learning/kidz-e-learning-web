import '../../App.css';
import FindCoursesButton from './FindCoursesButton';
import KidsImage from './KidsImage';
import LearnMoreButton from './LearnMoreButton';
import LessonHighlightsTitle from './LessonHighlightsTitle';
import Subtitle from './Subtitle';
import SummerCampImage from './SummerCampImage';
import SummerCampQuote from './SummerCampQuote';
import SummerCampTitle from './SummerCampTitle';
import Title from './Title';

function HomePage() {
    return (
        <div className="App">
            <header className='App-header flex p-10 space-y-10'>

                <div className="content-center space-y-5">
                    <Title />

                    <Subtitle />

                    <div class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"></div>

                    <FindCoursesButton />

                    <KidsImage />
                </div>
                
                <div className="space-y-5">
                    <LessonHighlightsTitle />
                </div>

                <SummerCampTitle />

                <div>
                    <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                    <div class="col-span-2">
                        <SummerCampQuote />
                    </div>
                    <div class="col-span-2">
                        <LearnMoreButton />
                    </div>
                    <div>
                        <SummerCampImage />
                    </div>    
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage;