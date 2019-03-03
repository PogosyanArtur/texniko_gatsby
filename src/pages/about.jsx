import React from 'react'
import withRoot from '../withRoot';
import PageContacts from 'components/PageContacts'
import MainLayout from 'layout/MainLayout'

export default withRoot(() => {
    return (
        <MainLayout>
            <PageContacts/>
        </MainLayout>
    )
})


