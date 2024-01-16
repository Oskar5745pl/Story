import Content from "./Content.jsx"
import adhkar from "../adhkar.js"

function MAdhkar() {
    const adhkars = adhkar.map((adhkar) => {
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
            <h2>2. RECITING THE MU’AWWITHAT (3 Quls: Ikhlas, Falaq and Naas)</h2>
            <h2> 3x </h2>
            <h3>“Say: Ikhlas, Falaq and Naas, three times in the evening and in the morning. This should protect you from all (harmful) things.”</h3>
            <br />
            <h2>Morning Adhkar</h2>
            <div className="container">
                {adhkars}
            </div>
        </div>
    )
  }
export default MAdhkar