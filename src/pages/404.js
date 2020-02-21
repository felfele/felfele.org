import React, { Fragment } from 'react';
import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';

const NotFoundPage = () => (
    <Fragment>
        <TopPart
            pageTitle='Not found'
            title='Not Found'
            subTitle='You just hit a page that doesn&#39;t exist....'
        />
        <BottomPart ruler={false}>
        </BottomPart>
    </Fragment>
)

export default NotFoundPage;
