
import Content from "./Content.jsx"
import Eadhkar from "../Eadhkar.js"


function EAdhkar() {
    const adhkars = Eadhkar.map((adhkar) => {
        return <Content 
                key={adhkar.id}
                count={adhkar.count}
                title={adhkar.title}
                arabic={adhkar.arabic}
                literation={adhkar.literation}
                lation={adhkar.lation}
            />
    })
    return (
        <div className="wrapper">
            <h2>1. RECTING ĀYAT-UL-KURSI</h2>
            <h2> 1x </h2>
            <h3>It is recommended to recite Ayat-ul-Kursi every evening.</h3>
            
            <h2>2. RECITING THE LAST TWO AYAT OF SURAT-UL-BAQARAH</h2>
            
            <h3>“Whoever recites the two āyāt at the end of surat ul-Baqarah at night, they suffice him (as protection for that night).”</h3>
            <br />
            <h1 className='Lateef--800'>ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍۢ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ</h1>
            
            <h3>The Messenger ˹firmly˺ believes in what has been revealed to him from his Lord, and so do the believers. They ˹all˺ believe in Allah, His angels, His Books, and His messengers. ˹They proclaim,˺ “We make no distinction between any of His messengers.” And they say, “We hear and obey. ˹We seek˺ Your forgiveness, our Lord! And to You ˹alone˺ is the final return.”</h3>
            <br />
            <h1 className='Lateef--800'>لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًۭا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ</h1>
            
            <h3>Allah does not require of any soul more than what it can afford. All good will be for its own benefit, and all evil will be to its own loss. ˹The believers pray,˺ “Our Lord! Do not punish us if we forget or make a mistake. Our Lord! Do not place a burden on us like the one you placed on those before us. Our Lord! Do not burden us with what we cannot bear. Pardon us, forgive us, and have mercy on us. You are our ˹only˺ Guardian. So grant us victory over the disbelieving people.”</h3>
            
            <h2>3. RECITING THE MU’AWWITHAT (3 Quls: Ikhlas, Falaq and Naas)</h2>
            <h2> 3x </h2>
            <h3>“Say: “Qul huw-Allāhu ahad” and the Mu’awwithātān, three times in the evening and in the morning. This should protect you from all (harmful) things.”</h3>
            <br />
            <h2>Evening Adhkar</h2>
            <div className="container">
                {adhkars}
            </div>
        </div>
    )
  }
export default EAdhkar



