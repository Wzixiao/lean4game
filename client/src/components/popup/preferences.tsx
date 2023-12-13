import * as React from 'react'
import { FormControlLabel, Switch, Typography, Slider } from '@mui/material';

import { IMobileContext } from "../infoview/context"

import "../../css/preferences.css"

interface PreferencesPopupProps extends IMobileContext {
    handleClose: () => void
}

const marks = [
    {
        value: 0,
        label: 'Mobile',
    },
    {
        value: 1,
        label: 'Auto',
    },
    {
        value: 2,
        label: 'Desktop',
    },
];


export function PreferencesPopup({ mobile, setMobile, lockMobile, setLockMobile, handleClose }: PreferencesPopupProps) {
    return <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={handleClose} />
        <div className="modal">
            <div className="codicon codicon-close modal-close" onClick={handleClose}></div>
            <Typography variant="body1" component="div" className="references">
                <div className='preferences-category'>
                    <div className='category-title'>
                        <h3>Layout</h3>
                    </div>
                    <div className='preferences-item narrow'>
                        <Slider
                            aria-label="Restricted values"
                            defaultValue={1}
                            max={2}
                            // getAriaValueText={valuetext}
                            step={1}
                            valueLabelDisplay="off"
                            marks={marks}
                        />
                    </div>
                </div>
            </Typography>
        </div>
    </div>
}
