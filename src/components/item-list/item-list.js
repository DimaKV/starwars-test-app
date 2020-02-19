import React from 'react';
import './item-list.css';

const ItemList = () => {
    return(
        
                <div className="col-md-6">
                    <div className="list-group list-item">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                <a href="#">l</a>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <a href="#">2</a>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <a href="#">3</a>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <a href="#">4</a>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                <a href="#">5</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
           
    )
}

export default ItemList;