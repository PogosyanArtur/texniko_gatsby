import React from 'react'
import withRoot from '../withRoot';
import PageEquipment from 'components/PageEquipment'
import MainLayout from 'layout/MainLayout'

export default withRoot(() => {
    return (
        <MainLayout>
            <PageEquipment/>
        </MainLayout>
    )
})


