import React, { Component } from 'react';

class Toggle extends Component {
    render () {
        return (
                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox"/> Act as logged in
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default Toggle;