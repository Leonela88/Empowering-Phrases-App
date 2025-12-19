import './viewAllPhrases.css'
import { phrases } from "../../array/Array.jsx"
import { useState } from 'react';

const ViewAllPhrases = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [searchWords, setSearchWords] = useState("");

    const togglePhrase = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const matchWords = phrases.filter((item) => {
        const search = searchWords.toLowerCase();
        return (
            item.name.toLowerCase().includes(search) ||
            item.role.toLowerCase().includes(search) ||
            item.phrase.toLowerCase().includes(search)
        );
    });

    return (
        <main className="view-all-phrases-page">
            <div className="view-all-phrases-container">
                <div className="view-all-phrases-container-title-search-bar">
                    <h3 className="view-all-phrases-title">Gallery</h3>
                    <div className="view-all-phrases-search-container">
                        <img
                            src="./public/images/lens.png"
                            alt="lens"
                            className="search-icon"
                        />
                        <input
                            type="text"
                            placeholder="Search by author, category or phrase..."
                            className="search-input"
                            onChange={(event) => setSearchWords(event.target.value)}
                        />
                    </div>
                </div>
                <section className="view-all-phrases-gallery">
                    <table className="view-all-phrases-table">
                        <thead>
                            <tr className="view-all-phrases-header-row">
                                <th className="table-header author-col"><span className="header-pill">Author</span></th>
                                <th className="table-header category-col"><span className="header-pill">Category</span></th>
                                <th className="table-header phrase-col"><span className="header-pill">Phrase</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {matchWords.map((item, index) => (
                                <tr key={index} className="view-all-phrases-data-row">
                                    <td className="table-author">{item.name}</td>
                                    <td className="table-category">{item.role}</td>
                                    <td
                                        className={`table-phrase ${expandedIndex === index ? 'expanded' : 'truncated'}`}
                                        onClick={() => togglePhrase(index)}
                                    >
                                        {item.phrase}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {matchWords.length === 0 && (
                        <p className="no-results">No matches found for "{searchWords}"</p>
                    )}
                </section>
            </div>
        </main>
    );
};

export default ViewAllPhrases;