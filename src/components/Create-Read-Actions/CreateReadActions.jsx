import './createReadActions.css';

const CreateReadActions = () =>{
    const createText = "Collaborate: Add your phrase";
    const viewText = "Explore: View full gallery";

    return(
        <div className="create-read-actions-container">
            <div className="controls-buttons-wrapper">
                <div className="control-group add-control">
                    <p className="controls-description">{createText}</p>
                    <button className="control-button button-add" title="Add a new empowering phrase">
                        <img src="/images/add.png" alt="Add Icon" className="button-icon"
                        />
                    </button>
                </div>
                <div className="control-group view-control">
                    <p className="controls-description">{viewText}</p>
                    <button className="control-button button-view" title="View the complete phrase gallery">
                        <img src="/images/book.png" alt="Add Icon" className="button-icon"
                        />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CreateReadActions;