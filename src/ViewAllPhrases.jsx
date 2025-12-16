import './viewAllPhrases.css'
import { phrases } from '../src/array/Array.jsx'

const ViewAllPhrases = () => {
    return (
        <main className="view-all-phrases-page">
            <div className="view-all-phrases-container">
                <h3 className="view-all-phrases-title">Empowering Phrases Collection</h3>
                <section className="view-all-phrases-gallery">
                    <table className="view-all-phrases-table">
                        <thead>
                            <tr className="table-header-row">
                                <th className="table-header author-col">Author</th>
                                <th className="table-header category-col">Category</th>
                                <th className="table-header phrase-col">Phrase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {phrases.map((item, index) => (
                                <tr key={index} className="table-data-row">
                                    <td className="table-author">{item.name}</td>
                                    <td className="table-category">{item.role}</td>
                                    <td className="table-phrase">{item.phrase}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
};

export default ViewAllPhrases;