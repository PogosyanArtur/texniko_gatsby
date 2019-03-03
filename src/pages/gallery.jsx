import React from 'react'
import withRoot from '../withRoot';
import PageGallery from 'components/PageGallery'
import MainLayout from 'layout/MainLayout'

export default withRoot(() => {
    return (
        <MainLayout>
            <PageGallery/>
        </MainLayout>
    )
})