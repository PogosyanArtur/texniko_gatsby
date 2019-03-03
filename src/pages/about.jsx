import React from 'react'
import withRoot from '../withRoot';
import PageAbout from 'components/PageAbout'
import MainLayout from 'layout/MainLayout'

export default withRoot(() => {
    return (
        <MainLayout>
            <PageAbout/>
        </MainLayout>
    )
})


