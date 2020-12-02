import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Announcements = () => {
    return (
        <ReactCSSTransitionGroup
        transitionName="example" transitionAppear={true}
        transitionAppearTimeout={700}>
        <h1>Yazilar</h1>
        </ReactCSSTransitionGroup>
    )
}

export default Announcements